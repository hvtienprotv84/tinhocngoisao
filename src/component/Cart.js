import React, { useState, useEffect, useCallback } from 'react';
import Menu2 from '../Menu2';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCompress, faSearchPlus, faEyeSlash, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
const productsData = [
  {
    id: 1,
    name: "Màn hình MSI Pro MP241X | 23.8 inch, FHD, VA, 75Hz, 8ms..",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-lcd-24-msi-pro-mp241x_3150a28c5cde45aeacc276c0db337078_large.png",
    quantity: 100,
    priceold: '1,850,000₫',
    price: 3934000
  },
  {
    id: 2,
    name: "Màn hình VSP IP2403SB Trắng | 23.8 inch, Full HD, IPS, 100Hz..",
    imgUrl: "https://product.hstatic.net/200000420363/product/710__ip2403sb_white_01__1__4e0edff0158c463fad9b4c30923554ae_large.jpg",
    quantity: 1,
    price: 1790000
  },
  {
    id: 3,
    name: "Màn hình VSP IP2510W1 | 24.5 inch, Full HD, IPS, 100Hz, 5ms...",
    imgUrl: "https://product.hstatic.net/200000420363/product/710__ip2510w1-1_4384f7d29d284792b735b91a07105da1_large.jpg",
    quantity: 1,
    price: 1840000
  },
  {
    id: 4,
    name: "Màn hình Gaming MSI Pro MP251 | 24.5 inch, Full HD, IP...",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-gaming-msi-pro-mp251-4_2a8cbd585acf4735ad35187cf045b149_large.jpg",
    quantity: 1,
    price: 2140000
  },
  {
    id: 5,
    name: "Màn hình Gaming Asus VA24EHF | 23.8 inch, Full HD,...",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-gaming-23.8-asus-va24ehf-_full-hd_-ips_-100hz_-1ms_-phang_4_4b36e0d5e79d479896d54d653a96b93c_large.jpg",
    quantity: 1,
    price: 2350000
  },
  {
    id: 6,
    name: 'Màn Hình Gaming LG 24GQ50F-B | 23.8", FHD, VA, 165Hz, 1m...',
    imgUrl: "https://product.hstatic.net/200000420363/product/l.24.lg.24gq50f-b_276061733eb84a2983118d3a58a0ac46_large.jpg",
    quantity: 1,
    price: 2680000
  },
  {
    id: 7,
    name: "Màn hình Samsung LS27C360EAEXXV | 27 inch,...",
    imgUrl: "https://product.hstatic.net/200000420363/product/2_56f3627a5f414ef1aad1c830f9a28daa_large.jpg",
    quantity: 1,
    price: 2690000
  },
  {
    id: 8,
    name: "Màn hình Xiaomi Redmi X27G P27FBA-RX | 27 inch, Full HD,...",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-xiaomi-redmi-x27g-p27fba-rx-2_b892e3e279ca4fb588abd542ee36a879_large.jpg",
    quantity: 1,
    price: 2990000
  },
  {
    id: 9,
    name: "Màn hình AOC 27G2SP/74 | 27 inch, Full HD, IPS, 165Hz, 1ms..",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-aoc-27g2sp-74--3_350edf7265b84ddeb19544f923019655_large.jpg",
    quantity: 1,
    price: 4480000
  },
  {
    id: 10,
    name: "Màn Hình Samsung Odyssey G4 LS25BG400EEXXV | 25 inch,...",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-gaming-samsung-ls25bg400eexxv_44c7e43e2234497387b861edf5b0a900_large.jpg",
    quantity: 1,
    price: 5390000
  },
  {
    id: 11,
    name: "Màn hình Samsung Odyssey G4 LS27BG400EEXXV | 27 inch,...",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-gaming-samsung-odyssey-ls27bg400eexxv_9c4dddaaf82345ca81e8b671fd0ead8d_large.png",
    quantity: 1,
    priceold: '5,690,000₫',
    price: 5590000
  },
  {
    id: 12,
    name: "Màn hình Samsung Odyssey G55C cong QHD...",
    imgUrl: "https://product.hstatic.net/200000420363/product/man-hinh-samsung-odyssey-g55c-cong-qhd-ls32cg552eexxv-7_fce3f7d3ef214f1f97cf38ab6e4f14d4_large.jpg",
    quantity: 1,
    price: 6190000
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };
  
  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity; // Giá * số lượng
    });
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const updateCartItems = useCallback((updatedItems) => {
    setCartItems(updatedItems);
  }, []);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity++;
      updatedItems[existingItemIndex].totalprice = updatedItems[existingItemIndex].quantity * updatedItems[existingItemIndex].price;
      updateCartItems(updatedItems);
    } else {
      updateCartItems([...cartItems, { ...product, quantity: 1, totalprice: product.price }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const showInfo = () => {
    setShowProductInfo(true);
  };

  const updateQuantity = (item, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (Number.isInteger(quantity) && quantity > 0) {
      const updatedItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: quantity, totalprice: quantity * cartItem.price };
        }
        return cartItem;
      });
      updateCartItems(updatedItems);
    }
  };


  const groupedCartItems = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += item.quantity;
    return acc;
  }, {});
  const groupedCartArray = Object.values(groupedCartItems);


  
    const renderProducts = () => {
      const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
      };
  
      return (
        <div>
        <div className='absolute ml-[-20px] mt-[-115px]'>
        <div className='flex flex-row justify-center items-center mt-[50px]'>
            <div className='bg-[#f00] w-[158.68px] h-[45px] z-50 justify-center items-center flex text-white text-[24px] font-bold'>MÀN HÌNH</div>
            <div className='bg-white w-[1217px] h-[45px]'></div>
        </div>
        <img className='w-[60px] h-[46px] absolute mt-[-45.5px] ml-[118px]' src='https://pngimg.com/d/red_arrow_PNG3.png' alt=''/>
        <div className='flex flex-row absolute mt-[-40px] ml-[510px]'>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Màn hình 22"</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Màn hình 24"</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Màn hình 27"</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Màn hình 75 Hz</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Màn hình 100 Hz</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Màn hình 144 Hz</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Xem tất cả</p>
        </div>
        </div>
    </div>
        <ul style={gridStyle} className='mt-[30px] ml-[-20px]'>
          {products.map((product , index) => (
            <div className=' flex flex-row text-center'
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
                >
            <li key={product.id} className={`bg-white p-3 ${
        index !== products.length - 1 ? 'border-r-[1px] border-[#eaeaea]' : ''
      } ${index === 5 || index === 11 ? 'border-r-0' : ''}`}
    >
              <img
                src={product.imgUrl}
                alt={product.name}
                className="w-[204.5px] h-[204.5px] max-w-[204.5px] max-h-[204.5px] mb-2"

              />
              <h4 className='text-[14px]'>{product.name}</h4>
              {/* <p>{product.description}</p> */}
              <div className='flex flex-row justify-center'>
              {/* <p className='text-[14px] text-[#d21212]'>{product.price}</p> */}
              <p className='text-[14px] text-[#d21212] mt-[10px] mb-[10px]'>
              {product.price.toLocaleString("vi-VN", { style: "decimal" }).replace(/₫$/, '')}đ
              </p>
              <s className='text-[13px] text-[#999999] italic ml-[10px]'>{product.priceold}</s>
              </div>
              {index === 0 && (
            <div className='flex justify-center items-center absolute top-[285px]'>
                <span className='text-[13px] text-[#fff] absolute ml-[10px]'>Giảm 5%</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAjCAYAAABmSn+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlEODYzNUUwNTQzRDExRTc5Q0ZGREVFRTJCQTZCOEYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlEODYzNUUxNTQzRDExRTc5Q0ZGREVFRTJCQTZCOEYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUQ4NjM1REU1NDNEMTFFNzlDRkZERUVFMkJBNkI4RjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUQ4NjM1REY1NDNEMTFFNzlDRkZERUVFMkJBNkI4RjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HIOyuAAADjElEQVR42uybP0gbYRjG3/tyl8sfEhN6qLX+ayEOUqTt0qGlSylaKl1Ki1YRRCkOxakqKDoEpOhUBxEUHRzM4FKhOCg4ZHRQXKpi1YoiCBVj0qSnucv1u6sRTc9EMN45vA+8JPnI9Px4n/d7j4RRFAUu0sTEhPZqOTr6dCcY/Hxvaoq1HhwAKqsSaa3RmqT1hVZEPWQuA4YPhRZkQXjotlqheHYWBHpOQiG0NPvapFVN6zu5xJftxy5XBcuyYHE6IdLQAKG5OUh0dACTk4NWZld3aX2j5b4MmGcMx1lUMBzHgZV2DefxgKWtDZyrq+Do7gbG5UJLswunNSMY2/7+uySUUzAn7zlBAIffD96NDbC3twPjcKCt2dHbjGAUjnt5tluSpX62WCzadwgF5OzrA+/6OthbW4HhebT2airLBCZP8nhuq2BSoahnqSL5+eAcGAC+qQmtvZpsacFYw+FqNhlbKTGW7JZUxWdmQBwaQmuvKDYtmFisTtGJMbVbCPmfaWJvT7u1QZorOOpyStsxktf7WG+26MWYCkOFosJBXSMYulzeh5wcR2qMafuMToz96e/XYgx1zWDcOzsNqbexJBiGYc531vw8RHt60E0jZgzh+dcWnaGfGmNKOAyRmhqA42N087o7JhAI8FJBgS/d7pLU75YWkDc30UkjwLh2d6uI3U4yDX1xbAyOAgF00agos4lio5xhd5FXViBKt3yUgR0jC8LTdLuLIoraXFGiUXTQKDBfR0Zy5cLCW+liLNrWBtLSErpnJBjP1tYH7gSG3u5yPDUF4uAgOmd4lDmdby7aXRI7OxBRH1DiIxfjwUglJeW6u4ssQ6SuDpT9fXTNaDDBzs4nkJtr1dtdYr29EA8G0TEzrsusorSAztBXgcT8fnTLrI5J5OU9T40xcngIkfp6LcpQJoBZqK11SGVl+ed2Fxph0eZmSGxvo1NmgVG83kbW7WbOxpg8Oqpdj1EmgkkIwvuzMUaWl0GkiyTKZDByaemD026RJIg3NmqPXlAmglmuqqqQfT5HsluYri5IrKygO2aDiRcVfbTabFq38NPTkBgfR2fMlUhOYuyFBmVvDxicKzdBa+QXw/BSeXmxlRDtV5QQDqMt5muSHFRW1pLiYuIeHARmcREtMV8/aQ2QuM/X4FpYAH54GC25GVBe0Qqz4PU+8nR24qN8Ewc9rR/w7x9lA7QO1cO/AgwAUe0KvRlpo8UAAAAASUVORK5CYII="
                  alt="Discount"
                  className="w-[88.46px] h-[32.56px]"
                />
            </div>
              )}
              {index === 10 && (
                      <div className='flex justify-center items-center absolute top-[605px]'>
                          <span className='text-[13px] text-[#fff] absolute ml-[10px]'>Giảm 2%</span>
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAjCAYAAABmSn+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlEODYzNUUwNTQzRDExRTc5Q0ZGREVFRTJCQTZCOEYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlEODYzNUUxNTQzRDExRTc5Q0ZGREVFRTJCQTZCOEYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUQ4NjM1REU1NDNEMTFFNzlDRkZERUVFMkJBNkI4RjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUQ4NjM1REY1NDNEMTFFNzlDRkZERUVFMkJBNkI4RjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HIOyuAAADjElEQVR42uybP0gbYRjG3/tyl8sfEhN6qLX+ayEOUqTt0qGlSylaKl1Ki1YRRCkOxakqKDoEpOhUBxEUHRzM4FKhOCg4ZHRQXKpi1YoiCBVj0qSnucv1u6sRTc9EMN45vA+8JPnI9Px4n/d7j4RRFAUu0sTEhPZqOTr6dCcY/Hxvaoq1HhwAKqsSaa3RmqT1hVZEPWQuA4YPhRZkQXjotlqheHYWBHpOQiG0NPvapFVN6zu5xJftxy5XBcuyYHE6IdLQAKG5OUh0dACTk4NWZld3aX2j5b4MmGcMx1lUMBzHgZV2DefxgKWtDZyrq+Do7gbG5UJLswunNSMY2/7+uySUUzAn7zlBAIffD96NDbC3twPjcKCt2dHbjGAUjnt5tluSpX62WCzadwgF5OzrA+/6OthbW4HhebT2airLBCZP8nhuq2BSoahnqSL5+eAcGAC+qQmtvZpsacFYw+FqNhlbKTGW7JZUxWdmQBwaQmuvKDYtmFisTtGJMbVbCPmfaWJvT7u1QZorOOpyStsxktf7WG+26MWYCkOFosJBXSMYulzeh5wcR2qMafuMToz96e/XYgx1zWDcOzsNqbexJBiGYc531vw8RHt60E0jZgzh+dcWnaGfGmNKOAyRmhqA42N087o7JhAI8FJBgS/d7pLU75YWkDc30UkjwLh2d6uI3U4yDX1xbAyOAgF00agos4lio5xhd5FXViBKt3yUgR0jC8LTdLuLIoraXFGiUXTQKDBfR0Zy5cLCW+liLNrWBtLSErpnJBjP1tYH7gSG3u5yPDUF4uAgOmd4lDmdby7aXRI7OxBRH1DiIxfjwUglJeW6u4ssQ6SuDpT9fXTNaDDBzs4nkJtr1dtdYr29EA8G0TEzrsusorSAztBXgcT8fnTLrI5J5OU9T40xcngIkfp6LcpQJoBZqK11SGVl+ed2Fxph0eZmSGxvo1NmgVG83kbW7WbOxpg8Oqpdj1EmgkkIwvuzMUaWl0GkiyTKZDByaemD026RJIg3NmqPXlAmglmuqqqQfT5HsluYri5IrKygO2aDiRcVfbTabFq38NPTkBgfR2fMlUhOYuyFBmVvDxicKzdBa+QXw/BSeXmxlRDtV5QQDqMt5muSHFRW1pLiYuIeHARmcREtMV8/aQ2QuM/X4FpYAH54GC25GVBe0Qqz4PU+8nR24qN8Ewc9rR/w7x9lA7QO1cO/AgwAUe0KvRlpo8UAAAAASUVORK5CYII="
                            alt="Discount"
                            className="w-[88.46px] h-[32.56px]"
                          />
                      </div>
              )}
              {/* <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product)}
              >
                Thêm vào giỏ hàng
              </button> */}
            </li>
            
            {hoveredProductId === product.id && (
                <div className="absolute ml-[190px] mt-[40px] z-50">
                <div className="w-full flex flex-col justify-center">
                  <div className="mr-2 cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center">
                    <FontAwesomeIcon  className='flex justify-center text-white' icon={faCompress}/>
                  </div>
                  <div className="mr-2 cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center mt-[5px]">
                    <FontAwesomeIcon className='text-white' icon={faSearchPlus} />
                  </div>
                  <div className="cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center mt-[5px]">
                    <FontAwesomeIcon className='text-white' icon={faEyeSlash} />
                  </div>
                  <div className="cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center mt-[5px]" onClick={() => addToCart(product)}>
                    <FontAwesomeIcon className='text-white' icon={faShoppingCart} />
                  </div>
                  {/* <div className="cursor-pointer">
                    <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} style={{ color: "red" }} />
                  </div> */}
                </div>
                </div>
              )}
          
            </div>
          ))}
        </ul>
        </div>
      );
    };
  
    return (
      <div className="container mx-auto">
      <div className="flex justify-end">
        <div className="relative flex justify-center items-center top-[-2390px] left-[-95px]" onClick={showInfo}>
          <button className=" text-white font-bold py-2 px-4 rounded ">
            {/* Giỏ Hàng */}
            <img className='w-[28px] h-[28px]' src='https://file.hstatic.net/200000420363/file/cart_57531e43108d48c6ab3281bbbc813beb.png' alt=''/>
          </button>
          {cartItems.length > 0 ? (
            <div className="absolute top-[2px] right-0 left-[28px] h-[22px] w-[22px] bg-[#d31311] text-white text-xs rounded-full flex items-center justify-center">
              {cartItems.length}
            </div>
          ) : (
            <div className="absolute top-[2px] right-0 left-[28px] h-[22px] w-[22px] bg-[#d31311] text-white text-xs rounded-full flex items-center justify-center">
              0
            </div>
          )}
          <span className='text-[14px] font-bold ml-[-5px] text-[#7c7575] cursor-pointer'>Giỏ hàng</span>
        </div>
      </div>
      {showProductInfo && (
        <div>
          <div className=' absolute ml-[-100px]'>
          <Menu2/>
          </div>
        <div className="mt-[-2330px] h-[3200px] z-[9999] p-4 bg-red-200 ml-[-100px]">
          <h2 className="text-[24px] text-[#333333] font-normal ml-[60px] font-sans">GIỎ HÀNG</h2>
          {cartItems.length > 0 ? (
            
            <div>
            
            <div className='ml-[992.5px] text-[14px] flex flex-row mt-[15px] absolute'>
              <p className='flex flex-row justify-start items-start'>Tổng<span className='text-[24px] ml-[330px] mt-[-8px] max-w-[145.79px] absolute'>{totalPrice}₫</span></p>
                <div className='flex flex-col'>
                <div className='flex flex-row ml-[-30px] mt-[40px]'>
                <a href='/'>
                  <div className='bg-[#e02027] w-[205.23px] text-white h-[41.6px] rounded-[50px] border-[1px] cursor-pointer border-[#e02027] font-sans font-semibold hover:bg-white hover:text-[#e02027] flex items-center justify-center'>
                        <span className='text-[14px]'>TIẾP TỤC MUA SẮM</span>
                  </div>
                </a>
                  <div className=' ml-[20px] w-[223.45px] text-[#e02027] h-[41.6px] rounded-[50px] border-[1px] cursor-pointer border-[#e02027] font-sans font-semibold flex items-center justify-center'>
                        <span className='text-[14px]'>THANH TOÁN</span>
                  </div>
                </div>
                  <div className='ml-[-30px] mt-[20px]'>
                    <p className='text-[14px]'>Chú Thích</p>
                    <textarea
                    name="note"
                    className="form-control resize-none outline-none border-[#ccc] border-[1px] p-2 pl-[15px] w-96 h-32"
                    placeholder="Bạn muốn mô tả rõ hơn về đơn hàng..."
                    id="CartSpecialInstructions"
                    ></textarea>
                    <div className='max-w-[436.66px] max-h-[24.5px]'>
                      <p className='text-[17px]'>MUA TRẢ GÓP QUA THẺ TÍN DỤNG</p>
                      <hr/>
                      <div>
                        <div className='flex flex-row items-center mt-[10px]'>
                        <img className='w-[16px] h-[16px]' src='https://theme.hstatic.net/200000420363/1001226108/14/check-ser.png?v=128' alt=''/>
                        <p className='ml-[10px]'>Ấn Thanh Toán, nhập thông tin</p>
                        </div>
                        <div className='flex flex-row items-center justify-center mt-[-10px]'>
                        <img className='w-[16px] h-[16px]' src='https://theme.hstatic.net/200000420363/1001226108/14/check-ser.png?v=128' alt=''/>
                        <p className='ml-[10px] mt-[20px]'>Chọn hình thức: Thanh toán thẻ - Trả góp. Lưu ý: LH nhân viên để kiểm tra tồn kho sản phẩm trước khi thanh toán</p>
                        </div>
                        <div className='flex flex-row items-center mt-[-10px]'>
                        <img className='w-[16px] h-[16px]' src='https://theme.hstatic.net/200000420363/1001226108/14/check-ser.png?v=128' alt=''/>
                        <p className='ml-[10px] mt-[20px]'>Chọn loại thẻ phù hợp với nhu cầu, nhập thông tin, sau đó tiến hành thanh toán</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

              <ul className='ml-[60px] mt-[30px]'>
              <hr className='w-[903.33px] h-[43.03px]'/>
              <li className='flex flex-row ml-[40px] mt-[-30px]'>
              <div className='flex flex-col justify-center items-center'>
                <p>Sản phẩm</p>
              </div>
              <div className='flex flex-col ml-[130px] items-center'>
                <p>Mô Tả</p>
              </div>
              <div className='flex flex-col ml-[152px] items-center'>
                <p>Giá</p>
              </div>
              <div className='flex flex-col ml-[110px] items-center'>
                <p>Số Lượng</p>
              </div>
              <div className='flex flex-col ml-[100px] items-center'>
                <p>Tổng</p>
              </div>
              <div className='flex flex-col items-center text-center ml-[85px]'>
                <p>Xóa</p>
              </div>
            </li>
              </ul>
            
              {groupedCartArray.map((item) => (
                <div>
                <hr className=' w-[903.33px] h-[43.03px] mt-[10px] ml-[60px]'/>

                <div className='flex flex-row mt-[-30px] ml-[75px]'>          
                <div key={item.id} className='flex flex-row '>
              <div className='flex flex-col justify-center items-center'>
                {/* <p>Sản phẩm</p> */}
                <img
                src={item.imgUrl}
                alt={item.name}
                className="w-[100px] h-[100px] max-w-[200px] max-h-[200px] mb-2"
              />
              </div>
              <div className='flex flex-col ml-[50px] text-[14px] items-center w-[195.83px]'>
                  {/* <p>Tên Sản Phẩm</p> */}
                  <h3>{item.name}</h3>
              </div>
              <div className='flex flex-col text-[20px] ml-[40px] items-center'>
                  {/* <p>Giá</p> */}
                  <p>{item.price}₫</p>
              </div>
              <div className='flex flex-col ml-[88px] items-center'>
                  {/* <p>Số lượng</p> */}
                  <input className=' w-[50px] outline-none border-[#7b7b7b] border-[1px] text-center h-[30px]'
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item, e.target.value)}
                  />
                </div>
                <div className='flex flex-col ml-[75px] max-w-[150.55px] items-center text-[20px]'>
                {/* <p>Tổng</p> */}
                <p className='w-[99.25px] max-w-[150.55px]'>{item.totalprice}₫</p>
                </div>
                    <div className='flex flex-col items-center text-center ml-[65px] mt-[8px]'>
                    {/* <p>Xóa</p> */}
                      <FontAwesomeIcon icon={faTrash} className='cursor-pointer hover:text-[#eb6154]' onClick={() => removeFromCart(item)}/>
                    </div>
                </div>
                </div>
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
            <div className='flex flex-col items-center justify-center mt-[20px]'>
                <img src='https://theme.hstatic.net/200000420363/1001226108/14/empty_cart.png?v=128' alt=''/>
                <span className='mt-[15px]'>Không có sản phẩm nào trong giỏ hàng của bạn</span>
                <a href='/'>
                  <div className='bg-[#e02027] mt-[15px] ml-[-10px] w-[223.45px] text-white h-[41.6px] rounded-[50px] border-[1px] cursor-pointer border-[#e02027] font-sans font-semibold hover:bg-white hover:text-[#e02027] flex items-center justify-center'>
                      <span className='text-[14px]'>TIẾP TỤC MUA HÀNG</span>
                  </div>
                </a>
            </div>
          )}
        </div>
        {/* <div className='z-50 absolute ml-[-100px]'>
          <Footer/>
          </div> */}
        </div>
      )}
      <div className="mt-[200px]">
        {/* <h2 className="text-lg font-bold">Danh sách sản phẩm2</h2> */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
        >
          <div>{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;