import Axios from 'axios'
import consts from '../consts'

export function getSummary(user) {
  return dispatch => {
    Axios.get(`${consts.API_URL}/billingCycles/summary`)
      .then(resp => {
        const data = resp.data.filter(cycle => cycle._id === user)
        dispatch({ type: "BILLING_SUMMARY_FETCH", payload: data[0] })
      })
  }
}