import React, { Component } from 'react'

class Demo extends Component {
    constructor(){
        super();
        this.state={
            clicks:0,
            dol:"$"
        }
    }
    increamentNo=()=>{
        this.setState({
            clicks:this.state.clicks+20
        })
    }
    decreamentNo=()=>{
        this.setState({
            clicks:this.state.clicks-10
        })
    }
    render(){
        return(
            <div className="Sbi">
                <div className="bank">
                <h1>Counter</h1>
                <h1>${this.state.clicks}</h1>
                <input type="button" value="Count $" onClick={this.increamentNo}/>&nbsp;&nbsp;
                <input type="button" value="Number   $" onClick={this.decreamentNo}/>
                </div>
                </div>
        )
    }
}
export default Demo