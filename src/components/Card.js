import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer'

const Card = (props) => {
  let dispatch=useDispatchCart()
  const priceRef = useRef();
  let data=useCart()
  let options=props.options
  let foodItem = props.foodItems;
  let priceOptions=Object.keys(options)
  const [quantity,setQuantity]=useState(1)
  const [size,setSize]=useState("")
  const handleAddToCart=async()=>{
  let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: quantity })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: quantity, size: size,img: props.ImgSrc })
        
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: quantity, size: size })


    // setBtnEnable(true)

  }
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  let finalPrice = quantity * parseInt(options[size]);
  return (
    <div>
        <div className="card mt-3" style={{width: '18rem',"maxHeight":"360px"}}>
          
  <img src={props.foodItems.img} className="card-img-top" alt="..."style={{height:"120px",objectFit:"fill" }} />
  <div className="card-body">
    <h5 className="card-title">{props.foodItems.name}</h5>
    <p className="card-text">some text.</p>
    <div className='container w-100'>
        <select className="m-2 h-100  bg-success text-light rounded" onChange={(e)=>setQuantity(e.target.value)} id="">
            {Array.from(Array(6),(e,i)=>{
                return (
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
        </select>
        <select className='m-2 h-100  bg-success text-light rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)} id="">
            {priceOptions.map((data)=>{
              return <option value={data} key={data}>{data}</option>
            })}
        </select>
        <div className="d-inline h-100 fs-5">{finalPrice}/-</div>
    </div>
    <hr />
    <button className={'btn btn-success justify-content ms-2'} onClick={handleAddToCart} >Add To Cart</button>
  </div>
</div>
    </div>
  )
}

export default Card