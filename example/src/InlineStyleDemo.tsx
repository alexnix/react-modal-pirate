import React from 'react'
import { useOpen } from 'react-modal-pirate'
import Modal1 from './Modal1'
import Highlight from 'react-highlight.js'

interface InlineStyleDemoProps {}

const InlineStyleDemo: React.FC<InlineStyleDemoProps> = () => {
  const openModal = useOpen()

  return (
    <div>
      <Highlight language='jsx'>
        {`import ModalProvider, { useOpen } from "react-modal-pirate"

const Demo = () => {
  const openModal = useOpen()

  return (
      <button
        className='button'
        onClick={() => 
          openModal(<Modal1 />, {
            style: {
              content: {
                width: '300px',
                maxWidth: '100%',
                margin: 'auto',
                padding: '50px',
                textAlign: 'center'
              },
              overlay: {
                background: 'rgba(255, 0, 0, .4)'
              }
            }
          })
        }
      >
        Open Modal
      </button>
  )
}

const App = () => {
  return (
    <ModalProvider>
      <Demo/>
    </ModalProvider>
  )
}`}
      </Highlight>
      <button
        className='button'
        onClick={() => {
          openModal(<Modal1 />, {
            style: {
              content: {
                width: '300px',
                maxWidth: '100%',
                margin: 'auto',
                padding: '50px',
                textAlign: 'center'
              },
              overlay: {
                background: 'rgba(255, 0, 0, .4)'
              }
            }
          })
        }}
      >
        Open Modal
      </button>
    </div>
  )
}

export default InlineStyleDemo
