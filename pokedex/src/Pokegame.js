import React,{Component} from 'react';
import arr from './Arr';
import Pokedex from './Pokedex';
 class Pokegame extends Component{
     render()
     {
         let hand1=[];
         let hand2=[0,1,2,3,4,5,6,7];
         
         while(hand1.length<hand2.length)
         {
             let randI=Math.floor(Math.random()*hand2.length);
             let x1=hand2.splice(randI,1)[0];
             hand1.push(x1);
         }
         let exp1= hand1.reduce(getSum,0);
         let exp2 =hand2.reduce(getSum,0);
         function getSum(total, num) {
            return total + arr[num].base_experience;
          }
         let m= exp1>exp2;
         let m1=exp2>exp1;
         return(
             <div>
                <Pokedex h={hand1} isWin={m} />
                <Pokedex h={hand2} isWin={m1}/>
             </div>
         );
     }
 }
 export default Pokegame;