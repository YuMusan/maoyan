import React from 'react'
import {NavLink,Switch,Route} from 'react-router-dom'
import HotMovie from './HotMovie'
import ComingMovie from './ComingMovie'
import search from '../../images/search.png'


export default class Movies extends React.Component{
    render(){
        return(
            <>
                <main>
                    <div className="main-context">
                        <div className="download-app-bar">上拉隐藏</div>
                        <section className="topbar">
                            <div className="city-entry">
                            <span>北京</span>
                            <i className="city-entry-arrow"></i>
                            </div>
                            <NavLink exact to="/movie">正在热映</NavLink>
                            <NavLink to="/movie/.f-hot">即将上映</NavLink>
                            <span><img src={search} alt=""/></span>
                        </section>
                        <Switch>
                            <Route exact path="/movie" component={HotMovie}></Route>
                            <Route path="/movie/.f-hot" component={ComingMovie}></Route>
                        </Switch>
                    </div>
                </main>
            </>
        )
    }
}
