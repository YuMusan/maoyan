import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>        
    </div>
  );
}

export default App;
