import React from 'react';

export default props => {
  return(
    <div>
      <label htmlFor="qtdNumInput">Quantidade de números: </label>
      <input id="qtdNumInput" type="number" value={props.qtdnum} onChange={e => props.setQtdNum(+e.target.value)}/>
      <button></button>
  </div>
  );
}