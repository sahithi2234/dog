import Pokecard from "./Pokecard";
import React,{Component} from 'react';
import arr from './Arr';
import './Pokedex.css';
class Pokedex extends Component{
    render(){
      const {h,isWin}=this.props;
        return(
            <div className='Pokedex'>
                <h1>POKEDEX</h1>
                <div className='Pokedex-cards'>
                   <h2>{isWin===true?`Winner`:`LOser`}</h2>
                   {h.map(x=> <Pokecard i={x}/>)}
            </div>
            </div>
        );
    }
}
export default Pokedex;
export {arr};