import StarRating from "../ShowStarIcon/StarRating";
import { TOUR_ENDPOINT } from "../../../../config";
import { useState, useEffect } from "react";

function TourInf() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(TOUR_ENDPOINT)
            .then(res => res.json())
            .then(dt => {
                
                const slicedData = dt.tours?.slice(0, 3) || []; // Tránh lỗi nếu `dt.tours` là undefined
                setData(slicedData);
            })
            .catch(error => console.error("Error fetching tours:", error));
    }, []);

    if (data.length === 0) {
        return <p>Loading...</p>; // Hiển thị Loading khi chưa có dữ liệu
    }

    return (
        <>
            {data.map((d, index) => (
                <div className="tour-near_item" key={d.id || index}>
                    <div className="tour-near_item-img">
                    <img src={d.image?.[0] || "/default-image.jpg"} alt={`tour ${index + 1}`} />
                    </div>

                    <div className="description">
                        <h4 className="roboto">{d.title || "Tour không có tiêu đề"}</h4>

                        <div className="tour-inf">
                            <div className="tour-inf_time">
                                <p>Thời lượng: <span>{`${d.duration || "N/A"}`}</span></p>
                                <p>Số người: <span>{d.participants || "Không xác định"}</span></p>
                            </div>
                            <div className="tour-inf_rating">
                                <StarRating star={d.star || 0} />
                            </div>
                            <div className="tour-inf_price">
                                <span>
                                    {d.price ? d.price.toLocaleString("vi-VN") : "Liên hệ"}
                                    <sup>đ</sup>
                                </span>
                                / Khách
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TourInf;
