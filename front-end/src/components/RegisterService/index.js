import React, { Component } from 'react';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default class RegisterService extends Component {
  constructor(props){
    super(props)

    this.state={
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      window.location.assign(`/loged/${this.state.firstName}/${this.state.lastName}`);
      //console.log(`
      //  --SUBMITTING--
      //  First Name: ${this.state.firstName}
      //  Last Name: ${this.state.lastName}
      //  Email: ${this.state.email}
      //  Password: ${this.state.password}
      //`);
    } else {
        window.alert("INVALID ACCOUNT");
    }
  };

  handleChange = (events) => {
    events.preventDefault();
    const { name, value } = events.target;
    let { formErrors } = this.state;

    switch(name){
      case "firstName":
        formErrors.firstName = value.length<4? "minimuim 3 characters required" : "";
      break;
      case "lastName":
        formErrors.lastName = value.length<4? "minimuim 3 characters required" : "";
      break;
      case "email":
        formErrors.email = emailRegex.test(value)? "" : "Add an valida email";
      break;
      case "password":
        formErrors.password = value.length<9? "minimuim 8 numbers required" : "";
      break;
      default:
      console.log(`Sorry, we are out of XABLAU.`);
    }

    this.setState({formErrors, [name]:value})
  }

  handleInputChange = (test, clas) => {
    if(clas==="firstName"){
      return <span className="errorMessage">{test.firstName}</span>
    }else if(clas==="lastName"){
      return <span className="errorMessage">{test.lastName}</span>
    }else if(clas==="email"){
      return <span className="errorMessage">{test.email}</span>
    }else if(clas==="password"){
      return <span className="errorMessage">{test.password}</span>
    }
    
  };

  creatInputs(classText="sem prop", text="sem prop", typeInput="text"){
    const { formErrors } = this.state;
    return(
      <div className={classText}>
        <label htmlFor={classText}>{ text }</label>
        <input type={typeInput}
        className=""
        name={classText}
        noValidate
        onChange={this.handleChange}
        />
        {this.handleInputChange(formErrors, classText)}
      </div>
    )
  }

  render() {
    return (
      <div id="register">
        <form onSubmit={this.handleSubmit} noValidate>
          {this.creatInputs("firstName", "First Name")}
          {this.creatInputs("lastName", "Last Name")}
          {this.creatInputs("email", "Email", "email")}
          {this.creatInputs("password", "Password", "password")}
          {this.creatInputs("checkbox", "I agree with terms & condition", "checkbox")}
          <div className="createAccount">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    )
  }
}
