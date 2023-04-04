import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../commom/template/contentheader'
import Content from '../commom/template/content'
import ValueBox from '../commom/widget/valuebox'
import Row from '../commom/layout/row'
import { getSummary } from './dashboardactions'

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary(this.auth.user)
  }

  render() {
    const { credit, debt } = this.props.summary
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox cols="12 4" color="green" icon="bank" value={`R$${credit}`} text="Total de Créditos" />
            <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$${debt}`} text="Total de Débitos" />
            <ValueBox cols="12 4" color="blue" icon="money" value={`R$${credit - debt}`} text="Total de Consolidado" />
          </Row>
        </Content>
      </div>
    )
  }
}


const mapStateToProps = state => ({ summary: state.dashboard.summary, auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)