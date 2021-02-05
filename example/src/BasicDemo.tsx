import React from 'react'
import { useOpen } from 'react-modal-pirate'
import Modal1 from './Modal1'
import Highlight from 'react-highlight.js'

interface BasicDemoProps {}

const BasicDemo: React.FC<BasicDemoProps> = () => {
  const openModal = useOpen()

  return (
    <div>
      <Highlight language='jsx'>{`import ModalProvider, { useOpen } from "react-modal-pirate"

const Demo: () => {
  const openModal = useOpen()

  return <button onClick={() => openModal(<h1>Hello World</h1>)}>Open</button>
}

const App = () => {
  return (
    <ModalProvider>
      <Demo/>
    </ModalProvider>
  )
}`}</Highlight>
      <button
        className='button'
        onClick={() => {
          openModal(<Modal1 />)
        }}
      >
        Open Modal
      </button>
    </div>
  )
}

export default BasicDemo
