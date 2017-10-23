export default(state = {}, action) => {
  switch (action.type) {
    case 'GET_LIBRARY_FULFILLED':
      return {...state, ...action.payload}
    case 'ADD_TO_LIBRARY_FULFILLED':
      return {...state, ...action.payload}
    case 'SINGLE_LIBRARY_ENTRY_FULFILLED':
      return {...state, ...action.payload}
    case 'DELETE_FROM_LIBRARY_FULFILLED':
      return {...state, ...action.payload}
    default:
      return state;
  }
}
