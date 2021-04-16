import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
class Navbar extends Component{
    
    render()
    {
        
        return(
            <div >
               
            <nav className='navbar navbar-expand-lg navbar-light ' style={{color:'lightblue'}} >
                
                <NavLink className="navbar-brand" to="/">Useries</NavLink>
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
                </div>
                </div>
           </nav>
            </div>
        )
    }
}
export default withRouter(Navbar);