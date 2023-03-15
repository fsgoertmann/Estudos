import { userReducer } from "./userReducer"
import { numberReducer } from "./numberReducer"

export function reducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)

}