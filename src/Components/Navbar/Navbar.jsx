import {useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Navbar.css';
import cartContext from '../../cortContext/context';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
   let {cart} = useContext(cartContext);
   let navigate = useNavigate();
  return (
    <nav className='Navbar'>
        <span className='icon'>
        <img src="https://instadukan.com/static/images/Instadukanconcept202006.png" alt=""  onClick={()=>{navigate('/')}}/>
        <span className='name'>InstaDukan</span>
        </span>
        <span className='cartIcon' onClick={()=>{
            navigate('/cart');
        }}><AiOutlineShoppingCart /> <span className={cart.length == 0 ? 'hidden' : 'block'}  >{cart.length}</span></span>
    </nav>
  )
}
