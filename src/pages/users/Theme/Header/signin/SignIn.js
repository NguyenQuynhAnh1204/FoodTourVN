
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signupSchema = z.object({
    email: z.string().min(1, "Vui lòng nhập email").email("emai không hợp lệ"),
    password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

function SignIn({ showSignIn, handleCloseSignIn, handleShowSignUp, handleAccess }) {
   
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        reset,
    } = useForm({
       resolver: zodResolver(signupSchema),
       shouldFocusError: false,
    });
      
    const onSubmit = async (data) => {
       await new Promise(resolve => setTimeout(resolve,100 ));
       handleAccess();
       reset();
    }

    return (
        <>
        

        <Modal show={showSignIn} onHide={handleCloseSignIn} backdrop = "static">
            <Modal.Header  className='sign-header' closeButton>
            <Modal.Title>Đăng nhập</Modal.Title>
            </Modal.Header>
            <Modal.Body className='sign-body'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
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
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
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

                <Form.Group className="mb-4 sign-forgotpass">
                    <Button variant='link' className='modal-link-btn'>Quên mật khẩu?</Button>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Button 
                        type='submit' variant="primary" 
                        className="w-100 sign-btn modal-btn" disabled = {isSubmitting}
                    >
                        Đăng nhập
                    </Button>
                </Form.Group>

                <Form.Group>
                    <div className='mb-4 divider'>Hoặc <span> đăng nhập </span> với</div>
                    <Button variant="primary" className='sign-more w-100 mb-4 modal-btn modal-btn-gg'>Google</Button>
                </Form.Group>

                <Form.Group className="mb-4 sign-next">
                    Chưa có tài khoản?
                    <Button variant='link' onClick={() => {
                        handleCloseSignIn();
                        handleShowSignUp();
                    }
                    }
                    className='modal-link-btn'>
                        Đăng ký
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



export default SignIn;


