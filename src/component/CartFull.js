import React from 'react';

const Cart = ({ cartItems, totalPrice, removeFromCart, clearCart }) => {
  return (
    <div className="mt-[-2400px] p-4 bg-gray-200 ml-[-100px]">
      <h2 className="text-lg font-bold">Giỏ hàng</h2>
      {cartItems.length > 0 ? (
        <div>
          <p>Tổng số tiền: ${totalPrice}</p>
          {cartItems.map((item) => (
            <div key={item.id}>
            
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Giá3: ${item.price}</p>
              <button
                className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeFromCart(item)}
              >
                Xóa
              </button>
            </div>
          ))}
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={clearCart}
          >
            Xóa tất cả
          </button>
        </div>
      ) : (
        <p>Giỏ hàng trống</p>
      )}
    </div>
  );
};

export default Cart;
