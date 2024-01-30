import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm/LoginForm';
import UserDetails from './components/UserDetails/UserDetails';
import { IUserData } from './Interfaces';

function App () {
  const logo = "My Logo";
  const AboutTxt = "About Us";
  const [ isLoggedIn, setIsLoggedIn ] = useState( false );
  const [ userData, setUserData ] = useState<IUserData>( {
    username: "",
    email: "",
    address: "",
    phone: "",
    password: "",

  } );
  return (
    <>
      <Navbar webLogo={ logo } webAbout={ AboutTxt } isLoggedIn={ isLoggedIn } setIsLoggedIn={ setIsLoggedIn } />
      {
        isLoggedIn ? <UserDetails user={ userData } /> : <LoginForm setIsLoggedIn={ setIsLoggedIn } userData={ userData } setUserData={ setUserData } />
      }

    </>
  );
}

export default App;
