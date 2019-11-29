import React from 'react'
import axios from 'axios'

export default class HotMovie extends React.Component{
    constructor(){
        super();
        this.state={
            movieList:[]
        }
    }
    render(){
        return(
            <div className="list-wrap">
                {
                    this.state.movieList.map(v=>(
                        <div className="list-item" key={v.id}>
                            <React.Fragment key={v.id}>
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
    async componentDidMount(){
        const {data}= await axios.get("/ajax/movieOnInfoList")
        this.setState({
            movieList:data.movieList
        })
    }
}