import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {  Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import logo from '../../../images/Asset-6.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }
const MySwal = withReactContent(Swal)

const SignUp = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photoURL : '',
        email: '',
        password: '',
        error: '',
        success: '',
      })


      const handleBlur = (event) => {
        let isFieldValid;
        if(event.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
          const isPasswordValid = event.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test( event.target.value)
          isFieldValid = isPasswordValid && passwordHasNumber;
    
        }
        if(event.target.name === 'name'){
          isFieldValid = event.target.value;
        }
        if(isFieldValid){
         const newUserInfo = {...user};
         newUserInfo[event.target.name] = event.target.value;
         setUser(newUserInfo);
    
        }
      }
    

      const handleSubmit = (event) => {
        if(user.email && user.password){
           firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
              const newUserInfo = {...user};
              newUserInfo.error = '';
              
              updateUserName(user.name);
              newUserInfo.success = true;
              verificationMail(user.email);
              setUser(newUserInfo);
              Swal.fire({
                icon: 'success',
                title: 'Done',
                text: 'User Created Successfully',
              })
            })
            .catch(error =>{
            const newUserInfo = {...user};
            newUserInfo.errorCode = error.code;
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            })
           
            
          
        }
        
        
    
        event.preventDefault()
      }

      const updateUserName = name => {
        const user = firebase.auth().currentUser;
    
          user.updateProfile({
            displayName: name,
            
          }).then(function() {
            console.log("User name updated successfully");
          }).catch(function(error) {
          });
      }
    
      const verificationMail = (email) => {
        firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
        Swal.fire({
            icon: 'info',
            title: 'Done',
            text: 'Verification Email Sent',
          })
        });
      }
    return (
        <div>
            <Navbar></Navbar>
        <div className="login-container p-5">
        <div className="container px-5">
          <div className="row align-items-center login-row">
              <div className="col-md-6 col-sm-10">
                <div className="text-center" style={{color: '#152550'}}>
                  <h2 className="fw-bold mb-4">Hello Friend!<span className="ms-3"></span></h2>
                </div>
                <form  onSubmit={handleSubmit} className="login-form p-5">
                            <div className="mb-4">
                                <input name="name" type="text" onBlur={handleBlur} className="form-control login-input" placeholder="Name" required/>
                            </div>
                            <div className="mb-4">
                                <input name="email" type="text" onBlur={handleBlur} className="form-control login-input" placeholder="E-mail" required/>
                            </div>
                            <div className="mb-4">
                                <input onBlur={handleBlur} name="password" type="password" className="form-control login-input" placeholder="Password" required/>
                            </div>
                            <div className="mb-4">
                                <input type="submit" value="Sign Up" className="btn btn-order text-white mb-3"></input>
                            </div>
                </form>
                <p className="text-center pt-3">Already have an account?<span className="ps-1"><Link to="/login">SignIn</Link></span></p>
              </div>
              <div className="col-md-6 col-sm-10 coloured-part">
                <div className="pt-5">
                  <div className="p-5 text-center">
                  <img style={{height: '90px', width: '90px'}} src={logo} alt="" />
                    <h1 className="text-center text-white fw-bold">Glad to see you!</h1>
                    <p className="text-center text-white fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni voluptate cupiditate reprehenderit.</p>
                  </div>
                </div>      
              </div>
          </div>
        </div>
        </div>
        </div>
    );
};

export default SignUp;