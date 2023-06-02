import React, { useState } from 'react'
import Api from '../Api/Api'
import { useNavigate } from 'react-router-dom'

export default function Insert() { 
    const [task, settask] = useState('')
    let navigate = useNavigate()

    const [status, setStatus] = useState('')  
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')

    let handletask = (event)=>{
        settask(event.target.value)
    } 

    let handleStatus = (event) =>{
        setStatus(event.target.value)
    }
    let handleStocks = (event) =>{
        setStock(event.target.value)
    }
    let handlePrice = (event) =>{
        setPrice(event.target.value)
    }


    let insertData = (event)=>{
        event.preventDefault();

        let temp = {
            task:task,
            status:status,
            price:price,
            stock:stock
        }
           Api.addData('todo',temp).then((result)=>{
                    console.log(result + "add added");

                    navigate('../dashboard/product')
           })
    }


  return (
    <form onSubmit={insertData}>
    <div class="mb-3">
      <label for="task" class="form-label">Product</label>
      <input type="text" class="form-control" id="task" aria-describedby="emailHelp" 
      value={task} onChange={handletask}/>
      {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Category</label>
      <input type="text" class="form-control" id="status" value={status} onChange={handleStatus}/>
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Stock</label>
      <input type="text" class="form-control" id="stock" value={stock} onChange={handleStocks}/>
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Price</label>
      <input type="text" class="form-control" id="price" value={price} onChange={handlePrice}/>
    </div>
   
    <button type="submit" class="btn btn-primary">Add New Product </button>
  </form>
  )
}
