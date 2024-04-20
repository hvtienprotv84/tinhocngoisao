import React from 'react';
import { faFacebookF ,faYoutube, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Icon() {

  return (
    <div className='fixed top-[640px]'>
    <div className='bg-white w-[200px] h-[50px] rounded-[50px] border-[2px] border-red-500'>
    <div className='absolute ml-[70px]'>
    <span className='font-bold text-[13px]'>TƯ VẤN NGAY</span><br/><span className='text-red-500 font-bold'>1900 0243</span>
    
    </div>
        <img className='w-[80px] mt-[-17px] ml-[-15px]' src='https://cokhidangthao.com/wp-content/uploads/2022/06/phone-icon-20200331115049.gif' alt=''/>
        
        <div className='mt-[-350px] ml-[1440px]'>
        <div class='absolute bg-blue-500 w-[30px] h-[30px] rounded-[50px] mt-[80px] flex items-center justify-center'>
        <img className='w-[15px] h-[15px]' src='https://file.hstatic.net/200000420363/file/icon-zalo_0c82fc90acd446779649a176bae9e737.svg' alt='' />
        </div>
        <div class='bg-[#4267b2] w-[30px] h-[30px] rounded-[50px] mt-[100px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white ' icon={faFacebookF} />
        </div>
        <div class='bg-red-500 w-[30px] h-[30px] rounded-[50px] mt-[10px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white ' icon={faYoutube} />
        </div>
        
        <div class='bg-[#ed1b24] w-[30px] h-[30px] rounded-[50px] mt-[50px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white ' icon={faArrowUp} />
        </div>

        <div class='bg-[#0A7CFF] w-[60px] h-[60px] rounded-[50px] mt-[20px] ml-[-20px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white text-[36px] ' icon={faFacebookMessenger} />
        </div>
        </div>

        </div>
        </div>
  );
}

export default Icon;