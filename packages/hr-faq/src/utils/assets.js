export function getAssetsURL(url) {
  return import.meta.env.BASE_URL + url.replace(/^\//, '')
}