import Navbar from './Navbar.js';
import About from './About.js';
import Find from './Find.js';
import Login from './Login.js';
import Signup from './Signup.js';
import BecomeH from './BecomeH.js';
import Home from './Home.js';
import {Route,Switch} from 'react-router-dom';
import React,{Component} from 'react';

class App extends Component{
  render()
  {
    return(<div>
      <Navbar/>

      <Switch>
          <Route exact path='/' render={(routeProps)=>(<Home  {...routeProps}/>)}/>
          <Route exact path='/find' render={(routeProps)=>(<Find  {...routeProps}/>)}/>
          <Route exact path='/becomeHelper' render={(routeProps)=>(<BecomeH  {...routeProps}/>)}/>
          <Route exact path='/about' render={(routeProps)=>(<About  {...routeProps}/>)}/>
          <Route exact path='/login'  render={(routeProps)=>(<Login  {...routeProps}/>)}/>
          <Route exact path='/signup'  render={(routeProps)=>(<Signup  {...routeProps}/>)}/>
        </Switch>
    </div>);
  }
}

export default App;
