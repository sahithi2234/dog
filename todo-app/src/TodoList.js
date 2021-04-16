import React,{Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
class TodoList extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            todo:[]
        };
        this.additem=this.additem.bind(this);
        this.removeitem=this.removeitem.bind(this);
        
    }
    additem(item)
    {
        this.setState({todo:[...this.state.todo,item]});
    }
    removeitem(item)
    {
        this.setState({todo:this.state.todo.filter((a)=>(a!==item))});
    }
   
   
    render()
    {
        return(
            <div>
                 <NewTodoForm additem={this.additem}  place="type"/>
                {this.state.todo.map((a)=>(<Todo todo={a} removeitem={this.removeitem}  additem={this.additem} />))}
                
            </div>
        )
    }
}
export default TodoList;