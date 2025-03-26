import { useState } from "react";

function SortTour() {
    const [sort, setSort] = useState("hight");

    const handleSort = (sortType) => {
        setSort(sortType);
    };

    return (
        <div className="tour-sort">
            <button 
                className={`tour-sort_minmax ${sort === "hight" ? "sort-btn" : ""}`} 
                onClick={() => handleSort("hight")}
            >
                Giá Cao - Thấp
            </button>
            <button 
                className={`tour-sort_maxmin ${sort === "low" ? "sort-btn" : ""}`} 
                onClick={() => handleSort("low")}
            >
                Giá Thấp - Cao
            </button>
            <button 
                className={`tour-sort_star ${sort === "rating" ? "sort-btn" : ""}`} 
                onClick={() => handleSort("rating")}
            >
                Đánh giá
            </button>
        </div>
    );
}

export default SortTour;
