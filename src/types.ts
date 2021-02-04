import { Dispatch, SetStateAction, CSSProperties } from 'react'

export type Dict<T> = {
  [key: string]: T
}

export interface ModalConfig {
  open: boolean
  component: React.ReactNode | null
  style?: string | StyleOptions
}

export interface ModalContext {
  config: Dict<ModalConfig>
  setConfig: Dispatch<SetStateAction<Dict<ModalConfig>>> | null
}

export interface StyleOptions {
  content?: CSSProperties
  overlay?: CSSProperties
}

export interface OpenOptions {
  style?: string | StyleOptions
  openIn?: string
  openInNew?: string
}

export interface ModalProviderProps {
  styles?: Dict<StyleOptions>
}

