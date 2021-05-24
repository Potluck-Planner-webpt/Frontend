import React from "react";
import { useForm } from "../hooks/useForm";
import axios from 'axios';


const Login = (props) =>{
    const initialState ={
        login: {
            username: '',
            password: ''
          }
    }

    const API_URL = ''

    const [values, handleChanges] = useForm(initialState.login);

    const login = (e) =>{
        e.preventDefault();
        // axios.post(API_URL, values)
        //     .then(res => {console.log("happy path!", res.data.payload);
        //                   localStorage.setItem('token', res.data.payload);
        //                   props.history.push("/protected");
        //                 })
        //     .catch(err => console.log("sad path:(", err));
    }
  
    return(
        <div>
              <form onSubmit={login}>
                <h2>Login</h2>
                <div className='errors'>
                </div>

                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChanges}
                />

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChanges}
                />
                <button>Log in</button>
              </form>
        </div>
    )
        
}

export default Login;