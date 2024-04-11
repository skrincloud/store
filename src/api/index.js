//@ts-check

import { authentication, createDirectus, rest } from '@directus/sdk'
import { fetch } from './fetch'
import { authStorage } from './storage'

const url = 'https://store.itmarck.com'

export const client = createDirectus(url, { globals: { fetch } })
  .with(authentication('json', { storage: authStorage }))
  .with(rest())

export function buildImageUrl(imageId) {
  return `${url}/assets/${imageId}`
}
