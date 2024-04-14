import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Menu() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className='flex ml-[10px] mt-[-35px]'>

    <div className="bg-neutral-600 w-[270px] h-[35px] rounded ml-[65px]">
    {/* <FontAwesomeIcon className='text-white ml-[45px] mt-[7px]' icon={faBars} /> */}
    <div className='ml-[35px] mt-[6px]'>
    <img
          src='https://www.barberemerson.com/images/fa_bars.png'
          alt="Logo"
          className="w-[20px] h-[20px] ml-[10px] mt-[5px]"
        />
    <span className='text-white font-bold top-[-23px] left-[40px] relative text-[14px]'> DANH MỤC SẢN PHẨM</span>
    </div>
        <div className='bg-red-300 w-[270px] h-[500px] rounded mt-[-15px]'>

            <div className="flex transition-transform font-normal hover:font-bold hover:text-black cursor-pointer hover:bg-gray-50 w-[250px] ml-[10px]">
            <div className='flex'>
            <img className='w-[40] h-[40px] p-2' src='https://theme.hstatic.net/200000420363/1001195159/14/hinhanhmenumenu1.png?v=1103' alt='logo'/>
            <span className='ml-[3px] text-[14px] mt-[10px]'>
                Tổng Hợp Khuyến Mãi
            </span>
            </div>
            </div>
            
            <hr className='mt-[10px]'/>


            <div className="relative flex ml-10">
      <div className="font-normal cursor-pointer">
        <div className="group flex">
          <img
            className="w-40 h-40px p-2"
            src="https://theme.hstatic.net/200000420363/1001195159/14/hinhanhmenumenu1.png?v=1103"
            alt="logo"
          />
          <span
            className="ml-5 text-14px mt-10px"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Linh Kiện Mới
          </span>
          <FontAwesomeIcon className='mt-18px text-8px ml-110px' icon={faChevronRight} />
          {hovered && (
            <span className="absolute rounded-r-5px shadow-red-700 right-0 top-[-50px] left-[260px] h-1000px w-1000px bg-green-200 opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="p-2 font-bold ml-12px">
                CPU - Bộ vi xử lý
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
            
            <hr className='mt-[5px]'/>

            
        </div>
    </div>

    <div className="bg-neutral-400 w-[1100px] h-[36px] rounded ml-[5px]">


   
    <div className='flex'>
    <div>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_1.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Lắp đặt phòng net</span>
    </div>

    <div className='ml-[100px]'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_2.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Trả góp</span>
    </div>

    <div className='ml-[100px]'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_3.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Bảng giá</span>
    </div>

    <div className='ml-[100px]'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_4.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Xây dựng cấu hình</span>
    </div>

    <div className='ml-[100px]'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_5.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Chính sách bảo hành</span>
    </div>

    <div className='ml-[100px]'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_6.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Thiết bị mining</span>
    </div>
    </div>
    </div>

    </div>
  );
}

export default Menu;