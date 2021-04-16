import React,{Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
class BoxList extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            items:[]
        };
        this.additem=this.additem.bind(this);
        this.removeitem=this.removeitem.bind(this);

    }
    additem(item)
    {
         this.setState((st)=>({items:[...st.items,item]}));
    }
    removeitem(item)
    {
        console.log(item);
        this.setState((st)=>({items:st.items.filter((x)=>((x.height!==item.h) && (x.weight!==item.w) && (x.color !==item.c)))}));
    }
    render()
    {
        return(
            <div>
               <NewBoxForm additem={this.additem}/>
               {this.state.items.map((st)=><Box removeitem={this.removeitem} h={st.height} w={st.width} c={st.color}/>)}
               
            </div>
        )
    }
}
 export default BoxList;