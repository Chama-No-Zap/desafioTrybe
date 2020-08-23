import React, { Component } from 'react';
import LoginService from '../../components/LoginService';
import RegisterService from '../../components/RegisterService';

import Avatar from '../../assets/images/icons/yellowCustomer.png';
import './styles.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      register: "register",
      login: "login",
    }
  };
  
  login=(event)=>{
    if(event.login === "register"){
      this.setState({
        register: "register",
        login: "login",
      })
    }
  }

  register=(event)=>{
    if(event.register === "register"){
      this.setState({
        register: "login",
        login: "register",
      })
    }
  }



  form(val, text, lado, botao){
    return(
      <div className={`hero ${lado}`}>
        <div className="form-wrapper">
        <div className="button-box">
          <div className={botao}>
            <button type="button" className={`${this.state.login}`} onClick={()=>this.login(this.state)} className="toogle-btn">Log In</button>
            <button type="button" className={`${this.state.register}`} onClick={()=>this.register(this.state)} className="toogle-btn">Register</button>
          </div>
        </div>
        <img  className='img'src={Avatar} alt='Customer Icon' />
        <h1 className='login-text '>{text}</h1>
        {val}
        </div>
      </div>
    )
  }
  render(){
    return (
    <div className="wrapper">
      {this.form(<LoginService />, "Login", `${this.state.login}`, "btn-inicial" )}
      {this.form(<RegisterService />, "Create Account", `${this.state.register}`, "btn-change" )}
    </div>
  );
  }
}
