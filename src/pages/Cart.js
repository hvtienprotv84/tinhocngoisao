import React from 'react';

function Cart() {

    return (
        <div>
        <span className='absolute text-[24px] mt-[5px] p-[9px] ml-[70px]'>GIỎ HÀNG</span>
        <div className='flex flex-col items-center justify-center'>
        <img className='w-[480px] h-[233px] mt-[75px] ' src='https://theme.hstatic.net/200000420363/1001226108/14/empty_cart.png?v=86' alt=''/>
        <span className='mt-[15px]'>Không có sản phẩm nào trong giỏ hàng của bạn</span>
        </div>
        <div className='flex items-center justify-center mt-[15px] ml-[-15px]'>
            <div className='bg-[#e02027] w-[223.45px] text-white h-[41.6px] rounded-[50px] border-[1px] cursor-pointer border-[#e02027] font-sans font-semibold hover:bg-white hover:text-[#e02027] flex items-center justify-center'>
                <span className='text-[14px]'>TIẾP TỤC MUA HÀNG</span>
            </div>
        </div>
        </div>
    );
}

export default Cart;
