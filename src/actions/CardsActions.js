export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAIL = 'GET_CARDS_FAIL'

let cardsArr = []

/**
 * Функция делает запрос к API, из полученного объекта собирает массив по изображениям карт.
 * @param {*} cardsArr массив полученных карт
 * @param {*} idSet выбранный набор
 */
function makeCards(cardsArr, idSet) {
  cardsArr = []
  return fetch(`https://api.pokemontcg.io/v1/cards?setCode=${idSet}`)
    .then(result => result.json())
    .then(data => {
      data.cards.forEach(item => cardsArr.push(item))
      return cardsArr
    })
}

export function getCards(idSet) {
  return dispatch => {
    dispatch({
      type: GET_CARDS_REQUEST,
      payload: idSet,
    })
    makeCards(cardsArr, idSet).then(cards => {
      /**
       * если ловим пустой массив карт, то кидаем ошибку
       */
      if (cards.length !== 0) {
        dispatch({
          type: GET_CARDS_SUCCESS,
          payload: cards,
        })
      } else {
        dispatch({
          type: GET_CARDS_FAIL,
          payload: 'fail',
        })
      }
    })
  }
}
