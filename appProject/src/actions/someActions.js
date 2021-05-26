import axios from 'axios'

export const FETCH_RICK_MORTY_START = 'FETCH_RICK_MORTY_START'
export const FETCH_RICK_MORTY_SUCCESS = 'FETCH_RICK_MORTY_SUCCESS'
export const FETCH_RICK_MORTY_FAIL = 'FETCH_RICK_MORTY_FAIL'


export const getRickMorty = () => dispatch => {
    dispatch({type: FETCH_RICK_MORTY_START});
    axios.get(`https://rickandmortyapi.com/api/character/${Math.ceil(Math.random() * 671)}`)
    .then(res => 
        dispatch({type: FETCH_RICK_MORTY_SUCCESS, payload:res.data})
    ).then(res=> {
        console.log(res.data)
    })
    .catch(err => dispatch({type: FETCH_RICK_MORTY_FAIL, payload: err}))
}