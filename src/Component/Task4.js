import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleClick} from '../Actions/Task3Action';

class Task3 extends Component{
  render(){
      return(
          <div> 
            <label>Username</label>
            <input type='text'></input><br></br>
            <label>Age</label>
            <input type='text'></input><br></br>
            <label>City</label>
            <input type='text'></input><br></br>
            <label>Address</label>
            <input type='text'></input><br></br>
            <button onClick={this.props.handleClick}>Submit</button><br></br>
            <table>
                <tr>
                  <th>Username</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Address</th>
                </tr>
            </table>
          </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.Task4Reducer;
    const{age}=state.Task4Reducer;
    const{city}=state.Task4Reducer;
    const{address}=state.Task4Reducer;
    return{name,age,city,address};
};
export default connect(mapStateToProps,{handleClick})(Task3);