import React from 'react'

export default props => (
  <div>
    <label>{props.texto}</label>
    <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={e => props.onChange?.(e.target.value)}
        />
  </div>
)