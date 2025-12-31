import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import AuthProvider from './context/AuthProvider/AuthProvider';
import SinglePost from './Components/SinglePost/SinlgePost';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/home" element={<><Home /><Footer /></>} />
            <Route path="/about" element={<><About /><Footer /></>} />
            <Route path="/services" element={<><Services /><Footer /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quary" element={<><Contact /><Footer /></>} />
            <Route path="/post" element={<><SinglePost /><Footer /></>} />
            {/* <PrivateRoute path="/post">
              <SinglePost></SinglePost>
            </PrivateRoute> */}
            <Route path="*" element={<><NotFound /><Footer /></>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
