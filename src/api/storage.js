// @ts-check

export const STORAGE_KEY = 'directus-storage'

/**
 * @typedef {import("@directus/sdk").AuthenticationData} AuthenticationData
 */

class LocalStorage {
  get() {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }
  /**
   * @param {AuthenticationData | null} data
   */
  set(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }
}

export const storage = new LocalStorage()

export function readToken() {
  return storage.get()?.access_token || null
}
