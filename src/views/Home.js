import React from 'react'
import FooterNav from '../components/FooterNav'

export default class Home extends React.Component{
    render(){
        return(
            <>
                <header>头部信息</header>
                <FooterNav>底部导航</FooterNav>
            </>
        )
    }
}