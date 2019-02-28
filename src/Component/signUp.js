import React, { Component } from 'react';
import {Link} from 'react-router';

export default class SignUp extends Component {
    state = {
        userId:'',
        firstName: '',
        userName:'',
        email:'',
        password:''
    }
    
      handleChange = event => {
        this.setState({ 
          [event.target.name]: event.target.value });  
    }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            userId: this.state.userId,
          firstName: this.state.firstName,
          userName: this.state.userName,
          email: this.state.email,
        password:this.state.password
           };
           localStorage.setItem(user.userId, JSON.stringify(user));
           alert("Successfully SignUp");
        }
render() {

    return (

        <div>
            <h1>Fill the Details</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
            UserId: <br/>
            <input type="text" name="userId" onChange={this.handleChange} />
          </label><br/><br/>
          <label>
             Name:<br/>
            <input type="text" name="firstName" onChange={this.handleChange} />
          </label><br/><br/>
          <label>
            User Name: <br/>
            <input type="text" name="userName" onChange={this.handleChange} />
          </label><br/><br/>
          <label>
            Email:<br/>
            <input type="email" name="email" onChange={this.handleChange} />
          </label><br/><br/>
          <label>
            Password:<br/>
            <input type="password" name="password" onChange={this.handleChange} />
          </label><br/><br/>

          <button type="submit">Add</button><br/><br/>
          <Link to={"/login"}><input type="button" value="GO To Login"/></Link>
        </form>
        </div>
    )
}

}