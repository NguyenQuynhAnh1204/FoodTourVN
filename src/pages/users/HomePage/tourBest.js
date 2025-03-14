
const data = [
    {
        img: "img/anh12.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img: "img/anh5.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img:"img/anh1.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img: "img/anh4.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img: "img/anh7.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img:   "img/anh8.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img: "img/anh5.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img:"img/anh1.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img: "img/anh4.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img: "img/anh5.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img:"img/anh1.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
    {
        img: "img/anh4.jpeg",
        text: "heloooo",
        describe: "mot chuôi dai khoang 20 ký tu"
    },
]

function TourBest() {
    return (
        <div className="tour-best">
            <h3 className="title-text">Tours nổi bật nhất</h3> 
            <div className="tour-img">
                <div className="img-left">
                    <img src={data[0].img} alt="anh1"/>  
                </div>

                <div className="img-center">
                    <img src={data[1].img} alt="anh2"/>
                    <img src={data[2].img}alt="anh3"/>
                </div>
                
                <div className="img-right">
                    <img src={data[3].img} alt="anh4"/>
                    <img src={data[4].img} alt="anh5"/>
                </div>
            </div>

        </div>
    )
}

export default TourBest;