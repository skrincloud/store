import { readMe } from '@directus/sdk'
import { client } from '..'

export async function getAuthenticatedUser() {
  return await client.request(readMe())
}

export async function getAuthenticatedUserWithStore() {
  const result = await client.request(
    readMe({
      fields: [
        '*',
        {
          store: ['*'],
        },
      ],
    }),
  )

  return result
}
