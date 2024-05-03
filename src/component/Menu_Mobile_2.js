import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCreditCard, faMoneyBill, faSlidersH, faShieldAlt, faDollarSign, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Menu_Mobile_2(){
    const [showText, setShowText] = useState(false);


    const toggleText = () => {
        setShowText(!showText);
      };

    return(
    <div>
                <hr className='bg-[#ccc] mt-[5px]'/>
            <div className='flex flex-row items-center mt-[10px] mb-[10px] ml-[20px]'>
                <FontAwesomeIcon className='text-[20px]' icon={faWrench}/>
                <span className='ml-[20px]' >Lắp đặt phòng net</span>
            </div>
            <hr className='bg-[#ccc] mt-[5px]'/>
            <div className='flex flex-row items-center mt-[10px] mb-[10px] ml-[20px]'>
                <FontAwesomeIcon className='text-[17.5px]' icon={faCreditCard} />
                <span className='ml-[20px]' >Trả góp</span>
            </div>
            <hr className='bg-[#ccc] mt-[5px]'/>
            <div className='flex flex-row items-center mt-[10px] mb-[10px] ml-[20px]'>
                <FontAwesomeIcon className='text-[16px]' icon={faMoneyBill}/>
                <span className={`ml-[20px] ${showText ? 'text-[#eb6154]' : ''}`}>Bảng giá</span>
                <FontAwesomeIcon
                className={`text-[16px] ml-[200px] ${showText ? 'text-[#eb6154]' : ''}`}
                icon={showText ? faAngleDown : faAngleRight}
                onClick={toggleText}
                />
            </div>
            {showText && ( // Conditionally render the text
                <div className='flex flex-col'>
                <hr className='bg-[#ccc] mt-[5px]'/>
                <span className='mt-[5px] mb-[5px] ml-[40px]'>Bảng giá mua cũ</span>
                <hr className='bg-[#ccc] mt-[5px]'/>
                <span className='mt-[5px] mb-[5px] ml-[40px]'>Bảng giá bán</span>
                <hr className='bg-[#ccc] mt-[5px]'/>
                <span className='mt-[5px] mb-[5px] ml-[40px]'>Bảng giá outlet</span>
                </div>
            )}

            <hr className='bg-[#ccc] mt-[5px]'/>
            <div className='flex flex-row items-center mt-[10px] mb-[10px] ml-[20px]'>
                <FontAwesomeIcon className='text-[20px]' icon={faSlidersH}/>
                <span className='ml-[20px]' >Xây dựng cấu hình</span>
            </div>
            <hr className='bg-[#ccc] mt-[5px]'/>
            <div className='flex flex-row items-center mt-[10px] mb-[10px] ml-[20px]'>
                <FontAwesomeIcon className='text-[20px]' icon={faShieldAlt}/>
                <span className='ml-[20px]' >Chính sách bảo hành</span>
            </div>
            <hr className='bg-[#ccc] mt-[5px]'/>
            <div className='flex flex-row items-center mt-[10px] mb-[20px] ml-[20px]'>
                <div className='border-[black] w-[20px] h-[20px] border-[1px] rounded-[50px] flex justify-center items-center'><FontAwesomeIcon className='text-[15px] ' icon={faDollarSign}/></div>
                <span className='ml-[20px]' >Thiết bị mining</span>
            </div>
            <hr className='bg-[#ccc] mt-[5px]'/>
        </div>
    );
}
export default Menu_Mobile_2;