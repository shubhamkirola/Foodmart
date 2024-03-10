import '../App.css';
import logoimg from '../Utils/food-mart-logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import useOnline from '../Utils/useOnline';
import { useSelector } from 'react-redux';


const Header = () => {

  const [stylediv, setstylediv] = useState(true)

  const showSign = () => {
    setstylediv(!stylediv)
  }

  const handleClick = () => {
    setstylediv(false)
  }

  // const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items); 

    return (
      <>
      <div className='signup' style={ stylediv ? 
        {
        height: "100vh",
        width: "50vw",
        backgroundColor : "black",
        position: "fixed",
        visibility: "hidden",
        marginLeft: "200px"
        } : {
          height: "100vh",
        width: "50vw",
        backgroundColor : "black",
        position: "fixed",
        visibility: "visible",
        marginLeft: "200px"
        }}>
          <button onClick={showSign}>close</button>
        </div>
        <div className='header flex items-center justify-between bg-[orange] h-[110px] w-screen p-[20px]'>
          <div className='logo'>
            <img src={logoimg} alt='img' className='h-[110px] w-auto'></img>
          </div>
          <div className='navItems flex items-center justify-center mr-[20px]'>
            <ul className='list-none flex items-center justify-center'>
              {/* <li className='px-[10px] py-[0]'>Online : {isOnline === true ? "yup" : "Nope"}</li> */}
              <li className='px-[10px] py-[0] font-bold'><Link to = "/">HOME</Link></li>
              <li className='px-[10px] py-[0] font-bold'><Link to = "/about">ABOUT US</Link></li>
              <li className='px-[10px] py-[0] font-bold'><Link to = "/contact">CONTACT US</Link></li>
              <li className='px-[10px] py-[0] font-bold'><Link to = "/grocery">GROCERIES</Link></li>
              <li className='px-[10px] py-[0] font-bold'><Link to = "/cart">CART - {cartItems.length}</Link></li>
              <button onClick={handleClick} className='p-[10px] font-bold border-[1px] border-[solid] border-[black]'>SIGN UP</button>
            </ul>
          </div>
        </div>
        
      </>
    )
  };

  export default Header;