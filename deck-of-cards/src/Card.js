import React,{Component} from 'react';
import './Card.css'
class Card extends Component{
    constructor(props)
    {
        super(props);
        let x=(Math.random()*40)-20;
        let y=(Math.random()*40)-20;
        let angle=Math.random()*90-45;
        this._tranform=`translate(${x}px,${y}px) rotate(${angle}deg)`
    }
    render()
    {
        return(<div style={{transform:this._tranform}} className='Card'>
            <img src={this.props.image} alt={this.props.name}></img>
        </div>);
    }
}
export default Card;