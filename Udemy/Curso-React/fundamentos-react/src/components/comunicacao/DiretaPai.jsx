import React from 'react';
import DiretaFilho from './DiretaFilho'

export default props => {
  return (
    <div>
      <DiretaFilho nome='Felipe' numero={20} nerd={true}/>
      <DiretaFilho nome='Gabriela' numero={17} nerd={false}/>
    </div>
  )
}