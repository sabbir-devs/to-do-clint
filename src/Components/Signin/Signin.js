import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../../firebase.init';
import './Signin.css'

const provider = new GoogleAuthProvider();
const Signin = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConPass, setShowConPass] = useState(false);
    const [email, setEmail] = useState({value:'', error:''});
    const [password, setPassword] = useState({value:'', error:''});
    const [confirmPassword, setConfirmPassword] = useState({value:'', error:''});
    const [error, setError] = useState('')
    const navigate = useNavigate()

    console.log(confirmPassword)
    
    const emailInput = (emailInput) => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });     
        } else {
            setEmail({ value: "", error: "Please Enter Valid Email" }); 
        }
    }
    const passwordInput = (passwordInput) => {
        if (passwordInput.length < 6) {
            setPassword({ value: "", error: "Password Minimum of 6 Characters" });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }
    }
    const confirmPasswordInput = (confirmPasswordInput) => {
        if (confirmPasswordInput !== password) {
            setConfirmPassword({ value: "", error: "Password don't matched" });
          } else {
            setConfirmPassword({ value: confirmPasswordInput, error: "" });
          }
    }

    const halndleFormSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            navigate('/')
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    toast.success("email varification send", { id: "toast1" });
                });
        })
        .catch((error) => {
            setError(error.message)
        });

    }
    const handleGoogleSignIn = () => {
        console.log('clicked')
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate('/')
        }).catch((error) => {
            setError(error.message)
        });
    }
    return (
        <div className='signup'>
            <form onSubmit={halndleFormSubmit} className="form">
                <h2>Register!!</h2>
                <div className='inputs'>
                    <input onBlur={(event) => emailInput(event.target.value)} className='input' type="email" name="email" placeholder='Email' id="" required/>
                    {email.error && <><p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>plase enter valid email</p></>}
                </div>
                <div className='inputs'>
                    <input onBlur={(event) => passwordInput(event.target.value)} className='input' type={showPass ? "text" : "password"} name="password" placeholder='Password' id="" required/>
                    <label onClick={() => setShowPass(!showPass)} className='label' htmlFor="password">{showPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                    {password.error && <><p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>{password.error}</p></>}
                </div>
                <div className='inputs'>
                    <input onBlur={(event) => confirmPasswordInput(event.target.value)} className='input' type={showConPass ? "text" : "password"} name="ConfirmPassword" placeholder='Confirm Password' id="" required/>
                    <label onClick={() => setShowConPass(!showConPass)} className='label' htmlFor="ConfirmPassword">{showConPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                    {confirmPassword.error && <p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>{confirmPassword.error}</p>}
                </div>
                <div className='inputs'>
                    <p className='error-text'>{error}</p>
                </div>
                <input className='email-login' type="submit" value="Login" />
                <p style={{margin:'10px 0'}}>Alrady have an<span className='shadow' onClick={() => navigate('/login')}> Login?</span></p>
                <div className="options">
                    <div className="left-options"></div>
                    <p>or</p>
                    <div className="right-options"></div>
                </div>
                <button onClick={() => handleGoogleSignIn()} className='google-signin'><FcGoogle style={{fontSize:'30px'}}></FcGoogle>Google Sign In</button>
            </form>
        </div>
    );
};

export default Signin;