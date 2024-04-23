"use client"
import React, { useEffect, useState } from 'react'
import "../app/Login/login.css"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const  LoginOTP = () => {

  //const [loginC, setLoginC] = useState(false);

  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const [newOtp, setNewOtp] = useState("");

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have an API endpoint for posting reservation data
      const response = await axios.post('http://localhost:3001/api/otp', {
        mobileNo
      });
      console.log('Reservation saved:', response.data);
      // setMobileNo('1234567890')
      console.log("MN - "+mobileNo);
    } catch (error) {
      console.error('Error saving reservation:', error);
    }
  };

    const loginCheck = async () => {
      try {

        const response = await axios.get('http://localhost:3001/api/recieveOTP');
       // console.log(response.data);
       // setNewOtp(response.data);
        var newOTP = response.data;
      // setNewOtp("123456");
      let status = false;
        if(otp===newOTP)
        {
          toast.success('Signed in!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

           // console.log(loginC)
            status = true;
          
            //post call boolean
           // setLoginC(status);

           console.log(status)

            axios.post('http://localhost:3001/api/logincheck', {
            status
            });

           window.location.href = "/";
            
        }
        else
        {
          toast.error('Wrong OTP!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
      console.log("otp - "+otp);
      } 
      catch (error) {
        // Handle error
        console.log(error);
      }
    };


  return (
    <>
<div className="login-container h-screen">
  <div className="login-content">
    <div className="login-content_header">
      <h2>Welcome back</h2>
    </div>
    <div>
      <form className="login-form"  onSubmit={sendOtp}>
        <div>
        <label htmlFor="phone" className=''>Mobile Number (10 digit)</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required placeholder="85xxxx4785"/>
        </div>
        <br />
        <a className='sob'><button>Send OTP</button></a>
        <br />
        </form>
        <div>
        <label htmlFor="otp">OTP (6 digit)</label><br />
        <input id='otpIn' type="number" name="otp" required pattern="[0-9]{6}" placeholder="1xx456" value={otp} onChange={(e) => setOtp(e.target.value)}/>
        </div>
        <input type="submit" value="Submit" onClick={loginCheck} className='btn-lC'/>
      
      <div className="login-netoworks">
        
        <div className="login-or">
        </div>
{/*         <ul className="login-icons">
          <li>
            <box-icon color="#fff" type='logo' name='google'></box-icon> Sing in with Google
          </li>
          <li>
            <box-icon color="#fff" type='logo' name='facebook-circle'></box-icon> Sing in with Facebook
          </li>
          <li>
            <box-icon color="#fff" type='logo' name='github'></box-icon> Sing in with GitHub
          </li>
        </ul> */}
      </div>
    </div>
  </div>
  <div className="login-footer">
    <p>Terms of use | Privacy policy</p>
  </div>
</div>
    </>
  )
};

export default  LoginOTP;
