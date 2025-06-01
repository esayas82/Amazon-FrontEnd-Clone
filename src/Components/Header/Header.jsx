import React, { useContext } from 'react';
import classes from './Header.module.css';
import { FaSearch } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider'; 
import {auth} from '../../Utility/firebase';

function Header() {
  const [{user, basket }, dispatch] = useContext(DataContext);
  const totalItems = basket?.reduce((amount, item) => {
    return  item.amount + amount
  }, 0);
  
  return (
    <>
      <section className={classes.fixed}>
    <section className={classes.headerSection}>
      <header className={classes.header__container}>
        {/* Logo + Delivery */}
        <div className={classes.logo__container}>
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="Amazon Logo" />
          </Link>

          {/* Delivery Location */}
          <div className={classes.delivery}>
            <span className={classes.locationIcon}>
              <GoLocation />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder='Search Product' />
          <button className={classes.searchBtn}>
            <FaSearch size={16} />
          </button>
        </div>

        {/* Right Side Links */}
        <div className={classes.order__container}>
          {/* Language */}
          <Link to="#" className={classes.language}>
            <img src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg" alt="US Flag" width="24" />
            <select>
              <option value="">EN</option>
            </select>
          </Link>

          {/* Sign In */}
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello, {user?.email?.split('@')[0]}</p>
                      <span onClick={()=>auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                      <>
                        <p>Hello, Sign in</p>
                        <span>Account & Lists</span>

                      </>
                      
                    )}
               
                </div>
           
          
          </Link>

          {/* Orders */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={30} />
            <span>{totalItems}</span>
          </Link>
        </div>
      </header>
            </section>
        <LowerHeader />
      
      </section>
    </>
  );
}

export default Header;
