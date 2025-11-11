import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics event types
export type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Track page views
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // When GTM/GA4 is implemented, this will fire page_view events
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: location.pathname,
        page_title: document.title,
      });
    }

    // Console log for development
    console.log('Page View:', location.pathname);
  }, [location]);
}

// Track custom events
export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Console log for development
  console.log('Event:', { action, category, label, value });
}

// Predefined tracking functions for common actions
export function trackCTAClick(ctaLabel: string, ctaLocation: string) {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaLabel} - ${ctaLocation}`,
  });
}

export function trackFormSubmit(formName: string) {
  trackEvent({
    action: 'form_submit',
    category: 'conversion',
    label: formName,
  });
}

export function trackLeadGenerated(leadType: string) {
  trackEvent({
    action: 'lead_generated',
    category: 'conversion',
    label: leadType,
  });
}

export function trackOutboundClick(url: string) {
  trackEvent({
    action: 'outbound_click',
    category: 'engagement',
    label: url,
  });
}

export function trackServiceView(serviceName: string) {
  trackEvent({
    action: 'service_view',
    category: 'engagement',
    label: serviceName,
  });
}

// Custom hook for analytics
export function useAnalytics() {
  usePageTracking();

  return {
    trackEvent,
    trackCTAClick,
    trackFormSubmit,
    trackLeadGenerated,
    trackOutboundClick,
    trackServiceView,
  };
}
