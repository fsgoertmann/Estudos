import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardreducer'
import TabReducer from '../commom/tab/tabreducer'
import Billingcyclereducer from '../billingcycle/billingcyclereducer'
import authReducer from '../auth/authReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: Billingcyclereducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: authReducer
})

export default rootReducer