import React,{Component} from 'react';
import logo from './logo.png';
class Helper extends Component{
    render()
    {
       console.log("hi");
        return(
          
            <div className='row'>   
            {this.props.helper.map((x)=><div className='card' style={{width: "30rem",margin:'20px auto auto auto',boxShadow:'9px -6px 30px -8px',textAlign:'left'}} >
                 <img className="card-img-top" src={logo} alt="Card image cap"></img>
                 <div className="card-body">
               <h3 className='card-title'>{x.name}</h3>
               <p className='card-text'>Age:{x.age}</p>
               </div>
               <ul className="list-group list-group-flush">{x.facts.map((d)=>(<li className="list-group-item">{d}</li>))}</ul>
               </div>)}
            
           
               </div> 
            
        )
    }
}
export default Helper;