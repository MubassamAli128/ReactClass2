import React, { useState} from 'react';
import p from './assets/p.jpg';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/registerForm';
import EmailLogin from './components/emailLogin';
function App() {
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') || 'EmailLogin');
  const [message, setMessage] = useState({ type: '', text: '' });

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 3000);
  };
  const checkInput = (event) => {
    if (event.target.id === 'LoginEmailBtn') {
      const EmailInput = document.getElementById('LoginEmail');
      if (EmailInput.value === localStorage.getItem('Email')) {
        setCurrentPage('LoginForm');
      } else {
        localStorage.setItem('Email',EmailInput.value)
        setCurrentPage('RegisterForm');
      }
    }
    else if(event.target.id==="registerBtn"){
      let FirstName=document.getElementById('FirstName');
      if(FirstName.value){
        let LastName=document.getElementById('LastName');
        if(LastName.value){
          let UserPassword=document.getElementById('UserPassword');
          if(UserPassword.value){
            let PhoneNumber=document.getElementById('PhoneNumber');
            if(PhoneNumber.value){
              const checkbox1 = document.getElementById('CheckBox1');
              const checkbox2 = document.getElementById('CheckBox2');
              if(checkbox1.checked && checkbox2.checked){
                let UserInfo=[FirstName.value,LastName.value,UserPassword.value,PhoneNumber.value];
                localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
                setCurrentPage('LoginForm');
              }else{
                showMessage('error', 'Please Check Both checkboxes');
              }
            }else{
              showMessage('error', 'Enter Phone Number');
            }
          }else{
            showMessage('error', 'Enter Password');
          }
        }else{
          showMessage('error', 'Enter Your Last Name')
        }
      }else{
        showMessage('error', 'Enter Your First Name');
      }
    }
    else if(event.target.id==="LoginPasswordBtn"){
      const PasswordInput=document.getElementById('LoginPassword');
      const RightPassword = JSON.parse(localStorage.getItem('UserInfo'))[2]
      if(PasswordInput.value===RightPassword){
        showMessage('success', 'Login Successful!');
      }else{
        showMessage('error', 'Wrong Password!');
      }
    }
  };

  const checkPoint = () => {
    if (currentPage === 'EmailLogin') {
      return <EmailLogin changes={checkInput} />;
    } else if (currentPage === 'RegisterForm') {
      return <RegisterForm userEmail={localStorage.getItem('Email')} changes={checkInput} />;
    } else if (currentPage === 'LoginForm') {
      return <LoginForm userEmail={localStorage.getItem('Email')} changes={checkInput} />;
    } else {
      return <EmailLogin changes={checkInput} />;
    }
  };

  return (
    <>
      {message.text && (
        <div
          className={`fixed top-0 left-1/2 w-[400px] transform -translate-x-1/2 px-4 py-2 text-white text-center rounded-b-lg transition-transform duration-300 ease-in-out
            ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {message.text}
        </div>
      )}
      <div className='flex flex-row items-center justify-between w-full h-full'>
        <div id='content_div' className='w-[50%] h-full'>
          {checkPoint()}
        </div>
        <img src={p} alt="" className='w-[50%] h-screen' />
      </div>
    </>
  );
}

export default App;
