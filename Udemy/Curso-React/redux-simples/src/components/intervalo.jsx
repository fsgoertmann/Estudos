import './intervalo.css'
import React from 'react'
import Card from './card'

export default props => {
    return (
        <Card title="Intervalo de Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} readOnly />
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={10} readOnly />
                </span>
            </div>
        </Card>
    )
}