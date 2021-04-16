import logo from './logo.svg';
import './App.css';
import Card from './Card';
import axios from 'axios';
import React,{Component} from 'react';
let Base_URL="https://deckofcardsapi.com/api/deck/"
class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={deck:null,drawn:[]} ;
    this.getCard=this.getCard.bind(this);
  }
  async componentDidMount(){
    
      let d=await axios.get(`${Base_URL}new/shuffle/?deck_count=1`);
      this.setState({deck:d.data});
  }
  async getCard()
  {
    let x=this.state.deck.deck_id;
    
    try{
      let f= await axios.get(`${Base_URL}${x}/draw/?count=1`)
     if(!f.data.success)
     {
       throw new Error("No cards remaining");
     }
   let card=f.data.cards[0];
   this.setState(st=>({drawn:[...st.drawn,{
     id:card.code,
     image:card.image,
     name:`${card.value} of ${card.suit}`
   }]}))
    }catch(err){
      alert(err);
    }
  }
  render()
  {
    return(
      
        <div  className='App'>
        <h1>◈ Card dealer ◈</h1>
        <h3>	◇ A Little Demo Made with React ◇</h3>
       
        
        {this.state.drawn.map((a)=>(<Card key={a.id} image={a.image} name={a.name}/>))}
        <button onClick={this.getCard}>Deal Me  A Card</button>
      </div>
    )
  }
}

export default App;
