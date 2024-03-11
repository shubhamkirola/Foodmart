import '../App.css';
import logoimg from '../Utils/food-mart-logo.jpg';
import { Link } from 'react-router-dom';
// import useOnline from '../Utils/useOnline';
import { useSelector } from 'react-redux';
import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";



const Header = () => {

  // const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items); 

    return (
      <>
        <div className='header flex items-center justify-between bg-[orange] h-[9rem] w-auto p-[20px]'>
          <div className='logo h-[110px] w-auto'>
            <img src={logoimg} alt='img' className='h-[110px] w-auto rounded-xl ml-2'></img>
          </div>
          <div className='navItems flex items-center justify-center mr-[1rem]'>
            <ul className='list-none flex items-center justify-center'>
              {/* <li className='px-[10px] py-[0]'>Online : {isOnline === true ? "yup" : "Nope"}</li> */}
              <li className='px-[1rem] py-[0] font-bold'><Link to = "/">HOME</Link></li>
              <li className='px-[1rem] py-[0] font-bold'><Link to = "/about">ABOUT US</Link></li>
              <li className='px-[1rem] py-[0] font-bold'><Link to = "/contact">CONTACT US</Link></li>
              <li className='px-[1rem] py-[0] font-bold'><Link to = "/grocery">GROCERIES</Link></li>
              <li className='px-[1rem] py-[0] font-bold'><Link to = "/cart"><div className="flex">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <FiShoppingCart />
                </div>
              </IconContext.Provider>
              <p data-testid="cart">Cart -{cartItems.length}</p>
            </div>
            </Link></li>
              <button className='p-[6px] font-bold border-[1px] border-[solid] border-[black] rounded'>SIGN UP</button>
            </ul>
          </div>
        </div>
        
      </>
    )
  };

  export default Header;