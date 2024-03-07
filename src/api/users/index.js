import { readMe } from '@directus/sdk'
import { client } from '..'

export async function getAuthenticatedUser() {
  return await client.request(readMe())
}
