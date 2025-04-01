import { useState } from "react";

const duration = ["Dưới 6 tiếng", "6-12 tiếng", "12-18 tiếng", "Trên 18 tiếng"];
const people = ["Cá nhân (1 người)", "Nhóm 2-5 người", "Nhóm 5-10 người", "Nhóm 10-20 người", "Nhóm trên 20 người"];

function Filter() {
    const [value, setValue] = useState(0);
    const [selectedDuration, setSelectedDuration] = useState("");
    const [selectedPeople, setSelectedPeople] = useState("");

    // Hàm xử lý chọn / bỏ chọn
    const handleSelect = (setter, selectedValue, newValue) => {
        if (selectedValue === newValue) {
            setter("");
        } else {
            setter(newValue);
        }
        console.log(newValue)
    };

    return (
        <div className="tour-filter">
            <form>
                {/* <fieldset>
                    <label className="filter-title">Giá</label>
                    <label className="input-range">
                        <span>{parseInt(value).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        <input 
                            type="range" 
                            min="0" 
                            max="20000" 
                            step="1000"
                            value={value} 
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <span>{(20000).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                    </label>
                </fieldset> */}

                <fieldset>
                    <label className="filter-title">Thời lượng</label>
                    {duration.map((item) => (
                        <label key={item}>
                            <input 
                                type="checkbox" 
                                checked={selectedDuration === item} 
                                onChange={() => handleSelect(setSelectedDuration, selectedDuration, item)}
                            />
                            {item}
                        </label>
                    ))}
                </fieldset>

                <fieldset>
                    <label className="filter-title">Số người tham gia</label>
                    {people.map((item) => (
                        <label key={item}>
                            <input 
                                type="checkbox" 
                                checked={selectedPeople === item} 
                                onChange={() => handleSelect(setSelectedPeople, selectedPeople, item)}
                            />
                            {item}
                        </label>
                    ))}
                </fieldset>
            </form>   
        </div>
    );
}

export default Filter;
