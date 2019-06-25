import React, { Component } from 'react';

class Form extends Component {
    constructor(props) { 
    super(props); 
    this.state={
        name:'',
        city:'',
        email:'',
        phnum:''
    }
}

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}

handleClick=(e)=>{
    const reqobj={
        name: this.state.name,
        city: this.state.city,
        email: this.state.email,
        phnum: this.state.phnum
    }
    console.log(reqobj);
  }

render() {
    return (
        <div>
        <form>
            <label>Name</label><br></br>
            <input type='text' name='name' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <label>City</label><br></br>
            <input type='text' name='city' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <label>Email</label><br></br>
            <input type='text' name='email' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <label>Phone Number</label><br></br>
            <input type='text' name='phnum' onChange={this.handleChange} value={this.state.value}></input><br></br>
            <input type='button' onClick={this.handleClick} value='submit'></input>
        </form>
        </div>
    );
}
}

export default Form;