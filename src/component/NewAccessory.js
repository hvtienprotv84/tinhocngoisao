// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// function NewAccessory() {
//     const [hovered, setHovered] = useState(false);

//     const handleMouseEnter = () => {
//         console.log('Mouse entered');
//         setHovered(true);
//     };

//     const handleMouseLeave = () => {
//         console.log('Mouse left');
//         setHovered(false);
//     };
    
//     return (
//         <div className="relative">
//             <div
//                 className="font-normal cursor-pointer"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <div className="flex transition-transform font-normal hover:font-bold hover:text-black cursor-pointer hover:bg-gray-50 w-[250px] ml-[10px]">
//                     <div className="group flex">
//                         <img
//                             className="w-[40px] h-[40px] p-2 mt-[-8px]"
//                             src="https://theme.hstatic.net/200000420363/1001195159/14/hinhanhmenumenu2.png?v=1103"
//                             alt="logo"
//                         />
//                         <span className="ml-[5px] text-[14px] mt-[1px] w-[100px]">
//                             Linh Kiện Mới
//                         </span>
//                     </div>
//                     <FontAwesomeIcon className='mt-[10px] text-[8px] ml-[95px]' icon={faChevronRight} />
//                 </div>
//             </div>
//             {hovered && (
//                 <div className="absolute rounded-r-[5px] shadow-red-700 bg-green-200 opacity-100 transition-opacity duration-300 cursor-pointer">
//                     <div className="p-2 font-bold ml-[12px]">
//                         <span>CPU - Bộ vi xử lý</span>
//                         <span>CPU - Bộ vi xử lý</span>
//                         <span>CPU - Bộ vi xử lý</span>
//                         <span>CPU - Bộ vi xử lý</span>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default NewAccessory;
