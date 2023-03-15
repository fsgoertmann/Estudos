import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'numberAdd2':
      return { ...state, number: state.number + 2 }
    case 'login':
      return {
        ...state, user: { name: action.payload }
      }
    case 'updateNumber':
      return {
        ...state, number: action.payload.value
      }
    case 'multiply':
      return {
        ...state, number: state.number * action.payload.value
      }
    case 'divide':
      return {
        ...state, number: state.number / action.payload.value
      }
    case 'parseInt':
      return {
        ...state, number: parseInt(state.number)
      }
    default:
      return state
  }
}

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
            onClick={() => { dispatch({ type: 'numberAdd2' }) }}>+2</button>
          <button className="btn"
            onClick={() => { dispatch({ type: 'login', payload: 'Feumann' }) }}>Login</button>
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
