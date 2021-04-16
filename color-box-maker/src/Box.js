import React,{Component} from 'react';
class Box extends Component{
   constructor(props)
   {
       super(props);
       this.handleClick=this.handleClick.bind(this);
   }
   handleClick()
   {
        this.props.removeitem(this.props);
   }
    render()
    {
        const {h,w,c}=this.props;
        
    return(
        <div>
        <div style={{height:`${h}px`,backgroundColor:c,width:`${w}px` }}  >
            
        </div>
        <button onClick={this.handleClick}>Remove block</button>
        </div>
       );
    }
}

export default Box;