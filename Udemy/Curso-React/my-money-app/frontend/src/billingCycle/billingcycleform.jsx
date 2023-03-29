import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../commom/form/labelandinput'

class BillingCycleForm extends Component {
  render() {
    //Para o Field as propriedades name e component são obrigatórios
    const { handleSubmit } = this.props
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={LabelAndInput}
            label="Nome" cols="12 4" placeholder="Informe o nome" />
          <Field name="month" component={LabelAndInput}
            type="number" label="Mês" cols="12 4"
            placeholder="informe o mês" />
          <Field name="year" component={LabelAndInput}
            type="number" label="Ano" cols="12 4"
            placeholder="informe o ano" />
        </div>
        <div className="box-footer">
          <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)