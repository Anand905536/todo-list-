import {Route,Routes} from 'react-router-dom'
import Login from './auth/login/Login'
import Register from './auth/register/Register';
import Wrong from './404/Wrong';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Wrong/>}/>
      </Routes>
    </div>
  );
}

export default App;
