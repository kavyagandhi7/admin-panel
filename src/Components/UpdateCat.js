import React, { useEffect, useState } from 'react'
import Api from '../Api/Api'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateCat() { 

    const [price, setPrice] = useState('')
    const [task, settask] = useState('')
    const [stock, setStock] = useState('')
    const [status, setStatus] = useState('') 
    let navigate = useNavigate()

    let params = useParams()
    
    function getData()
    {
        Api.fetchData('todo',params.id).then((result)=>{
            console.log(result) 
            settask(result.task) 
            setStatus(result.status)
            setStock(result.stock)
            setPrice(result.price)
        })
    } 

    let updateData = (event)=>{
        event.preventDefault(); 
        let temp = {
            id:params.id,
            task:task,
            status:status,
            price:price,
            stock:stock
        }

         console.log(temp) 
         Api.Update('todo',params.id,temp).then((result)=>{
                    console.log('result') 
                    navigate('../dashboard/product')

                    
         }) 


    } 

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
    useEffect(() => {
    getData()
    }, [])
    
  return (
    <div>
        <form onSubmit={updateData}>
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
 
  <button type="submit" class="btn btn-primary">Update</button>
</form>
    </div>
  )
}
