import React, { useState } from 'react';
// import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
// import { RxDotFilled, RxDot } from 'react-icons/rx';
import { slides } from '../slides';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div className="w-[200px] sm:max-w-[900px] sm:h-[600px] sm:w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-[376px] h-[237.44px] ml-[-343px] mt-[40px] sm:mt-[0px] sm:ml-[0px] sm:w-[730px] sm:h-[500px] rounded-[5px] bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[220px] sm:top-[52%] -translate-x-0 translate-y-[-50%] left-[-320px] sm:left-[25px] text-2xl rounded-full p-2 text-white cursor-pointer">
        {/* <BsArrowLeftShort onClick={prevSlide} size={30} /> */}
        <img onClick={prevSlide} size={30} src="https://file.hstatic.net/200000420363/file/l_9f8c80f89d6b419cb5843e6cf89bfb6a.svg" alt='ab'/>
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[210px] sm:top-[310px] -translate-x-0 translate-y-[-50%] right-[25px] sm:right-[25px] text-2xl rounded-full p-2 text-red-600 cursor-pointer  mr-[140px]">
        {/* <BsArrowRightShort onClick={nextSlide} size={30} /> */}
        <img onClick={nextSlide} size={30} src="https://file.hstatic.net/200000420363/file/r_33672dcc51de4a23aa4fcdcd5f5caee2.svg" alt='ab'/>
      </div>
      <div className='absolute hidden sm:inline-block'>
      <img className='absolute; w-[365px] ml-[735px] mt-[-500px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_1.jpg?v=49' alt=''/>
      <img className='absolute; w-[365px] h-[265px] ml-[735px] mt-[5px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_2.jpg?v=49' alt=''/>
      <img className='absolute; w-[365px] h-[180px] mt-[5px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_3.jpg?v=49' alt=''/>
      <img className='absolute; w-[360px] h-[180px] ml-[370px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_4.jpg?v=49' alt=''/>
      <img className='absolute; w-[365px] h-[180px] ml-[735px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_5.jpg?v=49' alt=''/>
      </div>

      <div className=' mt-[385px] ml-[-275px] hidden sm:inline-flex'>
      <img className='absolute; w-[340px] h-[155px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_1_master.jpg?v=49' alt=''/>
      <img className='absolute; w-[340px] h-[155px] ml-[7px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_2_master.jpg?v=49' alt=''/>
      <img className='absolute; w-[340px] h-[155px] ml-[7px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_3_master.jpg?v=49' alt=''/>
      <img className='absolute; w-[340px] h-[155px] ml-[7px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_4_master.jpg?v=49' alt=''/>
      </div>

      <div className='sm:hidden ml-[-350px]'>
        <img className='pt-[10px] w-[383px] h-[103.71px] pl-[7px]' src='https://theme.hstatic.net/200000420363/1001226108/14/showinhinhanh1.png?v=75' alt=''/>
        <img className='pt-[10px] w-[383px] h-[103.71px] pl-[7px]' src='https://theme.hstatic.net/200000420363/1001226108/14/showinhinhanh2.png?v=75' alt=''/>
        <img className='pt-[10px] w-[383px] h-[103.71px] pl-[7px]' src='https://theme.hstatic.net/200000420363/1001226108/14/showinhinhanh3.png?v=75' alt=''/>
      </div>

      <div className='  bg-[white] w-[1375px] h-[800px] rounded-[10px] ml-[-272px] hidden sm:inline-block'></div>

      <div className=' absolute border-[5px] border-blue-500 w-[1375px] h-[1000px] rounded-[10px] ml-[-272px] mt-[-800px] hidden sm:inline-block'></div>

      <div className='  bg-[#1789e2] w-[1375px] h-[75px] rounded-[10px] ml-[-272px] mt-[125px] hidden sm:inline-block'>
      </div>
      <span className='absolute text-xl ml-[-240px] font-bold text-white mt-[-52px] italic hidden sm:inline'>Còn lại</span>


      <div className=' w-[1400px] h-[300px] ml-[-270px] mt-[-1005px]'>
      <img className='rounded-[5px] hidden sm:inline-block' src="https://theme.hstatic.net/200000420363/1001226108/14/home_fsale_apps_banner.png?v=49" alt=''/>
            
      </div>

    </div>
  );
}

export default Slider;