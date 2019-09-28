import {
    DATA_FETCHING_START,
    DATA_FETCHING_SUCCEED,
    DATA_FETCHING_FAILED
} from '../actions'
const _inital = {
    data: [],
    isFetching: false,
    errors: ''
}
export const dataReducer = (state = _inital, action) => {
    console.log('fetch ::', action)
    switch (action.type) {
        case DATA_FETCHING_START:
            return {
                ...state,
                isFetching:true,
                errors:''
            }
        case DATA_FETCHING_SUCCEED:
            return {
                ...state,
                data:action.payload,
                isFetching:false,
                errors:''
            }
        case DATA_FETCHING_FAILED:
            return {
                ...state,
                errors:action.payload
            }

        default:
            return state
    }
}