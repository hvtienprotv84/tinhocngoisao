import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Laptop() {
    const [Hovered, setHovered] = useState(false);
    const [Hovered2, setHovered2] = useState(false);
    return (
        <div 
            className={` w-[0px] duration-300 `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
        <div className="flex transition-transform font-normal hover:font-bold hover:text-black cursor-pointer  w-[250px] ml-[70px] mt-[-15px]"
        >
        <div className='hover:bg-gray-200 mt-[15px] ml-[15px]  hidden sm:inline-flex'>
                    <div className="group flex">
                        <img
                            className="w-[40px] h-[40px] p-2 mt-[-8px]"
                            src="//theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu5.png?v=30"
                            alt="logo"
                        />
                        <span className="ml-[5px] text-[14px] mt-[1px] w-[120px]">
                            Laptop
                        </span>
                    </div>
                    <FontAwesomeIcon className='mt-[10px] text-[8px] ml-[95px] ' icon={faChevronRight} />
                </div>
                </div>   
        <div className=''>
        {Hovered && (
                <div className='w-[1108px] h-[800px] ml-[345px] shadow-gray-200 shadow-md rounded-r-[5px] mt-[-230px] bg-white '>
                <div className="p-2 ml-[12px] flex text-[14px]">
                        <div className='flex flex-col'>
                        <span className='font-bold pt-[10px] hover:text-orange-500 cursor-pointer'>CPU - Bộ vi xử lý</span>
                        <span className='pt-[10px] hover:text-orange-500 cursor-pointer'>Intel thế hệ 14</span>
                        <div className='flex flex-col'>
                        <span className='hover:text-orange-500 cursor-pointer'>Intel thế hệ 13</span>
                        <span className='hover:text-orange-500 cursor-pointer'>Intel thế hệ 12</span>
                        <span className='hover:text-orange-500 cursor-pointer'>Intel thế hệ 11</span>
                        <span className='hover:text-orange-500 cursor-pointer'>Intel thế hệ 10</span>
                        <span className='hover:text-orange-500 cursor-pointer'>AMD 8000 Series</span>
                        <span className='hover:text-orange-500 cursor-pointer'>AMD 7000 Series</span>
                        <span className='hover:text-orange-500 cursor-pointer'>AMD 5000 Series</span>
                        <span className='hover:text-orange-500 cursor-pointer'>AMD 4000 Series</span>
                        <span className='hover:text-orange-500 cursor-pointer'>AMD 3000 Series</span>
                        <div className='flex hover:text-orange-500 cursor-pointer'
                        onMouseEnter={() => setHovered2(true)}
                        onMouseLeave={() => setHovered2(false)}
                        >
                        <span
                        >CPU Tray - No Box</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className='flex hover:text-orange-500 cursor-pointer'>
                        <span>CPU Intel</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className='flex hover:text-orange-500 cursor-pointer'>
                        <span>CPU AMD</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        </div>
                        </div>
                        <span className='pl-[160px] font-bold pt-[10px] hover:text-orange-500 cursor-pointer'>Mainboard - Bo mạch chủ</span>
                        <span className='pl-[120px] font-bold pt-[10px] hover:text-orange-500 cursor-pointer'>SSD - HDD</span>
                        <span className='pl-[195px] font-bold pt-[10px] hover:text-orange-500 cursor-pointer'>Case - Thùng máy</span>
                    </div>
                </div>
            )}
        </div>
        {Hovered2 && (
                <div className='relative bg-white w-[220px] h-[150px] z-30 ml-[500px] mt-[-140px] border border-gray-300'>
                    <div className='flex flex-col pl-[10px] pt-[10px]'>
                    <span>Intel Core i3</span>
                    <span>Intel Core i5</span>
                    <span>Intel Core i7</span>
                    <span>Intel Core i9</span>
                    <span>CPU AMD Tray</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Laptop;
