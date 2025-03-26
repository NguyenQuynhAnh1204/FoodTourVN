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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleGenderChange = (selectedOption) => {
        setSelectedGender(selectedOption);
        setUserData((prevData) => ({
            ...prevData,
            gender: selectedOption.value
        }));
    };

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
                        // onChange={handleChange} 
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Giới tính</p>
                    <Select 
                        options={options} 
                        value={selectedGender} 
                        styles={customStyles}
                        // onChange={handleGenderChange} 
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Số điện thoại</p>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={userData.phone} 
                        // onChange={handleChange} 
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Email</p>
                    <input 
                        type="email" 
                        name="email" 
                        value={userData.email} 
                        // onChange={handleChange} 
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Địa chỉ</p>
                    <input 
                        type="text" 
                        name="address" 
                        value={userData.address} 
                        // onChange={handleChange} 
                    />
                </label>
                <label className="user-inf_detail">
                    <p>Mật khẩu</p>
                    <input 
                        type="password" 
                        name="password" 
                        value={userData.password} 
                        // onChange={handleChange} 
                    />
                </label>
                <Button className="change-pass" onClick variant="primary" type="submit">Đổi mật khẩu</Button>
            </form>
        </div>
    );
}

export default UserInfPage;
