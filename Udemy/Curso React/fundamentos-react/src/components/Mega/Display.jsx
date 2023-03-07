import React from 'react';

export default props => {
    console.log(props);
  return(
    <h3>Números sorteados: {props.nums.toString()}</h3>
  );
}