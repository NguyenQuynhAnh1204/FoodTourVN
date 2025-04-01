import { useEffect, useState } from "react";
import React from "react";

const ShowQR = ({handleClose}) =>  {
    const qr = process.env.PUBLIC_URL + "/img/qr.svg";
    const closeQr = () => {
        handleClose()
    }
    return (
        <div className="show_qr" onClick={closeQr}>
            <div className="show_qr_content">
                <img src={qr} style={{ width: '60%'}}/>
                <div className="d-flex gap-4 flex-column">
                    <div>
                        <span className="text_cover" style={{ paddingRight: '8px'}}>Chủ tài khoản:</span>
                        <span className="text_title">DOAN NHU SON</span>
                    </div>
                    <div>
                        <span className="text_cover" style={{ paddingRight: '8px'}}>Số tài khoản: </span>
                        <span className="text_title">4780 9700 2303 2339</span>
                    </div>
                    <div>
                        <span className="text_cover" style={{ paddingRight: '8px'}}>Số tiền</span>
                        <span className="text_title">4.200.000 VND</span>
                    </div>
                    <div>
                        <span className="text_cover" style={{ paddingRight: '8px'}}>Nội dung chuyển khoản: </span>
                        <span className="text_title">TOURBUN01-01</span>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default ShowQR;