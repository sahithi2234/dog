import React,{Component} from 'react';

class State1 extends Component{
    constructor(props)
    {
        super(props);
        this.state={
           
            num:0
        }
        this.func=this.func.bind(this)
    }
    func()
    {
        let x=Math.floor(Math.random()*10);
        
        this.setState({num:x});
    }
    render()
    {
        let b=this.state.num;
        let c= (b===7);
        return(
            <div>
                <h1>number is {b} </h1>
                {b===7
                ?<h1>u win!!</h1>
                :<button onClick= {this.func} >
                       hello
                </button>
                }
            </div>
        )
    }
}

export default State1;