import React from 'react'
import { Typography } from 'antd'

const {Title} = Typography
const Wrong = () => {
  return (
    <Title level={1} style={{textAlign:"center",marginTop:"25%",fontSize:"100px"}}>
      <span style={{color:"maroon"}}>404</span> Not Found
    </Title>
  )
}

export default Wrong