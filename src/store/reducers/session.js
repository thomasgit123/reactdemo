import { initialState } from '../initialState'
import { createReducer } from './utilities'
import * as Actions from '../actions'

const { session } = initialState

const resetSession = (state) => ({
  ...state,
  user: 'Dream',
})

export const sessionReducer = createReducer(session, {
  [Actions.RESET_SESSION]: resetSession,
})