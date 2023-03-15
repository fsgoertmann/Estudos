export function numberReducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return {
                ...state, number: state.number + 2
            }
        case 'updateNumber':
            return {
                ...state, number: action.payload.value
            }
        case 'multiply':
            return {
                ...state, number: state.number * action.payload.value
            }
        case 'divide':
            return {
                ...state, number: state.number / action.payload.value
            }
        case 'parseInt':
            return {
                ...state, number: parseInt(state.number)
            }
        default:
            return state
    }
}