import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './Home.css';

import books from './book4.gif';
import teach from './teach.gif';

import logo from './logo.png';
import {Spring} from 'react-spring/renderprops'
import Helper from './Helper';

class Home extends Component{
  static  defaultProps= {
    helper: [
      {
        name: "Whiskey",
        age: 5,
       src: logo,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
       src: logo,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      
      {
        name: "Tubby",
        age: 4,
        src: logo,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render()
  {
     


    return(<div className='home'>
            <Spring from={{opacity:0}} to={{opacity:1}} config={{delay:500,duration:700}} >
              
              {(props)=>(
              <div style={props}>
                <div className='jumbotron home-top row' style={c1}>
                
                  <div className='col-md-12'><h1 >We dont provide tuitions.
                      <br/>We provide Help!</h1>
                      
                      
                  </div>
                  <div className='col-md-12 a'><h5>Many students dont need a teacher but a Friend who can help in understanding subject.</h5>
                          <h5> And that is what we Offer.</h5>
                           <h5>USERIES is a platform where you can find students to help U in studying anything and everything.</h5>
                           <NavLink className='nav-item' style={{padding:'20px'}} exact to='/find'><button className='btn btn-info x' style={{backgroundColor:'#EDB518',color:'black',fontWeight:'bold',fontSize:'25px'}}>Find a Helper</button></NavLink> 
                           
                                    </div>
                  <div className='col-md-12'>
                     <img style={im} src={books} ></img>
                     
               </div>
               
                 
                  
                </div>
              </div>)}
            </Spring>
         

          <div className='home-middle row 'style={c2 } >
              
               
               <div className='col-md-6'>
                     <img style={tch} src={teach} ></img>
               </div>
               <div className='home-middle-text col-md-4'>
              <h1>Here is how it works</h1>
              
              <ul >
              <hr></hr>
                  <li><i class="fa fa-search"></i>  You search for a helper</li>
                  <hr></hr>
                  <li><i class="glyphicon glyphicon-envelope"></i> Message them</li>
                  <hr></hr>
                  <li><i class="material-icons">computer</i> Book a session</li>
                  <hr></hr>
                  <li><i class="material-icons">attachment</i> revise notes</li>
                  <hr></hr>
              </ul>
              
              </div>
          </div>



        <div className='home-middle-2 c1 jumbotron' style={v}>
           <h1 >Meet some of our best Helpers</h1>     
        <Helper helper={this.props.helper}></Helper>

        </div>

      <div className='jumbotron' style={c2}>
             <h1>Interested in becoming a Helper?</h1>
             <h2>Register Now !!</h2>
             <NavLink className='nav-item' style={{padding:'20px'}} exact to='/becomeHelper'><button className='btn btn-info x' style={{backgroundColor:'#EDB518',color:'black',fontWeight:'bold',fontSize:'25px'}}>Register</button>
</NavLink>
             
      </div>

      <div className='home-low jumbotron row ' style={foot}>
        <div className='col-md-1'></div>
             <div className='col-md-2 '>
               <h2>Useries</h2>
              <p>Working towards providing the help U need.</p>
             </div>
             <div className='col-md-2 low'>
             
             <h3>Student</h3>
              <ul>
              
                <li>
                  Register
                </li>
                <li>Find a tutor</li>
              </ul>
             </div>
             <div className='col-md-2 low'>
              <h3>Helper</h3>
              <ul>
                <li>Register</li>
                <li>Login</li>
                <li>Connect</li>
              </ul>
             </div>
             <div className='col-md-2 low'>
               <h3>Subjects</h3>
               <ul>
                 <li>Physics</li>
                 <li>Maths-1</li>
                 <li>Maths-2</li>
               </ul>
             </div>
            
             <div className='col-md-2 low'>
             <h3>Contact Us </h3>
                <ul>
           
                  <li>
                    Facebook
                  </li>
                  <li>
                    Linked In
                  </li>
                  <li>
                    Instagram
                  </li>
                </ul>
             </div>

             

      </div>
      <hr style={hr}></hr>
      <div class=" text-center p-5 jumbotron fotter " >
    © 2020 Copyright:
    <a class="text-dark" href="#">Useries</a>
  </div>
     
    </div>)
  }
}
const foot={
  margin:'0',
  fontSize:'60px'
}
const hr={
  margin:'1px',
  
}
const v={
  backgroundColor:'#EDB518',
  color: '#66292c'
}
const c1={
  backgroundColor:'#66292c',
  margin:0
}
const im={
  borderRadius:'300px',
  height:'400px',
  width:'400px'

}
const tch={
    height:'100%',
    width: '100%'
}
const c2={
  backgroundColor:'white',
  textAlign:'center',
   placeItems:'center',
   margin:'0',
   padding:'50px'
}

export default withRouter(Home);