import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUnlock, faUnlockAlt, faUser } from '@fortawesome/free-solid-svg-icons';

function Login_SignUp_Full() {

    return (
        <div className='bg-white flex justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center'>
                <p className='mt-[15px]'>ĐĂNG NHẬP BẰNG</p>

                <div className='flex flex-row mt-[20px] text-[14px]'>
                    <div className='bg-[#546ea6] hover:opacity-[0.6] flex flex-row w-[107.49px] h-[26px] rounded-[50px] items-center text-center cursor-pointer'>
                        <img src='https://theme.hstatic.net/200000420363/1001226108/14/facebook.png?v=127' alt=''/>
                        <span className='ml-[10px] text-white'>Facebook</span>
                    </div>
                    <div className='bg-[#df5656] hover:opacity-[0.6] flex flex-row w-[99.33px] h-[26px] rounded-[50px] ml-[10px] items-center text-center cursor-pointer'>
                        <img src='https://theme.hstatic.net/200000420363/1001226108/14/googleplus.png?v=127' alt=''/>
                        <span className='ml-[10px] text-white'>Google+</span>
                    </div>
                </div>

                <div>
                <div className='w-[1370px] mt-[15px] flex flex-row justify-center items-center '>
                    <div className='border-[1px] border-[#c6c5c5] w-[1370px] h-[1px]'></div>
                    <p className='text-[15px] pl-[5px] pr-[5px] text-[#999999] font-bold'>HOẶC</p>
                    <div className='border-[1px] border-[#c6c5c5] w-[1370px] h-[1px]'></div>
                  </div>
                </div>

                <div className='flex flex-row'>
                    <div className='ml-[15px]'>
                        <p>ĐĂNG NHẬP</p>
                        <div className='max-w-[410px] max-h-[40px] flex justify-center items-center mt-[20px]'>
                        <input className='relative w-[410px] h-[40px] border-[1px] border-gray-300 outline-none text-[14px] text-[#999999] pl-[42px]' type="text" placeholder="Email của bạn" />
                            <FontAwesomeIcon className='absolute text-[22px] ml-[-370px]' icon={faEnvelope} />
                            <span className='absolute text-[20px] text-[#ed1846] ml-[390px] mt-[5px]'>*</span>
                        </div>
                        <div className='max-w-[410px] max-h-[40px] flex justify-center items-center mt-[10px]'>
                        <input className='relative w-[410px] h-[40px] border-[1px] border-gray-300 outline-none text-[14px] text-[#999999] pl-[42px]' type="text" placeholder="Nhập mật khẩu" />
                            <FontAwesomeIcon className='absolute text-[22px] ml-[-370px]' icon={faUnlockAlt} />
                            <span className='absolute text-[20px] text-[#ed1846] ml-[390px] mt-[5px]'>*</span>
                        </div>
                        <div className='border-black hover:border-[#E02027] hover:text-white cursor-pointer hover:bg-[#E02027] border-[1px] mt-[10px] w-[410px] h-[40px] flex justify-center items-center text-[14px]'>
                            <p>Đăng nhập</p>
                        </div>

                        <p className='mt-[20px] text-[14px] underline hover:text-[#EB6154] cursor-pointer'>Quên mật khẩu?</p>

                    </div>

                    <div className='ml-[300px]'>
                        <p>ĐĂNG KÝ THÀNH VIÊN MỚI</p>
                        <div className='max-w-[410px] max-h-[40px] flex justify-center items-center mt-[20px]'>
                        <input className='relative w-[410px] h-[40px] border-[1px] border-gray-300 outline-none text-[14px] text-[#999999] pl-[42px]' type="text" placeholder="Họ" />
                            <FontAwesomeIcon className='absolute text-[22px] ml-[-370px]' icon={faUser} />
                            <span className='absolute text-[20px] text-[#ed1846] ml-[390px] mt-[5px]'>*</span>
                        </div>
                        <div className='max-w-[410px] max-h-[40px] flex justify-center items-center mt-[20px]'>
                        <input className='relative w-[410px] h-[40px] border-[1px] border-gray-300 outline-none text-[14px] text-[#999999] pl-[42px]' type="text" placeholder="Tên" />
                            <FontAwesomeIcon className='absolute text-[22px] ml-[-370px]' icon={faUser} />
                            <span className='absolute text-[20px] text-[#ed1846] ml-[390px] mt-[5px]'>*</span>
                        </div>
                        <div className='max-w-[410px] max-h-[40px] flex justify-center items-center mt-[20px]'>
                        <input className='relative w-[410px] h-[40px] border-[1px] border-gray-300 outline-none text-[14px] text-[#999999] pl-[42px]' type="text" placeholder="Email" />
                            <FontAwesomeIcon className='absolute text-[22px] ml-[-370px]' icon={faEnvelope} />
                            <span className='absolute text-[20px] text-[#ed1846] ml-[390px] mt-[5px]'>*</span>
                        </div>
                        <div className='max-w-[410px] max-h-[40px] flex justify-center items-center mt-[20px]'>
                        <input className='relative w-[410px] h-[40px] border-[1px] border-gray-300 outline-none text-[14px] text-[#999999] pl-[42px]' type="text" placeholder="Mật Khẩu" />
                            <FontAwesomeIcon className='absolute text-[22px] ml-[-370px]' icon={faLock} />
                            <span className='absolute text-[20px] text-[#ed1846] ml-[390px] mt-[5px]'>*</span>
                        </div>
                        <div className='max-w-[410px] max-h-[40px] flex justify-center items-center mt-[20px]'>
                        <input className='relative w-[410px] h-[40px] border-[1px] border-gray-300 outline-none text-[14px] text-[#999999] pl-[42px]' type="text" placeholder="Nhập lại mật khẩu" />
                            <FontAwesomeIcon className='absolute text-[22px] ml-[-370px]' icon={faUnlock} />
                            <span className='absolute text-[20px] text-[#ed1846] ml-[390px] mt-[5px]'>*</span>
                        </div>
                        <div className='border-black hover:border-[#E02027] hover:text-white cursor-pointer hover:bg-[#E02027] border-[1px] mt-[10px] w-[410px] h-[40px] flex justify-center items-center text-[14px] mb-[15px]'>
                            <p>Đăng ký</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Login_SignUp_Full;
