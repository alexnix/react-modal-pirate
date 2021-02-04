import { Dict, ModalConfig, ModalContext } from './types'

export const defaultConfigs: Dict<ModalConfig> = {
  default: { open: false, component: null }
}

export const defaultContext: ModalContext = {
  config: defaultConfigs,
  setConfig: null
}

