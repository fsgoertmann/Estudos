import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../commom/layout/grid'
import Input from '../commom/form/input'
import If from '../commom/operador/if'

class ItemList extends Component {

  add(i, item = []) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('billingCycleForm', this.props.field, i, item)
    }
  }

  cancel(i) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm', this.props.field, i)
    }
  }

  renderRows() {
    const list = this.props.list || []
    return list.map((item, index) => (
      <tr key={index}>
        <td><Field name={`${this.props.field}[${index}].name`} component={Input}
          placeholder="Informe o nome"
          readOnly={this.props.readOnly} /></td>
        <td><Field name={`${this.props.field}[${index}].value`} component={Input}
          placeholder="Informe o valor"
          readOnly={this.props.readOnly} /></td>
        <If test={this.props.showStatus}>
          <td><Field name={`${this.props.field}[${index}].status`} component={Input}
            placeholder="Informe o status"
            readOnly={this.props.readOnly} /></td>
        </If>
        <td>
          <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
            <i className="fa fa-plus" />
          </button>
          <button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
            <i className="fa fa-clone" />
          </button>
          <button type="button" className="btn btn-danger" onClick={() => this.cancel(index)}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th className="table-actions">Ações</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)