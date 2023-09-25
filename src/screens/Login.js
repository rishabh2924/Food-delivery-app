import React from 'react'

import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({  email: "", password: "",  })
    let navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/loginuser", {
          // credentials: 'include',
          // Origin:"http://localhost:3000/login",
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({  email: credentials.email, password: credentials.password })
    
        });
        const jresponse = await response.json()
        
        if (jresponse.sucess) {
          //save the auth toke to local storage and redirect
         
          alert("you logged in successfully")
          localStorage.setItem("userEmail",credentials.email)
          localStorage.setItem("authToken",jresponse.authToken)
          console.log(localStorage.getItem('authToken'));
          navigate('/');
        }
        else {
          alert("Enter Valid Credentials")
        }
      }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }
  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
    <Navbar/>
    </div>

      <div className='container' >
        <form className='w-50 text-light m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
         
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
         
         
          {/* <div className="m-3">
            <button type="button"  name="geolocation" className=" btn btn-success">Click for current Location </button>
          </div> */}
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New user</Link>
        </form>
      </div>
      </div>
  )
}

export default Login