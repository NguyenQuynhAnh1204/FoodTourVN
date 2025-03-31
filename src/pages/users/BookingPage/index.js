import { HiOutlineClipboardList } from "react-icons/hi";
import { CiCreditCard1, CiCircleCheck } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import NumberPassenger from "./numberPassenger";
import {useEffect, useState} from "react";


function BookingPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null); // Lưu ngày đã chọn
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);
    const bankIcon = process.env.PUBLIC_URL + "/img/bank.svg";
    const moneyIcon = process.env.PUBLIC_URL + "/img/money.svg";
    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        const days = [];
        for (let i = 1; i <= lastDate; i++) {
            days.push(i);
        }

        setFirstDayOfMonth(firstDay);
        setDaysInMonth(days);
    }, [currentDate]);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setSelectedDay(null);
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setSelectedDay(null);
    };
    const handleDayClick = (day) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)); // Cập nhật currentDate
        setSelectedDay(day);
    };
    const renderDays = () => {
        const emptyDays = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            emptyDays.push(<div className="empty-day" key={`empty-${i}`}></div>);
        }

        return [
            ...emptyDays,
            ...daysInMonth.map((day) => {
                const isSelected = day === selectedDay;
                return (
                    <div
                        className={`day ${isSelected ? 'selected' : ''}`}
                        key={day}
                        onClick={() => handleDayClick(day)}
                    >
                        {day}
                    </div>
                );
            }),
        ];
    };
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
                            <input placeholder="Nguyễn Văn A" />
                            <input placeholder="@gmail.com" />
                            <input placeholder="0946732284" />
                            <input placeholder="Hoang Mai, Ha Noi" />
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
                        <div className="calendar">
                            <div className="calendar-header">
                                <button onClick={handlePrevMonth}>&lt;</button>
                                <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                                <button onClick={handleNextMonth}>&gt;</button>
                            </div>
                            <div className="calendar-body">
                                <div className="weekdays">
                                    <div>Sun</div>
                                    <div>Mon</div>
                                    <div>Tue</div>
                                    <div>Wed</div>
                                    <div>Thu</div>
                                    <div>Fri</div>
                                    <div>Sat</div>
                                </div>
                                <div className="days">{renderDays()}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="book-title">Phương thức thanh toán</p>
                        <div className="w-100 input_custom_group">
                            <label className="image_custom_group">
                                <div>Tiền mặt</div>
                                <img src={moneyIcon} alt="tm"/>
                            </label>
                            <input type="radio" name="payment" value="cash" className="input_custom"/>
                        </div>

                        <div className="w-100 input_custom_group">
                            <label className="image_custom_group">
                                <div>Chuyển khoản ngân hàng</div>
                                <img src={bankIcon} alt="bank"/>
                            </label>
                            <input type="radio" name="payment" value="bank" className="input_custom"/>
                        </div>
                    </div>
                </div>
                <div className="book-detail_right">
                    <p className="book-title">Tóm tắt tour</p>
                    <div className="booking_content">
aa
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BookingPage