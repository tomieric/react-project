export function resolve(baseURL: string, url: string) {
  return baseURL + url.replace(/^\//, '')
}