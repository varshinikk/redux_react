import React, {Component} from "react";
import {connect} from "react-redux";

class Example2 extends Component{
  render(){
    return(
    <div>
      <div>
        <span>using redux</span>
        <br/>
        your age: <span>{this.props.age}</span>
      </div>
      <button onClick={this.props.onAgeUp}>Age Up</button>
    </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return{
    age :state.age
  };
};

const mapDispatchToProps =(dispatch) => {
  return{
    onAgeUp: () => dispatch ({type: "AGE_UP", value :1})
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example2);