import React from 'react'
import FooterNav from '../components/FooterNav'

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            str:''
        }
    }
    render(){
        return(
            <>
                <header>
                    <h1>{this.state.str}</h1>
                </header>
                <FooterNav></FooterNav>
            </>
        )
    }
    headerContext(nextProps){
        const title={
            "/movie":"猫眼电影",
            "/cinema":"影院",
            "/myCenter":"我的"
        }
        const pathname=nextProps.location.pathname;
        this.setState({
            str:title[pathname]
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        this.headerContext(nextProps)
    }
    
}