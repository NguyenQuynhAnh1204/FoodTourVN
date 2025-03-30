import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaRegHeart, FaHeart } from "react-icons/fa";


const initialData = [
  { id: 1, name: "tour 1", price: 800000, img: "img/anh1.jpeg" },
  { id: 2, name: "tour 2", price: 900000, img: "img/anh10.jpeg" },
  { id: 3, name: "tour 3", price: 100000, img: "img/anh11.jpeg" },
  { id: 4, name: "tour 4", price: 1500000, img: "img/anh12.jpeg" },
];

function DropdownLike({ isActive, onToggle }) {
  // State quản lý danh sách item
  const [data, setData] = useState(initialData);


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

              
            </div>
          ))}

          
        </div>
      ) : null}
    </>
  );
}

export default DropdownLike;
