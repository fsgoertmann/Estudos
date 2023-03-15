import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a, b) {
  const future = Date.now() + 2000;
  while (Date.now() < future) { }
  console.log(a+b)
  return a + b
}

const UseMemo = props => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);

  const result = useMemo(() => sum(v1, v2), [v1, v2])

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />
      <div className="center">
        <input type="number" className="input"
          value={v1} onChange={e => { setV1(parseInt(e.target.value)) }} />
        <input type="number" className="input"
          value={v2} onChange={e => { setV2(parseInt(e.target.value)) }} />
        <input type="number" className="input"
          value={v3} onChange={e => { setV3(parseInt(e.target.value)) }} />
        <span className="text">{result}</span>
      </div>
    </div>
  )
}

export default UseMemo
