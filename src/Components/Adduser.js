import React, { useState } from 'react'
import Api from '../Api/Api'
import { useNavigate } from 'react-router-dom'


export default function Adduser() { 
    
    let navigate = useNavigate()

    const [email, setemail] = useState('')  
    const [password, setpassword] = useState('')
    const [review, setreview] = useState('')

    

    let handleStatus = (event) =>{
        setemail(event.target.value)
    }
    let handleStocks = (event) =>{
        setpassword(event.target.value)
    }
    let handlePrice = (event) =>{
        setreview(event.target.value)
    }


    let insertData = (event)=>{
        event.preventDefault();

        let temp = {
            email:email,
            password:password, 
            review:review
            
        }
           Api.addData('profile',temp).then((result)=>{
                    console.log(result + "add added");

                    navigate('../dashboard/users')
           })
    }


  return (
    <form onSubmit={insertData}>
   
    <div class="mb-3">
      <label for="status" class="form-label">Users email</label>
      <input type="text" class="form-control" id="status" value={email} onChange={handleStatus}/>
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Name</label>
      <input type="text" class="form-control" id="stock" value={password} onChange={handleStocks}/>
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Oder histroy</label>
      <input type="text" class="form-control" id="price" value={review} onChange={handlePrice}/>
    </div>
   
    <button type="submit" class="btn btn-primary">Add New User </button>
  </form>
  )
}
