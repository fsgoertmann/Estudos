import Axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../commom/tab/tabactions'

const BASE_URL = 'http://localhost:5027/api'

export function getList() {
  const request = Axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCH',
    payload: request
  }
}

export function create(values) {
  return dispatch => {
    Axios.post(`${BASE_URL}/billingCycles`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.')
        dispatch([
          resetForm('billingCycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ])
      })
      .catch(e => {
        e.response.data.errors.forEach(erro => {
          console.log(erro)
          toastr.error('Erro', erro)
        });
      })
  }
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}