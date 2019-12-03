import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../../store/actions';
import axios from 'axios'

class ComingMovie extends React.Component{
    constructor(){
        super();
        this.itemRef=React.createRef()
    }
    render(){
        return(
            <div className="comingList-wrap" onScroll={this.handleScroll.bind(this)}>
                {
                    this.props.comingMovie.map(v=>(
                        <div className="coming-list-item" key={v.id} ref={this.itemRef}>
                            <React.Fragment>
                            <img className='item-img' src={v.img.replace("w.h","128.180")} alt=""/>
                                <div>
                                    <h4>{v.nm}</h4>
                                    <p>{v.star}</p>
                                </div>
                            </React.Fragment>
                        </div>  
                    ))
                }
            </div>
        )
    }
    handleScroll(e){
        const scrollHeight=e.target.scrollHeight;
        let scrollTop=e.target.scrollTop;
        const itemHeight=this.itemRef.current.offsetHeight;
        let loadCondition=Math.floor((scrollHeight-scrollTop)/itemHeight)
        console.log(loadCondition)
        const idLength=this.props.comingMovie.length;
        const nextIds=this.props.movieIds.slice(idLength,idLength+12)
        const movieIds=nextIds.toString()
        console.log(movieIds)
        if(loadCondition===4){
            axios.get("/ajax/comingList",{params:{
                ci:1,
                token:'',
                limit:24,
            }}).then(({data})=>{
                console.log(data)
            })
        }
    }
    UNSAFE_componentWillMount(){
        this.props.initvailMovie()
        this.props.getComingMovie()
    }
}
function mapStateToProps(state){
    return {
      comingMovie:state.comingMovieReducer.comingMovie,
      movieIds:state.comingMovieReducer.movieIds
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreator,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ComingMovie);
