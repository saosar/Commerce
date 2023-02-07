import React from 'react';
import './Cart.css';
import { ShopContext } from '../ShopContext';

function Cart() {
    const { cart } = React.useContext(ShopContext);
    return (
      <div>
        <h2>My Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              {item.name} ({item.price})
            </li>
          ))}
        </ul>
      </div>
    );
  };


export { Cart };