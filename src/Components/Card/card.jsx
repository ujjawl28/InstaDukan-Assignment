import { BsCurrencyRupee } from "react-icons/bs";
import cartContext from "../../cortContext/context";
import { useContext} from 'react';
import '../rightSection/rightSection.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from "../Modal/Modal";
import './card.css'
import { Button, Modal } from 'antd';

import React, { useState } from 'react';


export default function Card({it}) {
     
    const { cart, setCart } = useContext(cartContext);
    const [open,setOpen] = useState(false);
    const [userDetail,setUserDetail] = useState({
      name:'',
      passport:'',
      age:'',
    })

    function addToCart(it) {
      if(!cart.includes(it)){
        setCart([...cart, it]);
        toast.success('Item success added to cart', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
        toast.error('Item already in cart', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }   
      }
  return (
    <div className="card" key={it.id}>
              <img src={it.image} className="itemImage" />
              <h2>{it.title}</h2>
              <div className="cardDetails">
                 <span className="rating">
                  Price :<BsCurrencyRupee />
                  {it.price}
                </span>
              </div>
              <button className="btn" onClick={() => {
              setOpen(true)
              }}>
                Add To cart
              </button>
            
              <Modal
               centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              footer={''}
              width={1000}
            >
             <form className="clientDetail" >
              
              <input type="text" placeholder="Enter Name" className="inputDetail" onChange={(e)=>setUserDetail({...userDetail,name:e.target.value})}/>
              <input type="number" placeholder="Enter Age" className="inputDetail"  onChange={(e)=>setUserDetail({...userDetail,age:e.target.value})} />
              <input type="text" placeholder="Enter Passport" className="inputDetail"  onChange={(e)=>setUserDetail({...userDetail,passport:e.target.value})}/>
               <button className="button" onClick={(e)=>{
                e.preventDefault()
                 addToCart({...userDetail,...it})
                 setOpen(false)
               }}>Add</button>
             </form>
            </Modal>
           
     
            </div>
  )
}
