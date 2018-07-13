import axios from 'axios'

export const FETCH_USER_PENDING = "FETCH_USER_PENDING"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILED = "FETCH_USER_FAILED"

export const fetchUser = (loggedUser) =>{
  console.log("In action", loggedUser);
  return async dispatch => {
    console.log(dispatch)
    try {
      dispatch({type:FETCH_USER_PENDING})
      let user = await axios.post(`http://localhost:8000/login`, loggedUser)
      console.log(user);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: user
      })
    } catch(err) {
      dispatch({
        type: FETCH_USER_FAILED,
        payload: err
      })
    }
  }
}
