import React from 'react'
import { useOpen } from 'react-modal-pirate'
import Modal2 from './Modal2'
import Highlight from 'react-highlight.js'

interface MultipleModalsDemoProps {}

const MultipleModalsDemo: React.FC<MultipleModalsDemoProps> = () => {
  const openModal = useOpen()

  return (
    <div>
      <Highlight language='jsx'>
        {`import ModalProvider, { useOpen } from 'react-modal-pirate'

const Modal = () => {
  const openModal = useOpen()

  return (
    <div>
      <h1>First Modal</h1>
      <button onClick={() => openModal(<h1>Hello World</h1>, { style:"small", openInNew:"foobar" })}>Open Nested Modal</button>
    </div>
  )
}

const Demo = () => {
  const openModal = useOpen()

  return <button onClick={() => openModal(<Modal/>)}>Open Modal</button>
}

const App = () => {
  return (
    <ModalProvider styles={{
      small: {
        // See Styled Demo for the styles here
      }
    }}>
      <Demo/>
    </ModalProvider>
  )
}
`}
      </Highlight>
      <button className='button' onClick={() => openModal(<Modal2 />)}>
        Open Modal
      </button>
    </div>
  )
}

export default MultipleModalsDemo
