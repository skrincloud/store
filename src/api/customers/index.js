import { readItems } from '@directus/sdk'
import { client } from '..'

export async function getStoreCustomers() {
  return await client.request(readItems('customers'))
}
