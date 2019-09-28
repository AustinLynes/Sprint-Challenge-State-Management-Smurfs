import axios from 'axios';

export const DATA_FETCHING_START = 'DATA_FETCHING_START';
export const DATA_FETCHING_SUCCEED = 'DATA_FETCHING_SUCCEED';
export const DATA_FETCHING_FAILED = 'DATA_FETCHING_FAILED';

export const getData = (route) => dispatch => {
    
    dispatch({ type: DATA_FETCHING_START });
    axios
        .get(`http://localhost:3333/${route}`)
        .then(res =>
            dispatch({
                type: DATA_FETCHING_SUCCEED,
                payload: res.data
            }))
        .catch(err => {
            dispatch({
                type: DATA_FETCHING_FAILED,
                payload: err
            })
        })
}
export const postData = (route, payload) => dispatch => {
   
    axios
        .post(`http://localhost:3333/${route}`, payload)
        .then(res =>
            dispatch({
                type: DATA_FETCHING_SUCCEED,
                payload: res.data
            }))
        .catch(err => {
            dispatch({
                type: DATA_FETCHING_FAILED,
                payload: err
            })
        })
}

