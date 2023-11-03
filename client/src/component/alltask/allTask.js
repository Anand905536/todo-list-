import React, { useState, useEffect } from 'react'
import './alltask.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd'
import { Modal } from 'antd';


const AllTask = ({ count }) => {
    const [taskId, setTaskId] = useState("")
    const [taskName, setTaskName] = useState("");
    const [taskDetail, setTaskDetail] = useState("")
    const [taskArray, setTaskArray] = useState([])
    const [deleteRes, setDeleteRes] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        editHandler()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const getTask = () => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/get-task`, {
                userId
            })
                .then((res) => {
                    console.log(res.data.data)
                    setTaskArray(res.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    useEffect(() => {
        console.log("called")
        getTask();
    }, [count, deleteRes])


    // delete handler
    const deleteHandler = (taskId) => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/delete-task`, {
                userId, taskId
            })
                .then((res) => {
                    console.log(res)
                    setDeleteRes(!deleteRes)
                    message.success("Successfully deleted")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    // completed task 
    const completedTask = (taskId, isCompleted) => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/edit-task`, {
                userId, taskId, isCompleted
            })
                .then((res) => {
                    console.log(res)
                    setDeleteRes(!deleteRes)
                    message.success("Marked as completed")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    // edit handler
    const editHandler = () => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/edit-task`, {
                userId, taskId, taskName, taskDetail
            })
                .then((res) => {
                    console.log(res)
                    setDeleteRes(!deleteRes)
                    message.success("Details edited")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    return (
        <div style={{ marginTop: "50px" }}>
            <hr />
            <h1 style={{ textAlign: "center" }}>All Tasks</h1>
            {
                taskArray.length > 0 ? taskArray.map((data, idx) => {
                    const isCompleted = "true"
                    return (
                        <div key={idx} className='all-task-main-div' >
                            <Form>
                                <h6>Task-{idx + 1}</h6>
                                <Form.Group className="mb-3 mt-3" >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control style={{ height: "50px", fontSize: "18px" }} type="text" placeholder="Enter task name"
                                            value={data.taskName}
                                        />
                                    </Form.Group>
                                    <textarea
                                        placeholder='Enter task description'
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="5"
                                        value={data.taskDetail}
                                    />
                                </Form.Group>
                                <div className='d-flex justify-content-evenly'>
                                    <Button style={{ width: "25%", height: "60px", fontSize: "18px", marginTop: "20px" }}
                                        variant="success"
                                        onClick={() => { setTaskId(data._id); setTaskDetail(data.taskDetail); setTaskName(data.taskName); showModal() }}
                                    >
                                        Edit Task
                                    </Button>
                                    <Button style={{ width: "25%", height: "60px", fontSize: "18px", marginTop: "20px" }}
                                        variant="secondary"
                                        onClick={() => completedTask(data._id, isCompleted)}
                                    >
                                        {data.isCompleted ? "Completed" : "Marked as completed"}
                                    </Button>
                                    <Button style={{ width: "25%", height: "60px", fontSize: "18px", marginTop: "20px" }}
                                        variant="danger"
                                        onClick={() => deleteHandler(data._id)}
                                    >
                                        Delete Task
                                    </Button>
                                </div>

                            </Form>
                        </div>
                    )
                })
                    :
                    <h4 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>No task available now</h4>
            }

            {/* model */}
            <Modal title="Edit Detail" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form>
                    <Form.Group className="mb-3 mt-3" >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control style={{ height: "50px", fontSize: "18px" }} type="text" placeholder="Enter task name"
                                value={taskName} onChange={(e) => setTaskName(e.target.value)}
                            />
                        </Form.Group>
                        <textarea
                            placeholder='Enter task description'
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            value={taskDetail}
                            onChange={(e) => setTaskDetail(e.target.value)}
                        />
                    </Form.Group>

                    <br />
                    <br />
                    <br />
                </Form>
            </Modal>
        </div>
    )
}

export default AllTask