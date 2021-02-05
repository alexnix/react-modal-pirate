import React from 'react'
import { useOpen } from 'react-modal-pirate'
import Modal1 from './Modal1'
import Highlight from 'react-highlight.js'

interface StyledDemoProps {}

const StyledDemo: React.FC<StyledDemoProps> = () => {
  const openModal = useOpen()

  return (
    <div>
      <Highlight language='jsx'>{`import ModalProvider, { useOpen } from "react-modal-pirate"

const Demo = () => {
  const openModal = useOpen()
  
  return <button onClick={() => openModal(<h1>Hello World</h1>, {style:"small"})}>Open Modal</button>
}

const App = () => {
  rerturn (
    <ModalProvider styles={{
      small: {
        content: {
          height: 'fit-content',
          width: '300px',
          maxWidth: '100%',
          position: 'unset'
        },
        overlay: {
          background: 'rgba(0, 0, 0, .4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    }}>
      <Demo/>
    </ModalProvider>
  )
}`}</Highlight>
      <button
        className='button'
        onClick={() => {
          openModal(<Modal1 />, { style: 'small' })
        }}
      >
        Open Modal
      </button>
    </div>
  )
}

export default StyledDemo
