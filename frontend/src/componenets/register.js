import React, { useState } from 'react'
import axios from 'axios'
import "./form.css"
import {useNavigate, link} from 'react-router-dom'


const Register = () => {

    const history = useNavigate();
    const[id,setId]= useState("")
    const[name,setName] = useState("")
  
 
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    const [role,setRole] = useState("")
    const [allEntry,setAllEntry] = useState([])

    const submitForm =async(e)=>{
        e.preventDefault();
        const id = e.target.elements.id.value;
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const role = e.target.elements.role.value;
        
        const newEntry ={id:id,name:name,email:email,password:password,role:role}
        setAllEntry([... allEntry, newEntry]);
        try{
            await axios.post("http://localhost:4000/register",{
                id,name,email,password,role
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
   <form action= " " onSubmit={submitForm}>
   <div>
        <label htmlFor='id'>Id</label>
        <input type="number" name="id" id="id" value={id} onChange={(e)=>setId(e.target.value)} autoComplete='off'></input>
    </div>
    <div>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete='off'></input>
    </div>
    <div>
        <label htmlFor='email'>Email</label>
        <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off'></input>
    </div>
    <div>
        <label htmlFor='password'>Password</label>
        <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off"></input>
    </div>
    <div>
        <label htmlFor='role'>role</label>
        <input type="text" name="role" id="role" value={role} onChange={(e)=>setRole(e.target.value)} autoComplete='off'></input>
    </div>

    <button type="submit">Register</button>
  
   </form>
 
   
   </>
  )
}

export default Register

