/**
 * Google Analytics 4 helpers. The measurement ID comes from NEXT_PUBLIC_GA_ID
 * at build time; when it is unset nothing is loaded and events are no-ops.
 *
 * Page views on client-side navigation are handled by GA4 "Enhanced
 * measurement" (history change events), which is enabled by default on a new
 * web data stream, so no manual page_view is sent here.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (name: string, params: Record<string, unknown> = {}): void => {
  if (!GA_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
};
