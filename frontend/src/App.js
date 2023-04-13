import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './componenets/loginForm';
import Home from './componenets/home';
import Register from './componenets/register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/home' element={<Home/>}></Route>
      <Route path ='/login' element={<Login/>}></Route>
      <Route path ='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
