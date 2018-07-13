import axios from 'axios';

export const FETCH_BUTTONS_PENDING = "FETCH_BUTTONS_PENDING"
export const FETCH_BUTTONS_SUCCESS = "FETCH_BUTTONS_SUCCESS"
export const FETCH_BUTTONS_FAILED = "FETCH_BUTTONS_FAILED"

export const fetchButtons =  () => {
  console.log("In action");
  return async dispatch => {
    console.log(dispatch)
    try {
      dispatch({type:FETCH_BUTTONS_PENDING})
      let buttons = await axios.get(`http://localhost:8000/buttons`)
      console.log(buttons);
      dispatch({
        type: FETCH_BUTTONS_SUCCESS,
        payload: buttons
      })
    } catch(err) {
      dispatch({
        type: FETCH_BUTTONS_FAILED,
        payload: err
      })
    }
  }
}
