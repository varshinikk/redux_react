import React, { Component } from 'react';
import { connect } from 'react-redux';
class Addition extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.num1}</h1>
               <button onClick={this.props.onUpdateA}>Update A</button>
               <h1>{this.props.num2}</h1>
               <button onClick={this.props.onUpdateB}>Update B</button>
               <h1>{this.props.num3}</h1>
               <button onClick={this.props.onUpdateC}>Update C</button>
               <h1>{this.props.num4}</h1>
               <button onClick={this.props.onUpdateD}>Update D</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>
{
    return {
        num1:state.num1,
        num2:state.num2,
        num3:state.num3,
        num4:state.num4
    };
}; 
const mapDispatchToProps=(dispatch)=>
{

    return {
    onUpdateA:()=>dispatch({type:'UPDATE_A'}),
    onUpdateB:()=>dispatch({type:'UPDATE_B'}),
    onUpdateC:()=>dispatch({type:'UPDATE_C'}),
    onUpdateD:()=>dispatch({type:'UPDATE_D'})
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Addition);