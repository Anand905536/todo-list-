import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { message } from 'antd'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const submitHandler = () => {
        if (!email) {
            message.error("Enter Email")
        }
        if (!password) {
            message.error("Enter Password")
        }
        else {
            axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/login`, {
                email, password
            }
            ).then((res) => {
                console.log(res)
                if (res.data.status === 1) {

                }
                else {
                    message.error("Wrong Credentials")
                }
            }).catch((err) => {
                console.log(err)
            })
        }

    }

    return (
        <div className='login-main-div' >
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "25px" }}>Email address</Form.Label>
                    <Form.Control style={{ height: "50px", fontSize: "18px" }} type="email" placeholder="Enter email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontSize: "25px" }}>Password</Form.Label>
                    <Form.Control style={{ height: "50px", fontSize: "18px" }} type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button style={{ width: "120px", height: "60px", fontSize: "18px" }}
                    variant="success" onClick={submitHandler}>
                    Submit
                </Button>
                <br />
                <br />
                <br />
                <h6>New Registration ?<span style={{ color: "dodgerBlue", cursor: "pointer" }} onClick={() => navigate('/register')}> Register yourself</span></h6>
            </Form>
        </div>
    );
}

export default Login;