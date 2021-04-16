import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';

class Data extends Component{
    static defaultProps={
        da:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
   };
    render()
    {
        var d=this.props.days;
        var b=[];
        var c=0;
        for(var f=0;f<d.length;f++ )
        {
             if(d[f]===true)
             {
                  b[c]=this.props.da[f];
                  c++;
             }
        }
        return(
            <div>
                <div>
                    <h1>Your Shifts</h1>
                    <h4>Date:{this.props.date}</h4>
                    <h4>Repeat:{this.props.repeat}</h4>
                    <h4>Start and End timings:{this.props.stime} - {this.props.etime}</h4>
                    {b.map((x)=><h4>{x}</h4>)}
                    
                </div>
            </div>
        )
    }

}
export default Data;