
function TourPrice({price, people, time}) {

    return (
        <div className="tour-detail_price">
            <div className="tour-detail_money">
                <p>Giá:</p>
                <p className="tour-detail_money-VND">
                    <span>{(price || 0).toLocaleString("vi-VN")}<sup>đ</sup></span>
                    / Khách 
                </p>
            </div>
            <div className="tour-detail_filter">
                <p>Thời lượng: <span>{time}</span></p>
                <p>Số người: <span>{people}</span></p>
            </div>
            <button className="btn-like" onClick>Thêm vào yêu thích</button>
            <button className="btn-book" onClick>Đặt lịch</button>
        </div>
    )
}


export default TourPrice;