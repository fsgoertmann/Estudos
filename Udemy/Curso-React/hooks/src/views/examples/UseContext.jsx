import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

  const { state, setState } = useContext(DataContext)

  function incNumber(delta) {
    setState({
      ...state,
      number: state.number + delta
    })
  }

  const { number, setNumber } = useContext(AppContext)
  const { text, setText } = useContext(AppContext)

  useEffect(function () {
    if (number > 4400) {
      setText('Over five thousand!!!')
    } else {
      setText('Context API + Hooks')
    }
  }, [number])

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercício #01"></SectionTitle>
      <div className="center">
        <button className="btn"
          onClick={() => { incNumber(-1) }}>-1</button>
        <button className="btn"
          onClick={() => { incNumber(1) }}>+1</button>
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
      </div>
      <SectionTitle title="Exercício #02"></SectionTitle>
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn"
            onClick={() => setNumber(number - 1)}>-1</button>
          <button className="btn"
            onClick={() => setNumber(number + 1)}>+1</button>
        </div>
      </div>
    </div>
  )
}

export default UseContext
