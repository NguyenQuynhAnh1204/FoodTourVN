import { useEffect, useState } from "react";

function TourPrice() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://67caf3953395520e6af3c0ea.mockapi.io/decsription/tour/1")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])

    return (
        <div className="tour-detail_price">
            <div className="tour-detail_money">
                <p>Giá:</p>
                <p className="tour-detail_money-VND">
                    <span>{(data.price || 0).toLocaleString("vi-VN")}<sup>đ</sup></span>
                    / Khách 
                </p>
            </div>
            <div className="tour-detail_filter">
                <p>Thời lượng: <span>{`${data.time} tiếng`}</span></p>
                <p>Số người: <span>{`${data.people}`}</span></p>
                <p>Hình thức: <span>Ẩm thực truyền thống</span></p>
            </div>
            <button className="btn-like" onClick>Thêm vào yêu thích</button>
            <button className="btn-book" onClick>Đặt lịch</button>
        </div>
    )
}


export default TourPrice;