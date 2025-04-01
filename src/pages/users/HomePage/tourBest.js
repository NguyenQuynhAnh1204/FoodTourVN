import { TOUR_ENDPOINT } from "../../../config";
import { useState, useEffect } from "react";

function TourBest() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(TOUR_ENDPOINT)
            .then(res => res.json())
            .then(dt => {
                const slicedData = dt.tours;
                setData(slicedData);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    if (data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="tour-best">
            <h3 className="title-text">Tours nổi bật nhất</h3>
            <div className="tour-img">
                <div className="img-left">
                    <img src={data[0]?.image?.[0]} alt="anh1"/>
                </div>

                <div className="img-center">
                    <img src={data[1]?.image?.[0]} alt="anh2"/>
                    <img src={data[2]?.image?.[0]} alt="anh3"/>
                </div>

                <div className="img-right">
                    <img src={data[3]?.image?.[0]} alt="anh4"/>
                    <img src={data[4]?.image?.[0]} alt="anh5"/>
                </div>
            </div>
        </div>
    );
}

export default TourBest;
