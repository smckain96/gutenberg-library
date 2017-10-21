import axios from 'axios';

export const getLibrary = () => {
  return {
    type: 'GET_LIBRARY',
    payload: axios.get(`http://localhost:3000/library`)
    .then(function(data) {
      console.log('data', data.data)
    })
  }
}

export const addToLibrary = (entry) => {
  return {
    type: 'ADD_TO_LIBRARY',
    payload: axios.post(`http://localhost:3000/library/`,
      {
        entry: entry
      })
  }
}

export const singleLibraryEntry = (id) => {
  return {
    type: 'SINGLE_LIBRARY_ENTRY',
    payload: axios.get(`http://localhost:3000/library/${id}`)
  }
}

export const deleteFromLibrary= (id) => {
  return {
    type: 'DELETE_FROM_LIBRARY',
    payload: axios.post(`http://localhost:3000/library/${id}`)
  }
}
