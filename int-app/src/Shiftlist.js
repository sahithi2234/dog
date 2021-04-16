import { Component } from "react";
import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import Data from './Data';

class Shiftlist extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            shifts:[]
             
        }

    }
    componentDidMount()
    {
        var x=this.props.location.state;
        this.setState({shifts:[{...x}]});
         

    }
   
    render()
    {
        
       
    
        return(

            <div >
                <div className='jumbotron text-center'>
               {this.state.shifts.map((x)=>(<Data date={x.date} repeat={x.repeat} stime={x.stime} etime={x.etime} days={x.days} />))}
               <Link style={{padding:'20px'}} exact to={{pathname:'/'}}><button  style={{backgroundColor:'#EDB518',color:'black',fontWeight:'bold',fontSize:'25px'}}>Add+</button>
</Link>
</div>
            </div>
        )
    }
}

 export  default withRouter(Shiftlist);