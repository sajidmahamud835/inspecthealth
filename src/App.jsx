import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AuthProvider from './context/AuthProvider/AuthProvider';

// Lazy loading components
const Home = lazy(() => import('./Components/Home/Home'));
const Login = lazy(() => import('./Components/Login/Login'));
const Register = lazy(() => import('./Components/Register/Register'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const SinglePost = lazy(() => import('./Components/SinglePost/SinlgePost'));
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Appointment = lazy(() => import('./Components/Appointment/Appointment'));

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Suspense fallback={<div className="text-center p-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
            <Routes>
              <Route path="/" element={<><Home /><Footer /></>} />
              <Route path="/home" element={<><Home /><Footer /></>} />
              <Route path="/about" element={<><About /><Footer /></>} />
              <Route path="/services" element={<><Services /><Footer /></>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/query" element={<><Contact /><Footer /></>} />
              <Route path="/appointment" element={<><Appointment /><Footer /></>} />
              <Route path="/post" element={<><SinglePost /><Footer /></>} />
              {/* <PrivateRoute path="/post">
                <SinglePost></SinglePost>
              </PrivateRoute> */}
              <Route path="*" element={<><NotFound /><Footer /></>} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
