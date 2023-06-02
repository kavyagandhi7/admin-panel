
import React, { useEffect } from 'react'
import Api from '../Api/Api'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
// import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'; 
import {Link} from 'react-router-dom';





export default function Product() { 
    const [alltodo, setalltodo] = useState([]) 

  const[query, setQueary]=useState('');
  

  


    let navigate = useNavigate()
    let getdata = ()=>{
        
        Api.fetchData('todo').then((result)=>{
              
                setalltodo([...result]) 
                
        })
    }   


    let updateData = (id)=>{
          console.log(id) 
          navigate(`../dashboard/update/${id}`)
          
    }

    let DeleteItems = (id)=>{
        console.log(id); 
        Api.deleteData('todo',id).then((result)=>{
          let allnewdata = alltodo.filter((item)=>item.id !=id) 
          setalltodo(allnewdata)
          
        })
       

    } 
    useEffect(() => { 
        console.log("in todo")
      getdata()
    }, [])


  return (
    <>
   
  <hr />  
          <Link to='../dashboard/addproduct' className='btn btn-primary'>Add Product</Link>

<hr />
    <input type="text" placeholder='Search' onChange={(e)=>setQueary(e.target.value)} />
    {/* <ul>
      
      {alltodo?alltodo.filter(item=>item.task.toLowerCase().includes(query)).map((item)=>( 
       
       <option value="">{item.task}</option> 
       


    )):<h2>Loading</h2>
    }
      
    </ul>
      <hr /> */}

        

        <div className='container my-5' >
<table class="table table-success table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Category</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
      

    </tr>
  </thead>
 
  {alltodo?alltodo.filter(item=>item.task.toLowerCase().includes(query)).map((item,index)=>( 
         <tr style={{
          background : item.status === "WOMEN" ? 'rgba(0, 0, 0, 0.3)' : item.status === "ACCESSORIES" ? 'yellow ' : item.status === "MEN" ? 'rgb(135, 206, 235)': "rgb(255,0,0)",
          // background : item.status === "ACCESSORIES" ? 'blue': "green",
          // background : item.status === "MEN" ? 'yellow': "green",
         }}>
         
         <th scope="row">{index+1}</th>
         <td >{item.task}</td>
         <td>{item.status}</td>
         <td>{item.stock}</td>
         <td>{item.price}</td>

         <td>
         <button style={{color:'black'}}  onClick={()=>DeleteItems(item.id)} type="button" class="btn btn-primary">Delete</button>
        <button style={{color:'black'}} onClick={()=>updateData(item.id)} type="button" class="btn btn-primary ">update</button>

         </td>
       </tr>

    )):<h2>Loading</h2>
    }

    </table>
    </div>
    </>
  )
}
