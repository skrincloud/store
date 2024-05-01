// @ts-check

import { atom, useAtomValue, useSetAtom } from 'jotai'
import { storage } from '../api/storage'

export const userAtom = atom(null)
export const productsAtom = atom(storage.get('products'))
export const customersAtom = atom(storage.get('customers'))

export function useGlobalStore() {
  const user = useAtomValue(userAtom)
  const setUser = useSetAtom(userAtom)
  const products = useAtomValue(productsAtom)
  const setProducts = useSetAtom(productsAtom)
  const customers = useAtomValue(customersAtom)

  const addProduct = (payload) => {
    const productFound = products.some((product) => product.id === payload.id)
    if (!productFound) {
      setProducts([...products, payload])
      storage.set('products', [...products, payload])
    }
  }

  const deleteProduct = (payload) => {
    const remainingProducts = products.filter(
      (product) => product.id !== payload.id,
    )
    setProducts(remainingProducts)
    storage.set('products', remainingProducts)
  }

  return {
    user,
    setUser,
    products,
    addProduct,
    deleteProduct,
    customers,
  }
}
