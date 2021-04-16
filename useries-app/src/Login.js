import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
class Login extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            username:"",
            password:"",
            vis:false
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleUser=this.handleUser.bind(this);
        this.handlePass=this.handlePass.bind(this);
        this.handlevis=this.handlevis.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        console.log(this.state.vis);
          if(this.state.username==="sahithi"  && this.state.password==="mynameiskhan")
          {

               this.setState({vis:true});
               
          }
          this.setState({username:""});
          this.setState({password:""});
          
         
    }
    handlevis()
    {
        this.setState({vis:false});
    }
    handleUser(evt)
    {
            this.handlevis();
            this.setState({username:evt.target.value});
    }
    handlePass(evt)
    {
        this.handlevis();
        this.setState({password:evt.target.value});
    }
    render()
    {
        
        return(
            
            <div >
                <h1 className='text-center'>Login</h1>
                <div className='text-center' style={formDiv}>
                <form onSubmit={(evt)=>{this.handleSubmit(evt)}}>
                    Username <input type="text" value={this.state.username} onChange={(evt)=>(this.handleUser(evt))}></input>
                    <br></br>
                     Password <input type="text" value={this.state.password}   onChange={(evt)=>(this.handlePass(evt))}></input>
                     <br></br>
                     <button type="submit" >Login</button>
                </form>
                 {(this.state.vis===true) && <div>Login Succesful</div>}
                 {(this.state.vis===false) && <div>Login pail SignUp instead? <br></br> </div>}
                 </div>   
            </div>
        )
    }
}
const formDiv={
    backgroundColor:'#66292c',
    placeItems:'center',
    color:'#EDB518'
}

export default withRouter(Login);