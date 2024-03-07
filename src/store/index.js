// @ts-check

import { atom, useAtomValue, useSetAtom } from 'jotai'

export const userAtom = atom(null)

export function useGlobalStore() {
  const user = useAtomValue(userAtom)
  const setUser = useSetAtom(userAtom)

  return {
    user,
    setUser,
  }
}
