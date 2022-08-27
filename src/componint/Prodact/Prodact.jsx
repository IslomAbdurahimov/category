import React from 'react'
import "./Prodact.css"
import { useNavigate } from 'react-router-dom'
function Prodact({title,image,price,id,description,category}) {
  const navegat=useNavigate()
   const choos=()=>{
     navegat(`/products/${id}`)
   }
  return (
    <div className='prodact'>
       <img onClick={choos} src={image} alt={title} />
       <p>{title}</p>
    </div>
  )
}

export default Prodact