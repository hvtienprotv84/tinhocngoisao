import React, { useState } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faCompress, faSearchPlus, faEyeSlash, faShoppingCart, faChevronRight  } from '@fortawesome/free-solid-svg-icons';


function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { id: 1, name: 'Combo phím chuột giả cơ G21 chuyên game | Trắng - Đen, Led...', price: '7?,000₫' , priceold: '99,000₫' , image: 'https://product.hstatic.net/200000420363/product/mini_1030-02_253d32e93f1c4cf0b3ccde8d600523bc_large.png' },
    { id: 2, name: 'Chuột HP Wireless Z3700 (Bạc)', price: '?9,000₫' , priceold: '159,000₫' , image: 'https://product.hstatic.net/200000420363/product/mini_1650-02_b2d0df960db949fe85eb105bde0e1ef3_large.png' },
    { id: 3, name: 'Tản nhiệt CPU Coolmoon AS-600 Black RGB Sync All Main (Suppor...', price: '3?9,000₫' , priceold: '429,000₫' , image: 'https://product.hstatic.net/200000420363/product/chicken_plus-02_4f7402696e0c4fbcafea2f071c24b1c7_large.png' },
    { id: 4, name: 'Bàn phím cơ Gaming Newmen GM328 - Grey White | Blue Switch', price: '4?9,000₫' , priceold: '549,000₫' , image: 'https://product.hstatic.net/200000420363/product/frame_pc_3-02_7729ad605bd343a3a20a1110e41235d0_large.png' },
    { id: 5, name: 'Ghế công thái học Ergonomic TMS06 | Trắng', price: '1,?99,000₫' , priceold: '1,249,000₫' , image: 'https://product.hstatic.net/200000420363/product/assassin-02_2fe17ad6a23b4e3a9fafb77794ffe9d0_large.png' },
    { id: 6, name: 'Màn hình LCD 24 inch LG 24MP500-B FHD IPS FHD 75Hz...', price: '2,?90,000₫' , priceold: '2,290,000₫' , image: 'https://product.hstatic.net/200000420363/product/super_luce-02_7f1c907662ed4f4db5428bf31d3e90f7_large.png' },
    { id: 7, name: 'Chuột không dây Fuhlen M06s - Đen | Wireless 2.4G', price: '9?,000₫' , priceold: '129,000₫' , image: 'https://product.hstatic.net/200000420363/product/1660s_wh-02_4ecf18884a4445009e5a1fa8173be2ad_large.jpg' },
    { id: 8, name: 'Tai nghe Gaming Dare-U EH406 | Đen, Multi Led', price: '?29,000₫' , priceold: '299,000₫' , image: 'https://product.hstatic.net/200000420363/product/azir-02_7cb954a95c304e21a254ca9c62f4462f_large.png' },
    { id: 9, name: 'Chuột Gaming Fuhlen G90 ProX Green', price: '3?9,000₫' , priceold: '499,000₫' , image: 'https://product.hstatic.net/200000420363/product/aether-02_bf00beeed89d4c4a9f103ecf094af455_large.png' },
    { id: 10, name: 'Giá treo màn hình AOC AM400S - Silver | 17 - 34 inch', price: '7?9,000₫' , priceold: '829,000₫' , image: 'https://product.hstatic.net/200000420363/product/magic-02_288152086f814888b91132a3ae790f20_large.png' },
    { id: 11, name: 'Màn hình VSP IP2510W1 | 24.5 inch, Full HD, IPS, 100Hz, 5ms,...', price: '1,?70,000₫' , priceold: '1,890,000₫' , image: 'https://product.hstatic.net/200000420363/product/horserm4n-02_7deb6f1fbf4540cc89d7c2bd072eb527_large.png' },
    { id: 12, name: 'Mainboard ASRock X570S PG Riptide', price: '3,?90,000₫' , priceold: '3,690,000₫' , image: 'https://product.hstatic.net/200000420363/product/zero-02_6fc23805fb524276b26874a34ccd8b30_large.png' },
  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 6 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 5) % products.length);
  };

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  if (!products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className='ml-[79px] mt-[-180px]'>

        <div className='flex flex-row'>
            <img src='https://theme.hstatic.net/200000420363/1001226108/14/showinhinhanh1.png?v=109' alt=''/>
            <img className='ml-[12.5px]' src='https://theme.hstatic.net/200000420363/1001226108/14/showinhinhanh2.png?v=109' alt=''/>
            <img className='ml-[12.5px]' src='https://theme.hstatic.net/200000420363/1001226108/14/showinhinhanh3.png?v=109' alt=''/>
        </div>

        <div className='flex flex-row justify-center items-center mt-[50px]'>
            <div className='bg-[#f00] w-[158.68px] h-[45px] z-50 justify-center items-center flex text-white text-[24px] font-bold'>PC GAMING</div>
            <div className='bg-white w-[1217px] h-[45px]'></div>
        </div>
        <img className='w-[60px] h-[46px] absolute mt-[-45px] ml-[118.9px]' src='https://pngimg.com/d/red_arrow_PNG3.png' alt=''/>
    <div className='flex flex-row absolute mt-[-40px] ml-[830px]'>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>PC Gaming Standard</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>PC Thiết kế/ Đồ họa</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>PC Giả lập NOX</p>
        </div>
        <div className='border-[1px] border-[#ccc] rounded-[50px] hover:text-[#EB6154] cursor-pointer ml-[10px]'>
        <p className='text-[13px] ml-[15px] mr-[15px] mt-[5px] mb-[5px]'>Xem tất cả</p>
        </div>
    </div>

    <div className=" flex-col justify-center items-center hidden sm:inline-flex">
      <div className="flex justify-between mb-4">
        <button
          className="border-[1px] border-red-500 hover:bg-red-500 hover:text-white text-red-500 pt-[15px] pb-[15px] absolute left-[40px] top-[150px] z-50 font-bold py-2 px-2"
          onClick={handlePrev}
        >
          {/* Prev */}
          <FontAwesomeIcon className='rotate-180 text-[25px]' icon={faChevronRight} />

        </button>
        <button
          className="border-[1px] border-red-500 hover:bg-red-500 hover:text-white text-red-500 pt-[15px] pb-[15px] absolute left-[1460px] top-[150px] z-50 font-bold py-2 px-2 "
          onClick={handleNext}
        >
          {/* Next */}
          <FontAwesomeIcon className='text-[25px]' icon={faChevronRight} />

        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-[-50px]">
        {products
          .concat(products)
          .slice(currentIndex, currentIndex + 6)
          .map((product, index) => (
            <div
              key={product.id}
              className={`  ${index < 5 ? 'mb-4' : ''}`}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className=' max-h-[450px] relative ml-[2px]'>
              <a href={`/product${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-full max-w-[226.66px] max-h-[280px] object-cover pt-[35px] pb-[20px]" />
                <h2 className="text-[14px] text-center font-arial w-[227px] h-[50px]">{product.name}</h2>
                <div className='flex justify-center h-[50px]'>
                  <p className="text-[14px] font-arial text-red-600 ">{product.price}</p><span className="text-[14px] font-arial italic pl-[10px]"> <s>{product.priceold}</s></span>
                </div>
                </a>
                {hoveredProduct === product.id && (
              <div className="flex justify-center absolute bottom-0 left-0 w-full ">
                <div className="w-full flex flex-col justify-center mt-[-450px] ml-[200px]">
                  <div className="mr-2 cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center">
                    <FontAwesomeIcon  className='flex justify-center text-white' icon={faCompress}/>
                  </div>
                  <div className="mr-2 cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center mt-[5px]">
                    <FontAwesomeIcon className='text-white' icon={faSearchPlus} />
                  </div>
                  <div className="cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center mt-[5px]">
                    <FontAwesomeIcon className='text-white' icon={faEyeSlash} />
                  </div>
                  <div className="cursor-pointer bg-[#000000b3] rounded-full p-2 w-[30px] flex justify-center items-center mt-[5px]">
                    <FontAwesomeIcon className='text-white' icon={faShoppingCart} />
                  </div>
                  {/* <div className="cursor-pointer">
                    <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} style={{ color: "red" }} />
                  </div> */}
                </div>
              </div>
              )}

              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default ProductSlider;
