export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAIL = 'GET_CARDS_FAIL'

let cardsArr = []

function makeCards(cardsArr, idSet) {
  return fetch(`https://api.pokemontcg.io/v1/cards?setCode=${idSet}`)
    .then(result => result.json())
    .then(data => {
      data.cards.forEach(item => cardsArr.push(item))
      console.log('makeCards')
      return cardsArr
    })
}

export function getCards(idSet) {
  return dispatch => {
    dispatch({
      type: GET_CARDS_REQUEST,
      payload: idSet,
    })
    makeCards(cardsArr, idSet).then(cards =>
      dispatch({
        type: GET_CARDS_SUCCESS,
        payload: cards,
      })
    )
  }
}
