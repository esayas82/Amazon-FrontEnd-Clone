import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";


function Payment() {
  const [{ user, basket }, dispach] = useContext(DataContext);
  console.log(user);
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket?.reduce((amount, item) => {
    return  item.price * item.amount + amount
  }, 0);
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (e) => {
    console.log(e)
e.error?.message? setCardError(e.error.message):setCardError(null)

  }
  return (
    <LayOut>
      {/* {Header} */}
      <div className={classes.payment_header}>
        Checkout ({totalItems}) items
      </div>
      {/*payment method*/}
      <section className={classes.payment}>
        {/* {address} */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            {" "}
            <div>{user?.email || "Guest"}</div>
            <div>123 Main St</div>
            <div>chicago,IL</div>
          </div>
        </div>
        <hr />
        {/* {product} */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                flex={true}
                renderDesc={false}
                renderAdd={false}
              />
            ))}
          </div>
        </div>
        <hr />
        {/* {card form} */}
        <div className={classes.flex}>
          <h3>payment method</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/* {card error} */}
                {cardError && <small style={{ color: "red" }}>{cardError}</small>}
                {/* {card element} */}
                <CardElement onChange={handleChange} />

                {/*price*/}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{display:"flex",gap:"10px"}}><p>Total Order |</p><CurrencyFormat amount={total} /></span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
