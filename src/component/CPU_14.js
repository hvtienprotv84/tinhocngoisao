import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faSearchPlus, faEyeSlash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CPU_14() {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const handleMouseEnter = (productId) => {
        setHoveredProduct(productId);
      };
    
      const handleMouseLeave = () => {
        setHoveredProduct(null);
      };
    const products = [
        { id: 1, name: 'CPU Intel Core i3 14100 Box chính hãng | 3.5 GHz, 4 Cores 8 Threads, LGA1700', price: '3,890,000₫' , image: 'https://product.hstatic.net/200000420363/product/i3-14th_6ea5868c881c4514b2dcee37c87e32d0_large.jpg' },
        { id: 2, name: 'CPU Intel Core i7 14700K Công Ty | Up to 5.6GHz, 20 cores 28 threads', price: '10,190,000₫', image: 'https://product.hstatic.net/200000420363/product/ntel-core-i7-14700k-chinh-hang_c661168e8ece48ffbf576a050756acc9_master_f451b2309a4a4106ae4000b3dc36e83e_large.jpg' },
        { id: 3, name: 'CPU Intel Core i5 14400F Box chính hãng | 4.7 GHz, 10 Cores 16 Threads,...', price: '5,450,000₫' , image: 'https://product.hstatic.net/200000420363/product/i5-14th2_8768f09764f84bffbf6561daaa6a1d5b_large.jpg' },
        { id: 4, name: 'CPU Intel Core i5 14600K Chính hãng | Up to 5.3GHz, 14 cores 20 threads', price: '8,550,000₫' ,image: 'https://product.hstatic.net/200000420363/product/tai_xuong__17__61582068cd9547c4b0b4d9ad1422780a_large.png' },
        { id: 5, name: 'CPU Intel Core i9 14900K Công ty | 6.0GHz, 24 Cores 32 Threads, LGA...', price: '13,790,000₫' , image: 'https://product.hstatic.net/200000420363/product/i9-14th_c146ac75245e4f2ea81513b87cf9b35d_master_55f8659149ff4127b5b984911d92355f_large.jpg' },
        { id: 6, name: 'CPU Intel Core i5 14600K Công Ty | Up to 5.3GHz, 14 cores 20 threads', price: '7,790,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/_new_-anh-sp-web_0229438098674c899bd2c5675e1559c0_large.jpg' },
        { id: 7, name: 'CPU Intel Core i5 14600KF Chính hãng | Up to 5.3GHz 14 cores 20 threads', price: '7,790,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/_new_-anh-sp-web_10dc7f856906471d8cfa020264cb3b45_large.jpg' },
        { id: 8, name: 'CPU Intel Core i5 14500 Box chính hãng | 5.0 GHz, 14 Cores 20 Threads,...', price: '6,590,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/i5-14th2_0c78f9b090964ec49ecd1f7cad88ee5b_large.jpg' },
        { id: 9, name: 'CPU Intel Core i7 14700 Box công ty | 5.4 GHz, 20 Cores 28 Threads,...', price: '9,690,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/tai_xuong__24__6a8c4af389484fff91e16ff4b8cf4ac8_large.png' },
        { id: 10, name: 'CPU Intel Core i9 14900K Tray | 6.0GHz, 24 Cores 32 Threads, LGA...', price: '12,990,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/_new_-anh-sp-web_9bfd29b55e59497da73c5fd58f732c7a_large.jpg' },
        { id: 11, name: 'CPU Intel Core i7 14700KF Công ty | Up to 5.6GHz, 20 cores 28 threads', price: '9,650,000₫' , image: 'https://product.hstatic.net/200000420363/product/ntel-core-i7-14700k-chinh-hang_c661168e8ece48ffbf576a050756acc9_master_825c6e6b922e4ef5aad1f7092f2ccb6d_large.jpg' },
        { id: 12, name: 'CPU Intel Core i7 14700KF Chính hãng | Up to 5.6GHz, 20 cores 28 threads', price: '10,550,000₫', image: 'https://product.hstatic.net/200000420363/product/cpu-intel-core-i7-14700k-chinh-hang_923a2f29dfb84edeb44207749d5bebb1_large.jpg' },
        { id: 13, name: 'CPU Intel Core i7 14700K Chính hãng | Up to 5.6GHz, 20 cores 28 threads', price: '11,490,000₫' , image: 'https://product.hstatic.net/200000420363/product/cpu-intel-core-i7-14700k-chinh-hang_c661168e8ece48ffbf576a050756acc9_large.jpg' },
        { id: 14, name: 'CPU Intel Core i3 14100F Box chính hãng | 4.7 GHz, 4 Cores 8 Threads,...', price: '3,190,000₫' ,image: 'https://product.hstatic.net/200000420363/product/i3-14th_b85d9c2ac910463b886b8135481b2075_large.jpg' },
        { id: 15, name: 'CPU Intel Core i5 14500 Box công ty | 5.0 GHz, 14 Cores 20 Threads,...', price: '6,090,000₫' , image: 'https://product.hstatic.net/200000420363/product/i5-14th2_c107f553acbb4bf9ba53a566a415b743_master_4210a0cc39b143b6a1e0268fac53f314_large.jpg' },
        { id: 16, name: 'Màn hình LCD 24 inch LG 24MP500-B FHD IPS FHD 75Hz...', price: '2,?90,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/i5-14th2_c107f553acbb4bf9ba53a566a415b743_master_8ada1719e5d5409c88484c218860048d_large.jpg' },
        { id: 17, name: 'Chuột không dây Fuhlen M06s - Đen | Wireless 2.4G', price: '9?,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/tai_xuong__1__d6da42c68b35495f8470243e281acd01_large.png' },
        { id: 18, name: 'Tai nghe Gaming Dare-U EH406 | Đen, Multi Led', price: '?29,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/i9-14th_ca9511d8b1484a9b899419758a5d3aa7_large.jpg' },
        { id: 19, name: 'Chuột Gaming Fuhlen G90 ProX Green', price: '3?9,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/i5-14th2_c107f553acbb4bf9ba53a566a415b743_large.jpg' },
        { id: 20, name: 'Giá treo màn hình AOC AM400S - Silver | 17 - 34 inch', price: '7?9,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/_new_-anh-sp-web_76060224fdba466baf71d86d457b999f_large.png' },
        { id: 21, name: 'Combo phím chuột giả cơ G21 chuyên game | Trắng - Đen, Led...', price: '7?,000₫' , image: 'https://product.hstatic.net/200000420363/product/tai_xuong__26__2e3eb419b9414528b1e2f501b2035063_large.png' },
        { id: 22, name: 'Chuột HP Wireless Z3700 (Bạc)', price: '?9,000₫', image: 'https://product.hstatic.net/200000420363/product/i9-14th_c146ac75245e4f2ea81513b87cf9b35d_master_8b47436e63464bb5809f52e5be181846_large.jpg' },
        { id: 23, name: 'Tản nhiệt CPU Coolmoon AS-600 Black RGB Sync All Main (Suppor...', price: '3?9,000₫' , image: 'https://product.hstatic.net/200000420363/product/_new_-anh-sp-web_1633cd4357504757a4eedbfb211a4077_large.jpg' },
        { id: 24, name: 'Bàn phím cơ Gaming Newmen GM328 - Grey White | Blue Switch', price: '4?9,000₫' ,image: 'https://product.hstatic.net/200000420363/product/i9-14th_c146ac75245e4f2ea81513b87cf9b35d_large.jpg' },
        { id: 25, name: 'Ghế công thái học Ergonomic TMS06 | Trắng', price: '1,?99,000₫' , image: 'https://product.hstatic.net/200000420363/product/i9-14th_636d5b09192e4474aca9236157e48713_large.jpg' },
        { id: 26, name: 'Màn hình LCD 24 inch LG 24MP500-B FHD IPS FHD 75Hz...', price: '2,?90,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/i7-14th_39ddd9467e3c47119663e0343c60c235_large.jpg' },
        { id: 27, name: 'Chuột không dây Fuhlen M06s - Đen | Wireless 2.4G', price: '9?,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/_new_-anh-sp-web_3a825214196d48f7ad09ed7f643c4cf6_large.png' },
        { id: 28, name: 'Tai nghe Gaming Dare-U EH406 | Đen, Multi Led', price: '?29,000₫' ,  image: 'https://product.hstatic.net/200000420363/product/_new_-anh-sp-web_f8e58e1c601e40a993e5dd5a8df39320_large.png' },
      ];

    return (
        <div className='ml-[100px] mt-[5px]'>

        <div className='bg-[#f5f5f5] h-[35px] w-[1375px] mt-[-6px] flex justify-start items-center ml-[-25px] rounded-b-[5px]'>
            <a href='/'>
            <span className='text-black hover:text-[#eb6154] cursor-pointer text-base ml-[20px]'>Trang chủ </span>
            </a>
            <span className='text-[#777] text-base ml-[5px]'> /</span>
            <span className='text-[#777] text-base ml-[5px]'> CPU thế hệ 14</span>
        </div>

        <span className='font-bold flex text-black text-[20px] mt-[60px] ml-[-20px]'>28 sản phẩm</span>

      <div className="flex flex-wrap justify-start ml-[-20px] mt-[30px] ">
        {products
          .concat(products)
          .slice(0, 28)
          .map((product, index) => (
            <div
              key={product.id}
              className={`  ${index < 5 ? 'mb-4' : ''}`}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className=' hover:shadow-lg hover:shadow-red-500 relative bg-white mb-[5px]'>
              <div className="w-[273px] h-[273px] relative">
            <div className="aspect-w-1 aspect-h-1">
                <img
                src={product.image}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            </div>
                <h2 className="text-[14px] text-center font-arial w-[250px] h-[50px]">{product.name}</h2>
                <div className='flex justify-center h-[40px]'>
                  <p className="text-[14px] font-arial text-red-600 ">{product.price}</p><span className="text-[14px] font-arial italic pl-[10px]"> <s>{product.priceold}</s></span>
                </div>
                {hoveredProduct === product.id && (
                <div className="flex justify-center absolute bottom-0 left-0 w-full ">
                    <div className="w-full flex flex-col justify-center mt-[-450px] ml-[250px]">
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
    </div>
  </div>
)}

              </div>
            </div>
          ))}
      </div>

          <div className='w-[1300px] mt-[80px] mb-[50px]'>
            <span className='text-[14px]'>Xem thêm sản phẩm: <span className='text-[#518ac8] text-[14px]'>i5 2400, i5 3470, i5 3570, i7 12700, i7 2600, i7 3770, ryzen 5 5600g, ryzen 5, core i9, intel core i5, core i3, intel xeon, i5 13400, core i5 10400, i3 13100f, ryzen 3 3200g, ryzen 7 5800x, CPU máy tính cũ giá rẻ, ryzen 7 5700g, amd ryzen 7, ryzen 9 5950x, amd athlon 3000g, Intel Core i7 12700F, CPU Intel Core i7 12700F, laptop dell core i5 siêu mỏng, AMD RYZEN 5 7600X</span></span>
          </div>
            
          <div className='bg-white w-[1519px] h-[500px] ml-[-100px]'>
            <span className='text-[20px] font-bold text-center flex justify-center pt-[40px]'>HỆ THỐNG SHOWROOM TIN HỌC NGÔI SAO</span>
            
            <div className='flex justify-center items-center mt-[10px]'>
            <span className='absolute border-[2px] w-[150px] border-red-600 bg-red-500 rounded-[10px] '></span>
            </div>
          </div>

        </div>
    );
}

export default CPU_14;
