import React from 'react';

export default props => {
  return(
    <div>
      <label htmlFor="qtdNumInput">Quantidade de números: </label>
      <input id="qtdNumInput" type="number" min={6} max={15} value={props.qtdNum} onChange={e => props.setQtdNum(+e.target.value)}/>
      <button onClick={props.onClick} >Sortear</button>
  </div>
  );
}