import React,{Component} from 'react';
import Dice from './Dice.js';
import './Rolldice.css';
class Rolldice extends Component{
    static defaultProps={
        nums:['one','two','three','four','five','six']
    };
    constructor(props)
    {
        super(props);
        this.state={
            die1:'one',
            die2:'two',
            rolling:false
        }
        this.roll=this.roll.bind(this);
    }
    roll()
    {
        let s1= this.props.nums[Math.floor(Math.random()*6)];
        let s2= this.props.nums[Math.floor(Math.random()*6)];
        this.setState({die1:s1,die2:s2,rolling:true});
        setTimeout(()=>(
              this.setState({rolling:false})
        ),3000);
    }
    render()
    {
        return(
           <div className='Rolldice'>
               <div className='DS'>
               <Dice icon={this.state.die1} st={this.state.rolling}/>
               <Dice icon={this.state.die2} st={this.state.rolling}/>
               </div>
           
               <button  onClick={this.roll} disabled={this.state.rolling?'true':''}>
                   {this.state.rolling ?'Roling...':'Rolled' }
               </button>
            </div>
        )
    }
}
export default Rolldice;