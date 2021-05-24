import React from 'react'

const Signup = (props)=>{

    const initialState ={
        signup: {
            username: '',
            password: '',
            email: '',
          }
    }

    const [values, handleChanges] = useForm(initialState.signup);

    const signup = e => {
        e.preventDefault()
        const newUser = {
            id: Date.now(),
            username: values.username.trim(),
            email: values.email.trim(),
            password: values.password.trim(),
          }
      }

    return (
        <div className='form'>
            <form className='form container' onSubmit={signup}>
                <h2>Sign Up!</h2>
                <div className='errors'>
                </div>

                <label className='text-field'>Username
                    <input  
                        value={values.username}
                        onChange={handleChanges} 
                        name='username' 
                        type='text' />
                </label>

                <label className='text-field'>Email
                    <input  
                        value={values.email}
                        onChange={handleChanges} 
                        name='email' 
                        type='email' />  
                </label>

                <label className='text-field'>Password
                    <input  
                        value={values.password}
                        onChange={handleChanges} 
                        name='password' 
                        type='password' />
                </label>

                <button disabled={disabled}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;