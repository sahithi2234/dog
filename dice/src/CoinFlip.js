import React,{Component} from 'react';
import Coin from './Coin';
class CoinFlip extends Component{
    constructor(props)
    {
        super(props);
        this.state={
              head:0,
              tail:0,
              coin:""
        }
        this.flip=this.flip.bind(this);
    }
    flip()
    {
        let d=Math.floor(Math.random()*2)+1;
        //console.log(d);
        if(d===1)
        {
            this.setState((st)=>{return{head:st.head+1}});
            this.setState(()=>{return{coin:"head"}});
        }
        if(d===2)
        {
           // console.log("hi")
            this.setState((st)=>{return{tail:st.tail+1}});
            this.setState(()=>{return{coin:"tail"}});
        }
    }
    render()
    {
        return(
            <div>
               <h1>Lets Flip a Coin!</h1>
               <Coin top={this.state.coin}/>
               <button onClick={this.flip}>Flip Me</button>
               <p>the count of head is {this.state.head}  and tail count is {this.state.tail}</p>

            </div>
        );
    }
}
export default CoinFlip;