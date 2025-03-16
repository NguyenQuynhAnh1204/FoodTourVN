
import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

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

export default StarRating;