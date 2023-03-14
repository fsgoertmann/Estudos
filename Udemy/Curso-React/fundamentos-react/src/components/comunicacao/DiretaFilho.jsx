import React from 'react';

export default props => {
  return (
    <div>
      <span>{props.nome} </span>
      <span><strong>{props.numero}</strong> </span>
      <span>{props.nerd ? 'Nerdola' : 'Normie'}!</span>
    </div>
  )
}