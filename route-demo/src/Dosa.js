import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
class Dosa extends Component{
    render()
    {
        return(
            <div>
                <h1>Dosa.......</h1>
                <NavLink to='/'>go back</NavLink>
            </div>
        )
    }
}
export default Dosa;