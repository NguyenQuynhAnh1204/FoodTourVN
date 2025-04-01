import { AUTH_ENDPOINTS } from "../../../../../config";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../../../utils/router";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|vn|info|biz|co\.uk|io|dev)$/; // Regex kiểm tra email
const phoneRegex = /^(0[3-9][0-9]{8}|(\+84|84)[3-9][0-9]{8})$/; // Regex kiểm tra số điện thoại VN

const signupSchema = z.object({
    emailOrPhone: z.string().min(1, "Vui lòng nhập email hoặc số điện thoại").refine((value) => {
        
        return emailRegex.test(value) || phoneRegex.test(value);
    }, {
        message: "Email hoặc số điện thoại không hợp lệ",
    }),
    password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});


function SignIn({ showSignIn, handleCloseSignIn, handleShowSignUp, handleAccess }) {
    const link = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(signupSchema),
        shouldFocusError: false,
    });

    // Tạo ref để focus vào ô email khi mở modal
    const emailInputRef = useRef(null);

    useEffect(() => {
        if (showSignIn) {
            emailInputRef.current?.focus();
        }
    }, [showSignIn]);

    const onSubmit = async (data) => {
        let formData = {
            password: data.password
        };
    
        if (emailRegex.test(data.emailOrPhone)) {
            formData.email = data.emailOrPhone;  
        } else if (phoneRegex.test(data.emailOrPhone)) {
            formData.phone = data.emailOrPhone;
        } else {
            alert("Email hoặc số điện thoại không hợp lệ!");
            return;
        }
    
        try {
            const response = await fetch(AUTH_ENDPOINTS.SIGN_IN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
            // console.log(result); 
            if (response.ok) {
                handleAccess();
                reset();
                localStorage.setItem("name", result.name);
            } else {
                console.error("Lỗi đăng nhập:", result);
                alert(result.message || "Đăng nhập thất bại!");
            }
        } catch (error) {
            console.error("Lỗi kết nối:", error);
            alert("Không thể kết nối đến máy chủ. Vui lòng thử lại!");
        }
    };

    const handleForgetPass = () => {
        link(ROUTERS.USER.FORGET_PASSWORD);
        handleCloseSignIn();
    }
    return (
        <Modal show={showSignIn} onHide={handleCloseSignIn} backdrop="static">
            <Modal.Header className='sign-header' closeButton>
                <Modal.Title>Đăng nhập</Modal.Title>
            </Modal.Header>
            <Modal.Body className='sign-body'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        {...register("emailOrPhone")}
                        type="text"
                        placeholder="Email / Số điện thoại"
                        className='sign-input'
                    />
                    {
                        errors.emailOrPhone && (
                            <p className='sign-error mt-2'>{errors.emailOrPhone.message}</p>
                        )
                    }
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                        <Form.Control
                            {...register("password")}
                            type="password"
                            placeholder="Mật khẩu"
                            className='sign-input'
                        />
                        {errors.password && <p className='sign-error mt-2'>{errors.password.message}</p>}
                    </Form.Group>

                    <Form.Group className="mb-4 sign-forgotpass">
                        <Button variant='link' className='modal-link-btn' onClick={handleForgetPass}>Quên mật khẩu?</Button>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Button
                            type='submit' variant="primary"
                            className="w-100 sign-btn modal-btn" disabled={isSubmitting}
                        >
                            Đăng nhập
                        </Button>
                    </Form.Group>

                    <Form.Group>
                        <div className='mb-4 divider'>Hoặc <span>đăng nhập</span> với</div>
                        <Button variant="primary" className='sign-more w-100 mb-4 modal-btn modal-btn-gg'>Google</Button>
                    </Form.Group>

                    <Form.Group className="mb-4 sign-next">
                        Chưa có tài khoản?
                        <Button variant='link' onClick={() => {
                            handleCloseSignIn();
                            handleShowSignUp();
                        }}
                            className='modal-link-btn'>
                            Đăng ký
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="sign-footer"></Modal.Footer>
        </Modal>
    );
}

export default SignIn;
