import { useState } from "react";

function SortTour({ onSortChange }) {
    const [sort, setSort] = useState("hight");

    const handleSort = (sortType) => {
        setSort(sortType);
        onSortChange(sortType); // Gửi giá trị sort lên TourItem
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
           
        </div>
    );
}

export default SortTour;
