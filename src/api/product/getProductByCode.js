import { readItems } from '@directus/sdk'
import { client } from '../../api'
export async function getProductByCode(code) {
  const result = await client.request(
    readItems('products', {
      filter: {
        code: {
          _eq: code,
        },
      },
    }),
  )

  return result[0]
}
