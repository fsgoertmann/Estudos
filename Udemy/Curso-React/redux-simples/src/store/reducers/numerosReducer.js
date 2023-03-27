import { NUM_MIN_UPDT, NUM_MAX_UPDT } from '../actions/actionTypes'

const initialState = {
    min: 1,
    max: 10
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NUM_MIN_UPDT:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_UPDT:
            return {
                ...state,
                max: action.payload
            }
        default: return state
    }
}