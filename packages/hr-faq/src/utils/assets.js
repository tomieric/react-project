export function getAssetsURL(url) {
  return import.meta.env.PROD ? `/${APP_NAME}/` + url : url
}