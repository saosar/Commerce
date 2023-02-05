import React from 'react';
import './ShopList.css'

function ShopList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { ShopList };