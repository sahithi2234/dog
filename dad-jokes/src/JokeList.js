import React,{Component} from 'react';
import axios from 'axios';
import './JokeList.css'
import Joke from './Joke';
class JokeList extends Component{
    static defaultProps={
        numstart:5
    }
    constructor(props)
    {
      super(props);
      this.state={
        jokes:JSON.parse(window.localStorage.getItem("jokes") || "[]"),
        loading:false,
      };
      this.incVotes=this.incVotes.bind(this);
      this.decVotes=this.decVotes.bind(this);
      this.handleClick=this.handleClick.bind(this);
    }
    async componentDidMount(){
     
      if(this.state.jokes.length===0)
      {
     let array=[]
     while(array.length<this.props.numstart)
     {
      let data=await axios.get("https://icanhazdadjoke.com/",{headers:{Accept:'application/json'}});
      array=[...array,{joke:data.data.joke,votes:0}];
      
     }
     
      this.setState({jokes:array});
      window.localStorage.setItem("jokes",JSON.stringify(array));
    }
    
    
    }
    incVotes(j)
    {
      let index=this.state.jokes.findIndex((a)=>(a.joke===j))
      let b=[...this.state.jokes];
      b[index]={...b[index],votes:b[index].votes+1}
      
       this.setState({ jokes: b });
       window.localStorage.setItem("jokes",JSON.stringify(b));

    }
    decVotes(j)
    {
      let index=this.state.jokes.findIndex((a)=>(a.joke===j))
      let b=[...this.state.jokes];
      b[index]={...b[index],votes:b[index].votes-1}
      
        
      
      this.setState({jokes:b})  ;
       window.localStorage.setItem("jokes",JSON.stringify(b));
    }
   async handleClick()
    {
      this.setState({loading:true});
      let array=[...this.state.jokes]
      let x=5;
      while(x>0)
      {
       let data=await axios.get("https://icanhazdadjoke.com/",{headers:{Accept:'application/json'}});
       array=[...array,{joke:data.data.joke,votes:0}];
       x=x-1;
      }
      
       this.setState((st)=>({jokes:array,loading:false}), window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes)));
    
     
    }
  
    render()
    {
        let isLoad=true;
        if(this.state.jokes.length!==0)
        {
             isLoad=false;
        }
        if(this.state.loading===false)
        {
        return(
            <div className='JokeList'>
                {isLoad===true?  <div>
            <h1 style={{margin:'auto',color:'white',position:'relative',top:'400px'}}>loading......</h1>
          </div>: 
              <div className='both'>
                  <div className='SideJoke'>
                       <h1 ><span>Dad </span> jokes</h1>
                       <img  src='https://toppng.com/uploads/thumbnail/emoji-transparent-laughing-emoji-115502346317ope1lrbhg.png' alt="hi"/>
                       <button onClick={this.handleClick}>New Jokes</button>
                    </div>
                      <div className='Joke'>
                          <div style={{flex:1}}>
                  {this.state.jokes.map((c)=>(<Joke joke={c.joke} votes={c.votes} incVotes={this.incVotes} decVotes={this.decVotes}/>))}
                           </div>
                     </div>
              </div>}
            </div>

        )
      }
      else
      {
        return(
          <div>
            <h1 style={{margin:'auto',color:'white',position:'relative',top:'400px'}}>loading......</h1>
          </div>
        )
      }
    }
}
export default JokeList;