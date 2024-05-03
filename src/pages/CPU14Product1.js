import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
function CPU14Product1() {
  const contentData = {
    Hello: (
      <div className='absolute max-w-[500px] max-h-[500px] ml-[150px]'>
        <img className='w-full h-full ml-[250px]' src='https://product.hstatic.net/200000420363/product/i3-14th_6ea5868c881c4514b2dcee37c87e32d0_master.jpg' alt=''/>
        <img className='w-[100px] h-[100px] ml-[450px] border-[3px] border-[#288ad6] mb-[50px]' src='https://product.hstatic.net/200000420363/product/i3-14th_6ea5868c881c4514b2dcee37c87e32d0_master.jpg' alt=''/>
        <div>
        <img className='absolute w-[31.11px] h-[60.11px] mt-[-450px] ml-[-150px] bg-white pt-[10px] pb-[10px] shadow-sm shadow-black'  src='https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png' alt=''/>
        <img className='absolute w-[31.11px] h-[60.11px] mt-[-450px] rotate-180 ml-[1200px]  bg-white pt-[10px] pb-[10px] shadow-sm shadow-black'  src='https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png' alt=''/>
        </div>
      </div>
    ),
    Hello1: (
      <div className='flex flex-col justify-center items-center absolute ml-[250px]'>
        <span className='text-[#ff0000] font-bold text-[16px]'>💰 HỖ TRỢ TRẢ GÓP THẺ TÍN DỤNG mPOS & CÔNG TY TÀI CHÍNH<span className='text-[#337ab7]'> (XEM TẠI ĐÂY)</span></span>
        <hr className='absolute w-[900px] h-[0.5px] bg-[#ccc] mt-[-130px] ml-[280px]'/>
  <ul className='mt-[50px] ml-[-300px] text-[16px]'>
  <li className='text-[#ff0000] text-[16px] font-bold'>⚙ THÔNG SỐ CƠ BẢN:</li>
    <li className='mt-[10px]'><span>•</span> CPU: Intel Core i3-14100</li>
    <li><span>•</span> Socket: LGA1700</li>
    <li><span>•</span> Số nhân/luồng: 4(4P-Core|0E-Core)/8 luồng</li>
    <li><span>•</span> Base Clock (P-Core): 3.5 GHz</li>
    <li><span>•</span> Boost Clock (P-Core): TBC</li>
    <li><span>•</span> TDP: 65W</li>
  </ul>
  <hr className='absolute w-[900px] h-[0.5px] bg-[#ccc] mt-[300px] ml-[280px]'/>
<span className='absolute text-[16px] text-[#ff0000] font-bold ml-[-230px] mt-[350px]'>🛒 Xem thêm các sản phẩm CPU - Bộ vi xử lý<span className='text-[#337ab7]'> tại đây</span></span>
      </div>
    ),
    Hello2: (
      <div className='absolute overflow-auto h-[600px] w-[1000px] ml-[250px]'>
        <span className='font-bold'>BẢNG THÔNG SỐ CHI TIẾT:</span>
<div className='flex flex-row'>
        <div className='flex flex-col absolute text-[15px]'>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Nhà sản xuất</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Model</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>CPU</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Socket</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>TDP</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>P-Cores</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>E-Cores</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Số nhân</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Số luồng</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Base Clock (P-Core)</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-b-[0px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Boost Clock (P-Core)</span>
        <span className='font-bold bg-[#d9d9d9] border-[1px] border-[black] w-[242px] h-[54] pb-[16px] pt-[16px] pl-[20px]'>Bảo hành</span>
        </div>
        <div className='flex flex-col absolute ml-[240px] text-[15px]'>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>Intel</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>i3-14100</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>Intel Core i3-14100</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>LGA1700</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>65W</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>4</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>0</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>4</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>8</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>3.5 GHz</span>
        <span className='bg-white border-[1px] border-b-[0px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>-</span>
        <span className='bg-white border-[1px] border-l-[0px] border-[black] w-[600px] h-[54] pb-[16px] pt-[16px] pl-[20px] pr-[120px]'>36 tháng</span>
        </div>
        </div>
      </div>
    ),
  };
  const [showDetails, setShowDetails] = useState(false);
  const [selectedContent, setSelectedContent] = useState('Hello');

  function handleViewDetails() {
    setShowDetails(true);
  }

  function handleChangeContent(content) {
    setSelectedContent(content);
  }

  function handleCloseDetails() {
    setShowDetails(false);
  }
  return (
    <div className='bg-white min-h-screen'>
      <div className='bg-[#f5f5f5] w-[1375px] ml-[75px]'>
        <div className='ml-[-5px] h-[35px] mt-[-1px] flex justify-start items-center rounded-b-[5px]'>
          <a href='/'>
            <span className='text-black hover:text-[#eb6154] cursor-pointer text-sm ml-[20px]'>Trang chủ</span>
          </a>
          <span className='text-[#777] text-sm ml-[5px]'> /</span>
          <a href='/cpu'>
            <span className='text-black text-sm ml-[5px]'> Linh kiện mới</span>
          </a>
          <span className='text-[#777] text-sm ml-[5px]'> /</span>
          <span className='text-[#777] text-sm ml-[5px]'>  CPU Intel Core i3 14100 Box chính hãng | 3.5 GHz, 4 Cores 8 Threads, LGA1700</span>
        </div>
      </div>

      <div className='flex flex-row mt-[40px] ml-[75px]'>
      <span className='font-bold text-[18px]'>CPU Intel Core i3 14100 Box chính hãng | 3.5 GHz, 4 Cores 8 Threads, LGA1700</span>
      <div>
      <div className='ml-[200px]'>
      <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
      <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
      <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
      <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
      <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
      <span>0 đánh giá</span>
      </div>
      <div className='flex flex-row mt-[-22px] ml-[390px]'>
      <img className='w-[16px] h-[16px] mt-[5px]' src='https://theme.hstatic.net/200000420363/1001226108/14/plusmom.png?v=66' alt=''/>
      <span className='ml-[5px]'>So sánh</span>
      </div>
      </div>
      </div>
      <hr className='absolute w-[1375px] h-[2px] bg-[#ccc] mt-[10px] ml-[75px]'/>

      <div className='flex flex-row'>
      <div className='max-w-[620px] max-h-[620px] ml-[75px] mt-[30px]'>
        <img className='w-full h-full object-cover' src='https://product.hstatic.net/200000420363/product/i3-14th_6ea5868c881c4514b2dcee37c87e32d0_master.jpg' alt=''/>
      </div>
      <div className='flex flex-col ml-[30px]'>
        <span className='text-[28px] font-bold text-[#d21212] mt-[30px]'>3,890,000₫</span>
        <span className='text-[#2f80ed] hover:text-[#D21212] mt-[20px]'>Xem siêu thị còn hàng</span>
        <hr className='absolute w-[700px] h-[0.5px] bg-[#ccc] mt-[125px]'/>
        <span className='font-bold mt-[30px]'>Mã sản phẩm:<span className='font-normal'> I3.14100.B.CH</span></span>

<div className='mt-[10px] flex flex-col'>
        <span className='font-bold text-[17px]'>•<span className='text-[#ff0000]'> TẤT CẢ KHUYẾN MÃI</span><a href='/tong-hop-khuyen-mai'><span className='text-[#337ab7]'> TẠI ĐÂY</span></a></span>
        <span className='font-bold text-[16px]'>•<span className='text-[#482ffa]'> Trả góp</span><a href='/tong-hop-khuyen-mai'><span className='text-[#337ab7]'> Tại đây</span></a><span className='text-[#482ffa]'> Đổi trả</span><span className='text-[#337ab7]'> Tại đây</span></span>
        <span className='text-[14px]'>•<span> ✅ Xem thêm Gear </span><span className='text-[#337ab7]'>Tại đây</span> SSD <span className='text-[#337ab7]'>Tại đây</span> Bàn ghế gaming <span className='text-[#337ab7]'>Tại đây</span> Bộ máy tính PC văn phòng<span className='text-[#337ab7]'> Tại đây</span></span>
        <span className='font-bold text-[16px] mt-[10px] text-[#ff0000]'>💰 HỖ TRỢ TRẢ GÓP THẺ TÍN DỤNG mPOS & CÔNG TY TÀI CHÍNH <span  className='text-[#518ac8]'>(XEM TẠI ĐÂY)</span></span>
        <hr className='absolute w-[700px] h-[0.5px] bg-[#ccc] mt-[125px]'/>
</div>

<div className='mt-[40px]'>
  <span className='text-[#ff0000] text-[16px] font-bold'>⚙ THÔNG SỐ CƠ BẢN:</span>
  <ul className='mt-[10px] text-[16px]'>
    <li><span>•</span> CPU: Intel Core i3-14100</li>
    <li><span>•</span> Socket: LGA1700</li>
    <li><span>•</span> Số nhân/luồng: 4(4P-Core|0E-Core)/8 luồng</li>
    <li><span>•</span> Base Clock (P-Core): 3.5 GHz</li>
    <li><span>•</span> Boost Clock (P-Core): TBC</li>
    <li><span>•</span> TDP: 65W</li>
  </ul>
  <hr className='absolute w-[700px] h-[0.5px] bg-[#ccc] mt-[20px]'/>
</div>

<span className='text-[#ff0000] font-bold mt-[40px]'>🛒 Xem thêm các sản phẩm CPU - Bộ vi xử lý<span className='text-[#518ac8]'> tại đây</span></span>

<div className='flex flex-col justify-center items-center mt-[40px] mb-[500px]'>
      <button
        className="border-[#2f80ed] border-[1px] text-[#2f80ed] hover:text-[#d21212] w-[340px] px-4 py-2 rounded-md mt-4 text-[14px] flex justify-center items-center"
        onClick={handleViewDetails}
      >
        Xem thêm cấu hình chi tiết
        <FontAwesomeIcon className='text-[10px] ml-[10px]' icon={faPlay} />
      </button>
        <div className='flex flex-row mt-[20px]'>
          <div className='bg-[#E02027] w-[700px] h-[50px] rounded-[5px] flex justify-center items-center text-center'>
          <span className='text-[15px] text-[#FFFFFF]'>MUA NGAY</span>
          </div>
        </div>
        <div className='flex flex-row mt-[10px]'>
            <div className='bg-[#0991E0] w-[345px] h-[46.56px] rounded-[5px] flex justify-center items-center text-center '>
            <span className='text-[13px] text-[#FFFFFF]'>THÊM VÀO GIỎ HÀNG</span>
            </div>
            <div className='bg-[#0991E0] w-[345px] h-[46.56px] rounded-[5px] flex flex-col justify-center items-center text-center ml-[10px]'>
            <p className='text-[13px] text-[#FFFFFF]'>TRẢ GÓP 0% QUA THẺ</p>
            <p className='text-[12px] text-[#FFFFFF]'>Visa, Mastercard, JCB, Amex</p>
            </div>
            </div>
            <div className='flex flex-col mt-[5px]'>
              <span>Gọi đặt mua<span className='text-[#2f80ed] text-[14px]'> 1900 0243</span> (8:30 - 21:00)</span>
              </div>
      </div>
      {showDetails && (
        <div className="fixed inset-0 z-10 bg-white border-[#e0e0e0] border-[1px] flex justify-center items-center w-[1520px] h-[55px]">
          <div className="p-4 bg-white mt-[1050px] w-[1400px] h-[1000px] ">
            <h1>{contentData[selectedContent]}</h1>
            <div className="flex justify-between mt-4">
              <span
                className={`${
                  selectedContent === 'Hello'
                    ? ' text-[#2d9cdb] font-bold <span> absolute border-b-4 rounded-none border-[#2d9cdb] w-[100px] h-[1px]</span>'
                    : ' text-gray-600'
                } px-4 py-2 rounded-md absolute mt-[-80px] w-[130px] mb-[50px] text-[16px] ml-[400px]`}
                onClick={() => handleChangeContent('Hello')}
              >
                Điểm nổi bật
              </span>
              <button
                className={`${
                  selectedContent === 'Hello1'
                    ? ' text-[#2d9cdb] font-bold <span> absolute border-b-4 rounded-none border-[#2d9cdb] w-[100px] h-[1px]</span>'
                    : ' text-gray-600'
                } px-4 py-2 rounded-md absolute mt-[-80px] w-[170px]  ml-[550px] text-[16px] `}
                onClick={() => handleChangeContent('Hello1')}
              >
                Thông số kỹ thuật
              </button>
              <button
                className={`${
                  selectedContent === 'Hello2'
                    ? ' text-[#2d9cdb] font-bold <span> absolute border-b-4 rounded-none border-[#2d9cdb] w-[100px] h-[1px]</span>'
                    : ' text-gray-600'
                } px-4 py-2 rounded-md absolute mt-[-80px] w-[160px] ml-[730px] text-[16px]`}
                onClick={() => handleChangeContent('Hello2')}
              >
                Bài viết đánh giá
              </button>
            </div>
            <button
              className=" bg-[#fff] border-[0.5px] border-[#e0e0e0] px-4 py-2 rounded-md absolute text-black mt-[-80px] ml-[1350px]"
              onClick={handleCloseDetails}
            >
              X Đóng
            </button>
            
          </div>
        </div>
      )}
      
      </div>
        </div>

    </div>
  );
}

export default CPU14Product1;