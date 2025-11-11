import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function Section({ children, className, containerClassName, id, style }: SectionProps) {
  return (
    <section id={id} className={cn('section', className)} style={style}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
