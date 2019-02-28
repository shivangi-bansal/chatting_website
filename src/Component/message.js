import React, { Component } from 'react';
export default class Message extends Component {

    constructor() {
        super();
        this.state = {
            keynames: [],
            valueSelected: "",
            showTextArea: false,
            sentMessage: "",
            c1values: "",
            c11values: "",
            c2values: "",
            sender: "",
            cr: ""
        }
        this.handleSelected = this.handleSelected.bind(this);
        this.sentMessage = this.sentMessage.bind(this);
    }

    handleSelected(e) {
        this.setState({
            valueSelected: e.target.value,
           
        });

        localStorage.setItem("receiver", e.target.value);
    }

    sentMessage(e) {
        var cu = localStorage.getItem("receiver");
        var senderkey = localStorage.getItem("currentuser");
        let c1values = JSON.parse(localStorage.getItem(senderkey));
        let c2values = JSON.parse(localStorage.getItem(cu));
        this.setState({ c1values });
        this.setState({ c2values });
        this.setState({ sender: c1values.firstName });
        this.setState({ sentMessage: e.target.value }, () => { console.log(this.state.sentMessage) });
    }



    componentDidMount() {
        var ud = localStorage.getItem("currentuser");
        
        
        var crntkey;
        let keyParam = [];
        for (var i = 0; i < localStorage.length; i++) {
            crntkey = localStorage.key(i);
            if (crntkey !== "currentuser" && (crntkey !== "receiver" && crntkey !== ud)) {
                keyParam.push(crntkey);
            }

        }
        this.setState({ keynames: keyParam });
    }

    submitt = () => {
        var cd = localStorage.getItem("receiver");
        let c11values = JSON.parse(localStorage.getItem(cd));
        this.setState({ c11values });
        c11values.messages += "Sender : " + this.state.sender+ " Message : " + this.state.sentMessage + " .";
        localStorage.setItem(cd, JSON.stringify(c11values));
        alert("Succesfully Send");
        window.location.href = '/dashboard';
     
    }

    render() {


        let { keynames } = this.state;

            return (
                <div>
                    <h2>Please Select the recipient : </h2> <br />
                    <select onChange={this.handleSelected} name="valueSelected" >
                        <option selected> Select the user </option>
                        {
                            keynames.map((kn) => { return <option >{kn}</option> })
                        }

                    </select> <br /> <br />
                    <textarea  onChange={this.sentMessage}></textarea><br />
                    <input type="button" value="Send" onClick={this.submitt} />
                </div>
        
        );
    }
}
