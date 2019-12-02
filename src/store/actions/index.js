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

        }}).then(({data})=>{
            const movieList=data.movieList;
            const movieIds=data.movieIds;
            dispatch(HotMovie({movieList,movieIds}))
        })
    }
}
// function scrollGetHotMovie(nextIds){
//     return dispatch=>{
//         axios.get("/ajax/moreComingList",{params:{
//             movieIds:nextIds
//         }}).then(({data})=>{
//             console.log(data)
//         })
//     }
// }
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
            token:'',
            limit:10
        }}).then(({data})=>{
            const comingMovieList=data.coming
            dispatch(ComingMovie({comingMovieList}))
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
export default{getHotMOvie,getComingMovie,initvailMovie}