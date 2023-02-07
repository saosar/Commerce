import React from 'react';
import { ShopContext } from '../ShopContext';

    const Product = (props) => {
        const { cart, setCart } = React.useContext(ShopContext);
      
        const addToCart = () => {
          setCart([...cart, { id: props._id, name: props.name, price: props.price }]);
        };
      
        return (
          <div>
            <h2> name: {props.name}</h2>
            <p>Price: {props.price}</p>
            <button onClick={addToCart}>Add to cart</button>
          </div>
        );
      };

export { Product };

