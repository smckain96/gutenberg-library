export default(state = [], action) => {
  switch (action.type) {
    case 'GET_TEXT_BY_ID_FULFILLED':
      return [...state, ...action.payload]
    case 'GET_TEXT_BODY_FULFILLED':
      return [...state, ...action.payload]
    default:
      return state;

  }
}
