import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onUpdateA,onUpdateB,onUpdateC,onUpdateD} from '../Actions/Task2Action';

class Add extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.num1}</h1>
               <button onClick={()=>this.props.onUpdateA(this.props.num3)}>Update A</button>
               <h1>{this.props.num2}</h1>
               <button onClick={()=>this.props.onUpdateB(this.props.num4)}>Update B</button>
               <h1>{this.props.num3}</h1>
               <button onClick={()=>this.props.onUpdateC(this.props.num1)}>Update C</button>
               <h1>{this.props.num4}</h1>
               <button onClick={()=>this.props.onUpdateD(this.props.num2)}>Update D</button>
            </div>
        );
    }
}
const mapStateToProps=(state) =>{
    const { num1 } =state.Task2Reducer;
    const { num2 } =state.Task2Reducer1;
    const { num3 } =state.Task2Reducer2;
    const { num4 } =state.Task2Reducer3;
    return {num1, num2, num3, num4};
}
export default connect (mapStateToProps,{onUpdateA,onUpdateB,onUpdateC,onUpdateD})(Add);