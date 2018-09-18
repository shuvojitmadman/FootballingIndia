import React from 'react';

class Form extends React.Component{
    state={
        firstName:"",
        lastName: "",
        eMail: "",
        password: ""
    };
    change= (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });

    };
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
           <div class="container">
           <div class="row">
                <div class="col-sm-6">
                    <p>First Name</p>
                </div>
                <div class="col-sm-6">
                    <input
                    name="firstName"
                    placeholder="Enter your First Name" value={this.state.firstName} 
                    onChange={e => this.change(e)}>
                    </input>
                </div>   
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p>Last Name</p>
                </div>
                <div class="col-sm-6">
                    <input
                    name="lastName"
                    placeholder="Enter your Last Name" value={this.state.lastName} 
                    onChange={e => this.change(e)}>
                    </input>
                </div>   
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p>Email</p>
                </div>
                <div class="col-sm-6">
                    <input
                    name="eMail"
                    placeholder="example@example.com" value={this.state.eMail} 
                    onChange={e => this.change(e)}>
                    </input>
                </div>   
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <p>Password</p>
                </div>
                <div class="col-sm-6">
                    <input
                    name="password"
                    type="password"
                    placeholder="8-16 characters" value={this.state.password} 
                    onChange={e => this.change(e)}>
                    </input>
                </div>   
            </div>
              <button onClick={e => this.onSubmit(e)}>Submit</button>
            </div> 
            );
    }
}

export default Form;