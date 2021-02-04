import React from 'react'
import { useOpen } from 'react-modal-x'
import Modal1 from './Modal1'

interface Modal2Props {}

const Modal2: React.FC<Modal2Props> = () => {
  const openModal = useOpen()
  return (
    <div>
      <h1>First Modal</h1>
      <button
        className='button'
        onClick={() =>
          openModal(<Modal1 />, { style: 'small', openInNew: 'foobar' })
        }
      >
        Open Nested Modal
      </button>
    </div>
  )
}

export default Modal2
