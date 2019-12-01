import {combineReducers} from 'redux'

const hotMovieStateInit={
    hotMovie:[]
}
const comingMovieStateInit={
    comingMovie:[]
}

const hotMovieReducer=(state=hotMovieStateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="HOT_MOVIE"){
        state.hotMovie=[
            ...state.hotMovie,
            ...payload.movieList
        ]
    }
    return state;
}
const comingMovieReducer=(state=comingMovieStateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="COMING_MOVIE"){
        state.comingMovie=[
            ...state.comingMovie,
            ...payload.comingMovieList
        ]
    }
    return state;
}
export default  combineReducers({
    hotMovieReducer,
    comingMovieReducer
})