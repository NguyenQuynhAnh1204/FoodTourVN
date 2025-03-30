import { useState } from "react";
import Select from 'react-select';
import Button from 'react-bootstrap/Button';

const initialData = {
    id: "1",
    name: "Nguyễn Văn A",
    gender: "nam",
    phone: "091838284902",
    email: "nguyenvana@gmail.com",
    address: "Đại Kim, Hoàng Mai, Hà Nội",
    password: "123456789"
};

const options = [
    { value: "nam", label: "Nam" },
    { value: "nữ", label: "Nữ" },
    { value: "khác", label: "Khác" }
];

const customStyles = {
    control: (base, state) => ({
        ...base,
        borderRadius: "5px",
        border: state.isFocused ? "1px solid #CA7030" : "1px solid #ccc",
        boxShadow: state.isFocused ? "0 0 5px #CA7030" : "none",
        "&:hover": {
            border: "1px solid #CA7030",
        }
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? "#CA7030" : "white",
        color: state.isSelected ? "white" : "black",
        "&:hover": {
            backgroundColor: "#ffcc80",
            color: "black"
        }
    })
};


function UserInfPage() {
    const [userData, setUserData] = useState(initialData);
    const [selectedGender, setSelectedGender] = useState(
        options.find(option => option.value === initialData.gender) || options[0]
    );

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState(null);
    const [changePassword, setChangePassword] = useState(false);

    const handleChangePassword = () => {
        setChangePassword((prev) => !prev);
    }

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === newPassword) {
            setCheckPassword(true);
        }
    }

    const handleSavePassword = () => {
        if(newPassword !== confirmPassword) {
            setCheckPassword(false);
            return;
        }
        setCheckPassword(true);
        setUserData((prevData) => ({
            ...prevData,
            password: newPassword
        }));
        setChangePassword();
    }


    return (
        <div className="user-inf_page">
            <p className="user-inf_title">Thông tin cá nhân</p>
            <form>
                <label className="user-inf_detail">
                    <p>Họ và tên</p>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        readOnly 
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Giới tính</p>
                    <Select
                        options={options}
                        value={selectedGender}
                        styles={customStyles}
                        readOnly
                    
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Số điện thoại</p>
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        readOnly
                   
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        readOnly
                     
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Địa chỉ</p>
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        readOnly
                    
                    />
                </label>
                {
                    changePassword ? (
                        <>
                        <label className="user-inf_detail">
                            <p>Mật khẩu hiện tại</p>
                            <input
                                type="password"
                                name="currentPassword"
                                value={userData.password}
                            />
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
                        <Button className="save-change_pass btn-password modal-btn" 
                            onClick = {handleSavePassword}
                            variant="primary" type="button"
                        >Đổi mật khẩu</Button>
                        </>
                    ) : (
                        <>
                        <label className="user-inf_detail">
                            <p>Mật khẩu</p>
                            <input
                                type="password"
                                name="password"
                                value={userData.password}
                            // onChange={handleChange} 
                            />
                        </label>
                        <Button className="change-pass btn-password modal-btn" onClick = {handleChangePassword}  variant="primary" type="button">Đổi mật khẩu</Button>
                        </>
                    )
                }
            </form>
        </div>
    );
}

export default UserInfPage;
