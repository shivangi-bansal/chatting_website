import React, { Component } from 'react';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
           Details: "",
          
        }
       
        
    }

    componentDidMount() {
        var values = localStorage.getItem("currentuser");
        let Details = localStorage.getItem(values);
        Details = JSON.parse(Details);
        this.setState({ Details });
    }
    sendMessage = event => {
        window.location.href = '/message';
       
         }
    Logout = event => {
        window.location.href = '/home';
        localStorage.removeItem("currentuser");
        localStorage.removeItem("receiver");
    
    }


   

    render() {
        // Sat current state to local storage
       
        return (
          
            <div>
               
                <h1>Hello {this.state.Details.firstName} !! </h1>
                <h2>Your Details :</h2><br />
                <center>
                    <table border="2">
                        <tr>
                            <th>  Name :</th>
                            <td> {this.state.Details.firstName} </td>
                        </tr>
                        <tr>
                            <th> Email : </th> 
                            <td>{this.state.Details.email} </td>
                        </tr>
                        <tr>
                            <th> User ID : </th><td>{this.state.Details.userId} </td>
                        </tr>
                        <tr>
                            <th> User NAme :</th><td> {this.state.Details.userName} </td>
                        </tr>
                        
                    </table>
                    <br />
                    <input type="button" value="Send New Message" onClick={this.sendMessage} /> <br/>
                    <br/>
                    <input type="button" value="LOGout" onClick={this.Logout} /><br/>
                    <br/>
                    <p>{this.state.Details.messages}</p>

                </center>
            </div>
        );
    }
}
export default Dashboard;