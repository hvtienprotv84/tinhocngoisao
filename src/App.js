import React, { useState } from 'react';
import { productsData } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
// import logoImage from './images/logo_tinhocngoisao.webp';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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
    <div className="container mx-auto p-1 bg-red-400 h-[126px]">
      <div className="flex items-center mb-4">
        <img
          src='./images/logo_tinhocngoisao.webp'
          alt="Logo"
          className="w-[104px] h-[60px] ml-[150px] mt-[10px]"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        <form onSubmit={handleSearch} className='ml-[115px] mt-2'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-gray-200 placeholder-neutral-500 w-[650px] h-[40px] rounded mr-2 font-sans focus:outline-none "
            placeholder="Bạn tìm gì..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded ml-[-50px]"
          >
          <FontAwesomeIcon icon={faSearch} />
             <span className='ml-[5px]'>Tìm kiếm</span>
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

      <div className='flex ml-[1155px] mt-[-60px] text-[30px] text-neutral-500'>
      <i className="fa fa-user"  aria-hidden="true"></i>
      <div className='mt-[5px] ml-[10px]'>
      <div className='mt-[-30px]'>
      <span className='text-[13px]'>Đăng nhập/Đăng ký</span><br/>
      <div className='mt-[-25px]'>
      <span className='font-bold text-[14px]'>Tài khoản</span>
      <div className='text-[14px] mt-[-26px] ml-[68px]'>
      <i className="fa fa-caret-down text-neutral-500 text-[5px]"  aria-hidden="true"></i>
      </div>
      </div>
      
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;