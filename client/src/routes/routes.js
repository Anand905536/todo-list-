const Dashboard=import('../component/dashboard/Dashboard')

const routes=[
    {
      path:"/dashboard",
      element:Dashboard,
      permission:false
    },
]

export {routes};