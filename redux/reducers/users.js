import {FETCH_USER_FAILED, FETCH_USER_PENDING, FETCH_USER_SUCCESS} from '../actions/users.js'


export default (state = [], action) => {
  switch(action.type){
    case FETCH_USER_PENDING:
      return state
    case FETCH_USER_SUCCESS:
      return [...action.payload.data]
    case FETCH_USER_FAILED:
      return action.payload
    default:
      return state
  }
}
