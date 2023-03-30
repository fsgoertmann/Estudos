import Axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../commom/tab/tabactions'

const BASE_URL = 'http://localhost:5027/api'
const INITIAL_VALUES = { credits: [{}], debts:[{}] }


function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : ''
    Axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(erro => {
          console.log(erro)
          toastr.error('Erro', erro)
        });
      })
  }
}

export function getList() {
  const request = Axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCH',
    payload: request
  }
}

export function create(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}

export function remove(values) {
  return submit(values, 'delete')
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}

export function showDelete(billingCycle) {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ]
}
