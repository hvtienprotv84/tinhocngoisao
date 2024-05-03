import React, { useState } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faCompress, faSearchPlus, faEyeSlash, faShoppingCart, faChevronRight  } from '@fortawesome/free-solid-svg-icons';


function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { id: 1, name: 'Combo phím chuột giả cơ G21 chuyên game | Trắng - Đen, Led...', price: '7?,000₫' , priceold: '99,000₫' , image: '//product.hstatic.net/200000420363/product/wh_1519fa12646d4b8a9f66bdf15ca3153a_medium.jpg' },
    { id: 2, name: 'Chuột HP Wireless Z3700 (Bạc)', price: '?9,000₫' , priceold: '159,000₫' , image: '//product.hstatic.net/200000420363/product/_new_-anh-sp-web_37d7fa2053f04f78ac88cbe4c7791dd5_medium.jpg' },
    { id: 3, name: 'Tản nhiệt CPU Coolmoon AS-600 Black RGB Sync All Main (Suppor...', price: '3?9,000₫' , priceold: '429,000₫' , image: '//product.hstatic.net/200000420363/product/tai_xuong__77__e0abc93499934950b3016bc9b9d35e5d_medium.png' },
    { id: 4, name: 'Bàn phím cơ Gaming Newmen GM328 - Grey White | Blue Switch', price: '4?9,000₫' , priceold: '549,000₫' , image: '//product.hstatic.net/200000420363/product/4__3__3fc5cca98eb44dbc905a1ada616c6f15_medium.jpg' },
    { id: 5, name: 'Ghế công thái học Ergonomic TMS06 | Trắng', price: '1,?99,000₫' , priceold: '1,249,000₫' , image: '//product.hstatic.net/200000420363/product/gh.tms06.tr_a64e8aa7ad0044dd86dfe36efa35ea6d_medium.jpg' },
    { id: 6, name: 'Màn hình LCD 24 inch LG 24MP500-B FHD IPS FHD 75Hz...', price: '2,?90,000₫' , priceold: '2,290,000₫' , image: '//product.hstatic.net/200000420363/product/l.24.lg.24mp500-b_5759502fb17e4f4e8d8e9c78b4f0e235_medium.jpg' },
    { id: 7, name: 'Chuột không dây Fuhlen M06s - Đen | Wireless 2.4G', price: '9?,000₫' , priceold: '129,000₫' , image: '//product.hstatic.net/200000420363/product/chuot-khong-day-fuhlen-m06s-8_f187ea68b73444c394eb353975741712_medium.jpg' },
    { id: 8, name: 'Tai nghe Gaming Dare-U EH406 | Đen, Multi Led', price: '?29,000₫' , priceold: '299,000₫' , image: '//product.hstatic.net/200000420363/product/tai-nghe-gaming-dare-u-eh406-4_bc8a67ed4fd24f619d438ba6b1806aa4_medium.jpg' },
    { id: 9, name: 'Chuột Gaming Fuhlen G90 ProX Green', price: '3?9,000₫' , priceold: '499,000₫' , image: '//product.hstatic.net/200000420363/product/2_6f7c314667a4447a92214ed0c3a83f2c_medium.jpg' },
    { id: 10, name: 'Giá treo màn hình AOC AM400S - Silver | 17 - 34 inch', price: '7?9,000₫' , priceold: '829,000₫' , image: '//product.hstatic.net/200000420363/product/_new_-anh-sp-web_670e6445c7804ebb9bd0b4a619828b95_medium.jpg' },
    { id: 11, name: 'Màn hình VSP IP2510W1 | 24.5 inch, Full HD, IPS, 100Hz, 5ms,...', price: '1,?70,000₫' , priceold: '1,890,000₫' , image: '//product.hstatic.net/200000420363/product/l.25.vsp.ip2510w1-03_355b0f5cc14d446294f41ef73ae49040_medium.png' },
    { id: 12, name: 'Mainboard ASRock X570S PG Riptide', price: '3,?90,000₫' , priceold: '3,690,000₫' , image: '//product.hstatic.net/200000420363/product/m.ar.x570s.pg.riptide_0a6e232e46a7421ab0fd5e7b6266a49f_medium.jpg' },
  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
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
    <div className=" flex-col justify-center items-center hidden sm:inline-flex">
      <div className="flex justify-between mb-4">
        <button
          className="border-[1px] border-red-500 hover:bg-red-500 hover:text-white text-red-500 pt-[15px] pb-[15px] absolute left-[30px] top-[400px] z-50 font-bold py-2 px-2"
          onClick={handlePrev}
        >
          {/* Prev */}
          <FontAwesomeIcon className='rotate-180 text-[25px]' icon={faChevronRight} />

        </button>
        <button
          className="border-[1px] border-red-500 hover:bg-red-500 hover:text-white text-red-500 pt-[15px] pb-[15px] absolute left-[1440px] top-[400px] z-50 font-bold py-2 px-2"
          onClick={handleNext}
        >
          {/* Next */}
          <FontAwesomeIcon className='text-[25px]' icon={faChevronRight} />

        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {products
          .concat(products)
          .slice(currentIndex, currentIndex + 12)
          .map((product, index) => (
            <div
              key={product.id}
              className={`  ${index < 5 ? 'mb-4' : ''}`}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className=' hover:shadow-lg hover:shadow-red-500 max-h-[450px] relative'>
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
  );
}

export default ProductSlider;
