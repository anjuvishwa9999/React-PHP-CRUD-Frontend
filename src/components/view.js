import React ,{useEffect, useState}from 'react'
import './Style.css'
import axios from 'axios'
import { Link } from 'react-router-dom';



function View(){

    const [login_student,setUsers]=useState([]);
    const [message,setMessage]=useState('');
   
   
    useEffect(()=>{
        getUsers();
    },[]);

    function getUsers(){
        axios.get("http://localhost/Anju_PHP&MYSQL/select1.php").then(function(response){
            console.log(response.data);
            setUsers(response.data);
        });
    }
    const deleteUser=async(user_id)=>{
     const res=await   axios.delete("http://localhost/Anju_PHP&MYSQL/edit1.php/"+ user_id);
     setMessage(res.data.success);
          
    }

return(

<div className='body4'>
        <div className='nav4'>
            <h2> View Page...</h2>

        </div>
        <br></br>
        <div className='table'>
            <p>{message}</p>
            <table border="2px">
                <thead>
               
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                        <th>MOBILE NO</th>
                        <th>DELETE</th>
                        <th>EDIT</th>
                    </tr>
                    </thead>
                    <tbody>
                        {login_student.map((user,key)=>
                        <tr key={key}>
                            <td>{user.user_id}</td>
                            <td>{user.user_name}</td>
                            <td>{user.user_email}</td>
                            <td>{user.user_address}</td>
                            <td>{user.user_mob}</td>
                            <td>
                            <button onClick={()=>deleteUser(user.user_id)}>delete</button>
                            <i aria-hidden="true"></i>

                                
                            </td>
                            <td>
                               
                                <Link to={'/edit/'+user.user_id}>
                                   edit 
                                </Link>
                                
                                </td>

                        </tr>
                          )}
                    </tbody>
                

            </table>
        </div>
        </div>
    )
}
export default View;