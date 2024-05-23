import React, {useState} from 'react';

function Login_SignUp() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
      const handleCloseClick = () => {
        setIsModalOpen(false);
      };
    return (
        <div>
        {isModalOpen && (
            <div>
            <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white w-[800px] h-[450px] rounded-md p-4 mt-[-125px]'>
            <div className='flex justify-end items-center'>
              <button
                className='text-red-500 bg-white rounded-[50px] w-[30px] h-[30px]'
                onClick={handleCloseClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                      {!isHovered ? (
                <img className='w-[15px] h-[15px] ml-[8px]' src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/33/Multiplication_Sign-512.png" alt="Multiply" />
              ) : (
                <img className='w-[15px] h-[15px] ml-[8px]' src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/43/Minus_Sign-512.png" alt="Minus" />
              )}
              </button>
            </div>
            <div className='flex justify-center items-center h-full'>
              <span>Modal content goes here</span>
            </div>
          </div>
        </div>
        </div>
          )}
        
          </div>
    );
}

export default Login_SignUp;
