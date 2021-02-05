# react-modal-pirate

> A react-modal wrapper that makes it (even) easier to create a modal.

[![NPM](https://img.shields.io/npm/v/react-modal-pirate.svg)](https://www.npmjs.com/package/react-modal-pirate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Why "-pirate" ?

Because its just like react-modal, but with hooks.

![badabumtss](https://media.giphy.com/media/3o7WIMPobHmxGPnYre/giphy.gif)

## Install

```bash
yarn add react-modal-pirate
```

or

```bash
npm install --save react-modal-pirate
```

## Usage

1. Wrap your application with <ModalProvider>
```tsx
import ModalProvider from "react-modal-pirate"

const App = () => {
  return (
    <ModalProvider>
      <Main/>
    </ModalProvider>
  )
}
```

2. Create the modal content

```tsx
import {useClose} from "react-modal-pirate"

const Modal = () => {
  const closeModal = useClose();

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={closeModal}>Exit</button>
    </div>
  )
}
```

**Note:** Modals also close by pressing the Esc key or by clicking outside the modal itself, so it is not mandatory to use the useClose hook.

3. Open the modal using useOpen hook

```tsx
import { useOpen } from "react-modal-pirate"
import Modal from "./Modal"

const Main = () => {
  const openModal = useOpen()

  return (
    <button onClick={() => openModal(<Modal/>)}>Open Modal</button>
  )
}
```

## See the [full documentation](https://alexnix.github.io/react-modal-pirate)

## License

MIT © [alexnix](https://github.com/alexnix)
