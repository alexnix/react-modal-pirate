import React from 'react'

interface UseOpenApiProps {}

const UseOpenApi: React.FC<UseOpenApiProps> = () => {
  return (
    <div>
      <code>{'const openModal = useOpen()'}</code>
      <h3>Parameters</h3>
      <i>None</i>
      <h3>Returns</h3>
      <code>(component: ReactNode, openOptions?: OpenOptions) ={'>'} void</code>
      <h3>Parameters</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Example(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>component</td>
            <td>ReactNode</td>
            <td>The React component that will be displayed in the modal.</td>
            <td>{'<div>Modal here</div>'}</td>
          </tr>
          <tr>
            <td>openOptions</td>
            <td>OpenOptions</td>
            <td>
              Options that controls the style of the modal, can be one of the
              style sets defined with <i>ModalProvider</i>, or can be inline
              styles. Also if a new modal is needed, use the openInNew field.
              Use the openIn field to open in a specific modal, when multiple
              modals available.
            </td>
            <td>
              <pre>
                {JSON.stringify(
                  { style: 'small', openInNew: 'foobar' },
                  null,
                  2
                )}
              </pre>
              <hr />
              <pre>
                {JSON.stringify(
                  { style: { content: {}, overlay: {} }, openIn: 'foobar' },
                  null,
                  2
                )}
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UseOpenApi
