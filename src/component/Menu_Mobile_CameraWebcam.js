import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Menu_Mobile_OldAccessory() {
    const [showText, setShowText] = useState(false);


    const toggleText = () => {
        setShowText(!showText);
      };

    return (
        <div>
        <div className='flex flex-row items-center mt-[10px] mb-[10px] ml-[20px]'>
            <img className='w-[20px] h-[21px]' src='https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu15.png?v=97' alt=''/>
            <span className='text-[14px] ml-[20px]'>Camera, Webcam, Máy in</span>
            <FontAwesomeIcon className='text-[16px] ml-auto mr-[15px]' icon={showText ? faAngleDown : faAngleRight} onClick={toggleText}/>
        </div>
        <hr className='bg-[#ccc] mt-[5px]'/>
        </div>
    );
}

export default Menu_Mobile_OldAccessory;
