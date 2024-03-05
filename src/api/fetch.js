// @ts-check

/**
 * @param {string | any} url
 * @param {any} options
 */
export async function fetch(url, options) {
  const response = await globalThis.fetch(url, options)
  const status = response && response.status

  if (status === 401) {
    // TODO: Handle redirect to login and clear storage
  }

  return response
}
