import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
import { RxSlash } from "react-icons/rx";
// import { useState, useEffect } from "react";

const data = [
    {}
]

function BlogDetail() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     // fetch
    // }, [])

    return (
        <div className="blog-detail">
                <div className="router-page">
                    <Link to = {ROUTERS.USER.HOME}>Home</Link>
                    <RxSlash />
                    <Link to = {ROUTERS.USER.BLOGS}>Blogs</Link>
                    <RxSlash/>
                    <Link to = {ROUTERS.USER.BLOG_DETAIL}>Blog Title</Link>
                </div>
                <div className="blog-detail_container">
                    <h4 className="blog-title">24h ăn sập Hà Nội cùng Ninh Tito</h4>
                    <div className="blog-detail_content">
                        <p className="blog-content-intro">
                        Hà Nội 36 phố phường với rất nhiều món ăn ngon, nhưng vì thế cũng khiến chúng ta khó lựa chọn cho bữa ăn của mình. Việc sáng nay ăn gì, trưa nay ăn gì, tối nay ăn gì, ăn xong rồi đi ăn gì nữa đây sẽ không còn làm bạn bối rối nữa. Dưới đây Ninh sẽ chỉ cho các bạn một số địa điểm ăn uống thả ga trong 24h ở Hà Nội luôn. Ninh hi vọng chắc ai đó sẽ cần!
                        </p>
                        <p>
                        Đồ ăn sáng ở Hà Nội cũng khá đa dạng, nhưng đặc biệt với Hà Nội bạn nên thử những món ăn sau đây nhé!
                        </p>


                        <div>
                            <h5 className="blog-content_title">
                            1. PHỞ BÒ - BỮA SÁNG ĐẶC TRƯNG CỦA NGƯỜI HÀ NỘI.
                            </h5>
                            <p>Phở bò luôn là cái tên đứng đầu danh sách món ngon cho bữa sáng ở Hà Nội. Bất cứ ngóc ngách nào của thủ đô, bạn cũng có thể bắt gặp được gánh phở thơm phưng phức. Bánh phở nóng hổi ăn kèm miếng quẩy giòn tan thì không gì sánh được.</p>
                            <p>Các quán phở ngon ở Hà Nội Ninh hay ăn:</p>
                            <ul>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                            </ul>
                            <img src="" alt="anh1"/>
                        </div>
                        <div>
                            <h5 className="blog-content_title">
                            2. PHỞ BÒ - BỮA SÁNG ĐẶC TRƯNG CỦA NGƯỜI HÀ NỘI.
                            </h5>
                            <p>Phở bò luôn là cái tên đứng đầu danh sách món ngon cho bữa sáng ở Hà Nội. Bất cứ ngóc ngách nào của thủ đô, bạn cũng có thể bắt gặp được gánh phở thơm phưng phức. Bánh phở nóng hổi ăn kèm miếng quẩy giòn tan thì không gì sánh được.</p>
                            <p>Các quán phở ngon ở Hà Nội Ninh hay ăn:</p>
                            <ul>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                                <li>- Phở mặn: 34 Hàng Giấy, Q. Hoàn Kiếm, HN. Mở cửa từ 6h15 sáng tới trưa (trưa bán bún chả)</li>
                            </ul>
                            <img src="" alt="anh1"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default BlogDetail;