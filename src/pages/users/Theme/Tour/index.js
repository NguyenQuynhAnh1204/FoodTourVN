import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
const data = [
    {
        img: "img/anh12.jpeg",
        title: "Bún Săn Mồi - Thử hết các loại bún ngon nhất Hà Nội",
        time: 8,
        people: "5-10 người",
        star: 5,
        price: 800000
    },
    {
        img: "img/anh12.jpeg",
        title: "Bún Săn Mồi - Thử hết các loại bún ngon nhất Hà Nội",
        time: 8,
        people: "5-10 người",
        star: 4.9,
        price: 800000
    },
    {
        img: "img/anh12.jpeg",
        title: "Bún Săn Mồi - Thử hết các loại bún ngon nhất Hà Nội",
        time: 8,
        people: "5-10 người",
        star: 3,
        price: 800000
    },
]



function TourInf() {
    return (
        <>
                {
                    data.map((d, index) => (
                        <div className="tour-near_item">
                            <img src={d.img} alt={`tour ${index+1}`}/>

                            <div className="description">
                                <h4 className="roboto">{d.title}</h4>

                                <div className="tour-inf">
                                    <div className="tour-inf_time">
                                        <p>Thời lượng: <span>{`${d.time} tiếng`}</span></p>
                                        <p>Số người: <span>{`${d.people}`}</span></p>
                                    </div>
                                    <div className="tour-inf_rating">
                                        <StarRating star={d.star}/>
                                    </div>
                                    <div className="tour-inf_price">
                                        
                                        <span>{d.price.toLocaleString("vi-VN")}
                                        <sup>đ</sup></span>
                                        / Khách 
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }         
            </>
    )
}
function StarRating({ star, maxStars = 5 }) {
    return (
    <div>
        {Array.from({ length: maxStars }, (_, index) => {
            if (index < Math.floor(star)) {
                return <FaStar key={index} />;
            } else if (index === Math.floor(star) && star % 1 !== 0) {
                return <FaRegStarHalfStroke key={index} />;
            } else {
                return <FaRegStar key={index} />;
            }
        })}
    </div>
)
}


export default TourInf;