//@ts-check

import { createDirectus, rest, authentication } from '@directus/sdk'
import { storage } from './storage'

const url = 'https://store.itmarck.com'

export const client = createDirectus(url)
  .with(authentication('json', { storage }))
  .with(rest())
