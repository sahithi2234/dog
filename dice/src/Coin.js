import React,{Component} from 'react';
class Coin extends Component{
    render()
    {
        const head="https://tinyurl.com/react-coin-heads-jpg";
        const tail="https://tinyurl.com/react-coin-tails-jpg";
        let l;
        if(this.props.top === 'head')
        {
            l=head;
        }
        else
        {
            l=tail;
        }
        console.log(l);
        return(
            <div>
                <img style={{width:"300px",height:"300px"}}src={l}></img>
            </div>
        )
    }
}
export default Coin;