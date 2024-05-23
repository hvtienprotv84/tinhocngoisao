import React, { useState, useEffect } from 'react';
import { faFacebookF ,faYoutube, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Icon() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-[640px]'>
    <div className='bg-white w-[200px] h-[50px] rounded-[50px] border-[2px] border-red-500 hidden sm:inline-block'>
    <div className='absolute ml-[70px]'>
    <span className='font-bold text-[13px] hidden sm:inline'>TƯ VẤN NGAY</span><br/><span className='text-red-500 font-bold'>1900 0243</span>
    
    </div>
        <img className='w-[80px] mt-[-17px] ml-[-15px] hidden sm:inline-block' src='https://cokhidangthao.com/wp-content/uploads/2022/06/phone-icon-20200331115049.gif' alt=''/>
        
        <div className='mt-[-350px] sm:ml-[1440px] ml-[300px]'>
        <div class='absolute bg-blue-500 w-[30px] h-[30px] rounded-[50px] mt-[80px] flex items-center justify-center'>
        <img className='w-[15px] h-[15px]' src='https://file.hstatic.net/200000420363/file/icon-zalo_0c82fc90acd446779649a176bae9e737.svg' alt='' />
        </div>
        <div class='bg-[#4267b2] w-[30px] h-[30px] rounded-[50px] mt-[100px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white ' icon={faFacebookF} />
        </div>
        <div class='bg-red-500 w-[30px] h-[30px] rounded-[50px] mt-[10px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white ' icon={faYoutube} />
        </div>
        
        {/* <div class='bg-[#ed1b24] w-[30px] h-[30px] rounded-[50px] mt-[50px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white ' icon={faArrowUp} />
        </div> */}

        <div
      className={` bg-[#ed1b24] w-[30px] h-[30px] rounded-[50px] mt-[50px] flex items-center justify-center cursor-pointer transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon className='text-white' icon={faArrowUp} size='lg' />
    </div>

        <div class='bg-[#0A7CFF] w-[60px] h-[60px] rounded-[50px] mt-[20px] ml-[-20px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white text-[36px] ' icon={faFacebookMessenger} />
        </div>
        </div>

        </div>

      <div className='sm:hidden '>
      <div className=' bg-white w-[180px] h-[50px] rounded-[50px] border-[2px] ml-[190px] mt-[1500px] border-red-500'>
    <div className='absolute ml-[70px]'>
    <img className='w-[85px] mt-[-18px] absolute ml-[-88px]' src='https://cokhidangthao.com/wp-content/uploads/2022/06/phone-icon-20200331115049.gif' alt=''/>

    <span className='absolute font-bold text-[18px] w-[98.4px] h-[25.71px] top-[10px] text-red-500 ml-[0px]'>1900 0243</span>
    <div className='mt-[1080px] sm:ml-[1440px] ml-[80px]'>
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

        <div class='bg-[#0A7CFF] w-[60px] h-[60px] rounded-[50px] mt-[100px] ml-[-50px] flex items-center justify-center'>
        <FontAwesomeIcon className='text-white text-[36px] ' icon={faFacebookMessenger} />
        </div>
        </div>
    </div>
    </div>
      </div>

        </div>
  );
}

export default Icon;