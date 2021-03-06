import React from 'react';
import CartItem from './CartItem.jsx';

const CartItems = (props) => {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {props.cartItemsList.map(item =>
          <CartItem
          key={item.id}
          name={item.product.name}
          priceInCents={item.product.priceInCents}
          quantity={item.quantity}
          />)}
      </div>
    </div>
  )
}

export default CartItems;
