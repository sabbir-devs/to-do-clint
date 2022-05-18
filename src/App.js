import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signin from './Components/Signin/Signin';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<PrivetRoute><Home/></PrivetRoute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signin></Signin>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
