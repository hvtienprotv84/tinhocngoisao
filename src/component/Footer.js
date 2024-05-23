import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faYoutube  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
          <div className='bg-white w-[1519px] h-[500px]'>
            <span className='text-[20px] font-bold text-center flex justify-center pt-[40px]'>HỆ THỐNG SHOWROOM TIN HỌC NGÔI SAO</span>
            
            <div className='flex justify-center items-center mt-[10px]'>
            <span className='absolute border-[2px] w-[150px] border-black bg-red-500 rounded-[10px] '></span>
            </div>

        <div className='flex flex-row mt-[20px]'>

         <div className='ml-[150px]'>
            <div className=' flex flex-row'>
              <span className='absolute bg-[#505050] w-[30px] h-[30px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px]'>1</span>
              <span className='absolute bg-[#CA1010] w-[290px] h-[30px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Tân Bình</span>
            </div>

            <div className='flex flex-col mt-[40px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faMapMarkerAlt} /> <span className='ml-[20px] font-bold w-[300px] text-[14px]'>28 - 30 Trần Triệu Luật, P.6, Quận Tân Bình, TP.HCM</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Mua hàng: 0899 000 001 (08:30 - 21:00)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faClock} /> <span className='ml-[20px] w-[300px] text-[14px]'>Thứ 2 - Chủ nhật, 08:30 - 21:00</span>
              </div>
          </div>

          <div className='ml-[80px]'>
            <div className=' flex flex-row'>
              <span className='absolute bg-[#505050] w-[30px] h-[30px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px]'>1</span>
              <span className='absolute bg-[#CA1010] w-[290px] h-[30px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Thủ Đức</span>
            </div>

            <div className='flex flex-col mt-[40px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faMapMarkerAlt} /> <span className='ml-[20px] font-bold w-[300px] text-[14px]'>180 Lê Văn Việt, P. Tăng Nhơn Phú B, Thủ Đức, TP.HCM</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Mua hàng: 0899 000 003 (09:00 - 20:00)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faClock} /> <span className='ml-[20px] w-[300px] text-[14px]'>Thứ 2 - Chủ nhật, 09:00 - 20:00</span>
              </div>
          </div>

          <div className='ml-[80px]'>
            <div className=' flex flex-row'>
              <span className='absolute bg-[#505050] w-[30px] h-[30px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px]'>1</span>
              <span className='absolute bg-[#CA1010] w-[290px] h-[30px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Bình Thạnh</span>
            </div>

            <div className='flex flex-col mt-[40px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faMapMarkerAlt} /> <span className='ml-[20px] font-bold w-[300px] text-[14px]'>474 Điện Biên Phủ, P. 17, Q. Bình Thạnh, TP.HCM</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Mua hàng: 0899 000 004 (08:30 - 21:00)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faClock} /> <span className='ml-[20px] w-[300px] text-[14px]'>Thứ 2 - Chủ nhật, 08:30 - 21:00</span>
              </div>
          </div>

          <div className='ml-[80px]'>
            <div className=' flex flex-row'>
              <span className='absolute bg-[#505050] w-[30px] h-[30px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px]'>1</span>
              <span className='absolute bg-[#CA1010] w-[290px] h-[30px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Shop THNS+ Quang Trung</span>
            </div>

            <div className='flex flex-col mt-[40px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faMapMarkerAlt} /> <span className='ml-[20px] font-bold w-[300px] text-[14px]'>1270 Quang Trung, P.14, Q.Gò Vấp, TP.HCM</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Mua hàng: 0899 000 002 (09:00 - 21:00)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Bảo hành: 0919 267 015 (8:30 - 17:30)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faClock} /> <span className='ml-[20px] w-[300px] text-[14px]'>Thứ 2 - Thứ 7: 09:00 - 21:00; CN: 09:00 - 18:00</span>
              </div>
          </div>

          </div>
          
          <div className='ml-[150px] mt-[20px]'>
            <div className=' flex flex-row'>
              <span className='absolute bg-[#505050] w-[30px] h-[30px] flex justify-center items-center font-bold text-white ml-[-50px] text-[14px]'>1</span>
              <span className='absolute bg-[#CA1010] w-[290px] h-[30px] flex justify-start items-center font-bold text-white text-[13px] pl-[10px] ml-[-20px] rounded-r-[5px]'>★ Showroom Đắk Lắk</span>
            </div>

            <div className='flex flex-col mt-[40px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faMapMarkerAlt} /> <span className='ml-[20px] font-bold w-[300px] text-[14px]'>138 - 140 Lý Thường Kiệt, Thắng lợi, TP.BMT, Đắk Lắk</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px] rotate-90' icon={faPhone} /> <span className='ml-[20px] w-[300px] text-[14px]'>Mua hàng: 0262 3815 123 (07:30 - 20:00)</span>
              </div>
              <div className='flex flex-col mt-[5px] ml-[-50px]'>
              <FontAwesomeIcon className='text-black absolute mt-[2px]' icon={faClock} /> <span className='ml-[20px] w-[300px] text-[14px]'>Thứ 2 - Chủ nhật, 07:30 - 20:00</span>
              </div>
          </div>
          <div className='absolute bg-white w-[1518px] h-[80px]'>

          </div>

<div className='flex flex-row pl-[100px] bg-[#f4f8fa]'>
          <div className='mt-[130px] flex flex-row'>
          <div>
            <img className='w-[30px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_1.png?v=66' alt=''/>
            </div>
            <div className='flex flex-col ml-[10px] mt-[-5px]'>
              <span className='text-[16px] font-bold'>CHÍNH SÁCH GIAO HÀNG</span>
              <span className='text-[12.6px]'>Nhận hàng và thanh toán tại nhà</span>
            </div>
          </div>

          <div className='mt-[130px] ml-[115px] flex flex-row'>
          <div>
            <img className='w-[30px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_2.png?v=66' alt=''/>
            </div>
            <div className='flex flex-col ml-[10px] mt-[-5px]'>
              <span className='text-[16px] font-bold'>ĐỔI TRẢ DỄ DÀNG</span>
              <span className='text-[12.6px]'>1 đổi 1 trong 7 ngày</span>
            </div>
          </div>

          <div className='mt-[130px] ml-[115px] flex flex-row'>
          <div>
            <img className='w-[30px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_3.png?v=66' alt=''/>
            </div>
            <div className='flex flex-col ml-[10px] mt-[-5px]'>
              <span className='text-[16px] font-bold'>THANH TOÁN TIỆN LỢI</span>
              <span className='text-[12.6px]'>Trả tiền mặt, chuyển khoản, Trà góp 0%</span>
            </div>
          </div>

          <div className='mt-[130px] ml-[115px] flex flex-row'>
          <div>
            <img className='w-[30px]' src='https://theme.hstatic.net/200000420363/1001226108/14/icon_policy_page_4.png?v=66' alt=''/>
            </div>
            <div className='flex flex-col ml-[10px] mt-[-5px]'>
              <span className='text-[16px] font-bold'>HỖ TRỢ NHIỆT TÌNH</span>
              <span className='text-[12.6px]'>Tư vấn, giải đáp mọi thắc mắc</span>
            </div>
          </div>

</div>

<div className='flex flex-row bg-[#f4f8fa]'>
<div className='pb-[180px] flex flex-col mt-[40px] ml-[100px]'>
  <span className='font-bold text-[16px]'>GIỚI THIỆU THNS</span>
  <span className='border-[2px] border-red-500 w-[100px]'></span>
  <span className='text-[14px] mt-[5px]'>Về chúng tôi</span>
  <span className='text-[14px] mt-[5px]'>Tư vấn mua hàng</span>
  <span className='text-[14px] mt-[5px]'>Tuyển dụng</span>

  <div className='flex flex-row mt-[20px] ml-[-10px]'>
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

<div className=' flex flex-col mt-[40px] ml-[220px]'>
  <span className='font-bold text-[16px]'>CHÍNH SÁCH CHUNG</span>
  <span className='border-[2px] border-red-500 w-[100px]'></span>
  <span className='text-[14px] mt-[5px]'>Chính sách trả góp</span>
  <span className='text-[14px] mt-[5px]'>Chính sách bảo mật</span>
  <span className='text-[14px] mt-[5px]'>Chính sách giải quyết khiếu nại</span>
  <span className='text-[14px] mt-[5px]'>Chính sách bảo vệ thông tin cá nhân</span>
  <span className='text-[14px] mt-[5px]'>Chính sách bảo hành</span>
  <span className='text-[14px] mt-[5px]'>Chính sách đổi - trả hàng</span>
</div>

<div className=' flex flex-col mt-[40px] ml-[70px]'>
  <span className='font-bold text-[16px]'>THÔNG TIN KHUYẾN MÃI</span>
  <span className='border-[2px] border-red-500 w-[100px]'></span>
  <span className='text-[14px] mt-[5px]'>Tổng hợp khuyến mãi</span>
</div>

<div className=' flex flex-col mt-[40px] ml-[180px]'>
  <span className='font-bold text-[16px]'>HỖ TRỢ KHÁCH HÀNG</span>
  <span className='border-[2px] border-red-500 w-[100px]'></span>
  <span className='text-[14px] mt-[5px]'>Tổng hợp Hotline CSKH, phản ánh.</span>
  <span className='text-[14px] mt-[5px]'>Thông tin thanh toán</span>
  <span className='text-[14px] mt-[5px]'>Lắp đặt phòng net</span>
  <span className='text-[14px] mt-[5px]'>Thiết bị Mining</span>
  <span className='text-[14px] mt-[5px]'>Tra cứu bảo hành</span>
</div>

</div>

<img className='h-[50px] w-[132px] ml-[100px] mt-[-120px]' src='https://theme.hstatic.net/200000420363/1001226108/14/banner_1_footer_medium.png?v=66' alt=''/>

          </div>

    );
}

export default Footer;
