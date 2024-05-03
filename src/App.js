import React, { useState } from 'react';
import { productsData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF ,faGoogle } from '@fortawesome/free-brands-svg-icons';
import MenuMobileFull from './component/Menu_Mobile_Full';

import 'font-awesome/css/font-awesome.min.css';
import Footer from './component/Footer';

// import logoImage from './images/logo_tinhocngoisao.webp';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [Hovered, setHovered] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  const handleDivClick = () => {
    setShowMusic(true);
  };
  const handleBackgroundClick = () => {
    setShowMusic(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setIsSearching(true);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleReset = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div className="container mx-auto p-1 bg-white h-[55px] w-[390.4px] sm:h-[126px] sm:w-[1500px] sm:container">
      <div className="flex items-center mb-4">
        <img
          src='https://theme.hstatic.net/200000420363/1000988446/14/logo.png?v=2262'
          alt="Logo"
          className="w-[60.76px] h-[35px] mt-[0px] sm:w-[104px] sm:h-[60px] sm:ml-[150px] sm:mt-[10px] cursor-pointer"
          onClick={handleLogoClick}
        />
        <form onSubmit={handleSearch} className='ml-[10px] sm:ml-[110px] sm:mt-2 mt-[5px]'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-[10px] py-2 bg-gray-200 placeholder-neutral-500  w-[212px] h-[35px] sm:w-[650px] sm:h-[40px] rounded mr-2 font-sans focus:outline-none "
            placeholder=" Bạn tìm gì..."
          />
          <button
            type="submit"
            className="px-4 sm:px-4 py-2 bg-red-600 text-white rounded ml-[-50px]"
          >
          <FontAwesomeIcon icon={faSearch} />
             <span className='ml-[5px] hidden sm:inline'>Tìm kiếm</span>
          </button>
        </form>
      </div>

<div className=' z-50 absolute mt-[36px] ml-[-25px] '>
      <div className="grid grid-cols-5 gap-[21.3px] z-50 bg-[#f5f5f5]">
        {isSearching && searchResults.length > 0 ? (
          
          searchResults.map((product) => (
            <div key={product.id} className="bg-white p-4 text-center justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full max-w-[253.04px] max-h-[253.04px] mb-2"
              />
              <h3 className="text-[14px] w-[240px]">{product.name}</h3>
              {/* <p className="text-[14px] text-[#d21212] text-center">{product.price.toLocaleString()}đ</p> */}
              <p className="text-[14px] text-[#d21212] text-center mt-[10px]">
              {product.price === "Liên Hệ" ? "Liên Hệ" :
              <>
                {product.price && `${product.price.toLocaleString()}đ`}
                {product.oldprice && ` - ${product.oldprice.toLocaleString()}đ`}
                {product.price_contact && `${product.price_contact.toLocaleString()}`}
                {/* {product.price_s && `${product.price_s.toLocaleString()}`} */}
                {product.price_s && <span className='text-[#999999]'> - <s>{product.price_s.toLocaleString()}đ</s></span>}

              </>
              }
              </p>
            </div>
          ))
        ) : isSearching && searchResults.length === 0 ? (
          <div className='bg-[#f4f8fa] w-[1500px] h-[2000px]'>
          <div className='ml-[100px]'>
            <span>
            <a href='/'>
            Trang chủ
            </a>
            </span>
            <span> / Tìm kiếm</span>
          </div>
          <p className='w-[700px] ml-[500px] mt-[50px]'>Không tìm thấy nội dung với từ khóa <span className='font-bold'>"{searchTerm}"</span> . Vui lòng tìm kiếm với từ khóa khác.</p>
            <div className='mt-[500px]'>
            <Footer/>
            </div>
         </div>
        ) : (
          <div>
            {/* <p>Welcome to the homepage!</p> */}
          </div>
        )}
      </div>

      {isSearching && (
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
        >
          Đóng
        </button>
      )}
      </div>

      <div className='absolute ml-[1140px] mt-[-60px] text-[30px] text-neutral-500 hidden md:flex' 
       onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
      <i className="fa fa-user " aria-hidden="true"></i>
      <div className='mt-[5px] ml-[10px]'>
      <div className='mt-[-30px]'>
      <span className='text-[13px] hidden sm:inline'>Đăng nhập/Đăng ký</span><br/>
      <div className='mt-[-25px]'>
      <span className='font-bold text-[14px] hidden sm:inline'>Tài khoản</span>
      <div className='text-[14px] mt-[-26px] ml-[68px]'>
      <i className="fa fa-caret-down text-neutral-500 text-[5px]"  aria-hidden="true"></i>
      {Hovered && (
                <div className='relative bg-white w-[245px] h-[210px] z-30 ml-[-150px] mt-[0px] border border-gray-300 rounded-b-[5px]'>
                <div className='bg-[#fdd835] w-[220px] h-[40px] ml-[12.5px] mt-[10px] flex justify-center items-center rounded-[5px] cursor-pointer'>
                <span className='text-black'>Đăng Nhập</span>
                </div>
                <div className='bg-[#fdd835] w-[220px] h-[40px] ml-[12.5px] mt-[10px] flex justify-center items-center rounded-[5px] cursor-pointer'>
                <span className='text-black'>Tạo Tài Khoản</span>
                </div>
                <div className='bg-[#3b5998] w-[220px] h-[40px] ml-[12.5px] mt-[10px] flex justify-center items-center rounded-[5px] cursor-pointer'>
                <FontAwesomeIcon className='text-white mr-[10px] ml-[5px] ' icon={faFacebookF} /><p class="rotate-60 bg-white w-[1px] h-[40px] mr-2"/><span className='text-white font-bold font-arial text-[13px]'>Đăng nhập bằng Facebook</span>
                </div>
                <div className='bg-[#df4a32] w-[220px] h-[40px] ml-[12.5px] mt-[10px] flex justify-center items-center rounded-[5px] cursor-pointer'>
                <FontAwesomeIcon className='text-white mr-2 ml-[-12px]' icon={faGoogle} /><p class="rotate-60 bg-white w-[1px] h-[40px] mr-2"/><span className='text-white font-bold font-arial text-[13px]'>Đăng nhập bằng Google</span>
                </div>
                </div>
            )}
      </div>
      
      </div>
      
      </div>
      </div>
      </div>

            <div className='flex flex-col ml-[350px] mt-[-55px]'>

            
            <div className='flex flex-row items-center sm:ml-[1010px] mt-[-35px] sm:mt-[-5px]'>
            <a href='/cart' >
            <img className='absolute w-[30px] h-[30px] mt-[40px] sm:mt-[0px] ml-[-45px] sm:inline-block' src='https://file.hstatic.net/200000420363/file/cart_57531e43108d48c6ab3281bbbc813beb.png' alt=''/><span className='hidden sm:inline font-bold text-[14px] text-[#7c7575] ml-[-5px]'>Giỏ hàng</span>
            </a>
            </div>
            

            {/* <FontAwesomeIcon className='relative text-[30px] mt-[35px] text-black sm:hidden' icon={faBars} />
            <span className='absolute text-[10px] mt-[30px] sm:hidden'>MENU</span> */}
      <div className="z-50 flex flex-col" onClick={handleDivClick}>
        <FontAwesomeIcon className="relative text-[30px] mt-[35px] text-black sm:hidden" icon={faBars} 
          onClick={handleDivClick}
        />
        <span className="absolute text-[10px] mt-[62px]  sm:hidden"
        onClick={handleDivClick}
        >MENU</span>
      </div>
      <div>
        {showMusic && (
          <div>
          <div className='z-50 bg-[#575757b8] w-[50px] h-[3250px] mt-[-40px] ml-[-10px] absolute sm:hidden' onClick={handleBackgroundClick}></div>
          <div className='z-50 absolute ml-[-354px] mt-[-40px] sm:hidden bg-white w-[350px] h-[3250px]'>
          <MenuMobileFull />
          </div>
          </div>
        )}
      </div>


            </div>

    </div>
  );
}

export default App;