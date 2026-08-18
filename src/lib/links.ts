export function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|\/\/)/.test(href);
}
