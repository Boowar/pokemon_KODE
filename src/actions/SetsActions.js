export const GET_SETS_REQUEST = 'GET_SETS_REQUEST'
export const GET_SETS_SUCCESS = 'GET_SETS_SUCCESS'
export const GET_SETS_FAIL = 'GET_SETS_FAIL'

let arraySets = []

function makeSets(arraySets) {
  return fetch('https://api.pokemontcg.io/v1/sets')
    .then(result => result.json())
    .then(data => {
      data.sets.forEach(item => arraySets.push(item))
      console.log('makeSets')
      return arraySets
    })
}

export function getSets() {
  return dispatch => {
    dispatch({
      type: GET_SETS_REQUEST,
    })
    makeSets(arraySets).then(sets => {
      dispatch({ type: GET_SETS_SUCCESS, payload: sets })
    })
  }
}

/* export function getSet(idSet) {
  return dispatch => {
    dispatch({
      type: 'GET_SET_REQUEST',
      payload: idSet,
    })
  }
} */
