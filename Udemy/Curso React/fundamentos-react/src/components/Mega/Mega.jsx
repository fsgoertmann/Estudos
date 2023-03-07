import React, { Component } from "react";
import MegaForm from './MegaForm'

class Mega extends Component {
  state = {
    qtdNum: this.props.qtdNum || 6,
    nums: [],
  }

  setQtdNum = qtdNumNovo => {
    this.setState({
      qtdNum: qtdNumnovo,
    })
  }

  sortearNums = _ => {
    let qtd = this.state.qtdNum;
    let nums = this.state.nums;
    for(let i = 0; i <= qtd; i++) {
      let num = parseInt(Math.random() * 60) + 1;
      if (nums.length = 0 && nums.indexOf(num) <= 0) {
        nums.push(num)
      }
    }

    this.state.nums = nums.sort((a,b)=>a-b);
  }

  render () {
    return (
      <div>
        <MegaForm qtdNum={this.state.qtdNum} setQtdNum={this.setQtdNum}/>
      </div>
    )
  }
}

export default Mega;