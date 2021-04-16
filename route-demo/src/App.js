import logo from './logo.svg';
import './App.css';
import Dosa from './Dosa';
import Idly from './Idly';
import Vada from './Vada';
import React,{ Component } from 'react';
import {NavLink,Switch,Route} from 'react-router-dom';

class App extends Component{
         
          render()
          {
            
            return(
              <div style={{placeItems:'center',position:'absolute'}}>
                  <nav style={{padding:'40px',position:'relative',left:'470px'}}>
                     <NavLink style={{padding:'20px'}} exact to='./'>Home</NavLink>
                     <NavLink style={{padding:'20px'}}exact to='/dosa'>Dosa</NavLink>
                      <NavLink style={{padding:'20px'}} exact to='/idly'>Idly</NavLink>
                      <NavLink style={{padding:'20px'}} exact to='/vada'>vada</NavLink>
                  </nav>
                  
                
                  <div style={{height:'80vh',width:'90wh',backgroundColor:'grey',color:'white',position:'relative',left:'500px',margin:'auto'}}>
                    
                  <Switch>
                   <Route exact path='/' component={()=><div style={{boxShadow:'5px -4px 6px -10px grey'}} backgroundColor ='yellow'>
                      <h1>Hotle Menu</h1>
                      <div style={{display:'flex',justifyContent:'space-evenly'}}>
                     <h2><NavLink exact to='/dosa'>Dosa</NavLink></h2>
                     <h2><NavLink exact to='/idly'>Idly</NavLink></h2>
                     <h2>
                     <NavLink exact to='/vada'>vada</NavLink>
                     </h2>
                     </div>
                     </div>}/>
                    <Route exact path='/dosa' component={Dosa}/>
                    <Route exact path='/idly' component={Idly}/>
                    <Route exact path='/vada' component={Vada}/>
                  </Switch>
                  </div>
              </div>
            )
          }
}

export default App;
