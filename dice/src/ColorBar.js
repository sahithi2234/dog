import React,{Component} from 'react';
import ColorSquare from './ColorSquare';
let  colors=["red","yellow","green","orange","pink","blue","grey","aqua","lightred","lightpink","lightgreen","black","voilet","purple","brown","indigo"];
class ColorBar extends Component{
    
       
    render()
    {
       
   
  
        return(
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
               {colors.map((x)=><ColorSquare color={x} />)}
               
            </div>
        );
    }
}
export default ColorBar;
export {colors};