import React from 'react'

interface ModalProviderApiProps {}

const ModalProviderApi: React.FC<ModalProviderApiProps> = () => {
  return (
    <div>
      <code>{'<ModalProvider styles={{}}></ModalProvider>'}</code>
      <h3>Attributes</h3>
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
            <td>styles</td>
            <td>{'Dict<StyleOption>'}</td>
            <td>
              Define one or multiple set of StyleOption. A style set`s name is
              its key (will be used as the <i>style</i> property in OpenOptions
              when opening a modal) and its value is an object with one or both
              of the <i>content</i> and <i>overlay</i> keys.
            </td>
            <td>
              <pre>
                {JSON.stringify(
                  {
                    small: {
                      overlay: {
                        background: 'rgba(0, 0, 0, .4)'
                      },
                      content: {
                        height: 'min-content'
                      }
                    }
                  },
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

export default ModalProviderApi
