import axios from 'axios';

export const getText = (id) => {
  return {
    type: 'GET_TEXT_BODY',
    payload: axios.get(`http://gutenbergapi.org/texts/${id}/body`)
  }
}

export const getTextBody = (id) => {
  return {
    type: 'GET_TEXT_BY_ID',
    payload: axios.get(`http://gutenbergapi.org/texts/${id}`)
  }
}
