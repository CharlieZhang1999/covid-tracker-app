import React, {useState, useEffect,useReducer } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
const Login = (props) => {

    const [loginInput, setLoginInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            UserName:'',
            Password:'',
        }
      );

      const [errorMessage, seterrorMessage] = useState(false);

    // handle the form inputs
      const handleLoginChange = evt => {
        
        const name = evt.target.name;
        const newValue = evt.target.value;
        setLoginInput({[name]: newValue});
      }
    //handle the submit button for form
      const handleLoginSubmit = async (evt) => {
        evt.preventDefault();
        const loginInfo = {
          username: loginInput.UserName,
          password: loginInput.Password
        };
        resetLoginInput();
        try{
          const response = await axios({
            url: '/login',
            method: 'POST',
            data: loginInfo
          });
          // if success
          props.handleLoggedIn();
          console.log("already logged in");
        }
        catch(error){
          console.log(error);
          seterrorMessage(true);
        }
    }

    const resetLoginInput = () => {
      setLoginInput(
        {
          UserName:'',
          Password:'',
      }
      );
    }
    let [regWindow,setRegWindow] = useState(false);

    let handleToRegChange = ()=>{
      setRegWindow(!regWindow);
    }
  
    function changeBackgroundOn(e) {
      e.target.style.color = "grey";
    }
    function changeBackgroundLeave(e) {
      e.target.style.color = 'black';
    }

    let [showLogin,setShowLogin]=useState(false);

    let handleShowLoginChange = ()=>{
      setShowLogin(true);
    }
    
    let loginButton = (
      <h3 style={{marginTop:100}} className={styles.registerText} onMouseOver={changeBackgroundOn} onMouseLeave={changeBackgroundLeave} 
            onClick={handleShowLoginChange}>Log in to leave a comment below</h3>
    )

    const LoginForm = (
      showLogin?(
        <form onSubmit={handleLoginSubmit}>
            <div>
              <br/>
              <h2>Login</h2>
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
                <p>Don't have an account?</p>
                <p className={styles.registerText} onMouseOver={changeBackgroundOn} onMouseLeave={changeBackgroundLeave} 
            onClick={handleToRegChange}>Register here</p>
            </div>
        </form>
        ):null)

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
  const handleRegisterSubmit = async (evt) => {
    evt.preventDefault();
    const registerInfo = {
      username: RegisterInput.UserName,
      password: RegisterInput.Password
    };
    resetRegisterinput();
    try{
      const response = await axios({
        url: '/login/register',
        method: 'POST',
        data: registerInfo
      });
      // if success
      console.log("success");
    }catch(error){
      console.log(error);
      seterrorMessage(true);
    }
}

  const resetRegisterinput = () => {
    setRegisterInput(
      {
        UserName:'',
        Password:'',
        RePassword:'',
    }
    );
  }


const RegisterForm = (
    <form onSubmit={handleRegisterSubmit}>
        <div>
          <br/>
            <h2>Register</h2>
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
            <p className={styles.registerText} onMouseOver={changeBackgroundOn} onMouseLeave={changeBackgroundLeave} 
            onClick={handleToRegChange}>Back to Login</p>
        </div>
    </form>)

    const errorNote = (
      <p style={{"color": "red"}}>Error during login or registration</p>
    )
    
    

    return(
        <div>
            {loginButton}
            {regWindow? RegisterForm: LoginForm}
            {errorMessage?errorNote:null}
        </div>
      
    );
}

export default Login;