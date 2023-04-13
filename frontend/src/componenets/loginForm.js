import React, { useState } from 'react'
import axios from 'axios'
import "./form.css"
import {useNavigate, Link} from 'react-router-dom'


const Login = () => {

    const history = useNavigate();
  
 
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    const [allEntry,setAllEntry] = useState([])

    const submitForm =async(e)=>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const newEntry ={email:email,password:password}
        setAllEntry([... allEntry, newEntry]);
        try{
            await axios.post("http://localhost:4000/login",{
                email,password
            })
            .then(res=>{
                if(res.data="exist"){
                    history("/home")
                }
            })
        }
        catch(e){
            console.log(e)
        }
        
        
       

    

    }
  return (
   <>
   <form id ="login" action= " " onSubmit={submitForm}>
    <div class="login">
        <label htmlFor='email'>Email</label>
        <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off'></input>
    </div>
    <div>
        <label htmlFor='password'>Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off"></input>
    </div>

    <button type="submit">Login</button>

    <Link to="/register">
        <button>Register</button>
      </Link>
  
   </form>
 
   
   </>
  )
}

export default Login

