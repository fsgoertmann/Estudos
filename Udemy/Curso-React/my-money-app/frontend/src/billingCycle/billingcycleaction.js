import Axios from 'axios'
const BASE_URL = 'http://localhost:5027/api'

export function getList() {
    const request = Axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCH',
        payload: request
    }
}