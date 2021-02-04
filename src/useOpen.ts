import { useContext, ReactNode } from 'react'
import ModalContex from './ModalContex'
import { OpenOptions } from './types'

const useOpen = () => {
  const { setConfig } = useContext(ModalContex)
  return (component: ReactNode, openOptions: OpenOptions = {}) =>
    setConfig!((prev) => ({
      ...prev,
      [openOptions.openIn || openOptions.openInNew || 'default']: {
        open: true,
        component,
        style: openOptions?.style
      }
    }))
}

export default useOpen
