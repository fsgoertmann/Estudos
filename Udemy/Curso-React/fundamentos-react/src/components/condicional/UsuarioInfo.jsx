import React from 'react';
import If, {Else} from './If';

export default props => {
  return (
    <div>
      <If test={props && props.usuario && props.usuario.nome}>
        Seja bem vindo <strong>{props.usuario.nome}</strong>!
        <Else>
        Seja bem vindo <strong>Amigão</strong>!
        </Else>
      </If>
    </div>
  )
}