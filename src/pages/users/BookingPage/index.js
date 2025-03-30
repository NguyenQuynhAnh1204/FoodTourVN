
import { HiOutlineClipboardList } from "react-icons/hi";
import { CiCreditCard1, CiCircleCheck } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import NumberPassenger from "./numberPassenger";


function BookingPage() {
   
    return (
        <div className="booking-page">
            <p className="booking-page_title">Đặt tour</p>
            
            <div className="book-progress">
                <div className="book-pro_item">
                    <div className="book-pro_icon"><HiOutlineClipboardList /></div>
                    <p>Nhập thông tin</p>
                </div>
                <IoIosArrowRoundForward className="book-pro_icon-arr"/>
                <div className="book-pro_item">
                    <div className="book-pro_icon">
                    <CiCreditCard1 />
                    </div>
                    <p>Thanh toán</p>
                </div>
                <IoIosArrowRoundForward className="book-pro_icon-arr"/>
                <div className="book-pro_item">
                    <div className="book-pro_icon"><CiCircleCheck /></div>
                    <p>Hoàn tất</p>
                </div>
            </div>

            <div className="booking-page_detail">
                <div className="book-detail_left">
                    <div className="book-user_inf">
                        <p className="book-title">Thông tin liên lạc</p>
                        <div className="book-user_inf-detail">
                            <input value={"Nguyễn Văn A"} readOnly/>
                            <input value={"@gmail.com"} readOnly/>
                            <input value={"0946732284"} readOnly/>
                            <input value={"Hoang Mai, Ha Noi"} readOnly/>
                        </div>
                    </div>

                    <div className="book-type_passenger">
                        <p className="book-title">Hành khách</p>
                        <div className="type-passenger">
                            <NumberPassenger type ={"Người lớn"} age={"Từ 12 tuổi"}/>
                            <NumberPassenger type ={"Trẻ em"} age={"Từ 5-10 tuổi"}/>
                            <NumberPassenger type ={"Người nhỏ"} age={"Từ 2-4 tuổi"}/>
                            <NumberPassenger type ={"Em bé"} age={"Dưới 2 tuổi"}/>
                        </div>
                    </div>
                    <div>
                        <p className="book-title">Chọn lịch</p>
                    </div>
                    <div>
                        <p className="book-title">Phương thưc thanh toán</p>
                    </div>
                </div>
                <div className="book-detail_right">
                    <p className="book-title">Tóm tắt tour</p>
                </div>
            </div>
        </div>
    )
}


export default BookingPage