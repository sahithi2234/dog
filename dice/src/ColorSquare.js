import React,{Component} from 'react';
import {colors} from './ColorBar';

class ColorSquare extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            colr:this.props.color
        } 
        this.changeColor=this.changeColor.bind(this);
    }
    changeColor()
    {
          let x= colors[Math.floor(Math.random()*colors.length)];
          this.setState({colr:x});
        console.log(x);
    }
    render()
    {
        return(
            
            <div onClick={this.changeColor} style={{backgroundColor:this.state.colr,width:"374px",height:"198px"}}/>
                                   
         
        )
    }
}
export default ColorSquare;