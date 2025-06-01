import React, { useState ,useContext} from 'react'
import classes from './Auth.module.css';

import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Utility/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {ClipLoader} from 'react-spinners'
import { DataContext } from '../../../Components/DataProvider/DataProvider'
import { Type } from '../../../Utility/action.type'
function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    signIn : false,
    signUp : false

  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  console.log(user)

  const authHandler = async (e) => {
    e.preventDefault();
   
    // console.log(e.target.name);
    if (e.target.name === 'signin') {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
       
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
            
          })
          setLoading({ ...loading, signIn: false });
          navigate('/');
        }
        )
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });

        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
            
          })
          setLoading({ ...loading, signUp: false });
          navigate('/');
          
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
    
  };
  
  // console.log(password, email);
  return (
  
    <section className={classes.login}>
      {/* logo */}
      <Link to ="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />

      </Link>

      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        <form action="#">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder='Enter your email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder='Enter your password' />
          </div>
          <button className={classes.login__signInButton} type='submit' name='signin' onClick={authHandler}>{loading.signIn ? <ClipLoader  color="white" size={15} />:("Sign In")} </button>
          
        </form>
        {/*aggreement */}
        <p>
          By signing-in you agree to the Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.  
        </p>
        <button type='submit' name='signup' onClick={authHandler} className={classes.login__registerButton}> {loading.signUp ? <ClipLoader  color="white" size={15} />:("Create your Amazon Account")}</button>
        {error && <small style ={{color:"red",padding:"5px"}}>{error} </small>}
      </div>

     </section>
    
  )
}

export default Auth
