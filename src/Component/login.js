import React, { Component } from 'react';

export default class Login extends Component {
    state = { 
        userId:'',
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
         password:this.state.password
        };
        var  info= localStorage.getItem(user.userId);
          info = JSON.parse(info);
          if(user.userId === info.userId && user.password === info.password) {
              localStorage.setItem("currentuser",user.userId);
           window.location.href = '/dashboard';
        
        }
        
}

    render() {
        return (
            <div>
                <h1>Welcome to Login Page</h1><br/><br/>
                <form onSubmit={this.handleSubmit}>
            <label>
            User Id: <br/><br/>
            <input type="text" name="userId" onChange={this.handleChange} />
          </label><br/><br/>
          <label>
             Password: <br/><br/>
            <input type="password" name="password" onChange={this.handleChange} />
          </label><br/><br/>
          <button type="submit">Login</button>
          </form>

            </div>
        )
    }
    }