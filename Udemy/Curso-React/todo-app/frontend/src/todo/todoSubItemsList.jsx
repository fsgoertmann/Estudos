import React from 'react'

export default props => {
  const RenderRows = () => {
    const list = props.list || []
    return list.map(subItem => {
      <td key={subItem._id}>
        <input type="checkbox" value={subItem.checked} />
        <span>{subItem.description}</span>
      </td>
    })
  }

  return (
    <tr>
      {RenderRows()}
    </tr>
  )
}