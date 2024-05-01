import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock , faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faYoutube  } from '@fortawesome/free-brands-svg-icons';

function Footer_Mobile() {
    const [showText, setShowText] = useState(true); // State to control text visibility
    const [showText2, setShowText2] = useState(true); // State to control text visibility
    const [showText3, setShowText3] = useState(true); // State to control text visibility
    const [showText4, setShowText4] = useState(true); // State to control text visibility
    const [showText5, setShowText5] = useState(true); // State to control text visibility
    const [showText6, setShowText6] = useState(false);
    const [showText7, setShowText7] = useState(false);
    const [showText8, setShowText8] = useState(false);
    const [showText9, setShowText9] = useState(false);


    const toggleText = () => {
        setShowText(!showText);
      };

      const toggleText2 = () => {
        setShowText2(!showText2);
      };

      const toggleText3 = () => {
        setShowText3(!showText3);
      };
      const toggleText4 = () => {
        setShowText4(!showText4);
      };

      const toggleText5 = () => {
        setShowText5(!showText5);
      };

      const toggleText6 = () => {
        setShowText6(!showText6);
      };

      const toggleText7 = () => {
        setShowText7(!showText7);
      };

      const toggleText8 = () => {
        setShowText8(!showText8);
      };

      const toggleText9 = () => {
        setShowText9(!showText9);
      };
    return(

    <div>
        <div className='bg-[#fff] w-[391px] h-full max-h-full '>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-[20px] text-[#333333] text-center mt-[40px]'>HỆ THỐNG SHOWROOM TIN HỌC</span>
                <span className='font-bold text-[20px] text-[#333333] text-center mt-[-10px]'>NGÔI SAO</span>
                <div className='bg-black w-[150px] h-[1.5px] mt-[10px]'></div>
            </div>
            <div className=' flex flex-row ml-[60px] items-center mt-[40px]'
                                    onClick={toggleText} 
            >
              <span className='absolute bg-[#505050] w-[30px] h-[40px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px] rounded-l-[5px]'>1</span>
              <span className='absolute bg-[#CA1010] w-[340px] h-[40px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Tân Bình</span>
              <FontAwesomeIcon className='text-white absolute ml-[300px] text-[12px]' icon={faPlus} />
            </div>
            <div className="relative left-[10px] w-[400px] top-[10px]">
            {showText && ( // Conditionally render the text
                <div className='flex flex-row mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faMapMarkerAlt} /><span className='absolute text-[14px] left-[15px] font-bold'>28 - 30 Trần Triệu Luật, P.6, Quận Tân Bình, TP.HCM</span>
                
                <div className='mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-5 text-[14px] mt-[3px] ml-[-20px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Mua hàng: 0899 000 001 (08:30 - 21:00)</span>
                </div>
                
                <div  className='mt-[40px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
                </div>
                
                <div className='mt-[60px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faClock} /><span className='absolute text-[14px] left-[20px]'>Thứ 2 - Chủ nhật, 08:30 - 21:00</span>
                </div>
                
                </div>
            )}
            </div>


            <div className=' flex flex-row ml-[60px] items-center mt-[65px]'
                                    onClick={toggleText2} 
            >
              <span className='absolute bg-[#505050] w-[30px] h-[40px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px] rounded-l-[5px]'>2</span>
              <span className='absolute bg-[#CA1010] w-[340px] h-[40px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Thủ Đức</span>
              <FontAwesomeIcon className='text-white absolute ml-[300px] text-[12px]' icon={faPlus} />
            </div>
            <div className="relative left-[10px] w-[400px] top-[10px]">
            {showText2 && ( // Conditionally render the text
                <div className='flex flex-row mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faMapMarkerAlt} /><span className='absolute text-[14px] left-[15px] font-bold'>180 Lê Văn Việt, P. Tăng Nhơn Phú B, Thủ Đức, TP.HCM</span>
                
                <div className='mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-5 text-[14px] mt-[3px] ml-[-20px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Mua hàng: 0899 000 003 (09:00 - 20:00)</span>
                </div>
                
                <div  className='mt-[40px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
                </div>
                
                <div className='mt-[60px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faClock} /><span className='absolute text-[14px] left-[20px]'>Thứ 2 - Chủ nhật, 09:00 - 20:00</span>
                </div>
                
                </div>
            )}
            </div>

            <div className=' flex flex-row ml-[60px] items-center mt-[65px]'
                                    onClick={toggleText3} 
            >
              <span className='absolute bg-[#505050] w-[30px] h-[40px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px] rounded-l-[5px]'>3</span>
              <span className='absolute bg-[#CA1010] w-[340px] h-[40px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Bình Thạnh</span>
              <FontAwesomeIcon className='text-white absolute ml-[300px] text-[12px]' icon={faPlus} />
            </div>
            <div className="relative left-[10px] w-[400px] top-[10px]">
            {showText3 && ( // Conditionally render the text
                <div className='flex flex-row mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faMapMarkerAlt} /><span className='absolute text-[14px] left-[15px] font-bold'>474 Điện Biên Phủ, P. 17, Q. Bình Thạnh, TP.HCM</span>
                
                <div className='mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-5 text-[14px] mt-[3px] ml-[-20px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Mua hàng: 0899 000 004 (08:30 - 21:00)</span>
                </div>
                
                <div  className='mt-[40px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
                </div>
                
                <div className='mt-[60px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faClock} /><span className='absolute text-[14px] left-[20px]'>Thứ 2 - Chủ nhật, 08:30 - 21:00</span>
                </div>
                
                </div>
            )}
            </div>

            <div className=' flex flex-row ml-[60px] items-center mt-[65px]'
                                    onClick={toggleText4} 
            >
              <span className='absolute bg-[#505050] w-[30px] h-[40px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px] rounded-l-[5px]'>4</span>
              <span className='absolute bg-[#CA1010] w-[340px] h-[40px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Shop THNS+ Quang Trung</span>
              <FontAwesomeIcon className='text-white absolute ml-[300px] text-[12px]' icon={faPlus} />
            </div>
            <div className="relative left-[10px] w-[400px] top-[10px]">
            {showText4 && ( // Conditionally render the text
                <div className='flex flex-row mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faMapMarkerAlt} /><span className='absolute text-[14px] left-[15px] font-bold'>1270 Quang Trung, P.14, Q.Gò Vấp, TP.HCM</span>
                
                <div className='mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-5 text-[14px] mt-[3px] ml-[-20px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Mua hàng: 0899 000 002 (09:00 - 21:00)</span>
                </div>
                
                <div  className='mt-[40px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
                </div>
                
                <div className='mt-[60px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faClock} /><span className='absolute text-[14px] left-[20px]'>Thứ 2 - Thứ 7: 09:00 - 21:00; CN: 09:00 - 18:00</span>
                </div>
                
                </div>
            )}
            </div>

            <div className=' flex flex-row ml-[60px] items-center mt-[65px]'
                                    onClick={toggleText5} 
            >
              <span className='absolute bg-[#505050] w-[30px] h-[40px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px] rounded-l-[5px]'>5</span>
              <span className='absolute bg-[#CA1010] w-[340px] h-[40px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Đắk Lắk</span>
              <FontAwesomeIcon className='text-white absolute ml-[300px] text-[12px]' icon={faPlus} />
            </div>
            <div className='relative bg-[#fff] h-[50px] mt-[30px] mb-[60px]'>

            </div>
            <div className="relative left-[10px] w-[400px] top-[-110px]">
            {showText5 && ( // Conditionally render the text
                <div className='flex flex-row mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faMapMarkerAlt} /><span className='absolute text-[14px] left-[15px] font-bold'>138 - 140 Lý Thường Kiệt, Thắng lợi, TP.BMT, Đắk Lắk</span>
                
                <div className='mt-[20px]'>
                <FontAwesomeIcon className='text-black absolute left-5 text-[14px] mt-[3px] ml-[-20px] rotate-90' icon={faPhone} /><span className='absolute text-[14px] left-[20px]'>Mua hàng: 0262 3815 123 (07:30 - 20:00)</span>
                </div>
                
                <div className='mt-[40px] mb-[-100px]'>
                <FontAwesomeIcon className='text-black absolute left-0 text-[14px] mt-[3px]' icon={faClock} /><span className='absolute text-[14px] left-[20px]'>Thứ 2 - Chủ nhật, 07:30 - 20:00</span>
                </div>
                
                </div>
            )}

            </div>
        </div>

            
        <div>

          <div className='flex flex-row ml-[20px] mt-[20px]'>
          <img className='w-[30px] h-[30px] mt-[10px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_1.png?v=92' alt=''/>
            <div className='flex flex-col ml-[20px]'>
            <span className='font-bold text-[16px]'>CHÍNH SÁCH GIAO HÀNG</span>
            <span className='text-[12.6px]'>Nhận hàng và thanh toán tại nhà</span>
            </div>
            </div>

            <div className='flex flex-row mt-[20px] ml-[20px]'>
          <img className='w-[30px] h-[30px] mt-[10px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_2.png?v=92' alt=''/>
            <div className='flex flex-col ml-[20px]'>
            <span className='font-bold text-[16px]'>ĐỔI TRẢ DỄ DÀNG</span>
            <span className='text-[12.6px]'>1 đổi 1 trong 7 ngày</span>
            </div>
            </div>

            <div className='flex flex-row mt-[20px] ml-[20px]'>
          <img className='w-[30px] h-[30px] mt-[10px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_3.png?v=92' alt=''/>
            <div className='flex flex-col ml-[20px]'>
            <span className='font-bold text-[16px]'>THANH TOÁN TIỆN LỢI</span>
            <span className='text-[12.6px]'>Trả tiền mặt, chuyển khoản, Trà góp 0%</span>
            </div>
            </div>

            <div className='flex flex-row mt-[20px] ml-[20px]'>
          <img className='w-[30px] h-[30px] mt-[10px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_4.png?v=92' alt=''/>
            <div className='flex flex-col ml-[20px]'>
            <span className='font-bold text-[16px]'>HỖ TRỢ NHIỆT TÌNH</span>
            <span className='text-[12.6px]'>Tư vấn, giải đáp mọi thắc mắc</span>
            </div>
            </div>
        </div>

        <div className='ml-[20px]'>
          <div className='mt-[30px] flex flex-row' onClick={toggleText6}>
            <span className='font-bold'>GIỚI THIỆU THNS</span>
            <FontAwesomeIcon className='text-black absolute text-[14px] mt-[3px] left-[360px]' icon={showText6 ? faMinus : faPlus} />
          </div>
          <div className='bg-[#e02027] w-[100px] h-[2px]'></div>
          <div className="relative w-[400px]">
            {showText6 && ( // Conditionally render the text
                <div className='flex flex-row mt-[5px]'>
                <span className='absolute text-[14px]'>Về chúng tôi</span>
                
                <div className='mt-[20px]'>
                <span className='absolute text-[14px]'>Tư vấn mua hàng</span>
                </div>
                
                <div className='mt-[40px]'>
                <span className='absolute text-[14px] mb-[100px]'>Tuyển dụng</span>
                </div>

                <div className='flex flex-row mt-[70px] ml-[-10px] mb-[-20px]'>
                <div className='bg-[#3b5998] w-[30px] h-[30px] ml-[10px] flex justify-center items-center rounded-[5px]'>
                <FontAwesomeIcon className='text-white' icon={faFacebookF} />
                </div>
                <div className='bg-[#28aae1] w-[30px] h-[30px] ml-[10px] flex justify-center items-center rounded-[5px]'>
                <FontAwesomeIcon className='text-white' icon={faGooglePlusG} />
                </div>
                <div className='bg-[#dd4b38] w-[30px] h-[30px] ml-[10px] flex justify-center items-center rounded-[5px]'>
                <FontAwesomeIcon className='text-white' icon={faYoutube} />
                </div>
                </div>
                
                </div>
            )}

            </div>


          <div className='mt-[30px] flex flex-row ' onClick={toggleText7}>
            <span className='font-bold'>CHÍNH SÁCH CHUNG</span>
            <FontAwesomeIcon className='text-black absolute text-[14px] mt-[3px] left-[360px]' icon={showText7 ? faMinus : faPlus} />
          </div>
          <div className='bg-[#e02027] w-[100px] h-[2px]'></div>
          <div className="relative w-[400px]">
            {showText7 && ( // Conditionally render the text
                <div className='flex flex-row mt-[5px]'>
                <span className='absolute text-[14px]'>Chính sách trả góp</span>
                
                <div className='mt-[20px]'>
                <span className='absolute text-[14px]'>Chính sách bảo mật</span>
                </div>
                
                <div className='mt-[40px]'>
                <span className='absolute text-[14px] mb-[100px]'>Chính sách giải quyết khiếu nại</span>
                </div>

                <div className='mt-[60px]'>
                <span className='absolute text-[14px]'>Chính sách bảo vệ thông tin cá nhân</span>
                </div>
                
                <div className='mt-[80px]'>
                <span className='absolute text-[14px] mb-[100px]'>Chính sách bảo hành</span>
                </div>

                <div className='mt-[100px]'>
                <span className='absolute text-[14px]'>Chính sách đổi - trả hàng</span>
                </div>
                
                </div>
            )}

            </div>
          
          <div className='mt-[30px] flex flex-row' onClick={toggleText8}>
            <span className='font-bold'>THÔNG TIN KHUYẾN MÃI</span>
            <FontAwesomeIcon className='text-black absolute text-[14px] mt-[3px] left-[360px]' icon={showText8 ? faMinus : faPlus} />
          </div>
          <div className='bg-[#e02027] w-[100px] h-[2px]'></div>
          <div className="relative w-[400px]">
            {showText8 && ( // Conditionally render the text
                <div className='flex flex-row mt-[5px]'>
                <span className='absolute text-[14px]'>Tổng hợp khuyến mãi</span>               
                </div>
            )}

            </div>

          <div className='mt-[30px] flex flex-row' onClick={toggleText9}>
            <span className='font-bold'>HỖ TRỢ KHÁCH HÀNG</span>
            <FontAwesomeIcon className='text-black absolute text-[14px] mt-[3px] left-[360px]' icon={showText9 ? faMinus : faPlus} />
          </div>
          <div className='bg-[#e02027] w-[100px] h-[2px]'></div>
          <div className="relative w-[400px]">
            {showText9 && ( // Conditionally render the text
                <div className='flex flex-row mt-[5px]'>
                </div>
            )}

            </div>

            <img className='h-[50px] w-[131.86px] mt-[20px] mb-[70px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_1_footer_medium.png?v=92' alt=''/>

        </div>
        
    </div>

    );
}

export default Footer_Mobile;
