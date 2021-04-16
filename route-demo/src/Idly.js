import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';

class Idly extends Component{
    render()
    {
        return(
            <div >
                 <h1>Idly.......</h1>
                 <NavLink to='/'>go back</NavLink>
            </div>
        )
    }
}

export default Idly;