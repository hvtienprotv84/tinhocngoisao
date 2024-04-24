// App2.js
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function App4() {
    const [Hovered, setHovered] = useState(false);
    const [Hovered_Tray, setHovered_Tray] = useState(false);
    const [Hovered_Intel, setHovered_Intel] = useState(false);
    const [Hovered_AMD, setHovered_AMD] = useState(false);

    const [Hovered_Mainboard_Intel, setHovered_Mainboard_Intel] = useState(false);
    const [Hovered_Mainboard_AMD, setHovered_Mainboard_AMD] = useState(false);
    const [Hovered_Mainboard_theohang, setHovered_Mainboard_theohang] = useState(false);
    const [Hovered_Mainboard_theosocket, setHovered_Mainboard_theosocket] = useState(false);
    const [Hovered_Mainboard_theokichthuoc, setHovered_Mainboard_theokichthuoc] = useState(false);

    const [Hovered_SSD_HDD_OCung, setHovered_SSD_HDD_OCung] = useState(false);
    const [Hovered_SSD_HDD_PKSSD, setHovered_SSD_HDD_PKSSD] = useState(false);

    const [Hovered_Case_theohang, setHovered_Case_theohang] = useState(false);
    const [Hovered_Case_nhucau, setHovered_Case_nhucau] = useState(false);
    const [Hovered_Case_kichco, setHovered_Case_kichco] = useState(false);

    const [Hovered_Nguon_maytinh, setHovered_Nguon_maytinh] = useState(false);

    const [Hovered_RAM_theohang, setHovered_RAM_theohang] = useState(false);
    const [Hovered_RAM_dungluong, setHovered_RAM_dungluong] = useState(false);
    const [Hovered_RAM_bus, setHovered_RAM_bus] = useState(false);

    const [Hovered_VGA_GeForce, setHovered_VGA_GeForce] = useState(false);
    const [Hovered_VGA_AMD, setHovered_VGA_AMD] = useState(false);
    const [Hovered_VGA_theohang, setHovered_VGA_theohang] = useState(false);

    const [Hovered_TanNhiet_theohang, setHovered_TanNhiet_theohang] = useState(false);

    return (
        
        <div 
            className={` w-[0px] duration-300 `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
        <div className="flex transition-transform font-normal hover:font-bold hover:text-black cursor-pointer  w-[250px] ml-[70px] mt-[-15px]"
        >
        <div className='hover:bg-gray-200 mt-[15px] ml-[15px] hidden sm:inline-flex'>
                    <div className="group flex">
                        <img
                            className="w-[40px] h-[40px] p-2 mt-[-8px]"
                            src="https://theme.hstatic.net/200000420363/1001195159/14/hinhanhmenumenu2.png?v=1103"
                            alt="logo"
                        />
                        <span className="ml-[5px] text-[14px] mt-[1px] w-[120px]">
                            Linh Kiện Mới
                        </span>
                    </div>
                    <FontAwesomeIcon className='mt-[10px] text-[8px] ml-[95px]' icon={faChevronRight} />
                </div>
                </div>   
        {Hovered && (
                <div className='w-[1108px] h-[570px] ml-[345px] shadow-gray-200 shadow-md rounded-r-[5px] mt-[-90px] bg-white z-[9999] '>
                <div className="p-2 ml-[12px] flex text-[14px]">
                        <div className='flex flex-col'>
                        <span className='font-bold hover:text-orange-500 cursor-pointer'>CPU - Bộ vi xử lý</span>
                        <a href='/cpu'>
                        <span className='pt-[10px] hover:text-orange-500 cursor-pointer'>Intel thế hệ 14</span>
                        </a>
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
                        onMouseEnter={() => setHovered_Tray(true)}
                        onMouseLeave={() => setHovered_Tray(false)}
                        >
                        {Hovered_Tray && (
                            <div className='absolute bg-white w-[220px] h-[130px] z-30 ml-[130px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i3</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i5</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i7</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i9</span>
                            <span className='hover:text-orange-500 cursor-pointer'>CPU AMD Tray</span>
                            </div>
                        </div>
                        )}
                        <span
                        >CPU Tray - No Box</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className='flex hover:text-orange-500 cursor-pointer'
                        onMouseEnter={() => setHovered_Intel(true)}
                        onMouseLeave={() => setHovered_Intel(false)}
                        >
                        {Hovered_Intel && (
                            <div className='absolute bg-white w-[220px] h-[110px] z-30 ml-[75px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i3</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i5</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i7</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i9</span>
                            </div>
                        </div>
                        )}
                        <span>CPU Intel</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className='flex hover:text-orange-500 cursor-pointer'
                        onMouseEnter={() => setHovered_AMD(true)}
                        onMouseLeave={() => setHovered_AMD(false)}
                        >
                        {Hovered_AMD && (
                            <div className='absolute bg-white w-[220px] h-[110px] z-30 ml-[80px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD Ryzen 3</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD Ryzen 5</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD Ryzen 7</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD Ryzen 9</span>
                            </div>
                        </div>
                        )}
                        <span>CPU AMD</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        </div>

                        <div className='mt-[20px]'>
                            <span className='font-bold hover:text-orange-500 cursor-pointer'>PSU - Nguồn máy tính</span>
                            <div className='flex hover:text-orange-500 cursor-pointer mt-[10px]'
                        onMouseEnter={() => setHovered_Nguon_maytinh(true)}
                        onMouseLeave={() => setHovered_Nguon_maytinh(false)}
                        >
                        {Hovered_Nguon_maytinh && (
                            <div className='absolute bg-white w-[220px] h-[150px] z-30 ml-[130px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Nguồn Asus</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Nguồn Cooler Master</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Nguồn Corsair</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Nguồn Jetek</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Nguồn Xigmatek</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Nguồn Gigabyte</span>
                            </div>
                        </div>
                        )}
                        <span>Nguồn theo hãng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        
                        </div>  

                        </div>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn 400W đến 550W</span>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn 550W đến 650W</span>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn 650W đến 800W</span>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn 800W đến 1000W</span>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn trên 1000W</span>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn 80 Plus Bronze</span>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn 80 Plus Gold</span>
                        <span className=' hover:text-orange-500 cursor-pointer'>Nguồn 80 Plus Platinum</span>    
                        </div>

                        


                        <div className='flex flex-col ml-[-40px]'>
                        <span className='pl-[160px] font-bold hover:text-orange-500 cursor-pointer'>Mainboard - Bo mạch chủ</span>
                        <div className=' hover:text-orange-500 cursor-pointer pl-[160px] pt-[10px]'
                        onMouseEnter={() => setHovered_Mainboard_Intel(true)}
                        onMouseLeave={() => setHovered_Mainboard_Intel(false)}
                        >
                        {Hovered_Mainboard_Intel && (
                            <div className='absolute bg-white w-[220px] h-[380px] z-30 ml-[120px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Z790</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Z690</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Z590</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Z490</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Z370</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel B760</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel B660</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel B560</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel B460</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel H610</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel H510</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel H470</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel H410</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel H310</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel H110</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel H81</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel X299</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard Intel</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer pl-[160px]'
                        onMouseEnter={() => setHovered_Mainboard_AMD(true)}
                        onMouseLeave={() => setHovered_Mainboard_AMD(false)}
                        >
                        {Hovered_Mainboard_AMD && (
                            <div className='absolute bg-white w-[220px] h-[215px] z-30 ml-[125px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD A520</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD A320</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD X670</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD X570</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD X399</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD B650</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD B550</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD B450</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD TRX40</span>
                            
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard AMD</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer pl-[160px]'
                        onMouseEnter={() => setHovered_Mainboard_theohang(true)}
                        onMouseLeave={() => setHovered_Mainboard_theohang(false)}
                        >
                        {Hovered_Mainboard_theohang && (
                            <div className='absolute bg-white w-[220px] h-[110px] z-30 ml-[155px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Main Asus</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Main Gigabyte</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Main MSI</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Main Asrock</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard theo hãng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer pl-[160px]'
                        onMouseEnter={() => setHovered_Mainboard_theosocket(true)}
                        onMouseLeave={() => setHovered_Mainboard_theosocket(false)}
                        >
                        {Hovered_Mainboard_theosocket && (
                            <div className='absolute bg-white w-[220px] h-[150px] z-30 ml-[165px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel 1700 (Gen12 - 13)</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel 1200 (Gen10 - 11)</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel 1151 - 1151 v2</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel 1150</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD AM5</span>
                            <span className='hover:text-orange-500 cursor-pointer'>AMD AM4</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard theo socket</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer pl-[160px]'
                        onMouseEnter={() => setHovered_Mainboard_theokichthuoc(true)}
                        onMouseLeave={() => setHovered_Mainboard_theokichthuoc(false)}
                        >
                        {Hovered_Mainboard_theokichthuoc && (
                            <div className='absolute bg-white w-[220px] h-[110px] z-30 ml-[190px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>ATX</span>
                            <span className='hover:text-orange-500 cursor-pointer'>m-ATX</span>
                            <span className='hover:text-orange-500 cursor-pointer'>ITX</span>
                            <span className='hover:text-orange-500 cursor-pointer'>E-ATX</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard theo kích thước</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        
                        <div className='pl-[160px] flex flex-col mt-[185px]'>
                            <span className='font-bold hover:text-orange-500 cursor-pointer'>Bộ nhớ RAM</span>
                            <span className='mt-[10px]'>Ram DDR5</span>
                            <span>Ram DDR4 8GB</span>
                            <span>Ram DDR4 16GB - 32GB</span>
                            <span>Ram LED RGB</span>
                            <div className=' hover:text-orange-500 cursor-pointer '
                        onMouseEnter={() => setHovered_RAM_theohang(true)}
                        onMouseLeave={() => setHovered_RAM_theohang(false)}
                        >
                        {Hovered_RAM_theohang && (
                            <div className='absolute bg-white w-[220px] h-[110px] z-30 ml-[120px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Ram Kingston</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Ram Corsair</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Ram Gskill</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Ram Adata</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Ram theo hãng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer '
                        onMouseEnter={() => setHovered_RAM_dungluong(true)}
                        onMouseLeave={() => setHovered_RAM_dungluong(false)}
                        >
                        {Hovered_RAM_dungluong && (
                            <div className='absolute bg-white w-[220px] h-[170px] z-30 ml-[160px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>4GB x1</span>
                            <span className='hover:text-orange-500 cursor-pointer'>8GB x1</span>
                            <span className='hover:text-orange-500 cursor-pointer'>8GB x2</span>
                            <span className='hover:text-orange-500 cursor-pointer'>16GB x1</span>
                            <span className='hover:text-orange-500 cursor-pointer'>16GB x2</span>
                            <span className='hover:text-orange-500 cursor-pointer'>32GB x1</span>
                            <span className='hover:text-orange-500 cursor-pointer'>32GB x2</span>
                            </div>
                        </div>
                        )}
                        <span
                        >RAM theo dung lượng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer '
                        onMouseEnter={() => setHovered_RAM_bus(true)}
                        onMouseLeave={() => setHovered_RAM_bus(false)}
                        >
                        {Hovered_RAM_bus && (
                            <div className='absolute bg-white w-[220px] h-[210px] z-30 ml-[110px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR3 - 1600</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR4 - 2400</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR4 - 2666</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR4 - 3200</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR4 - 3600</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR5 - 4800</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR5 - 5200</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR5 - 5600</span>
                            <span className='hover:text-orange-500 cursor-pointer'>DDR5 - 6000</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Ram theo bus</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>

                        </div>

                    </div>


                    <div className='flex flex-col pl-[120px]'>
                    <span className=' font-bold hover:text-orange-500 cursor-pointer'>SSD - HDD</span>
                        <span className='hover:text-orange-500 cursor-pointer pt-[10px]'>SSD 120G - 128G</span>
                        <span className='hover:text-orange-500 cursor-pointer'>SSD 240G - 256G</span>
                        <span className='hover:text-orange-500 cursor-pointer'>SSD 480GB - 512GB</span>
                        <span className='hover:text-orange-500 cursor-pointer'>SSD 1TB - 2TB - 4TB</span>
                        <span className='hover:text-orange-500 cursor-pointer'>M.2 NVMe Gen 3</span>
                        <span className='hover:text-orange-500 cursor-pointer'>M.2 NVMe Gen 4</span>
                        <div className='flex hover:text-orange-500 cursor-pointer'
                        onMouseEnter={() => setHovered_SSD_HDD_OCung(true)}
                        onMouseLeave={() => setHovered_SSD_HDD_OCung(false)}
                        >
                        {Hovered_SSD_HDD_OCung && (
                            <div className='absolute bg-white w-[220px] h-[130px] z-30 ml-[130px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i3</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i5</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i7</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Intel Core i9</span>
                            <span className='hover:text-orange-500 cursor-pointer'>CPU AMD Tray</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Ổ cứng theo hãng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <span className='hover:text-orange-500 cursor-pointer'>HHD 1TB - 2TB - 4TB</span>
                        <span className='hover:text-orange-500 cursor-pointer'>HHD từ 4TB trở lên</span>
                        <div className='flex hover:text-orange-500 cursor-pointer'
                        onMouseEnter={() => setHovered_SSD_HDD_PKSSD(true)}
                        onMouseLeave={() => setHovered_SSD_HDD_PKSSD(false)}
                        >
                        {Hovered_SSD_HDD_PKSSD && (
                            <div className='absolute bg-white w-[220px] h-[170px] z-30 ml-[105px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Kingston</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Westem Digital</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Samsung</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Corsair</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Gigabyte</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Adata</span>
                            <span className='hover:text-orange-500 cursor-pointer'>PNY</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Phụ kiện SSD</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className='flex flex-col mt-[80px]'>
                            <span className='font-bold hover:text-orange-500 cursor-pointer'>VGA - Card màn hình</span>
                            <div className='flex hover:text-orange-500 cursor-pointer mt-[10px]'
                        onMouseEnter={() => setHovered_VGA_GeForce(true)}
                        onMouseLeave={() => setHovered_VGA_GeForce(false)}
                        >
                        {Hovered_VGA_GeForce && (
                            <div className='absolute bg-white w-[220px] h-[440px] z-30 ml-[155px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 4090</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 4080 Super</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 4080</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 4070 Super</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 4070 Ti</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 4070</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3090 Ti</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3090</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3080 Ti</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3080</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3070 Ti</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3070</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3060 Ti</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3060</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 3050</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 2060 Super</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RTX 2060 6GB - 2060 12GB</span>
                            <span className='hover:text-orange-500 cursor-pointer'>GTX 1660S - 1660Ti - 1660</span>
                            <span className='hover:text-orange-500 cursor-pointer'>GTX 1650S - 1650 - 1050Ti</span>
                            <span className='hover:text-orange-500 cursor-pointer'>GT 1030 - 730 - 710</span>
                            </div>
                        </div>
                        )}
                        <span
                        >VGA NVIDIA GeForce</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className='flex hover:text-orange-500 cursor-pointer'
                        onMouseEnter={() => setHovered_VGA_AMD(true)}
                        onMouseLeave={() => setHovered_VGA_AMD(false)}
                        >
                        {Hovered_VGA_AMD && (
                            <div className='absolute bg-white w-[220px] h-[210px] z-30 ml-[85px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 6900 XT</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 6800 XT</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 6700 XT</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 6600 XT</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 6600</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 6500 XT</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 5600</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 560</span>
                            <span className='hover:text-orange-500 cursor-pointer'>RX 550</span>
                            </div>
                        </div>
                        )}
                        <span
                        >VGA AMD</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <span className='hover:text-orange-500 cursor-pointer'>VGA NVIDIA Quadro</span>
                        <div className='flex hover:text-orange-500 cursor-pointer'
                        onMouseEnter={() => setHovered_VGA_theohang(true)}
                        onMouseLeave={() => setHovered_VGA_theohang(false)}
                        >
                        {Hovered_VGA_theohang && (
                            <div className='absolute bg-white w-[220px] h-[170px] z-30 ml-[115px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>VGA Asus</span>
                            <span className='hover:text-orange-500 cursor-pointer'>VGA Gigabyte</span>
                            <span className='hover:text-orange-500 cursor-pointer'>VGA MSI</span>
                            <span className='hover:text-orange-500 cursor-pointer'>VGA Zotac</span>
                            <span className='hover:text-orange-500 cursor-pointer'>VGA Colorful</span>
                            <span className='hover:text-orange-500 cursor-pointer'>VGA Manli</span>
                            <span className='hover:text-orange-500 cursor-pointer'>VGA Palit</span>
                            </div>
                        </div>
                        )}
                        <span
                        >VGA theo hãng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>

                        </div>
                        </div>

                        <div className='flex flex-col ml-[-30px]'>
                    <span className='pl-[160px] font-bold hover:text-orange-500 cursor-pointer'>Case - Thùng máy</span>
                    <div className=' hover:text-orange-500 cursor-pointer pl-[160px] pt-[10px]'
                        onMouseEnter={() => setHovered_Case_theohang(true)}
                        onMouseLeave={() => setHovered_Case_theohang(false)}
                        >
                        {Hovered_Case_theohang && (
                            <div className='absolute bg-white w-[220px] h-[110px] z-30 ml-[120px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Case Asus</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Case MSI</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Case NZXT</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Case Cougar</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard Intel</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer pl-[160px]'
                        onMouseEnter={() => setHovered_Case_nhucau(true)}
                        onMouseLeave={() => setHovered_Case_nhucau(false)}
                        >
                        {Hovered_Case_nhucau && (
                            <div className='absolute bg-white w-[220px] h-[90px] z-30 ml-[125px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Case Gaming</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Case văn phòng</span>
                            <span className='hover:text-orange-500 cursor-pointer'>Case hồ cá</span>
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard AMD</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <div className=' hover:text-orange-500 cursor-pointer pl-[160px]'
                        onMouseEnter={() => setHovered_Case_kichco(true)}
                        onMouseLeave={() => setHovered_Case_kichco(false)}
                        >
                        {Hovered_Case_kichco && (
                            <div className='absolute bg-white w-[220px] h-[90px] z-30 ml-[155px] border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>ATX Mid Tower </span>
                            <span className='hover:text-orange-500 cursor-pointer'>ATX Full Tower </span>
                            <span className='hover:text-orange-500 cursor-pointer'>ATX Super Tower </span>
                            </div>
                        </div>
                        )}
                        <span
                        >Mainboard theo hãng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>

                        <div className='flex flex-col mt-[225px] ml-[160px]'>
                        <span className='hover:text-orange-500 cursor-pointer font-bold'>Tản nhiệt PC</span>
                        <div className=' hover:text-orange-500 cursor-pointer mt-[10px]'
                        onMouseEnter={() => setHovered_TanNhiet_theohang(true)}
                        onMouseLeave={() => setHovered_TanNhiet_theohang(false)}
                        >
                        {Hovered_TanNhiet_theohang && (
                            <div className='absolute bg-white w-[220px] h-[130px] ml-[150px] z-30 border border-gray-300'>
                            <div className='absolute flex flex-col pl-[10px] pt-[10px] text-black '>
                            <span className='hover:text-orange-500 cursor-pointer'>Asus </span>
                            <span className='hover:text-orange-500 cursor-pointer'>NZXT </span>
                            <span className='hover:text-orange-500 cursor-pointer'>Coolmoon </span>
                            <span className='hover:text-orange-500 cursor-pointer'>Cooler Master </span>
                            <span className='hover:text-orange-500 cursor-pointer'>ID Cooling </span>
                            </div>
                        </div>
                        )}
                        <span
                        >Tản nhiệt theo hãng</span>
                        <FontAwesomeIcon className='mt-[8px] text-[8px] ml-[10px]' icon={faChevronRight} />
                        </div>
                        <span className='hover:text-orange-500 cursor-pointer '>Tản nhiệt khí</span>
                        <span className='hover:text-orange-500 cursor-pointer '>Tản AIO 240</span>
                        <span className='hover:text-orange-500 cursor-pointer '>Tản AIO 280</span>
                        <span className='hover:text-orange-500 cursor-pointer '>Tản AIO 360</span>
                        <span className='hover:text-orange-500 cursor-pointer '>Fan Led RGB</span>
                        <span className='hover:text-orange-500 cursor-pointer '>Keo tản nhiệt</span>
                        <span className='hover:text-orange-500 cursor-pointer '>Fan Case</span>
                        </div>
                        
                    </div>

                </div>
                </div>
            )}
        
            

        </div>
        
    );
}

export default App4;
