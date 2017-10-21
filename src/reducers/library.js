export default(state = [], action) => {
  switch (action.type) {
    case 'GET_LIBRARY_FULFILLED':
      console.log('library', action.payload)
      return [...action.payload.data]
    case 'ADD_TO_LIBRARY_FULFILLED':
      return [...state, ...action.payload.data]
    case 'SINGLE_LIBRARY_ENTRY_FULFILLED':
      return [...state, ...action.payload.data]
    case 'DELETE_FROM_LIBRARY_FULFILLED':
      return [...state, ...action.payload.data]
    default:
      return state;
  }
}
