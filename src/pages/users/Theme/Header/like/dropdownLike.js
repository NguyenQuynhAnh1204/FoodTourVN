import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { FaPlus, FaMinus } from "react-icons/fa6";

const initialData = [
  { id: 1, name: "tour 1", price: 800000, img: "img/anh1.jpeg" },
  { id: 2, name: "tour 2", price: 900000, img: "img/anh10.jpeg" },
  { id: 3, name: "tour 3", price: 100000, img: "img/anh11.jpeg" },
  { id: 4, name: "tour 4", price: 1500000, img: "img/anh12.jpeg" },
];

function DropdownLike({ isActive, onToggle }) {
  // State quản lý danh sách item
  const [data, setData] = useState(initialData);
  
  // State quản lý số lượng người tham gia
  const [numberPeople, setNumberPeople] = useState(
    initialData.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  // Tăng số lượng khách
  const handleIncrease = (id) => {
    setNumberPeople((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 0,
    }));
  };

  // Giảm số lượng khách
  const handleDecrease = (id) => {
    setNumberPeople((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Xóa một mục khỏi danh sách yêu thích
  const handleRemoveItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const homeElement = document.querySelectorAll("#root > div > div")[1];
    if (homeElement) {
      if (isActive) {
        homeElement.classList.add("over");
      }
    }
    return () => {
      if (homeElement) {
        homeElement.classList.remove("over");
      }
    };
  }, [isActive]);

  return (
    <>
      <Button variant="link" className="acc-like acc-btn" onClick={onToggle}>
        {isActive ? <FaHeart className="acc-like_icon" /> : <FaRegHeart className="acc-like_icon" />}
        <p className="acc-like_text">Yêu<span>thích</span></p>
      </Button>

      {isActive ? (
        <div className="like-menu">
          {data.map((item) => (
            <div key={item.id} className="like-item">
              <div className="like-inf">
                <input type="checkbox" />
                <div className="like-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="like-inf_dt tour-detail_money">
                  <p>{item.name}</p>
                  <p className="tour-detail_money-VND">
                    <span>{(item.price || 0).toLocaleString("vi-VN")}<sup>đ</sup></span> / Khách 
                  </p>
                </div>
              </div>

              <div className="like-btn">
                <p>Số lượng:</p>
                <Button className="like-btn_minus like-btn_item" onClick={() => handleIncrease(item.id)}>
                  <FaMinus />
                </Button>
                <div className="like-btn_number">{numberPeople[item.id]}</div>
                <Button className="like-btn_plus like-btn_item" onClick={() => handleDecrease(item.id)}>
                  <FaPlus />
                </Button>
                <Button className="like-btn_item like-btn_trash" onClick={() => handleRemoveItem(item.id)}>
                  <LuTrash2 />
                </Button>
              </div>
            </div>
          ))}

          <div className='like-sum'>
            <div className='like-total'>Tổng thành tiền:</div>
            <Button>Đặt lịch</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DropdownLike;
