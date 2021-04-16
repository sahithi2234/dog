import React,{Component} from 'react';
import logo from './logo.png';
import './Navbar.css';
import {Spring} from 'react-spring/renderprops';
import {NavLink,withRouter} from 'react-router-dom';
class Navbar extends Component{
    
    render()
    {
        
        return(
            <div>
            <Spring from={{opacity:0,marginTop:-500}} to={{opacity:1,marginTop:0}}>{props=>(<div style={props}>
            
               
               <nav className='navbar navbar-expand-lg navbar-light '  >
                   
                   <NavLink className="navbar-brand logo" style={{  color:'#EDB518'}} to="/"><span >U</span>series</NavLink>
                   <button 
                   className='navbar-toggler bg-light' 
                   type='button' data-toggle='collapse' 
                   data-target='#navbarNav' 
                   aria-controls='navbarNav'
                    aria-expanded='false' 
                    aria-label='Togle navigation'
                    >
                        <span className='navbar-toggler-icon '/>
                        
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                    <div className='navbar-nav'>
                    <NavLink className='nav-item' style={{padding:'20px'}} exact to='/find'>Find a Helper</NavLink>
                    <NavLink className='nav-item' style={{padding:'20px'}} exact to='/becomeHelper'>Register as Helper</NavLink>
                    <NavLink className='nav-item' style={{padding:'20px'}} exact to='/about'>About Useries</NavLink>
                    <NavLink className='nav-item' style={{padding:'20px'}} exact to='/login'>Login</NavLink>
                    
                   </div>
                   </div>
              </nav>
             


            </div>)}

            </Spring>
           </div>
            
        )
    }
}
export default withRouter(Navbar);