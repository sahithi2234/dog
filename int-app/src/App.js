import React,{Component} from 'react';
import Form from './Form';
import Shiftlist from './Shiftlist.js';
import {Route,Switch} from 'react-router-dom';

class App extends Component{
  componentDidMount(){
    window.localStorage.setItem('shift', []);
  }
  render()
  {
    return(
      <div>
        
        <Switch>
          <Route exact path='/' render={(routeProps)=>(<Form {...routeProps}/>)}/>
          <Route exact path='/shift' render={(routeProps)=>(<Shiftlist {...routeProps} />)}/>
          </Switch>
       
      </div>
    )
  }
}

export default App;
