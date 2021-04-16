import React,{Component} from 'react';
import arr from './Arr';
import './Pokecard.css';
class Pokecard extends Component{
    render()
    {
        const {i}=this.props;
        let x;
        if(arr[i].id<=999)
        {
            x='00'+arr[i].id;
            x= x.slice(-3);
        }
        else
        {
            x=arr[i].id;
        }
        return(
            <div className="Pokecard-img" >
                    <h3 > {arr[`${i}`].name}</h3>
                    <img  alt="hi" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${x}.png`} />
                    <h4>{arr[`${i}`].type}</h4>
                    <h4>{arr[`${i}`].base_experience}</h4>
            </div>
        );
    }
}
 export default Pokecard;