import React, { useRef, useContext } from 'react'
import './signin.css'
import HomeIcon from '@mui/icons-material/Home';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import axios from 'axios';
import { Context } from '../../components/context/Context';
import Wave from '../../components/liveWave/Wave';





export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({type: 'LOGIN_START'})
      const res = await axios.post('http://localhost:8000/api/auth/signin', {
        email: emailRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
    } catch (error) {
      dispatch({type: 'LOGIN_FAILURE'})
    }
  };
  return (
    <div className='signin_container'>
        <div className="home_icon">
          <HomeIcon />
        </div>

          <div className="signin_form">

            <div className="signin_header">
              <div className="signin_icon">
                <div className="logo_icon">
                  <BlurLinearIcon />
                </div>
                <div className="signin_text">RIVIÈRE</div>
              </div>
              <div className="signin_desc">STAY IN RIVIÈRE ROUGE RV PARK WITH ALL THE AMENITIES YOU NEED TO LIVE COMFORTABLY</div>
            </div>

            <form onSubmit={handleSubmit} className="signin_form_content">
              <div className="signin_left">
                <div className="form_form_text">
                  <div className="text_header">Welcome Back!</div>
                  <div className="text_desc">Sign in to continue to Samply.</div>
                </div>
                <div className="form_inputs">
                  <div className="form_input">
                    <label className='form_label'>Email</label>
                    <input ref={emailRef} type="email" placeholder='Email...' />
                  </div>
                  <div className="form_input">
                    <label className='form_label'>Password</label>
                    <input ref={passwordRef} type="password" placeholder='******' />
                  </div>
                  <div className="form_input_check">
                    <input type="checkbox" />
                    <label className='form_label check'>Remember Me</label>
                  </div>
                  <button type="submit" className="signin_btn"><span className="wave">Sign in</span>{isFetching && <Wave />}</button>
                </div>
                
              </div>
              <div className="signin_right">
                
              </div>
            </form>
          </div>

    </div>
  )
}
