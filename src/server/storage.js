const STORAGE_KEY = 'directus-storage';

class LocalStorage {
  get() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  set(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

export const storage = new LocalStorage();
