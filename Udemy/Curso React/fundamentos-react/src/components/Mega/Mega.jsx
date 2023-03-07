import "./Mega.css"
import React, { Component } from "react";
import MegaForm from './MegaForm'
import Display from './Display'

class Mega extends Component {
  state = {
    qtdNum: this.props.qtdNum || 6,
    nums: [],
  }

  setQtdNum = qtdNumNovo => {
    if(qtdNumNovo < 6) {
      qtdNumNovo = 6;
    } else if (qtdNumNovo > 15) {
      qtdNumNovo = 15;
    }

    this.setState({
      qtdNum: qtdNumNovo,
    })
  }
  
  setNums = sortedNums =>{
    this.setState({
      nums: sortedNums,
    })
  }

  sortearNums = _ => {
    const numeros = Array(this.state.qtdNum)
      .fill(0)
      .reduce(nums => {
        const novoNumero = this.gerarNumeroNaoContido(1, 60, nums);
        return [ ...nums, novoNumero ]
      }, [])
      .sort((a,b) => a-b);

    this.setNums(numeros);
  }

  gerarNumeroNaoContido(min, max, array){
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio) ?
      this.gerarNumeroNaoContido(min, max, array) : 
      aleatorio;
  }

  render () {
    return (
      <div className="Mega">
        <MegaForm qtdNum={this.state.qtdNum} setQtdNum={this.setQtdNum} onClick={this.sortearNums}/>
        <Display nums={this.state.nums}/>
      </div>
    )
  }
}

export default Mega;