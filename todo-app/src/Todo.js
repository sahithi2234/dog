import React,{Component} from 'react';
import NewTodoForm from './NewTodoForm';

class Todo extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            edit:false,
            newTodo:""
        };
        this.handleEdit=this.handleEdit.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleEdit()
    {
        
       this.setState({edit:true});
       
    }
    handleSubmit(evt)
    {
        evt.preventDefault();
        
        this.props.additem(this.state.newTodo);
        
        this.setState({edit:false});
    }
    handleChange(evt)
    {
       
        this.setState({newTodo:evt.target.value})
    }
    render()
    {
        if(!this.state.edit)
        {
        return(
           
            
        <div >
             <h1>{this.props.todo}</h1>
             <button onClick={this.handleEdit}>edit</button>
             <button onClick={()=>(this.props.removeitem(this.props.todo))}>X</button>
        </div>
        
       )
        }
        else
        {
            return(
                <form onSubmit={this.handleSubmit}>
                    <input name="todo" value={this.state.newtodo} onChange={this.handleChange}/>
                    <button onClick={()=>(this.props.removeitem(this.props.todo))}>ok</button>
                </form>
            )
        }
        
            
    }
}
export default Todo;