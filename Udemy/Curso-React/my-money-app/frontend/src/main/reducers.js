import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'

import DashboardReducer from '../dashboard/dashboardreducer'
import TabReducer from '../commom/tab/tabreducer'
import Billingcyclereducer from '../billingcycle/billingcyclereducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: Billingcyclereducer,
  form: formReducer
})

export default rootReducer