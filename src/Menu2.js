import React, { useState } from 'react';
import NewAccessory from './component/NewAccessory';
import TongHopKhuyenMai from './component/TongHopKhuyenMai';
import OldAccessory from './component/OldAccessory';
import SSD_HDD_USB from './component/SSD_HDD_USB';
import Laptop from './component/Laptop';
import PCGaming from './component/PCGaming';
import PC_VP from './component/PC_VP';
import PC_DH from './component/PC_DH';
import ComputerScreen from './component/ComputerScreen';
import Accessory from './component/Accessory';
import TablesandChairs from './component/TablesandChairs';
import HeadsetMouse from './component/HeadsetMouse';
import NetworkEquipment from './component/NetworkEquipment';
import AudioEquipments from './component/AudioEquipments';
import CameraWebcam from './component/CameraWebcam';
function Menu() {
  const [Hovered, setHovered] = useState(false);

  return (

    
    <div className='flex ml-[10px] mt-[-35px]'>

    <div className="bg-neutral-600 w-[270px] h-[35px] rounded ml-[65px]"
        onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
    {/* <FontAwesomeIcon className='text-white ml-[45px] mt-[7px]' icon={faBars} /> */}
    <div className='ml-[35px] mt-[8px]'>
    <img
          src='https://www.barberemerson.com/images/fa_bars.png'
          alt="Logo"
          className="w-[20px] h-[20px] ml-[10px] mt-[5px]"
        />
    <span className='text-white font-bold top-[-23px] left-[40px] relative text-[14px]'
        > DANH MỤC SẢN PHẨM</span>
    </div>

    {Hovered && (
      <div className='z-[9999] absolute mt-[-17px]'>
               <div className='mt-[50px] ml-[-75px] z-[9999] absolute'>
                <TongHopKhuyenMai/>
               </div>
               <div className='mt-[60px] ml-[-75px] z-[9999] absolute'>
                <NewAccessory/>
               </div>
               <div className='mt-[10px] ml-[-75px] z-[9999] absolute'>
                <OldAccessory/>
               </div>
               <div className='mt-[50px] ml-[-75px] z-[9999] absolute'>
                <SSD_HDD_USB/>
               </div>
               <div className='mt-[200px] ml-[-75px] z-[9999] absolute'>
                <Laptop/>
               </div>
               <div className='mt-[244px] ml-[-75px] z-[9999] absolute'>
                <PCGaming/>
               </div>
               <div className='mt-[288px] ml-[-75px] z-[9999] absolute'>
                <PC_VP/>
               </div>
               <div className='mt-[336px] ml-[-75px] z-[9999] absolute'>
                <PC_DH/>
               </div>
               <div className='mt-[380px] ml-[-75px] z-[9999] absolute'>
                <ComputerScreen/>
               </div>
               <div className='mt-[426px] ml-[-75px] z-[9999] absolute'>
                <Accessory/>
               </div>
               <div className='mt-[471px] ml-[-75px] z-[9999] absolute'>
                <TablesandChairs/>
               </div>
               <div className='mt-[518px] ml-[-75px] z-[9999] absolute'>
                <HeadsetMouse/>
               </div>
               <div className='mt-[565px] ml-[-75px] z-[9999] absolute'>
                <NetworkEquipment/>
               </div>
               <div className='mt-[610px] ml-[-75px] z-[9999] absolute'>
                <AudioEquipments/>
               </div>
               <div className='mt-[655px] ml-[-75px] z-[9999] absolute'>
                <CameraWebcam/>
               </div>
      </div>
            )}
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