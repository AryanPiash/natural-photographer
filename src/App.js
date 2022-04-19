import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/checkout' element={
             <RequireAuth>
                <Checkout></Checkout>
             </RequireAuth>
          }></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
}

export default App;
