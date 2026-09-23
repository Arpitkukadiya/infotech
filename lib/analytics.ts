export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;
  console.log(`[Analytics] ${eventName}`, params);
  // @ts-ignore
  if (window.gtag) window.gtag("event", eventName, params);
  // @ts-ignore
  if (window.va) window.va("event", { name: eventName, ...params });
};