import { combineReducers } from 'redux'
import { cardsReducer } from './cardsReducer'
import { setsReducer } from './setsReducer'

export const rootReducer = combineReducers({
  cards: cardsReducer,
  sets: setsReducer,
})
