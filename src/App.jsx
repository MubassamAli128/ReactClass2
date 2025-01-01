import React, { useState} from 'react';
import p from './assets/p.jpg';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/registerForm';
import EmailLogin from './components/emailLogin';

function App() {
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') || 'EmailLogin');

  const checkInput = (event) => {
    if (event.target.id === 'LoginEmailBtn') {
      
      const EmailInput = document.getElementById('LoginEmail');
      if (EmailInput.value === localStorage.getItem('Email')) {
        console.log('Welcome');
        setCurrentPage('LoginForm');
      } else {
        console.log('Wrong Email or not registered. Please join us.');
      }
    }
  };

  const checkPoint = () => {
    if (currentPage === 'EmailLogin') {
      return <EmailLogin changes={checkInput} />;
    } else if (currentPage === 'RegisterForm') {
      return <RegisterForm changes={checkInput} />;
    } else if (currentPage === 'LoginForm') {
      return <LoginForm changes={checkInput} />;
    } else {
      return <EmailLogin changes={checkInput} />;
    }
  };

  return (
    <>
      <div className='flex flex-row items-center justify-between w-full h-screen'>
        <div id='content_div' className='w-[50%] h-full'>
          {checkPoint()}
        </div>
        <img src={p} alt="" className='w-[50%] h-full' />
      </div>
    </>
  );
}

export default App;
