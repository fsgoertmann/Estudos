import Axios from 'axios'
import consts from '../consts'

export function getSummary(user) {
  const request = Axios.get(`${consts.API_URL}/billingCycles/summary?search=${user}`)
  return {
    type: "BILLING_SUMMARY_FETCH",
    payload: request
  }
}