import React,{Component} from 'react';

class NewTodoForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            todo:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(evt)
    {
        this.setState({todo:evt.target.value});
    }
    handleSubmit(evt)
    {
        evt.preventDefault();
        this.props.additem(this.state.todo);
        this.setState({todo:""});
    }
    render()
    {
           return(
               <div>
                   <form onSubmit={this.handleSubmit}>
                       <input name="todo" value={this.state.todo} onChange={this.handleChange} placeholder={this.props.place}/>
                       <button>add</button>
                   </form>
               </div>
           )
    }
}
export default NewTodoForm;