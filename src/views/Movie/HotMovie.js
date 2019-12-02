import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../../store/actions';

class HotMovie extends React.Component{
    render(){
        // console.log(this.props.movieIds)
        return(
            <div className="list-wrap" onScroll={this.handleScroll.bind(this)}>
                {
                    this.props.hotMovie.map(v=>(
                        <div className="hot-list-item" key={v.id}>
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
        console.log(e.target)
    }
    componentDidMount(){
        this.props.initvailMovie();
        this.props.getHotMOvie();
    }
}

function mapStateToProps(state){
    return {
      hotMovie:state.hotMovieReducer.hotMovie,
      movieIds:state.hotMovieReducer.movieIds
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreator,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(HotMovie);
