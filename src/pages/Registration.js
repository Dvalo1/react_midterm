import React from 'react'
import axios from 'axios';
//import Login from 'Login';

class Registration extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        email: '',
        username: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState({[fieldName]: fleldVal});
    }
    
    handleClick = (event) => {
        console.log("values",this.state.username,this.state.password);
        const payload = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
         };
        axios.post(`https://reqres.in/api/users`, { payload }) // Create user
        .then(res => {
            console.log(res);
            console.log(res.data.createdAt); //Creation date
        })


    };
    render() {
        return (
        <div className="midterm_registration">
            <div className="midterm_reg_wrapper">
                <input type="text" name="email" placeholder="E-Mail" required onChange={this.handleChange} />
            <br/>
                <input type="text" name="username" placeholder="Username" required onChange={this.handleChange} />
            <br/>
                <input type="text" name="password" placeholder="Password" required onChange={this.handleChange}/>
            <br/>
                <input type="submit" value="Submit" onClick={(event) => this.handleClick(event)}/>
                <div className="login">Already registered? Login</div> {/* Redirect to the login page */}
            </div>
        </div>
        );
    }

};


export default Registration;