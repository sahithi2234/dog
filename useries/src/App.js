import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';

class App extends Component{
  render()
  {
    return(<div>

           <Navbar/>

           <Switch>
          <Route exact path='/' render={(routeProps)=>(<Home  {...routeProps}/>)}/>
          
        </Switch>
    </div>)
  }
}

export default App;
