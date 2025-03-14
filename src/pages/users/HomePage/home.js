import TourBest from "./tourBest";
import Blog from "./blog";
import TourNear from "./tourNear";



function HomePage () {
    return (
        <div className="home">
            <TourBest/>
            <Blog/>
            <TourNear/>
        </div>
    )
}

export default HomePage;