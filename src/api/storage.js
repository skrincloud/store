// @ts-check

export const STORAGE_KEY = 'directus-storage'

/**
 * @typedef {import("@directus/sdk").AuthenticationData} AuthenticationData
 */

class AuthLocalStorage {
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

export const authStorage = new AuthLocalStorage()

export function readToken() {
  return authStorage.get()?.access_token || null
}

class LocalStorage {
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  get(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  }
}

export const storage = new LocalStorage()
