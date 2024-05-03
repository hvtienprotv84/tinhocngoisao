import React from 'react';

function Menu() {
  return (

    
    <div className='flex ml-[10px] mt-[-35px]'>

    <div className="bg-neutral-600 w-[270px] h-[35px] rounded ml-[65px] hidden sm:inline-block ">
    {/* <FontAwesomeIcon className='text-white ml-[45px] mt-[7px]' icon={faBars} /> */}
    <div className='ml-[35px] mt-[2px] hidden sm:inline-block'>
    <img
          src='https://www.barberemerson.com/images/fa_bars.png'
          alt="Logo"
          className="w-[20px] h-[20px] ml-[10px] mt-[5px]"
        />
    <span className='text-white font-bold top-[-23px] left-[40px] relative text-[14px] hidden sm:inline'> DANH MỤC SẢN PHẨM</span>
    </div>
        <div className='bg-white w-[270px] h-[690px] rounded mt-[-15px] hidden sm:inline-block'>

            <div className="flex transition-transform font-normal hover:font-bold hover:text-black cursor-pointer hover:bg-[#e5e7eb] w-[250px] ml-[10px]">
            <div className='flex'>
            <img className='w-[40px] h-[40px] p-2 mt-[10px]' src='https://theme.hstatic.net/200000420363/1001195159/14/hinhanhmenumenu1.png?v=1103' alt='logo'/>
            {/* <span className='ml-[3px] text-[14px] mt-[18px]'>
                Tổng Hợp Khuyến Mãi
            </span> */}
            <a href="/tong-hop-khuyen-mai" className="ml-[3px] text-[14px] mt-[18px] hidden sm:inline">
           Tổng Hợp Khuyến Mãi
            </a>
            </div>
            </div>
            

            <hr/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px]'/>
            <hr className='mt-[45px] pb-[2000px]'/>
        </div>
    </div>

    <div className="bg-neutral-400 w-[1100px] h-[36px] rounded ml-[5px] hidden sm:inline-block">


   
    <div className='flex '>
    <div className='hidden sm:inline-block'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_1.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Lắp đặt phòng net</span>
    </div>

    <div className='ml-[100px] hidden sm:inline-block'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_2.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Trả góp</span>
    </div>

    <div className='ml-[100px] hidden sm:inline-block'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_3.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Bảng giá</span>
    </div>

    <div className='ml-[100px] hidden sm:inline-block'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_4.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Xây dựng cấu hình</span>
    </div>

    <div className='ml-[100px] hidden sm:inline-block'>
    <img
          src='https://theme.hstatic.net/200000420363/1001195159/14/icon_nav_5.png?v=1103'
          alt="Logo"
          className="w-[22px] h-[22px] ml-[10px] mt-[7px]"
        />
        <span className='relative top-[-26px] left-[35px] text-white text-[14px] font-sans'>Chính sách bảo hành</span>
    </div>

    <div className='ml-[100px] hidden sm:inline-block'>
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