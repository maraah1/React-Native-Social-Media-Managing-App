import { FETCH_BUTTONS_FAILED, FETCH_BUTTONS_PENDING, FETCH_BUTTONS_SUCCESS} from '../actions/mediaButtons'

export default (state=[], action) => {

  switch(action.type){
     case FETCH_BUTTONS_PENDING:
       return state
     case FETCH_BUTTONS_SUCCESS:
       return [...action.payload.data]
     case FETCH_BUTTONS_FAILED:
       return action.payload
     default:
       return state
   }
}
