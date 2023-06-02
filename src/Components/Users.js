
import React, { useEffect } from 'react'
import Api from '../Api/Api'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
// import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'; 
import {Link} from 'react-router-dom';


export default function Product() { 
  const [allprofiles, setallprofile] = useState([])
  
    let navigate = useNavigate()
    let getdata = ()=>{
        console.log("fun call")
        Api.fetchData('profile').then((result)=>{
                console.log(result)
                setallprofile([...result]) 
                console.log(allprofiles)
        })
    }   

    useEffect(() => { 
      console.log("in todo")
    getdata()
  }, [])
    
  let DeleteItems = (id)=>{
    console.log(id); 
    Api.deleteData('profile',id).then((result)=>{
      let allnewdata = allprofiles.filter((item)=>item.id !=id) 
      setallprofile(allnewdata)
     
    }
    )

   
  }

  return (
    <>
    <hr />
          <Link to='../dashboard/Adduser' className='btn btn-primary'>Add User</Link>
       <hr />

        <div className='container my-5' >

<table class="table table-success table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Gmail</th>
      <th scope="col">Name</th>
      
      <th scope="col">Oder list</th>
      
      <th scope="col">Action</th>
      

    </tr>
  </thead>
  
  {allprofiles?allprofiles.map((item,index)=>( 
         <tr>
         
         <th scope="row">{index+1}</th>
       <td >{item.email}</td>
       
       <td>{item.password}</td>
       <td>{item.review}</td>

         <td>
         <button style={{color:'black'}}  onClick={()=>DeleteItems(item.id)} type="button" class="btn btn-primary">Remove</button>
        

         </td>
       </tr>

    )):<h2>Loading</h2>
    }

    </table>
    </div>
    </>
  )

  } 