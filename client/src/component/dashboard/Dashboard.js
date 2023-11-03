import React from 'react'
import './dashboard.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { message } from 'antd'
import AllTask from '../alltask/allTask';

const Dashboard = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDetail, setTaskDetail] = useState("")
  const [count,setCount]=useState(0)
  const navigate = useNavigate()

  const submitHandler = () => {
    const userId=localStorage.getItem("userId")
    if (!taskName) {
      message.error("Enter Task Name")
    }
    if (!taskDetail) {
      message.error("Enter Task Detail")
    }
    else {
      axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/add-task`, {
        taskName, taskDetail, userId 
      }).
        then((res) => {
          console.log(res)
          message.success("Successfully task added")
          setCount(count+1)
        }).catch((err) => {
          console.log(err)
        })
    }
    setTaskDetail("")
    setTaskName("")
  }

  const logoutHandler=()=>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <Button className="logout-button" style={{ width: "10%", height: "70px", fontSize: "18px", marginTop: "20px" }}
        variant="danger" onClick={logoutHandler}>
        Logout
      </Button>

      <div className='dashboard-main-div' >
        <h1 style={{ textAlign: "center", }}>Add Task</h1>
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
          <Button style={{ width: "100%", height: "60px", fontSize: "18px", marginTop: "20px" }}
            variant="success" onClick={submitHandler}>
            Add Task
          </Button>
          <br />
          <br />
          <br />
        </Form>
      </div>


      {/* child component  */}
        <AllTask count={submitHandler}/>
    </div>

  )
}

export default Dashboard