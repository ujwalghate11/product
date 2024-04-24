import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProduct]= useState([]);
    const [count, setCount]=useState(0);
    const [amount, setAmount]=useState(0);
    const [cartItem, setcartItem]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data)
        },[])
    })
    const addCart=(prod) =>{

        setCount(count+1);
        setAmount(amount+prod.price)
        const data = products.filter((pro)=>pro.id === prod.id)
        
        setcartItem(data);
    }
  return (
    <div>
        <header className='header'>
            <img src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg" alt='logo' />
            <p>Cart: {count}</p>
            <p>Total Amount: {amount}</p>
            <p>CartItems: {cartItem.map((prod)=>(
                <li key={prod.id}>
                    {prod.title}
                    <img style={{height:'30px', width:'30px'}} src={prod.image} alt={prod.title}/>
                </li>
            ))}</p>

        </header>

   <ul className='cardContainer'>
    {
        products.map((prod,index)=>(
            <li key={index}>
                <div className='card'>
                <img src={prod.image} alt={prod.title}/>
                <h2 style={{textAlign: 'center'}}>{prod.title}</h2>
                <p>Price: {prod.price}</p>
                <p>Rating: {prod.rating.rate}</p>
                <button onClick={()=>addCart(prod)}>Buy</button>
                </div>
               
            </li>
        ))
    }
   </ul>

    </div>
  )
}

export default Products
