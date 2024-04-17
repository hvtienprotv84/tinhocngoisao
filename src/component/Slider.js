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
    <div className="max-w-[900px] h-[600px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-[730px] h-[500px] rounded-[5px] bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[52%] -translate-x-0 translate-y-[-50%] left-[25px] text-2xl rounded-full p-2 text-white cursor-pointer">
        {/* <BsArrowLeftShort onClick={prevSlide} size={30} /> */}
        <img onClick={prevSlide} size={30} src="https://file.hstatic.net/200000420363/file/l_9f8c80f89d6b419cb5843e6cf89bfb6a.svg" alt='ab'/>
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[52%] -translate-x-0 translate-y-[-50%] right-[25px] text-2xl rounded-full p-2 text-white cursor-pointer">
        {/* <BsArrowRightShort onClick={nextSlide} size={30} /> */}
        <img onClick={nextSlide} size={30} src="https://file.hstatic.net/200000420363/file/r_33672dcc51de4a23aa4fcdcd5f5caee2.svg" alt='ab'/>
      </div>
      <div className='absolute'>
      <img className='absolute; w-[365px] ml-[735px] mt-[-500px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_1.jpg?v=49' alt=''/>
      <img className='absolute; w-[365px] h-[265px] ml-[735px] mt-[5px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_2.jpg?v=49' alt=''/>
      <img className='absolute; w-[365px] h-[180px] mt-[5px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_3.jpg?v=49' alt=''/>
      <img className='absolute; w-[365px] h-[180px] ml-[370px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_4.jpg?v=49' alt=''/>
      <img className='absolute; w-[365px] h-[180px] ml-[740px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_right_5.jpg?v=49' alt=''/>
      </div>

      <div className='flex mt-[385px] ml-[-275px]'>
      <img className='absolute; w-[340px] h-[155px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_1_master.jpg?v=49' alt=''/>
      <img className='absolute; w-[340px] h-[155px] ml-[7px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_2_master.jpg?v=49' alt=''/>
      <img className='absolute; w-[340px] h-[155px] ml-[7px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_3_master.jpg?v=49' alt=''/>
      <img className='absolute; w-[340px] h-[155px] ml-[7px] mt-[-180px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_home_4_master.jpg?v=49' alt=''/>

      </div>
    </div>
  );
}

export default Slider;