import { } from 'react'
import p from './assets/p.jpg'
// import LoginForm from './components/LoginForm'
// import RegisterForm from './components/registerForm'
import EmailLogin from './components/emailLogin'

function App() {
  return (
    <>
      <div className='flex flex-row items-center justify-between w-full h-screen'>
        <div className='w-[50%] h-full'>
         <EmailLogin/>
         {/* <RegisterForm/> */}
        {/* <LoginForm/> */}
        </div>
        <img src={p} alt="" className='w-[50%] h-full'/>
      </div>
    </>
  )
}

export default App
