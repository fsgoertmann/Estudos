import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title='Exercício #01'></SectionTitle>
      <div className="center">
        {state.user ?
          <span className="text">{state.user.name}</span> :
          <span className="text">Sem usuário</span>
        }
        <span className="text">{state.number}</span>
        <div>
          <button className="btn"
            onClick={() => numberAdd2(dispatch)}>+2</button>
          <button className="btn"
            onClick={() => login(dispatch, 'Feumann')}>Login</button>
          <button className="btn"
            onClick={() => { dispatch({ type: 'multiply', payload: { value: 7 } }) }}>Vezes 7</button>
          <button className="btn"
            onClick={() => { dispatch({ type: 'divide', payload: { value: 25 } }) }}>Divide 25</button>
          <button className="btn"
            onClick={() => { dispatch({ type: 'parseInt' }) }}>Arredondar</button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
