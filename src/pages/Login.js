import React from 'react'
import axios from 'axios';

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
    
    handleClick = (specData) => {
        const payload = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
         };
         var headers = {
            "Content-Type": "application/json",                                                                                                
            "Access-Control-Origin": "*"
         }
         axios.post(`https://reqres.in/api/login`, { payload, headers }) // Try to login (This is not working)
         .then(res => {
             console.log(res);
             localStorage.setItem('authorization_tkn', JSON.stringify(res.data.token)); // Update authorization token if login is successful
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
            </div>
        </div>
        );
    }

};


export default Registration;