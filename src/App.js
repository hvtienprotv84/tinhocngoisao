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
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  const handleLoginpageClick = () => {
    setIsLoginSelected(true);
  };

  const handleSignUpClick = () => {
    setIsLoginSelected(false);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

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
            >
      <i className="fa fa-user " aria-hidden="true"></i>
      <div className='mt-[5px] ml-[10px]'>
      <div className='mt-[-30px]'>
      <a href='/account/login'>
      <span className='text-[13px] hidden sm:inline'>Đăng nhập/Đăng ký</span><br/>
      </a>
      <div className='mt-[-25px]' 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
      <span className='font-bold text-[14px] hidden sm:inline'>Tài khoản</span>
      <div className='text-[14px] mt-[-26px] ml-[68px]'>
      <i className="fa fa-caret-down text-neutral-500 text-[5px]"  aria-hidden="true"></i>
      {Hovered && (
                <div className='relative bg-white w-[245px] h-[210px] z-30 ml-[-150px] mt-[0px] border border-gray-300 rounded-b-[5px]'>
                <div className='bg-[#fdd835] w-[220px] h-[40px] ml-[12.5px] mt-[10px] flex justify-center items-center rounded-[5px] cursor-pointer' onClick={handleLoginClick}>
                <span className='text-black'>Đăng Nhập</span>
                </div>

                <div className='bg-[#fdd835] w-[220px] h-[40px] ml-[12.5px] mt-[10px] flex justify-center items-center rounded-[5px] cursor-pointer' onClick={handleLoginClick}>
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

            
            {/* <div className='flex flex-row items-center sm:ml-[1010px] mt-[-35px] sm:mt-[-5px]'>
            <a href='/cart' >
            <img className='absolute w-[30px] h-[30px] mt-[40px] sm:mt-[0px] ml-[-45px] sm:inline-block' src='https://file.hstatic.net/200000420363/file/cart_57531e43108d48c6ab3281bbbc813beb.png' alt=''/><span className='hidden sm:inline font-bold text-[14px] text-[#7c7575] ml-[-5px]'>Giỏ hàng</span>
            </a>
            </div> */}
            

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

            <div className='absolute z-50'>
            {isModalOpen && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white w-[800px] h-[450px] rounded-l-2xl p-4'>
            <div className='flex items-center'>
              <button
                className='text-red-500 bg-white rounded-[50px] z-50 w-[30px] h-[30px] mt-[-25px] absolute ml-[765px]'
                onClick={handleCloseClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                      {!isHovered ? (
                <img className='w-[15px] h-[15px] ml-[8px]' src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/33/Multiplication_Sign-512.png" alt="Multiply" />
              ) : (
                <img className='w-[15px] h-[15px] ml-[8px]' src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/43/Minus_Sign-512.png" alt="Minus" />
              )}
              </button>
            </div>

            <div className='flex flex-row ml-[30px] mt-[20px]'>
            <div className='flex flex-col'>
              <span className='text-[24px] text-[#242424] font-bold'>Xin Chào,</span>
              <div className='flex flex-row text-[14px] text-[#242424] mt-[10px]'>
                <p
                  className={`cursor-pointer ${isLoginSelected ? 'underline' : ''}`}
                  onClick={handleLoginpageClick}
                >
                  Đăng nhập
                </p>
                <p className='ml-[5px]'>hoặc</p>
                <p
                  className={`cursor-pointer ml-[5px] ${!isLoginSelected ? 'underline' : ''}`}
                  onClick={handleSignUpClick}
                >
                  Tạo tài khoản
                </p>
              </div>

              <div className='mt-4'>
                {isLoginSelected ? 
                <div>
                  <input className='w-[430px] h-[36px] border-none outline-none text-[20px] text-[#999999] font-bold' type="text" placeholder="Email của bạn" />
                  <div className='border-[1px] border-[#e02027]'></div>
                  <div className='mt-[20px]'>
                    <input className='w-[430px] h-[36px] border-none outline-none text-[20px] text-[#999999] font-bold' type="text" placeholder="Nhập mật khẩu" />
                    <div className='border-[1px] border-[#e02027]'></div>
                  </div>
                  <div className='flex justify-end items-end text-[14px]'>
                  <p className='text-[#333333]'>Quên mật khẩu?</p>
                  </div>
                  <div className='bg-[#e02027] w-[430px] h-[54.56px] mt-[15px] flex justify-center items-center rounded-[5px]'>
                    <span className='text-[#fff] text-[20px]'>Đăng nhập</span>
                  </div>
                  <div className='w-[430px] mt-[15px] flex flex-row justify-center items-center '>
                    <div className='border-[1px] border-[#c6c5c5] w-[30%] h-[1px]'></div>
                    <p className='text-[15px] pl-[20px] pr-[20px]'>Hoặc tiếp tục bằng</p>
                    <div className='border-[1px] border-[#c6c5c5] w-[30%] h-[1px]'></div>
                  </div>
                  <div className='flex flex-row justify-center items-center mt-[20px]'>
                    <img className='w-[58px] h-[58px]' src='https://file.hstatic.net/200000420363/file/ic-gg_2eba4fbd380244c18aad0e4fc87117c8.png' alt=''/>
                    <img className='ml-[10px] w-[58px] h-[58px]' src='https://file.hstatic.net/200000420363/file/ic-fb_e1bf39a1ca4f4629ad03c7346769811c.png' alt=''/>
                  </div>
                </div> 
                : 
                <div>
                  <input className='w-[430px] h-[36px] border-none outline-none text-[22px] text-[#999999] font-bold' type="text" placeholder="Họ" />
                  <div className='border-[1px] border-[#e02027]'></div>
                  <input className='w-[430px] h-[36px] border-none outline-none text-[22px] text-[#999999] mt-[15px] font-bold' type="text" placeholder="Tên" />
                  <div className='border-[1px] border-[#e02027]'></div>
                  <input className='w-[430px] h-[36px] border-none outline-none text-[22px] text-[#999999] mt-[15px] font-bold' type="text" placeholder="Email" />
                  <div className='border-[1px] border-[#e02027]'></div>
                  <input className='w-[430px] h-[36px] border-none outline-none text-[22px] text-[#999999] mt-[15px] font-bold' type="text" placeholder="Mật khẩu" />
                  <div className='border-[1px] border-[#e02027]'></div>
                  <div className='bg-[#e02027] w-[430px] h-[54.56px] mt-[15px] flex justify-center items-center rounded-[5px]'>
                    <span className='text-[#fff] text-[20px]'>Đăng ký</span>
                  </div>
                </div> 
                }
              
              </div>
            </div>
                <div className='mt-[-36px] ml-[474px] absolute'>
                    <img src='https://theme.hstatic.net/200000420363/1001226108/14/banner_login.png?v=126' alt=''/>
                </div>
          </div>

          
          </div>
        </div>
      )}
            </div>
    </div>
  );
}

export default App;