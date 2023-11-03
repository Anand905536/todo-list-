import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css'
import axios from 'axios'
import { message } from 'antd'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BasicExample() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const navigate = useNavigate();


    const submitHandler = () => {
        if (!name) {
            message.error("Enter name")
        }
        if (!email) {
            message.error("Enter Email")
        }
        if (!phone) {
            message.error("Enter Phone")
        }
        if (!password) {
            message.error("Enter Password")
        }
        else {
            axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/register`, {
                name, email, password, phone
            }
            ).then((res) => {
                console.log(res)
                if (res.data.status === 1) {
                    message.success("Successfully registered")
                    setTimeout(() => {
                        navigate("/")
                    }, 4000)
                }
                else {
                    message.error("Email already exist")
                }
            }).catch((err) => {
                console.log(err)
            })
        }

    }

    return (
        <div className='register-main-div' >
            <h1 style={{ textAlign: "center" }}>Register new user</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "25px" }}>Name</Form.Label>
                    <Form.Control style={{ height: "50px", fontSize: "18px" }} type="string" placeholder="Enter name"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "25px" }}>Email address</Form.Label>
                    <Form.Control style={{ height: "50px", fontSize: "18px" }} type="string" placeholder="Enter email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: "25px" }}>Phone</Form.Label>
                    <Form.Control style={{ height: "50px", fontSize: "18px" }} type="string" placeholder="phone"
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontSize: "25px" }}>Password</Form.Label>
                    <Form.Control style={{ height: "50px", fontSize: "18px" }} type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button style={{ width: "120px", height: "60px", fontSize: "18px" }} variant="success" onClick={submitHandler} >
                    Submit
                </Button>
                <br />
                <br />
                <br />
            </Form>
        </div>
    );
}

export default BasicExample;