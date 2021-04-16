import React,{Component} from 'react';

class NewBoxForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            height:0,width:0,color:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(evt)
    {
        this.setState(()=>({[evt.target.name]:evt.target.value}));
    }
    handleSubmit(evt)
    {
        evt.preventDefault();
        this.props.additem(this.state);
        this.setState({height:0,width:0,color:""});
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Height<input name="height" value={this.state.height} onChange={this.handleChange}/>
                    Width<input name="width" value={this.state.width} onChange={this.handleChange}/>
                    Color<input name="color" value={this.state.color} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default NewBoxForm;