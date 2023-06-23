import React ,{useState} from 'react'
import './Style.css'

import axios from 'axios'


function Sign() {
    const [user_email,setUser_email]=useState("");
    
    const [user_name,setUser_name]=useState("");
    const [user_address,setUser_address]=useState("");
    const [user_mob,setUser_mob]=useState("");
    

    const handleSubmit =async(e)=>{
        e.preventDefault();
        //console.log(formvalue);
        const formData={user_name:user_name,user_email:user_email,
            user_address:user_address,user_mob:user_mob};
        const url="http://localhost/Anju_PHP&MYSQL/edit1.php/";
        const res= await axios.post(url,formData);

        console.log(res);
    }
    
    

    
        return (
            <div className='body1'>
            <div className='body'>
             
                <h1><b>USER LOGIN FORM ...</b></h1>
                </div>
             
             <div className='form'>
                <form  >
                    
                   
                    <label>User name:
                   
                  <br/> <input type='text' name='user_name' value={user_name} onChange={(e)=>setUser_name(e.target.value)}  /></label>
                  <br></br>
                    <label> User email:
                    
                   <br/><input type='text' name='user_email' value={user_email} onChange={(e)=>setUser_email(e.target.value)}  /></label>
                   <br></br>
                    <label> User address:
                    
                   <br/><input type='text' name='user_address' value={user_address} onChange={(e)=>setUser_address(e.target.value)}  /></label>
                   <br></br>
                    <label> User mobile:
                    
                   <br/><input type='text' name='user_mob' value={user_mob} onChange={(e)=>setUser_mob(e.target.value)}  /></label>
                    <br/><br></br>
                   <button type="submit" value="submit" name="insert-btn" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>

             </div>
             </div>
            
        )
    }


export default Sign;