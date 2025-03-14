import { FaFacebookF, FaYoutube, FaInstagram,  FaTiktok } from "react-icons/fa";

function Footer () {
    return (
        <div className = "footer">
            <div className="content">
                <div className="contact">
                <div className="logo">
                    <h1 className="pacifico-regular"><p>Đớp</p>
                        Đớp Đớp
                    </h1>
                    </div>
                    <ul className="contact-info inf-item">
                        <li> Email: dopdopdop@gmail.com</li>
                        <li> Hotline: 0123456789</li>
                        <li>Địa chỉ: Nghiêm Xuân Yêm - Đại Kim - Hoàng Mai - Hà Nội</li>
                    </ul>
                </div>

                <div className="service">
                    <h3 className="footer-title-text">Dịch vụ</h3>
                    <ul className="service-info inf-item">
                        <li>Tìm kiếm và đặt lịch foodtour</li>
                        <li>Hệ thống quản lý foodtour</li>
                        <li>Dịch vụ quảng cáo</li>
                    </ul>
                </div>

                <div className="follow">
                    <h3 className="footer-title-text">Theo dõi chúng tôi trên</h3>
                    <ul className="follow-info inf-item">
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaTiktok /></li>
                        <li><FaYoutube/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;