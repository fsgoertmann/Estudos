import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';

function calcFatorial (num) {
    const value = parseInt(num);
    if(value < 0) return -1;
    if(value === 0) return 1;

    return calcFatorial(value -1) * value;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function() {
        setFatorial(calcFatorial(number));
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{ fatorial }</span>
                </div>
                <input type="number" className="input"
                    value={number} onChange={e => setNumber(e.target.value)} />
            </div>
        </div>
    );
}

export default UseEffect;
