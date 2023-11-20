export function getAssetsURL(url) {
  return new URL(url, import.meta.url).href
}