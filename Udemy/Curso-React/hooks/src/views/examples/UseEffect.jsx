import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
  const value = parseInt(num);
  if (value < 0) return -1;
  if (value === 0) return 1;

  return calcFatorial(value - 1) * value;
}

function isParImpar(num) {
  return num % 2 == 0? 'Par' : 'Ímpar';
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [num, setNum] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [parImpar, setParImpar] = useState('');

  useEffect(function () {
    setFatorial(calcFatorial(number));
  }, [number]);

  useEffect(function () {
    setParImpar(isParImpar(num))
  }, [num]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Execício#01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">{fatorial}</span>
        </div>
        <input type="number" className="input"
          value={number} onChange={e => setNumber(e.target.value)} />
      </div>
      <SectionTitle title="Execício#02" />
      <div className="center">
        <div>
          <span className="text">Resposta:</span>
          <span className="text red">{parImpar}</span>
        </div>
        <input type="number" className="input"
          value={num} onChange={e => setNum(e.target.value)} />
      </div>
    </div>
  );
}

export default UseEffect;
