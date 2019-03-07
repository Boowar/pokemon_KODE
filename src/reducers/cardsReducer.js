import {
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAIL,
} from '../actions/CardsActions'

const initialState = {
  idSet: '',
  cards: [],
  isFetching: false,
  error: '',
}

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_REQUEST:
      return { ...state, idSet: action.payload, isFetching: true, error: '' }
    case GET_CARDS_SUCCESS:
      return { ...state, cards: action.payload, isFetching: false, error: '' }
    case GET_CARDS_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }
    default:
      return state
  }
}
