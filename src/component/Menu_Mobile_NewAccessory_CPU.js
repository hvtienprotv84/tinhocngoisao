import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Menu_Mobile_OldAccessory() {
    const [showText, setShowText] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);

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

    return (
        <div>
        <div className='flex flex-row items-center mt-[10px] mb-[10px] ml-[20px]'>
            <span className='text-[14px] ml-[15px]'>CPU - Bộ vi xử lý</span>
            <FontAwesomeIcon className='text-[16px] ml-auto mr-[15px]' icon={showText ? faAngleDown : faAngleRight} onClick={toggleText}/>
        </div>
        <hr className='bg-[#ccc] mt-[5px]'/>
        {showText && ( // Conditionally render the text
                <div className='flex flex-col text-[14px] ml-[50px]'>
                    <span className='py-[10px]'>Intel thế hệ 14</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel thế hệ 13</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel thế hệ 12</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel thế hệ 11</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel thế hệ 10</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD 8000 Series</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD 7000 Series</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD 5000 Series</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD 4000 Series</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD 3000 Series</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <div className='pt-[10px] flex items-center justify-between'>
                        <span className='text-[14px]'>CPU Tray - No Box</span>
                        <FontAwesomeIcon className='text-[16px] ml-auto mr-[15px]' icon={showText2 ? faAngleDown : faAngleRight} onClick={toggleText2}/>
                    </div>
                    <hr className='bg-[#ccc] mt-[15px]'/>
                    {showText2 && ( // Conditionally render the text
                <div className='flex flex-col text-[14px] ml-[10px]'>
                    <span className='py-[10px]'>Intel Core i3</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel Core i5</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel Core i7</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel Core i9</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>CPU AMD Tray</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                </div>
                    )}
                    <div className='pt-[10px] flex items-center justify-between'>
                        <span className='text-[14px]'>CPU Intel</span>
                        <FontAwesomeIcon className='text-[16px] ml-auto mr-[15px]' icon={showText3 ? faAngleDown : faAngleRight} onClick={toggleText3}/>
                    </div>
                    <hr className='bg-[#ccc] mt-[15px]'/>
                    {showText3 && ( // Conditionally render the text
                <div className='flex flex-col text-[14px] ml-[10px]'>
                    <span className='py-[10px]'>Intel Core i3</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel Core i5</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel Core i7</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>Intel Core i9</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                </div>
                    )}
                    <div className='pt-[10px] flex items-center justify-between'>
                        <span className='text-[14px]'>CPU AMD</span>
                        <FontAwesomeIcon className='text-[16px] ml-auto mr-[15px]' icon={showText4 ? faAngleDown : faAngleRight} onClick={toggleText4}/>
                    </div>
                    <hr className='bg-[#ccc] mt-[15px]'/>
                    {showText4 && ( // Conditionally render the text
                <div className='flex flex-col text-[14px] ml-[10px]'>
                    <span className='py-[10px]'>AMD Ryzen 3</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD Ryzen 5</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD Ryzen 7</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                    <span className='py-[10px]'>AMD Ryzen 9</span>
                    <hr className='bg-[#ccc] mt-[5px]'/>
                </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Menu_Mobile_OldAccessory;
