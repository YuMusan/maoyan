import React from 'react'

export default class MyCenter extends React.Component{
    render(){
        return(
            <>
                <main>
                    账户页面
                </main>
            </>
        )
    }
    componentDidMount(){
        if(!localStorage.userName){
            console.log((localStorage.userName))
            this.props.history.push("/login")
        }
    }
}