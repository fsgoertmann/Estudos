import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../commom/form/labelandinput'
import { init } from './billingcycleaction'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    }
  }

  render() {
    //Para o Field as propriedades name e component são obrigatórios
    const { handleSubmit, readOnly, credits, debts } = this.props
    const { sumOfCredits, sumOfDebts } = this.calculateSummary()
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={LabelAndInput}
            label="Nome" cols="12 4" placeholder="Informe o nome"
            readOnly={readOnly} />
          <Field name="month" component={LabelAndInput}
            type="number" label="Mês" cols="12 4"
            placeholder="informe o mês"
            readOnly={readOnly} />
          <Field name="year" component={LabelAndInput}
            type="number" label="Ano" cols="12 4"
            placeholder="informe o ano"
            readOnly={readOnly} />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList cols="12 6" readOnly={readOnly} list={credits}
            field="credits" legend="Créditos" />
          <ItemList cols="12 6" readOnly={readOnly} list={debts}
            field="debts" legend="Débitos" showStatus={true} />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}</button>
          <button type="button" className='btn btn-default'
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ 
  credits: selector(state, 'credits'), 
  debts: selector(state, 'debts') 
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)