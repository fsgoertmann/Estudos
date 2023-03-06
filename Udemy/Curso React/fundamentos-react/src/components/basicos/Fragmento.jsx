import React from 'react';
/* Fragment  não necessariamente precisa utilizar a tag, pode ser uma tag em branco (<></>,
  porêm, se for necessário passar algum atributo deve ser utilizada a tag*/
export default function Fragmento(props) {
  return (
    <React.Fragment key='1'>
      <h2>Fragmento!</h2>
      <p>Cuidado com esse erro!!!</p>
    </React.Fragment>
  )
}