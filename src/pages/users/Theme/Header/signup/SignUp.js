import { AUTH_ENDPOINTS } from "../../../../../config";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const signupSchema = z.object({
    name: z.string().min(1, "Vui lòng nhập tên").max(50, "Tên quá dài"),
    email: z.string().email("Email không hợp lệ"),
    phoneNumber: z.string().optional().refine((value) => {
        if (!value) return true; // Cho phép bỏ trống
        return /^(0[3-9][0-9]{8}|(\+84|84)[3-9][0-9]{8})$/.test(value);
    }, {
        message: "Số điện thoại không hợp lệ"
    }),
    password: z.string().min(5, "Mật khẩu phải có ít nhất 5 ký tự"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Mật khẩu không đúng",
    path: ["confirmPassword"],
});

function SignUp({ showSignUp, handleCloseSignUp, handleShowSignIn, handleAccess }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setFocus
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    useEffect(() => {
        if (showSignUp) {
            setTimeout(() => setFocus("name"), 100);
        }
    }, [showSignUp, setFocus]);

    const onSubmit = async (data) => {
        const { confirmPassword, ...formData } = data;
    
        try {
            const response = await fetch(AUTH_ENDPOINTS.SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
            if (response.ok) {
                handleAccess();
                reset();
            } else {
                console.error("Lỗi đăng ký:", result);
                alert(result.message || "Đăng ký thất bại!");
            }
        } catch (error) {
            console.error("Lỗi kết nối:", error);
            alert("Không thể kết nối đến máy chủ. Vui lòng thử lại!");
        }
    };
    

    return (
        <Modal show={showSignUp} onHide={handleCloseSignUp} backdrop="static">
            <Modal.Header className='sign-header' closeButton>
                <Modal.Title>Đăng ký</Modal.Title>
            </Modal.Header>
            <Modal.Body className='sign-body'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-4">
                        <Form.Control {...register("name")} type="text" placeholder="Họ và tên" className='sign-input' />
                        {errors.name && <p className='sign-error mt-2'>{errors.name.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control {...register("email")} type="email" placeholder="Email" className='sign-input' />
                        {errors.email && <p className='sign-error mt-2'>{errors.email.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control {...register("phoneNumber")} type="text" placeholder="Số điện thoại (tùy chọn)" className='sign-input' />
                        {errors.phoneNumber && <p className='sign-error mt-2'>{errors.phone.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control {...register("password")} type="password" placeholder="Mật khẩu" className='sign-input' />
                        {errors.password && <p className='sign-error mt-2'>{errors.password.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control {...register("confirmPassword")} type="password" placeholder="Nhập lại mật khẩu" className='sign-input' />
                        {errors.confirmPassword && <p className='sign-error mt-2'>{errors.confirmPassword.message}</p>}
                    </Form.Group>
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
                        <Button variant='link' onClick={() => { handleCloseSignUp(); handleShowSignIn(); }} className='modal-link-btn'>
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
