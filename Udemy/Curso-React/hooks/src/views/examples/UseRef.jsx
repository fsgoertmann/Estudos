import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const count = useRef(0)
  const myInput1 = useRef(null)
  const myInput2 = useRef(null)

  const merge = function (s1, s2) {
    const sarr1 = s1.split("")
    const sarr2 = s2.split("")
    return null
  }

  useEffect(function () {
    count.current++
    myInput2.current.focus()
  }, [value1])

  useEffect(function () {
    count.current++
    myInput1.current.focus()
  }, [value2])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle>Exercício #01</SectionTitle>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input type="text" className="input"
          ref={myInput1}
          value={value1} onChange={(e => {
            setValue1(e.target.value)
          })} />
      </div>
      <SectionTitle>Exercício #02</SectionTitle>
        <div className="center">
          <input type="text" className="input"
            ref={myInput2}
            value={value2} onChange={(e => {
              setValue2(e.target.value)
            })} />
        </div>
    </div>
  )
}

export default UseRef
