import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
class Vada extends Component{
    render()
    {
        return(
            <div>
                 <h1>Vada.......</h1>
                 <NavLink to='/'>go back</NavLink>
            </div>
        )
    }
}
export default Vada;