import React, { useState } from 'react'
import ModalProvider from 'react-modal-x'
import BasicDemo from './BasicDemo'
import InlineStyleDemo from './InlineStyleDemo'
import StyledDemo from './StyledDemo'
import MultipleModalsDemo from './MultipleModalsDemo'
import ModalProviderApi from './apis/ModalProviderApi'
import UseOpenApi from './apis/UseOpenApi'
import UseCloseApi from './apis/UseCloseApi'

const DEMOS = {
  Basic: <BasicDemo />,
  Styled: <StyledDemo />,
  'Inline Style': <InlineStyleDemo />,
  'Multiple Modals': <MultipleModalsDemo />
}

const APIS = {
  ModalProvider: <ModalProviderApi />,
  useOpen: <UseOpenApi />,
  useClose: <UseCloseApi />
}

const App = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>('Basic')
  const [selectedApi, setSelectedApi] = useState<string | null>(null)

  const selectDemo = (demo: string) => () => {
    setSelectedDemo(demo)
    setSelectedApi(null)
  }

  const selectApi = (api: string) => () => {
    setSelectedDemo(null)
    setSelectedApi(api)
  }

  return (
    <ModalProvider
      styles={{
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
      }}
    >
      <div className='p-30'>
        <h1>react-modal-x</h1>
        <p>This library makes it (even) easier to crate modals in React, using <a href="https://www.npmjs.com/package/react-modal" target="_new">react-modal</a> under the hood.</p>
        <p>
          The core idea is that there is no need to have more then one{' '}
          <i>{'<Modal>'}</i> tag in any application*. Therefore, react-modal-x
          abstracts away the <i>{'<Modal>'}</i> tag and offers easy to use React
          hooks to open and close modals.
        </p>
        <p>
          Similarly, there is no need to write the modal CSS style more than
          once, therefore react-modal-x gives a way to define the style sets in its
          root tag. When opening a modal the style set can be specified by its name.
          There is also the option to have inline styles for each modal, though
          this should be a very rare case and is not probably not a good choice
          for most scenarios.
        </p>
        <p>
          * in the rare cases when nested modals are needed, this means multiple{' '}
          <i>{'<Modal>'}</i> tags will be needed. react-modal-x has can create
          more then one <i>{'<Modal>'}</i> tag by specifying a proper setting when opening the modal, namely the <i>openInNew</i> option.
        </p>
        <h2>Installation</h2>
        <h3>yarn add react-modal-x</h3>
        or
        <h3>npm install --save react-modal-x</h3>
      </div>
      <div className='flex-row'>
        <div className='p-30'>
          <h3>Demos</h3>
          <ul className='menu'>
            {Object.keys(DEMOS).map((k) => (
              <li key={k} onClick={selectDemo(k)}>
                {k}
              </li>
            ))}
          </ul>
          <h3>APIs</h3>
          <ul className='menu'>
            {Object.keys(APIS).map((a) => (
              <li onClick={selectApi(a)}>{a}</li>
            ))}
          </ul>
        </div>
        <div className='p-30'>
          <h3>{selectedDemo || selectedApi}</h3>
          {selectedDemo ? DEMOS[selectedDemo!] : APIS[selectedApi!]}
        </div>
      </div>
    </ModalProvider>
  )
}

export default App
