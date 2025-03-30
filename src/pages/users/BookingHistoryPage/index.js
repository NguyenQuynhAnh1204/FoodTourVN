import { useState } from 'react';
import { Button, Modal} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import { TiTick } from "react-icons/ti";

const data = [
    {
        title: "Bún Săn Mồi – Thử hết các loại bún ngon nhất Hà Nội!",
        VAT: "Đã xuất VAT",
        payment: true,
        price: 4200000,
        status: true,
    },
    {
        title: "Bún Săn Mồi – Thử hết các loại bún ngon nhất Hà Nội!",
        VAT: "Đã xuất VAT",
        payment: true,
        price: 425000,
        status: false,
    },
    {
        title: "Bún Săn Mồi – Thử hết các loại bún ngon nhất Hà Nội!",
        VAT: "Đã xuất VAT",
        payment: true,
        price: 425000,
        status: false,
    },
    {
        title: "Bún Săn Mồi – Thử hết các loại bún ngon nhất Hà Nội!",
        VAT: "Đã xuất VAT",
        payment: true,
        price: 425000,
        status: false,
    },

]

function BookingHistoryPage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const handleShowSuccess = () => setShowSuccessModal(true);
    const handleCloseSuccess = () => setShowSuccessModal(false);

    const handleConfirmCancel = () => {
        setShow(false); // Đóng modal xác nhận
        setTimeout(() => {
            setShowSuccessModal(true); // Mở modal success sau một chút (tránh lỗi giao diện)
        }, 300);
    };

    const link = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleShowDetail = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            link(ROUTERS.USER.TOUR_DETAIL);
        }, 500); // Delay 300ms để tạo hiệu ứng mượt
    };


    return (
        
        <div className={`book-history_page ${data.length < 2 ? "non-history" : ""} ${isTransitioning ? "fade-out" : ""}`}>
            <p className="user-history_title">Lịch sử đặt tour</p>
            {
                data.map((item, index) => (
                    <div className="user-history_inf" key={index}>
                        <div className="history-tour_book">
                            <div className="history-tour_img"><img src="img/anh1.jpeg" alt="anh1"/></div>
                            <div className="history-tour_inf">
                                <p className="history-tour_title">{item.title}</p>
                                <p className="history-tour_vat">{item.VAT}</p>
                                {
                                    item.payment ? (
                                        <p className="history-tour_payment">Đã thanh toán</p>

                                    ) : (
                                        <p className="history-tour_payment">Chưa thanh toán</p>
                                    )
                                }
                                <p className="history-tour_price">
                                    <span>{(item.price || 0).toLocaleString("vi-VN")}<sup>đ</sup></span>
                                </p>
                            </div>
                        </div>

                        <div className="history-tour_actions">
                            {
                                item.status ? (
                                    <p className="history-tour_status">Đã hoàn thành</p>
                                ) : (
                                    <p className="history-tour_status">Chưa hoàn thành</p>
                                )
                            }
                            <div className="history-tour_inter">
                                {
                                    item.status ? (
                                        <Button className=" history-btn">Đánh giá</Button>
                                    ) : (
                                        <>
                                            <Button className=" history-btn" type="button" onClick = {handleShow}>Huỷ booking</Button>
                                            <Modal
                                                show={show}
                                                onHide={handleClose}
                                                backdrop="static"
                                                keyboard={false}
                                            >
                                                <Modal.Header className='modal-header_cancel'>
                                                    <Modal.Title className='modal-title_cancel'>Xác nhận huỷ booking</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body className='modal-body_cancel'>
                                                    Bạn muốn huỷ booking của tour này?
                                                </Modal.Body>
                                                <Modal.Footer className='modal-footer_cancel'>
                                                    <Button variant="primary" className='btn-cancel modal-btn' onClick={handleConfirmCancel}>
                                                        Đồng ý
                                                    </Button>
                                                    <Button variant="secondary" onClick={handleClose} className='btn-close_cancel modal-btn'>
                                                        Đóng
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            <Modal
                                                size="sm"
                                                show={showSuccessModal}
                                                onHide={handleCloseSuccess}
                                                backdrop="static"
                                                keyboard={false}
                                            >
                                                <Modal.Body className='modal-body_success'>
                                                    <div className='modal-body_icon'><TiTick /></div>
                                                    <p className='modal-body_text'> Huỷ booking thành công </p>
                                                </Modal.Body>
                                                <Modal.Footer className='modal-footer_success modal-footer_cancel'>
                                                    <Button variant="primary" className='btn-success modal-btn' onClick={handleCloseSuccess}>
                                                        Hoàn tất
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                        </>
                                    )
                                }
                                <Button className=" history-btn">Xem hoá đơn</Button>
                                <Button className=" history-btn" onClick={handleShowDetail} type="button">Xem chi tiết</Button>
                            </div>
                        </div>
                        
                    </div>

                ))
            }
        </div>
    )
}

export default BookingHistoryPage