import "./App.css";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/NumeroAleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

import React from 'react';

export default _ =>
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card
        titulo='#08 - Renderização Condicional'
        color="#6495ED">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: 'Felipe' }}/>
        <UsuarioInfo usuario={{ email: 'teste@teste.com' }}/>
      </Card>
      <Card
        titulo='#07 - Repeticao Desafio'
        color="#DFFF00">
        <TabelaProdutos />
      </Card>
      <Card
        titulo='#06 - Repetição'
        color="#FFA07A">
        <ListaAlunos />
      </Card>
      <Card
        titulo='#05 - Componente com Filhos'
        color="#FFA07A">
        <Familia sobrenome="Goertmann">
          <FamiliaMembro nome="Felipe" />
          <FamiliaMembro nome="Gabriela" />
          <FamiliaMembro nome="Thiago" />
        </Familia>
      </Card>
      <Card
        titulo='#04 - Desafio Aleatório'
        color="#CD5C5C">
        <NumeroAleatorio
          min={10}
          max={20} />
      </Card>
      <Card
        titulo='#03 - Fragmento'
        color="#F08080">
        <Fragmento />
      </Card>
      <Card
        titulo='#02 - Com Parametro'
        color="#FA8072">
        <ComParametro
          titulo="Situação do Aluno"
          nome="Felipe"
          nota={10} />
      </Card>
      <Card
        titulo='#01 - Primeiro'
        color="#E9967A">
        <Primeiro />
      </Card>
    </div>
  </div>
