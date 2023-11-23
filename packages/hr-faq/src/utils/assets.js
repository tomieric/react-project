import { utils } from 'shared'

export function getAssetsURL(url) {
  return utils.resolve(import.meta.env.BASE_URL, url)
}