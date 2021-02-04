import React, { useState } from 'react'
import { Dict, ModalConfig, ModalProviderProps } from './types'
import ModalCtx from './ModalContex'
import Modal from 'react-modal'

import { defaultConfigs } from './defaults'

const ModalProvider: React.FC<ModalProviderProps> = ({ children, styles }) => {
  styles = {
    default: {
      content: {},
      overlay: {}
    },
    ...styles
  }

  const [config, setConfig] = useState<Dict<ModalConfig>>(defaultConfigs)

  const closeModal = (name: string) => () => {
    setConfig((prev) => ({ ...prev, [name]: { open: false, component: null } }))
  }

  const modals = []
  for (const [modalName, modalConfig] of Object.entries(config)) {
    let content, overlay
    if (typeof modalConfig.style === 'object') {
      ;({ content, overlay } = modalConfig.style)
    } else {
      ;({ content, overlay } = styles[modalConfig.style || 'default'])
    }

    modals.push(
      <div key={modalName}>
        <Modal
          isOpen={modalConfig.open}
          onRequestClose={closeModal(modalName)}
          style={{
            content,
            overlay
          }}
          ariaHideApp={false}
        >
          {modalConfig.component}
        </Modal>
      </div>
    )
  }

  return (
    <ModalCtx.Provider value={{ config, setConfig }}>
      {modals}
      {children}
    </ModalCtx.Provider>
  )
}

export default ModalProvider
