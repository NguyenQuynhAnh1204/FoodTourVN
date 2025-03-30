import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ROUTERS} from "../../../../../utils/router";
import Button from 'react-bootstrap/Button';


function ForgetPassword() {
    const link = useNavigate();
    const [input, setInput] = useState("");
    const [validAcc, setValidAcc] = useState(null);
    const [error, setError] = useState("");


    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState(null);

    const validate = (input) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|vn|info|biz|co\.uk|io|dev)$/;
        const phoneRegex = /^(0[3-9][0-9]{8}|(\+84|84)[3-9][0-9]{8})$/;

        if (input.length === 0) {
            setError("Mời bạn nhập email hoặc số điện thoại");
            setValidAcc(false);
            return;
        }

        if (emailRegex.test(input) || phoneRegex.test(input)) {
            setError("");   
            setValidAcc(true);
        } else {
            setError("Email hoặc số điện thoại không hợp lệ");
            setValidAcc(false);
        }
    };

    const handleInput = (e) => {
        const value = e.target.value;
        setInput(value);
        validate(value);
    };

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setCheckPassword(value === newPassword);
    };

    const handleSubmit = () => {
        if (!validAcc || !checkPassword) return;
        link(ROUTERS.USER.HOME);
    };


    return (
        <div className="forget-pass_page user-inf_page">
            <p className="user-inf_title forget-pass_title">Đặt lại mật khẩu</p>
            <form>
                <label className="user-inf_detail">
                    <p>Email / Số điện thoại</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email / Số điện thoại"
                        value={input}
                        onChange={handleInput}
                    />
                    {
                        validAcc === false && <p className="change-pass_error">{error}</p>
                    }
                </label>
                <label className="user-inf_detail">
                    <p>Mật khẩu mới</p>
                        <input
                        type="password"
                        name="newPassword"
                        onChange = {handleNewPassword}
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Xác nhận mật khẩu</p>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange = {handleConfirmPassword}
                    />
                    {checkPassword === false && (<p className="change-pass_error">Mật khẩu không đúng!</p>)}
                </label>
                <Button 
                    className="save-change_pass btn-password modal-btn" variant="primary" type="button" 
                    onClick={handleSubmit}
                    disabled={!validAcc || !checkPassword} 
                >
                    Đặt lại mật khẩu
                </Button>
            </form>
        </div>
    )
}

export default ForgetPassword;