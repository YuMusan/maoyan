import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../../store/actions';

class ComingMovie extends React.Component{
    render(){
        return(
            <div className="comingList-wrap">
                {
                    this.props.comingMovie.map(v=>(
                        <div className="coming-list-item" key={v.id}>
                            <React.Fragment>
                                <div>{v.nm}</div>
                                <img src={v.img.replace("w.h","128.180")} alt=""/>
                                <div>{v.star}</div>
                            </React.Fragment>
                        </div>  
                    ))
                }
            </div>
        )
    }
    
    UNSAFE_componentWillMount(){
        this.props.getComingMovie()
        console.log(this.props.comingMovie)

    }
}
function mapStateToProps(state){
    return {
      comingMovie:state.comingMovieReducer.comingMovie,
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreator,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ComingMovie);
