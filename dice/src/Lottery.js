
import React,{Component} from 'react';
import LotteryNum from './LotteryNum';
class Lottery extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            num:Array.from({length:this.props.numSize})
        };
        this.lot=this.lot.bind(this);
    }
    lot()
    {
      
          
          //not so correct way to do it
          //this.setState({num:this.state.num.map(()=>(Math.floor(Math.random() * this.props.maxNum) + 1))});

         //correct way to do it
        this.setState(curState =>({num:curState.num.map((c)=> Math.floor(Math.random()*this.props.maxNum )+1)}));

         
    }
    render()
    {
        
        //console.log(numbers);
        return(
            <div style={{textAlign:"center",border:"2px solid black",margin:"100px 500px 100px 500px",padding:"20px"}}>
                <h1>{this.props.name}</h1>
               {this.state.num.map((x)=>(<LotteryNum numName={x}/>))}
             <div>
             <button style={{color:"white",backgroundColor:"grey",borderRadius:"10%",width:"90px",height:"50px",boxShadow:"10px 7px 5px 9px lightgrey"}} onClick={this.lot}>generate</button>
             </div>
            </div>

        )
    }
}
export default Lottery;