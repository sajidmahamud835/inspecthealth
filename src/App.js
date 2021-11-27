import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/services">
              <Services></Services>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/quary">
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route path="/post">
              <SinglePost></SinglePost>
              <Footer></Footer>
            </Route>
            {/* <PrivateRoute path="/post">
              <SinglePost></SinglePost>
            </PrivateRoute> */}
            <Route path="*">
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
