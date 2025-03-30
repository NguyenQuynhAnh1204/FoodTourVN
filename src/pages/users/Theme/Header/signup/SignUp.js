import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const signupSchema = () =>
    z.object({
      name: z.string().min(1, "Vui lòng nhập tên").max(50, "Tên quá dài"),
      emailOrPhone: z.string().min(1, "Vui lòng nhập email hoặc số điện thoại").refine((value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|vn|info|biz|co\.uk|io|dev)$/;
        const phoneRegex = /^(0[3-9][0-9]{8}|(\+84|84)[3-9][0-9]{8})$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }, {
        message: "Email hoặc số điện thoại không hợp lệ",
      }),
      password: z.string().min(5, "Mật khẩu phải có ít nhất 5 ký tự"),
      confirmPassword: z.string(),
    //   otpSent: z.string().min(5, "Vui lòng nhập OTP").max(5, "OTP chỉ có 5 chữ số").refine((value) => {
    //     return value === otpGenerated;
    //   }, {
    //     message: "Mã OTP không chính xác",
    //   }),
    }).refine(data => data.password === data.confirmPassword, {
      message: "Mật khẩu không đúng",
      path: ["confirmPassword"],
    });

function SignUp({ showSignUp, handleCloseSignUp, handleShowSignIn, handleAccess }) {
    // const [otpSent, setOtpSent] = useState("");
    // const [otpVisible, setOtpVisible] = useState(false);
    // const generateOTP = () => {
    //     const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    //     setOtpSent(randomOtp);
    //     setOtpVisible(true);
    //     clearErrors("otpSent");  // Reset lỗi
    // };;


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setFocus
    } = useForm({
        resolver: zodResolver(signupSchema()),
    });
    
    // useEffect(() => {
    //     setValue("otpSent", otpSent); // Cập nhật giá trị OTP vào form
    // }, [otpSent, setValue]);

    // Focus vào input "Họ và tên" khi mở modal
    useEffect(() => {
        if (showSignUp) {
            setTimeout(() => setFocus("name"), 100);
        }
    }, [showSignUp, setFocus]);

    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log(data)
        handleAccess();
        reset();
    };
   

    return (
        <Modal show={showSignUp} onHide={handleCloseSignUp} backdrop="static">
            <Modal.Header className='sign-header' closeButton>
                <Modal.Title>Đăng ký</Modal.Title>
            </Modal.Header>
            <Modal.Body className='sign-body'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-4">
                        <Form.Control
                            {...register("name")}
                            type="text"
                            placeholder="Họ và tên"
                            className='sign-input'
                        />
                        {errors.name && <p className='sign-error mt-2'>{errors.name.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control
                            {...register("emailOrPhone")}
                            type="text"
                            placeholder="Email / Số điện thoại"
                            className='sign-input'
                        />
                        {errors.emailOrPhone && <p className='sign-error mt-2'>{errors.emailOrPhone.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control
                            {...register("password")}
                            type="password"
                            placeholder="Mật khẩu"
                            className='sign-input'
                        />
                        {errors.password && <p className='sign-error mt-2'>{errors.password.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control
                            {...register("confirmPassword")}
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            className='sign-input'
                        />
                        {errors.confirmPassword && <p className='sign-error mt-2'>{errors.confirmPassword.message}</p>}
                    </Form.Group>

                    {/* <Form.Group className="mb-4 signup-otp">
                        <Form.Control
                            {...register("otpSent")}
                            type="text"
                            placeholder="Xác minh OTP"
                            className='sign-input'
                            onChange={(e) => setValue("otpSent", e.target.value)} 
                        />
                        <Button variant="primary" className='w-40 modal-btn sign-btn' onClick={generateOTP}>Gửi mã OTP</Button>
                    </Form.Group>
                    {errors.otpSent && <p className='sign-error mt-2'>{errors.otpSent.message}</p>}
                    {otpSent ?  <p>{otpSent}</p> : null} */}
                    

                    <Form.Group className="mb-4">
                        <Button type='submit' variant="primary" className="w-100 sign-btn modal-btn" disabled={isSubmitting}>
                            Đăng ký
                        </Button>
                    </Form.Group>

                    <Form.Group>
                        <div className='mb-4 divider'>Hoặc <span>đăng ký</span> với</div>
                        <Button variant="primary" className='sign-more w-100 mb-4 modal-btn'>Google</Button>
                    </Form.Group>

                    <Form.Group className="mb-4 sign-next">
                        Đã có tài khoản?
                        <Button variant='link'
                            onClick={() => {
                                handleCloseSignUp();
                                handleShowSignIn();
                            }}
                            className='modal-link-btn'
                        >
                            Đăng nhập
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="sign-footer"></Modal.Footer>
        </Modal>
    );
}

export default SignUp;
