import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import Movie from '../views/Movie/Movie'
import Cinema from '../views/Cinema'
import MyCenter from '../views/MyCenter'


export default class FooterNav extends React.Component{
    render(){
        return(
            <>
                <Switch>
                    <Route path="/movie" component={Movie}></Route>
                    <Route path="/cinema" component={Cinema}></Route>
                    <Route path="/myCenter" component={MyCenter}></Route>
                </Switch>
                <footer>
                    <Redirect to="/movie" form="/"/>
                    <NavLink className=".App-link" activeClassName=".App-active" to="/movie">电影</NavLink>
                    <NavLink className=".App-link" activeClassName=".App-active" to="/cinema">影院</NavLink>
                    <NavLink className=".App-link" activeClassName=".App-active" to="/myCenter">我的</NavLink>
                </footer>
            </>
        )
    }
}