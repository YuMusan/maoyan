import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'
import Search from './views/search'
import CityList from './views/CityList'
function App(){
  return (
    <div className="App">
        <Switch>
        <Route path="/city-list" component={CityList}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>        
    </div>
  );
}

export default App;
