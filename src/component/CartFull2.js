import React from 'react';
import CartPage from '.component/CartFull';

function App() {
  const cartItems = [
    {
      id: 1,
      name: 'Áo thun',
      description: 'Áo thun màu xanh',
      price: 10,
    },
    {
      id: 2,
      name: 'Quần jeans',
      description: 'Quần jeans màu đen',
      price: 20,
    },
    {
      id: 3,
      name: 'Giày thể thao',
      description: 'Giày thể thao màu trắng',
      price: 30,
    },
  ];

  return (
    <div>
      <h1>Ứng dụng mua sắm</h1>
      <CartPage cartItems={cartItems} />
    </div>
  );
}

export default App;