import TourDesContent from "./tourDesContent"

function TourDescript({descript}) {
    return (
        <div className="tour-detail_desc">
            <div className="tour-detail_desc-text">
                <p className="desc-title" >Điểm nhấn của chương trình :</p>
                <TourDesContent des = {descript}/>
            </div>
        </div>
    )
}

export default TourDescript;