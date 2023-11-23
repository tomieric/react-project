import { utils } from 'shared'

export * from './request'

export function getAssetsURL(url: string) {
  return utils.resolve(import.meta.env.BASE_URL, url)
}