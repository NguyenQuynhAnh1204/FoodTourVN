
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const signupSchema = z.object({
    name: z.string().min(1, "Vui lòng nhập tên"),
    email: z.string().email("emai không hợp lệ"),
    password: z.string().min(5, "Mật khẩu phải có ít nhất 5 ký tự"),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Mật khẩu không đúng",
    path: ["confirmPassword"],
})

function SignUp({showSignUp, handleCloseSignUp, handleShowSignIn, handleAccess}) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        reset,
    } = useForm({
        resolver: zodResolver(signupSchema),
    });
   
    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve,100 ));
        handleAccess();
        reset();
    }

    return (
        <>
        

        <Modal show={showSignUp} onHide={handleCloseSignUp} backdrop="static">
            <Modal.Header  className='sign-header' closeButton>
            <Modal.Title>Đăng ký</Modal.Title>
            </Modal.Header>
            <Modal.Body className='sign-body'>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        {...register("name")
                        }
                        type="text"
                        placeholder="Họ và tên"
                        autoFocus
                        className='sign-input'
                    />
                    {
                        errors.name && (
                            <p className='sign-error mt-2'>{errors.name.message}</p>
                        )
                    }
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                    <Form.Control
                        {...register("email")}
                        type="email"
                        placeholder="Email / Số điện thoại"
                        autoFocus
                        className='sign-input'
                    />
                    {
                        errors.email && (
                            <p className='sign-error mt-2'>{errors.email.message}</p>
                        )
                    }
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                    <Form.Control
                        {...register("password")
                        }
                        type="password"
                        placeholder="Mật khẩu"
                        autoFocus
                        className='sign-input'
                    />
                    {
                        errors.password && (
                            <p className='sign-error mt-2'>{errors.password.message}</p>
                        )
                    }
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
                    <Form.Control
                        {...register("confirmPassword")
                        }
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        autoFocus
                        className='sign-input'
                    />
                    {
                        errors.confirmPassword && (
                            <p className='sign-error mt-2'>{errors.confirmPassword.message}</p>
                        )
                    }
                </Form.Group>

                <Form.Group className="mb-4 signup-otp" controlId="exampleForm.ControlInput5">
                    <Form.Control
                        {...register("OTP")}
                        type="text"
                        placeholder="Xác minh OTP"
                        autoFocus
                        className='sign-input'
                    />
                    {
                        errors.OTP && (
                            <p className='sign-error mt-2'>{errors.OTP.message}</p>
                        )
                    }
                    <Button variant="primary" className='w-40 modal-btn sign-btn'>Gửi mã OTP</Button>
                </Form.Group>


                <Form.Group className="mb-4">
                    <Button type='submit' variant="primary" className="w-100 sign-btn modal-btn" disabled= {isSubmitting}>
                        Đăng ký
                    </Button>
                </Form.Group>

                <Form.Group>
                    <div className='mb-4 divider'>Hoặc <span> đăng ký </span> với</div>
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
            <Modal.Footer className="sign-footer">

            </Modal.Footer>
        </Modal>
            
        </>
    )
}



export default SignUp;


