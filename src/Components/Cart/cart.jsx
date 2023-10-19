import cartContext from '../../cortContext/context';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';
import './cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsCurrencyRupee } from "react-icons/bs";
import { useContext } from 'react';



export default function Cart() {

    let {cart,setCart} = useContext(cartContext);

    function DeleteItem(idx){
       
        let arr = cart.filter((a)=>{
            return a.id !== idx
        })
        setCart(arr)
        toast.error('Item removed from cart', {
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

  return (
    <div>
        <Navbar />
        
    {
        cart.length ?
        <div className='container'>
        <div className='cartItems'>
          {cart.map((it)=>{
            return(
                <div className="cartCard" key={it.id}>
                <img src={it.image} className="cartImage" />
                <h2>{it.title}</h2>
                <div className="cartDetails">
                  <span className="cartrating">
                    Price :<BsCurrencyRupee />
                    {it.price}
                  </span>
                </div>
                <div>
                    <h3>User Detail</h3>
                   <p>name : {it.name}</p>
                   <p>age : {it.age}</p>
                   <p>Passport Number : {it.passport}</p>
                  </div>
                <button className="btn removeBtn" onClick={() => DeleteItem(it.id)}>
                  Remove from Cart
                </button>
              </div>
            )
          })}
        </div>
        </div>
           :
           <div className='cartDefaultMessage'>
            <h1>Your Cart is empty!!</h1>
            </div>
    }
    <Footer />
    <ToastContainer />
    </div>
  )
}
