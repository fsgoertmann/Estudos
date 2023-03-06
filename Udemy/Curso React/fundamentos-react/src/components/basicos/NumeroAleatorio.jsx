import React from 'react';

export default props => {
  const { min, max} = props;
  const numero = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <h2>Número Aleatório</h2>
      <p>{numero} foi gerado aleatoriamente a partir do valor Min:{min}, e Max:{max} </p>
    </div>
  )
}