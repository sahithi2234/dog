import React,{Component} from 'react';
import './Joke.css';
import sad from './sad.png';
import blush from './blush.png';
import smile from './smile.png';
import angry from './angry.png';
class Joke extends Component{
    render(){
        let x;
        if(this.props.votes>=0 && this.props.votes<=3)
        {
            x=smile;
        }
        else if(this.props.votes>3)
        {
            x=blush;
        }
        else if(this.props.votes<0 && this.props.votes>=-2)
        {
            x=sad;
        }
        else if(this.props.votes<-2 )
        {
            x=angry;
        }
        return(
             <div className='SJoke'>
                 <button style={{border:'none',backgroundColor:'pink'}} onClick={()=>(this.props.incVotes(this.props.joke))}><img style={{height:'20px',width:'20px'}}src='https://i.redd.it/riz0wr1901n01.png'/></button>
                 <button style={{borderRadius:'50px',padding:'10px'}}>{this.props.votes}</button>
                 <button style={{border:'none',backgroundColor:'pink'}} onClick={()=>(this.props.decVotes(this.props.joke))}><img style={{height:'20px',width:'20px'}}src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a982ed2-e424-482a-b256-7817a545a638/d4iji5f-330ae548-e010-41aa-ab50-89af688c7a29.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8yYTk4MmVkMi1lNDI0LTQ4MmEtYjI1Ni03ODE3YTU0NWE2MzgvZDRpamk1Zi0zMzBhZTU0OC1lMDEwLTQxYWEtYWI1MC04OWFmNjg4YzdhMjkucG5nIn1dXX0.dv2Lnaz_rtAOfXt4ZQIljMfgAxes4d_AZHFKtNriC-4'/></button>
                 <p>{this.props.joke}</p>
                 <img style={{height:'40px',width:'40px',position:'relative',right:'5px'}}src={x}/>
             </div>
        );
    }
}

export default Joke;