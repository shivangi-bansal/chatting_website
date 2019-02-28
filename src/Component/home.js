import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component{
    render(){
        return(
            <div>
            <h1>WELCOME TO OUR CHATTING WEBSITE</h1>
            <Link to={"/login"}><input type="button" value="Login"/></Link><br/><br/><br/>
            <label>New User:
        <h3> <Link to={"/sign"}>Sign Up here</Link></h3> </label>
</div>

        )
    }
}