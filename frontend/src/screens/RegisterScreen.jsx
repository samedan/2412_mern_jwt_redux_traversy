import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/usersApiSlice';

export const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // set data in state from apiSlice
    const [register, { isLoading, error }] = useRegisterMutation();
    // get data from state
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            toast.error('Passwords do not match');
        } else {
            try {
                const res = await register({ name, email, password }).unwrap(); // unwrap a promise
                dispatch(setCredentials({ ...res })); // set user to localstorage and state
                navigate('/');
            } catch (err) {
                console.log(err);
                console.log(err?.data?.message || err.error);
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    return (
        <FormContainer>
            <h1>SignUp</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="my-2" constrolId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" constrolId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" constrolId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" constrolId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                {isLoading && <Loader />}
                <Button type="submit" variant="primary" className="mt-3">
                    Register
                </Button>

                <Row className="py-3">
                    <Col>
                        Already have an account? <Link to="/login">Login</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    );
};
