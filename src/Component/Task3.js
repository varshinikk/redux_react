import React, { Component } from 'react';
import './Task3.css'
import {connect} from 'react-redux';
import {handleClick} from '../Actions/Task3Action';

class Task3 extends Component{
  render(){
    return(
        <div className="div1"> 
        <form>
            <label className="l1">Username</label>
            <input className="i1" type='text'></input><br></br>
            <label className="l2">Password</label>
            <input className="i2" type='text'></input><br></br>
        </form><br></br>
        <button className="b1" onClick={this.props.handleClick}>Submit</button>
        <h4 className="m1">{this.props.message}</h4>
        </div>
      );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.Task3Reducer;
    const{password}=state.Task3Reducer;
    const{message}=state.Task3Reducer;
    return{name,password,message};
};
export default connect(mapStateToProps,{handleClick})(Task3);