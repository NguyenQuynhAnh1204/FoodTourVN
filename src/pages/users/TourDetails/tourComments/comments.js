import StarRating from "../../Theme/ShowStarIcon/StarRating";

function TourComments() {
    return (
        <div className="tour-detail_user-cmt">
            <div className="user-cmt_avatar">
                <div className="user-cmt_avatar-img">
                    <img src="/img/anh1.jpeg" alt="ảnh 1"/>
                </div>
            </div>

            <div className="user-cmt_acc">
                <div className="user-cmt_name">
                    <p>Nguyễn Văn A</p>
                    <StarRating star={4}/>
                </div>

                <div className="user-cmt_text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo sint consequatur rem nobis optio necessitatibus dicta enim, numquam impedit iure possimus voluptatem odio sunt perspiciatis illo pariatur deserunt voluptatibus.</p>
                    <div className="user-cmt_img">
                        <div className="user-cmt_img-item">
                            <img src="/img/anh10.jpeg" alt="ảnh 1"/>
                        </div>
                        <div className="user-cmt_img-item">
                            <img src="/img/anh10.jpeg" alt="ảnh 1"/>
                        </div>
                        <div className="user-cmt_img-item">
                            <img src="/img/anh10.jpeg" alt="ảnh 1"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default TourComments;