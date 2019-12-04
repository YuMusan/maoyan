import axios from 'axios'

const HotMovie= payload=>{
    return{
        type:'HOT_MOVIE',
        payload
    }
}
function getHotMOvie(){
    return dispatch=>{
        axios.get("/ajax/movieOnInfoList",{params:{
            token:''
        }}).then(({data})=>{
            const movieList=data.movieList;
            const movieIds=data.movieIds;
            dispatch(HotMovie({movieList,movieIds}))
        })
    }
}
const ComingMovie= payload=>{
    return {
        type:'COMING_MOVIE',
        payload
    }
}
function getComingMovie(){
    return dispatch=>{
        axios.get("/ajax/comingList",{params:{
            ci:1,
            limit:12,
        }}).then(({data})=>{
            const comingMovieList=data.coming
            const movieIds=data.movieIds;
            dispatch(ComingMovie({comingMovieList,movieIds}))
        })
    }
}
const MoreComingMovie= payload=>{
    return {
        type:'MORE_COMING_MOVIE',
        payload
    }
}
function getMoreComing(movieIds,movieList){
    return dispatch=>{
        axios.get("/ajax/moreComingList",{params:{
            ci:1,
            limit:12,
            movieIds
        }}).then(({data})=>{
            const comingList=data.coming;
            const moreComingList=[
                ...movieList,
                ...comingList
            ]
            console.log(moreComingList)
            dispatch(MoreComingMovie({moreComingList}))
        })
    }
}
function initvailMovie(){
    return dispatch=>{
        dispatch({
            type:'MOVIE_INIT',
            payload:[]
        })
    }
}
export default{getHotMOvie,getComingMovie,initvailMovie,getMoreComing}