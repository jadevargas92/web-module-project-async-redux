import { 
    FETCH_RICK_MORTY_START, 
    FETCH_RICK_MORTY_SUCCESS, 
    FETCH_RICK_MORTY_FAIL 
} from '../actions/someActions'

const initialState = {
    rickMorty: [],
    error: '',
    isFetching: false
}

const reducer = (state=initialState, action) => {
    console.log('reducer', action)
    switch(action.type) {
        case FETCH_RICK_MORTY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_RICK_MORTY_SUCCESS:
            return {
                ...state,
                rickMorty: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_RICK_MORTY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;