import {combineReducers} from 'redux'

const hotMovieStateInit={
    hotMovie:[],
    movieIds:[]
}
const comingMovieStateInit={
    comingMovie:[]
}

const hotMovieReducer=(state=hotMovieStateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    switch (type) {
        case 'HOT_MOVIE':
            state.hotMovie=[
                ...state.hotMovie,
                ...payload.movieList
            ];
            state.movieIds=payload.movieIds
            return state;
        case 'MOVIE_INIT':
            state.hotMovie=payload
            return state
        default:
            return state;
    }
}
const comingMovieReducer=(state=comingMovieStateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    switch (type) {
        case 'COMING_MOVIE':
            state.comingMovie=[
                ...state.comingMovie,
                ...payload.comingMovieList
            ]
            return state;
        case 'MOVIE_INIT':
            state.comingMovie=payload
            return state
        default:
            return state;
    }
}

export default  combineReducers({
    hotMovieReducer,
    comingMovieReducer
})