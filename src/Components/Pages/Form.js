import React from 'react';

class Form extends React.Component{
    state={
        firstName:"",
        lastName: "",
        eMail: "",
        password: ""
    };
    
    render(){
        return(
           <div class="container">
           <div class="row">
                <div class="col-sm-6">
                    <p>First Name</p>
                </div>
                <div class="col-sm-6">
                    <input
                    placeholder="Enter your First Name" value={this.state.firstName} 
                    onChange={e => this.setState({firstName: e.target.firstName})}>
                    </input>
                </div>   
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p>Last Name</p>
                </div>
                <div class="col-sm-6">
                    <input
                    placeholder="Enter your Last Name" value={this.state.lastName} 
                    onChange={e => this.setState({lastName: e.target.lastName})}>
                    </input>
                </div>   
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p>Email</p>
                </div>
                <div class="col-sm-6">
                    <input
                    placeholder="example@example.com" value={this.state.eMail} 
                    onChange={e => this.setState({eMail: e.target.eMail})}>
                    </input>
                </div>   
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p>Password</p>
                </div>
                <div class="col-sm-6">
                    <input
                    type="password"
                    placeholder="8-16 characters" value={this.state.password} 
                    onChange={e => this.setState({password: e.target.password})}>
                    </input>
                </div>   
            </div>
              
            </div> 
            );
    }
}

export default Form;