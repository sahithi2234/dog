import React,{Component} from 'react';
import './Dice.css';
class Dice extends Component{
    render()
    {
        let x=this.props.icon;
        let y=this.props.st;
        let c;
        if(y)
        {
            c='';
        }
        else
        {
          
            c='di';
        }
        return(
            <div>
                <i className={`d fas fa-dice-${x} ${c}`}></i>
            </div>
        )
    }
}
export default Dice;