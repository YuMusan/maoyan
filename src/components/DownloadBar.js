import React from 'react';
import logo from '../images/logo.png'
export default class DownLoadBar extends React.Component{
    render(){
        return(
            <div className="download-app-bar">
                <h1><img src={logo} alt=""/></h1>
                <div>
                    <h3>猫眼</h3>
                    <p>在线选座，热门影讯，爱上看电影</p>
                </div>
                <button><a href="http://m.maoyan.com/app?channel=mymovie1yuan-dy">立即打开</a></button>
            </div>
        )
    }
}