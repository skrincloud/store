import { readItems } from '@directus/sdk'
import { client } from '..'

export async function getCustomers() {
  const result = await client.request(readItems('customers'))
  return result
}
