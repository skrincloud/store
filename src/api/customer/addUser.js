import { createItem } from '@directus/sdk'
import { client } from '../../api'

export async function addCustomer(data) {
  const { name } = data
  try {
    if (!name) throw new Error('Name is required')
    await client.request(createItem('customers', data))
  } catch (error) {
    console.error('error', error)
  }
}
