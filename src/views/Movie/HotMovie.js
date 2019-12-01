import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../../store/actions';

class HotMovie extends React.Component{
    render(){
        return(
            <div className="list-wrap">
                {
                    this.props.hotMovie.map(v=>(
                        <div className="hot-list-item" key={v.id}>
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
    componentDidMount(){
        this.props.getHotMOvie()
        console.log(this.props.hotMovie)

    }
}

function mapStateToProps(state){
    return {
      hotMovie:state.hotMovieReducer.hotMovie,
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreator,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(HotMovie);
