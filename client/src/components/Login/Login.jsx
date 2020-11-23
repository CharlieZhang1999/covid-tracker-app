import React, {useState, useEffect,useReducer } from 'react';

const Login = () => {

    const [loginInput, setLoginInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            UserName:'',
            Password:'',
        }
      );

    // handle the form inputs
      const handleLoginChange = evt => {
        
        const name = evt.target.name;
        const newValue = evt.target.value;
        setLoginInput({[name]: newValue});
      }
    //handle the submit button for form
      const handleLoginSubmit = (evt) => {
        evt.preventDefault();
    }

    const LoginForm = (
        <form onSubmit={handleLoginSubmit}>
            <div>
              <br/>
                <label>UserName</label>
              <br/>
                <input type="text" name="UserName" value={loginInput.UserName} onChange={handleLoginChange}/>
              <br/>
                <label>Password</label>
              <br/>
                <input type="text" name="Password" value={loginInput.Password} onChange={handleLoginChange}/>
              <br/>
                <input type="submit" value="Submit"/>
            </div>
        </form>)

const [RegisterInput, setRegisterInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
        UserName:'',
        Password:'',
        RePassword:'',
    }
  );

// handle the form inputs
  const handleRegisterChange = evt => {
    
    const name = evt.target.name;
    const newValue = evt.target.value;
    setRegisterInput({[name]: newValue});
  }
//handle the submit button for form
  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
}

const RegisterForm = (
    <form onSubmit={handleRegisterSubmit}>
        <div>
          <br/>
            <label>UserName</label>
          <br/>
            <input type="text" name="UserName" value={RegisterInput.UserName} onChange={handleRegisterChange}/>
          <br/>
            <label>Password</label>
          <br/>
            <input type="text" name="Password" value={RegisterInput.Password} onChange={handleRegisterChange}/>
          <br/>
            <label>RePassword</label>
          <br/>
            <input type="text" name="RePassword" value={RegisterInput.RePassword} onChange={handleRegisterChange}/>
          <br/>
            <input type="submit" value="Submit"/>
        </div>
    </form>)

    return(
        <div>
            <h1>login window</h1>
            {LoginForm}
            <h1>Register window</h1>
            {RegisterForm}
        </div>
        
    );
}

export default Login;