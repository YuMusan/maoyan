import React from 'react';
import maoyan_cityList from '../images/cities.json'

export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            cityList:[]
        }
    }
    render(){
        console.log(this.state.cityList)
        return(
        <div>
            {
                this.state.cityList.map(v=>(
                    <div key={v.id}>{v.nm}</div>      
                ))
            }
        </div>
        )
    }
    componentDidMount(){
        this.setState({
            cityList:maoyan_cityList.cts
        })
    }
}