import React from 'react'
import {NavLink,Switch,Route,Link} from 'react-router-dom'
import HotMovie from './HotMovie'
import ComingMovie from './ComingMovie'
import DownLoadBar from '../../components/DownloadBar'
import searchLogo from '../../images/search.png'


export default class Movies extends React.Component{
    render(){
        return(
            <>
                <main>
                    <div className="main-context">
                        <DownLoadBar></DownLoadBar>
                        <section className="topbar">
                            <div className="city-entry">
                                <Link to="/city-list">
                                    <span>北京</span>
                                    <i className="city-entry-arrow"></i>
                                </Link>
                            </div>
                            <NavLink exact to="/movie">正在热映</NavLink>
                            <NavLink to="/movie/.f-hot">即将上映</NavLink>
                            <Link to="/search"><img src={searchLogo} alt=""/></Link>    
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
