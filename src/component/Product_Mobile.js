import React from 'react';

const products = [
  {
    id: 1,
    imageSrc: "https://product.hstatic.net/200000420363/product/mini_1030-02_54d0abe9632c41ba9abe2ff9ab159469_large.png",
    productName: "PC Gaming STAR CHICKEN MINI | GT 103...",
    price: "6,700,000₫",
    price2: "7,286,000₫"

  },
  {
    id: 2,
    imageSrc: "https://product.hstatic.net/200000420363/product/mini_1650-02_b2d0df960db949fe85eb105bde0e1ef3_large.png",
    productName: "PC Gaming STAR CHICKEN MINI | GTX...",
    price: "9,120,000₫",

  },
  {
    id: 3,
    imageSrc: "https://product.hstatic.net/200000420363/product/chicken_plus-02_4f7402696e0c4fbcafea2f071c24b1c7_large.png",
    productName: "PC Gaming STAR CHICKEN PLUS White |...",
    price: "10,360,000₫",

  },
  {
    id: 4,
    imageSrc: "https://product.hstatic.net/200000420363/product/frame_pc_3-02_7729ad605bd343a3a20a1110e41235d0_large.png",
    productName: "PC Gaming STAR CYPHER | I3 12100F, RTX 3050,...",
    price: "11,499,000₫",
  },
  {
    id: 5,
    imageSrc: "https://product.hstatic.net/200000420363/product/assassin-02_e947f700eb9a4ebbb0f3c3395edf234f_large.png",
    productName: "PC Gaming STAR CHICKEN ASSASSIN | R...",
    price: "12,180,000₫",
  },
  {
    id: 6,
    imageSrc: "https://product.hstatic.net/200000420363/product/super_luce-02_7f1c907662ed4f4db5428bf31d3e90f7_large.png",
    productName: "PC Gaming STAR CHICKEN SUPER LUCE...",
    price: "12,396,000₫",
  }
];

const Product = ({ imageSrc, productName, price, price2  }) => (
  <div className="w-1/2 md:w-1/4 mt-[10px] pl-[4px]">
  <div className='bg-white w-[185px] h-[276.4px]'>
    <img src={imageSrc} alt={productName} className="pt-[10px] ml-[10px] w-[162.4px] h-[162.4px] max-w-[162.4px] max-h-[162.4px] mb-1" />
    <h3 className=" text-center text-[13px] w-[150px] ml-[10px] mt-[10px]">{productName}</h3>
    <div className='flex flex-row items-center justify-center'>
    <p className=" text-center text-[14px] text-[#d21212] ml-[10px] pb-[20px] mt-[10px]">{price}</p><s className="mt-[10px] text-[#999999] text-center ml-[10px] text-[13px] pb-[20px]"> {price2}</s>
    </div>
    </div> 
  </div>
);

const ProductGrid = () => (
  <div className="flex flex-wrap mt-[-185px]">
    {products.map(product => (
      <Product 
        key={product.id}
        imageSrc={product.imageSrc}
        productName={product.productName}
        price={product.price}
        price2={product.price2}
      />
    ))}

    <div className='absolute ml-[7px] mt-[-100px]'>
      <div className='bg-[#e02027] w-[376.4px] h-[45px] flex items-center'>
        <span className='p-[10px] text-[24px] font-bold text-white'>PC GAMING</span>
      </div>
      <div className='bg-white w-[376.4px] h-[45px] flex items-center'>
      
      <div className='flex flex-row text-[13px]'>
      <div className='bg-white  ml-[5px] rounded-[50px] pl-[15px] pr-[15px] p-[5px] border-[1px] border-gray-400'>
        <span>PC Gaming Standard</span>
        </div>
        <div className='bg-white rounded-[50px] pl-[15px] pr-[15px] p-[5px] border-[1px] border-gray-400'>
        <span> PC Thiết kế/Đồ họa</span>
        </div>
      </div>

      </div>
    </div>

    <div>
      <div className='bg-white w-[376.4px] h-[44px] ml-[7px] flex items-center justify-center mt-[10px]'>
      <div className='flex flex-row'>
        <span className='text-[14px] mt-[5px]'>Xem tất cả</span><img className='w-[15px] h-[30px] mt-[1px]' src='https://www.svgrepo.com/download/310612/caret-right.svg' alt=''/>
        </div>
      </div>
    </div>
  
  </div>


);

export default ProductGrid;
