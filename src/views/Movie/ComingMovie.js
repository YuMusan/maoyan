import React from 'react'
import axios from 'axios'

export default class ComingMovie extends React.Component{
    constructor(){
        super();
        this.state={
            comingList:[]
        }
    }
    render(){
        return(
            <div className="comingList-wrap">
                {
                    this.state.comingList.map(v=>(
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
    async UNSAFE_componentWillMount(){
        const {data}= await axios.get("/ajax/comingList?ci=1&token=&limit=10")
        console.log(data)
        this.setState({
            comingList:data.coming
        })
    }
}