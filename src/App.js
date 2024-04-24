import React, { useState } from 'react';
import { productsData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF ,faGoogle } from '@fortawesome/free-brands-svg-icons';

import 'font-awesome/css/font-awesome.min.css';

// import logoImage from './images/logo_tinhocngoisao.webp';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [Hovered, setHovered] = useState(false);

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
          className="w-[60.76px] h-[35px] mt-[0px] sm:w-[104px] sm:h-[60px] sm:ml-[150px] sm:mt-[10px]"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        <form onSubmit={handleSearch} className='ml-[10px] sm:ml-[110px] sm:mt-2 mt-[5px]'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-[5px] py-2 bg-gray-200 placeholder-neutral-500  w-[212px] h-[35px] sm:w-[650px] sm:h-[40px] rounded mr-2 font-sans focus:outline-none "
            placeholder="Bạn tìm gì..."
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

      <div className="grid grid-cols-5 gap-4">
        {isSearching && searchResults.length > 0 ? (
          searchResults.map((product) => (
            <div key={product.id} className="bg-gray-200 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full mb-2"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
          ))
        ) : isSearching && searchResults.length === 0 ? (
          <p>No products found.</p>
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
          Reset
        </button>
      )}

      <div className=' ml-[1155px] mt-[-60px] text-[30px] text-neutral-500 hidden md:flex' 
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

            <div className='flex flex-col ml-[350px] mt-[-55px]  sm:hidden'>
            <img className='absolute w-[30px] h-[30px] mt-[5px] ml-[-45px]' src='https://file.hstatic.net/200000420363/file/cart_57531e43108d48c6ab3281bbbc813beb.png' alt=''/>
            <FontAwesomeIcon className='relative text-[30px] text-black sm:hidden' icon={faBars} />
            <span className='absolute text-[10px] mt-[30px]'>MENU</span>
            </div>

    </div>
  );
}

export default App;