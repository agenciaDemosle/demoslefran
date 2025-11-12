import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics event types
export type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Declare dataLayer type
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Helper function to clean dataLayer before pushing new events
// This prevents contamination between events
function cleanDataLayer() {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      // Clean all custom parameters
      event: undefined,
      event_category: undefined,
      event_label: undefined,

      // Page tracking
      page_path: undefined,
      page_title: undefined,
      page_type: undefined,

      // CTA tracking
      cta_text: undefined,
      cta_location: undefined,
      cta_type: undefined,
      button_text: undefined,

      // Click tracking
      click_location: undefined,

      // Service tracking
      service_interested: undefined,
      service_name: undefined,
      service_value: undefined,

      // Quote/Services tracking
      services_selected: undefined,
      services_count: undefined,
      has_funnel_completo: undefined,
      discount_applied: undefined,
      discount_percentage: undefined,

      // Value tracking
      value: undefined,
      currency: undefined,

      // Form tracking
      form_name: undefined,
      step_number: undefined,
      step_name: undefined,

      // Service selection tracking
      service_id: undefined,
      selection_action: undefined,
      combination_type: undefined,
      has_web: undefined,
      has_ads: undefined,
      has_social: undefined,
      has_automation: undefined,

      // Portfolio tracking
      category: undefined,
      project_count: undefined,
      project_name: undefined,
      project_category: undefined,
      project_url: undefined,

      // FAQ tracking
      question: undefined,
      section: undefined,

      // Review tracking
      review_count: undefined,

      // Outbound tracking
      outbound_url: undefined,
      link_text: undefined,

      // Scroll & Engagement tracking
      scroll_depth: undefined,
      scroll_percentage: undefined,
      section_name: undefined,
      visibility_percentage: undefined,
      engagement_time: undefined,

      // Hash navigation
      hash_change: undefined,
    });
  }
}

// Track page views
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    cleanDataLayer();

    // Determine page type based on pathname and hash
    let pageType = 'home';
    const hash = location.hash.replace('#', '');

    if (location.pathname.includes('terminos')) {
      pageType = 'terminos';
    } else if (location.pathname.includes('privacidad')) {
      pageType = 'privacidad';
    } else if (hash) {
      // Use hash as page type (servicios, portafolio, cotizador, etc.)
      pageType = hash;
    }

    // When GTM/GA4 is implemented, this will fire page_view events
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname + location.hash,
        page_title: document.title,
        page_type: pageType,
        section_name: hash || 'home',
      });
    }

    // Console log for development
    console.log('📊 Page View:', location.pathname + location.hash, '| Type:', pageType);
  }, [location]);
}

// Track hash changes (section navigation)
export function useHashChangeTracking() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        cleanDataLayer();

        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'hash_change',
            section_name: hash,
            page_type: hash,
          });
        }

        console.log('🔗 Hash Change:', hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
}

// Track custom events with dataLayer cleanup
export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Console log for development
  console.log('📊 Event:', { action, category, label, value });
}

// ============================================
// CONVERSION EVENTS (Main)
// ============================================

// Track WhatsApp click (PRIMARY CONVERSION)
export function trackWhatsAppClick(params: {
  click_location: string;
  button_text?: string;
  service_interested?: string;
  value?: number;
}) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      click_location: params.click_location,
      button_text: params.button_text || 'WhatsApp',
      service_interested: params.service_interested || 'general',
      value: params.value || 0,
      currency: 'CLP',
    });
  }

  console.log('💬 WhatsApp Click:', params);
}

// Track quote completed (SECONDARY CONVERSION)
export function trackQuoteCompleted(params: {
  services_selected: string[];
  services_count: number;
  has_funnel_completo: boolean;
  value: number;
}) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'quote_completed',
      services_selected: params.services_selected.join(','),
      services_count: params.services_count,
      has_funnel_completo: params.has_funnel_completo,
      value: params.value,
      currency: 'CLP',
      form_name: 'cotizador',
    });
  }

  console.log('📝 Quote Completed:', params);
}

// ============================================
// ENGAGEMENT EVENTS (Services)
// ============================================

// Track service card click
export function trackServiceCardClick(
  serviceName: string,
  serviceValue: number,
  clickLocation: string,
  buttonText?: string
) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'service_card_click',
      service_name: serviceName,
      service_value: serviceValue,
      click_location: clickLocation,
      button_text: buttonText || serviceName,
      currency: 'CLP',
    });
  }

  console.log('🎯 Service Card Click:', { serviceName, serviceValue, clickLocation });
}

// ============================================
// FORM EVENTS (Cotizador)
// ============================================

// Track form start
export function trackFormStart(formName: string) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_start',
      form_name: formName,
      page_type: 'cotizador',
    });
  }

  console.log('📝 Form Start:', formName);
}

// Track service selection/deselection in cotizador
export function trackServiceSelection(params: {
  service_id: string;
  service_name: string;
  action: 'selected' | 'deselected';
  current_services: string[];
  total_services_selected: number;
}) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'service_selection',
      service_id: params.service_id,
      service_name: params.service_name,
      selection_action: params.action,
      services_selected: params.current_services.join(','),
      services_count: params.total_services_selected,
      form_name: 'cotizador',
    });
  }

  const emoji = params.action === 'selected' ? '✅' : '❌';
  console.log(`${emoji} Service ${params.action}:`, params.service_name,
    `| Total: ${params.total_services_selected}`);
}

// Track service combination (when user finishes selecting)
export function trackServiceCombination(params: {
  services_selected: string[];
  services_count: number;
  has_web: boolean;
  has_ads: boolean;
  has_social: boolean;
  has_automation: boolean;
  has_funnel_completo: boolean;
}) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'service_combination',
      services_selected: params.services_selected.join(','),
      services_count: params.services_count,
      has_web: params.has_web,
      has_ads: params.has_ads,
      has_social: params.has_social,
      has_automation: params.has_automation,
      has_funnel_completo: params.has_funnel_completo,
      combination_type: getCombinationType(params),
    });
  }

  console.log('🎯 Service Combination:', {
    services: params.services_selected,
    type: getCombinationType(params),
    funnel: params.has_funnel_completo ? '✅ Completo' : '❌ Parcial'
  });
}

// Helper function to determine combination type
function getCombinationType(params: {
  has_web: boolean;
  has_ads: boolean;
  has_social: boolean;
  has_automation: boolean;
  has_funnel_completo: boolean;
}): string {
  if (params.has_funnel_completo) return 'funnel_completo';
  if (params.has_web && params.has_ads) return 'web_ads';
  if (params.has_web && params.has_social) return 'web_social';
  if (params.has_web) return 'web_only';
  if (params.has_ads && params.has_social) return 'ads_social';
  if (params.has_ads) return 'ads_only';
  if (params.has_social) return 'social_only';
  if (params.has_automation) return 'automation_only';
  return 'other';
}

// Track step completed
export function trackStepCompleted(stepNumber: number, formName: string, stepName?: string) {
  cleanDataLayer();

  // Generate step name if not provided
  const defaultStepNames: { [key: number]: string } = {
    1: 'datos_personales',
    2: 'seleccion_servicios',
  };

  const finalStepName = stepName || defaultStepNames[stepNumber] || `step_${stepNumber}`;

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'step_completed',
      step_number: stepNumber,
      step_name: finalStepName,
      form_name: formName,
    });
  }

  console.log('✅ Step Completed:', { stepNumber, stepName: finalStepName, formName });
}

// Track funnel completo detected
export function trackFunnelCompletoDetected(servicesSelected: string[]) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'funnel_completo_detected',
      services_selected: servicesSelected.join(','),
      services_count: servicesSelected.length,
      discount_applied: true,
      discount_percentage: 10,
    });
  }

  console.log('🎁 Funnel Completo Detected:', servicesSelected);
}

// ============================================
// CTA EVENTS
// ============================================

// Track CTA click
export function trackCTAClick(
  ctaText: string,
  ctaLocation: string,
  ctaType: string = 'primary'
) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_click',
      cta_text: ctaText,
      button_text: ctaText,
      cta_location: ctaLocation,
      click_location: ctaLocation,
      cta_type: ctaType,
    });
  }

  console.log('🔘 CTA Click:', { ctaText, ctaLocation, ctaType });
}

// ============================================
// PORTFOLIO EVENTS
// ============================================

// Track portfolio view (category change)
export function trackPortfolioView(category: string, projectCount: number) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'portfolio_view',
      category: category,
      project_count: projectCount,
      section: 'portafolio',
    });
  }

  console.log('🎨 Portfolio View:', { category, projectCount });
}

// Track project click
export function trackProjectClick(
  projectName: string,
  projectCategory: string,
  projectUrl: string
) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'project_click',
      project_name: projectName,
      project_category: projectCategory,
      project_url: projectUrl,
      section: 'portafolio',
    });
  }

  console.log('🖼️ Project Click:', { projectName, projectCategory, projectUrl });
}

// ============================================
// FAQ EVENTS
// ============================================

// Track FAQ opened
export function trackFAQOpened(question: string, section: string = 'faq') {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'faq_opened',
      question: question,
      section: section,
    });
  }

  console.log('❓ FAQ Opened:', { question, section });
}

// ============================================
// REVIEW EVENTS
// ============================================

// Track review section view
export function trackReviewView(reviewCount: number) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'review_view',
      review_count: reviewCount,
      section: 'reviews',
    });
  }

  console.log('⭐ Review View:', reviewCount);
}

// ============================================
// PHONE CLICK EVENT
// ============================================

// Track phone click
export function trackPhoneClick(clickLocation: string, buttonText?: string) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      click_location: clickLocation,
      button_text: buttonText || 'Llamar',
    });
  }

  console.log('📞 Phone Click:', clickLocation);
}

// ============================================
// OUTBOUND LINK TRACKING
// ============================================

// Track outbound click
export function trackOutboundClick(url: string, linkText: string = '') {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'outbound_click',
      outbound_url: url,
      link_text: linkText,
      button_text: linkText,
    });
  }

  console.log('🔗 Outbound Click:', { url, linkText });
}

// ============================================
// SCROLL TRACKING
// ============================================

// Track scroll depth
export function trackScrollDepth(scrollPercentage: number) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'scroll_depth',
      scroll_percentage: scrollPercentage,
      scroll_depth: `${scrollPercentage}%`,
    });
  }

  console.log('📜 Scroll Depth:', scrollPercentage + '%');
}

// Hook for scroll tracking (25%, 50%, 75%, 100%)
export function useScrollTracking() {
  useEffect(() => {
    const scrollThresholds = [25, 50, 75, 100];
    const triggered = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / scrollHeight) * 100);

      scrollThresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !triggered.has(threshold)) {
          triggered.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// ============================================
// SECTION VISIBILITY TRACKING
// ============================================

// Track section view
export function trackSectionView(sectionName: string, visibilityPercentage: number = 100) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'section_view',
      section_name: sectionName,
      section: sectionName,
      visibility_percentage: visibilityPercentage,
    });
  }

  console.log('👁️ Section View:', sectionName, '|', visibilityPercentage + '%');
}

// Hook for section visibility tracking using Intersection Observer
// AUTO-DETECTS all sections with ID and tracks them automatically
export function useAutoSectionVisibility() {
  useEffect(() => {
    const tracked = new Set<string>();

    const observerOptions = {
      threshold: [0.5], // Track when 50% of section is visible
      rootMargin: '0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const sectionId = entry.target.id;
          if (sectionId && !tracked.has(sectionId)) {
            tracked.add(sectionId);
            const visibilityPercentage = Math.round(entry.intersectionRatio * 100);
            trackSectionView(sectionId, visibilityPercentage);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Auto-detect all sections with ID
    // Looks for: section[id], div[id^="section-"], main sections
    const selectors = [
      'section[id]',           // All <section> with id
      'div[id="hero"]',        // Hero section
      'div[id="servicios"]',   // Servicios
      'div[id="nosotros"]',    // Nosotros
      'div[id="portafolio"]',  // Portafolio
      'div[id="cotizador"]',   // Cotizador
      'div[id="faq"]',         // FAQ
    ];

    const sections = document.querySelectorAll(selectors.join(', '));
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    console.log('📊 Auto-tracking', sections.length, 'sections:',
      Array.from(sections).map(s => s.id).filter(Boolean).join(', ')
    );

    return () => observer.disconnect();
  }, []);
}

// Manual version (if you want to specify specific sections)
export function useSectionVisibility(sectionRefs: { [key: string]: HTMLElement | null }) {
  useEffect(() => {
    const tracked = new Set<string>();

    const observerOptions = {
      threshold: [0.5], // Track when 50% of section is visible
      rootMargin: '0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const sectionId = entry.target.id;
          if (sectionId && !tracked.has(sectionId)) {
            tracked.add(sectionId);
            const visibilityPercentage = Math.round(entry.intersectionRatio * 100);
            trackSectionView(sectionId, visibilityPercentage);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);
}

// ============================================
// ENGAGEMENT TIME TRACKING
// ============================================

// Track engagement time (time spent on page)
export function trackEngagementTime(timeInSeconds: number) {
  cleanDataLayer();

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'engagement_time',
      engagement_time: timeInSeconds,
    });
  }

  console.log('⏱️ Engagement Time:', timeInSeconds + 's');
}

// Hook for engagement time tracking
export function useEngagementTime() {
  useEffect(() => {
    const startTime = Date.now();
    const intervals = [10, 30, 60, 120, 300]; // 10s, 30s, 1min, 2min, 5min
    const triggered = new Set<number>();

    const checkEngagement = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);

      intervals.forEach((interval) => {
        if (timeSpent >= interval && !triggered.has(interval)) {
          triggered.add(interval);
          trackEngagementTime(interval);
        }
      });
    }, 1000);

    return () => clearInterval(checkEngagement);
  }, []);
}

// ============================================
// META CONVERSIONS API (CAPI)
// ============================================

// Helper: Hash data for Meta CAPI (SHA-256)
async function hashSHA256(data: string): Promise<string> {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    return data; // Fallback si no hay crypto API
  }

  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Send event to Meta CAPI via PHP endpoint
export async function sendToMetaCAPI(params: {
  eventName: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  eventSourceUrl?: string;
  customData?: Record<string, any>;
}) {
  try {
    const {
      eventName,
      email,
      phone,
      firstName,
      lastName,
      eventSourceUrl,
      customData = {},
    } = params;

    // Hashear datos sensibles
    const userData: Record<string, string> = {};

    if (email) {
      userData.em = await hashSHA256(email);
    }

    if (phone) {
      // Remover caracteres no numéricos antes de hashear
      const cleanPhone = phone.replace(/\D/g, '');
      userData.ph = await hashSHA256(cleanPhone);
    }

    if (firstName) {
      userData.fn = await hashSHA256(firstName);
    }

    if (lastName) {
      userData.ln = await hashSHA256(lastName);
    }

    // Agregar fbp (Facebook Browser ID) y fbc (Facebook Click ID) si existen
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    if (fbp) {
      userData.fbp = fbp;
    }

    if (fbc) {
      userData.fbc = fbc;
    }

    // Construir evento
    const event = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: eventSourceUrl || window.location.href,
      action_source: 'website',
      user_data: userData,
      custom_data: customData,
    };

    // Endpoint CAPI (ajustar según tu dominio)
    const capiEndpoint = import.meta.env.VITE_CAPI_ENDPOINT || '/api/capi.php';

    // Enviar a servidor PHP
    const response = await fetch(capiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [event],
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ CAPI Event Sent:', eventName, '|', result.events_received, 'events');
    } else {
      console.error('❌ CAPI Error:', result.error);
    }

    return result;
  } catch (error) {
    console.error('❌ CAPI Send Failed:', error);
    return { success: false, error: 'Network error' };
  }
}

// Helper: Get cookie value
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }

  return null;
}

// ============================================
// CUSTOM HOOK
// ============================================

// Custom hook for analytics
// AUTO-TRACKS: page views, scroll depth, engagement time, section visibility, hash changes
export function useAnalytics() {
  usePageTracking();           // Auto-track page views
  useScrollTracking();          // Auto-track scroll depth (25%, 50%, 75%, 100%)
  useEngagementTime();          // Auto-track engagement time (10s, 30s, 1min, 2min, 5min)
  useAutoSectionVisibility();   // Auto-track section visibility (all sections with ID)
  useHashChangeTracking();      // Auto-track hash changes (#servicios, #portafolio, etc.)

  return {
    // Core
    trackEvent,
    cleanDataLayer,

    // Conversions
    trackWhatsAppClick,
    trackQuoteCompleted,

    // Engagement
    trackServiceCardClick,
    trackCTAClick,

    // Forms
    trackFormStart,
    trackStepCompleted,
    trackFunnelCompletoDetected,

    // Service Selection (Cotizador)
    trackServiceSelection,
    trackServiceCombination,

    // Portfolio
    trackPortfolioView,
    trackProjectClick,

    // FAQ
    trackFAQOpened,

    // Reviews
    trackReviewView,

    // Phone
    trackPhoneClick,

    // Outbound
    trackOutboundClick,

    // Scroll & Visibility
    trackScrollDepth,
    trackSectionView,
    trackEngagementTime,

    // Meta CAPI
    sendToMetaCAPI,

    // Hooks
    useScrollTracking,
    useSectionVisibility,
    useAutoSectionVisibility,
    useHashChangeTracking,
    useEngagementTime,
  };
}
