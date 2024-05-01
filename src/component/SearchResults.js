import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Thêm thư viện useLocation để lấy query parameter

const SearchResults = () => {
  const location = useLocation(); // Sử dụng hook useLocation để lấy query parameter

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query'); // Lấy giá trị của query parameter 'query'

    // Gọi API hoặc thực hiện xử lý tìm kiếm dựa trên giá trị query ở đây

    console.log('Từ khóa tìm kiếm:', query);
  }, [location.search]);

  return (
    <div>
      <h2>Kết quả tìm kiếm</h2>
      {/* Hiển thị danh sách sản phẩm tìm kiếm ở đây */}
    </div>
  );
};

export default SearchResults;