import Axios from 'axios'

const BASE_URL = 'http://localhost:5027/api'

export function getSummary() {
  const request = Axios.get(`${BASE_URL}/billingCycles/summary`)
  return {
    type: "BILLING_SUMMARY_FETCH",
    payload: request
  }
}