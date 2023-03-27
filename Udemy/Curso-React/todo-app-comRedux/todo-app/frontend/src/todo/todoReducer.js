const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRITPION_CHANGE': {
      return { ...state, description: action.payload }
    }
    case 'TODO_SEARCH': {
      return { ...state, list: action.payload }
    }
    case 'CLEAR_FORM': {
      return { ...state, description: '' }
    }
    default: return state
  }
}