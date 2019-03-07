import {
  GET_SETS_REQUEST,
  GET_SETS_SUCCESS,
  GET_SETS_FAIL,
} from '../actions/SetsActions'

const initialState = {
  sets: [],
  isFetching: false,
  error: '',
}
export function setsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SETS_REQUEST:
      return { ...state, isFetching: true, error: '' }
    case GET_SETS_SUCCESS:
      return { ...state, sets: action.payload, isFetching: false, error: '' }
    case GET_SETS_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }
    default:
      return state
  }
}
