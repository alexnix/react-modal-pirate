import React from 'react'

interface UseCloseApiProps {}

const UseCloseApi: React.FC<UseCloseApiProps> = () => {
  return (
    <div>
      <code>{'const closeModal = useClose()'}</code>
      <h3>Parameters</h3>
      <i>None</i>
      <h3>Returns</h3>
      <code>(name?: string) ={'>'} void</code>
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
            <td>name</td>
            <td>string</td>
            <td>
              Use this parameter to close a modal by its name. A modal in given
              a name when <i>openInNew</i> option is used, for opening multiple
              modals at the same time.
            </td>
            <td>foobar</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UseCloseApi
