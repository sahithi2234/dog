import React,{Component} from 'react';
import './LotteryNum.css';
class LotteryNum extends Component{
    render()
    {
        return(
            <div className="LotteryNum">
                {this.props.numName}  </div>
        )
    }
}
export default LotteryNum;