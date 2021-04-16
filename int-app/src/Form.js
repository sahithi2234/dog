import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

class Form extends Component{
    
    static defaultProps={
         days:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        
    };
   
    constructor(props)
    {
        super(props);
        this.state={
            date:"",
            repeat:"None",
            stime:"",
            etime:"",
            days:[false,false,false,false,false,false,false],
            weekdays:false

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSTime=this.handleSTime.bind(this);
        this.handleETime=this.handleETime.bind(this);
        this.handleDays=this.handleDays.bind(this);
        this.handleWeekday=this.handleWeekday.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
  
    handleChange(evt)
    {
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleSTime(evt)
    {
        console.log(evt.target.value.split(":"));
        var time=evt.target.value.split(":");
        var hour =parseInt(time[0]);
        var mins= parseInt(time[1]);
        if((hour<5 || hour>9)||(hour==9 && mins>0 ))
        {
            alert("start timing can only be between 5am to 9am!");
            this.setState({stime:""});
        }
        else
        {
            this.setState({[evt.target.name]:evt.target.value});
        }
    }
    handleETime(evt)
    {
        console.log(evt.target.value.split(":"));
        var time=evt.target.value.split(":");
        var hour =parseInt(time[0]);
        var mins= parseInt(time[1]);
        var sttime=this.state.stime.split(":");
        var shour=parseInt(sttime[0]);
        var smins =parseInt(sttime[1]);
        console.log(shour+" "+hour);
        if((hour<=shour ||  hour>9) ||(hour==9 && mins>0 )  )
        {
            alert("");
            this.setState({etime:"Enter valid ending time of the shift"});
        }
        else
        {
            this.setState({etime:evt.target.value});
        }
    }
    handleDays(evt)
    {
        var a=evt.target.name;
        var res=evt.target.checked;
        var b=[...this.props.days];
        var ind=0;
        for(var d in b)
        {
            
               if(a===b[d])
               {
                  if(d==5 || d==6)
                  {
                      if(this.state.weekdays)
                      {
                          b[d]=false;
                      }
                      else
                      {
                        b[d]=res;
                      }
                  }
                  else
                  {
                  b[d]=res;
                  }
                  
               }
               else
               {
                   b[d]=this.state.days[d];
               }
        }
        this.setState({days:[...b]});

    }
    handleWeekday(evt)
    {
            this.setState({weekdays:evt.target.checked});
            var d=[...this.state.days];
            if(evt.target.checked===true)
            {
                d[6]=false;
                d[5]=false;
            }
            this.setState({days:[...d]});
           
    }
    handleSubmit(evt)
    {
         evt.preventDefault();
         

    }
   
  render()
  {
      
    
   
   
    var mydate = new Date();
    var curr_date = mydate.getDate();
    var curr_month = mydate.getMonth()+1;
    var curr_year = mydate.getFullYear();
    var today_date;
    if(curr_month<10)
    {
        today_date=curr_year+"-0"+curr_month
    }
    else
    {
        today_date=curr_year+"-"+curr_month
    }
    if(curr_date<10)
    {
        today_date=today_date+"-0"+curr_date;
    }
    else
    {
        today_date=today_date+"-"+curr_date;
    }
    return(

      <div >
          
         <div className='jumbotron text-center'>
         <h1>FORM</h1>
         <hr></hr>
         <form onSubmit={(evt)=>this.handleSubmit(evt)}>
         <label htmlFor="start">Start date :  </label>
         <input type="date" id="start" 
            name="date"
            value={this.state.date}
            min={today_date} max="2021-12-31" onChange={(evt)=>(this.handleChange(evt))} />
         <br></br>
          <hr/>
         <label htmlFor="repeat-type">Select Repeat Type  : </label>
          <select id='repeat-type' name="repeat" value={this.state.repeat} onChange={(evt)=>this.handleChange(evt)}>
                    <option value="None">None</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
          </select>
          <hr/>
          <label htmlFor='shift'>Select Shift  :  </label>
          <select id="shift" name="shift" >
              <option value='Morning Shift - 5am to 9am'>Morning Shift - 5am to 9am </option>
          </select>
          <hr/>
          
          <label htmlFor="stime">Select Start Time  : </label>
                <input type="time" 
                        id="stime"
                        name="stime"
                        
                        value={this.state.stime} onChange={(evt)=>this.handleSTime(evt)} />
                        <small>Shift hours are 5am to 9am</small>
          <hr/>
          
          <label htmlFor="etime">Select End Time  :</label>
                <input type="time" 
                        id="etime"
                        name="etime"
                       
                        value={this.state.etime} onChange={(evt)=>this.handleETime(evt)} />
                        <small>Shift hours are 5am to 9am</small>
        <hr></hr>

        <div className='row text-right'>
            <div className='col-md-3'>Days of Shifts   :  </div>          
        {this.props.days.map((x)=><div className='col-md-1'><input type="checkbox" id={x} name={x} checked={this.state.days[this.props.days.findIndex((a)=>(x===a))]} onChange={(evt)=>this.handleDays(evt)}
          />
          <label htmlFor={x} >{"  "+x}</label></div>)}  
          </div>
        <hr/>

        <label id='weekdays'>Only weekdays :</label>
        <input htmlFor='weekdays'type="checkbox" name='weekdays' id='weekdays' checked={this.state.weekdays} onChange={(evt)=>this.handleWeekday(evt)}/>
        <hr/>
        

         
        <Link style={{padding:'20px'}} exact to={{pathname:'/shift',state:this.state}}><button  style={{backgroundColor:'#EDB518',color:'black',fontWeight:'bold',fontSize:'25px'}}>Add+</button>
</Link>
          
         </form>
</div>
         


      </div>
    )
  }
}

export default withRouter(Form);
