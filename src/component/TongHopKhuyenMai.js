import React from 'react';

function Menu() {
  return (

    
    <div className='flex ml-[10px] mt-[-35px]'>

    <div className="bg-neutral-600 w-[270px] h-[35px] rounded ml-[65px] hidden sm:inline-block ">
    {/* <FontAwesomeIcon className='text-white ml-[45px] mt-[7px]' icon={faBars} /> */}
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

    </div>
  );
}

export default Menu;