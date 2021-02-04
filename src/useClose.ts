import { useContext } from 'react'
import ModalContex from './ModalContex'

const useClose = () => {
  const { setConfig } = useContext(ModalContex)
  return (name: string = 'default') =>
    setConfig!((prev) => ({
      ...prev,
      [name]: { open: false, component: null }
    }))
}

export default useClose
