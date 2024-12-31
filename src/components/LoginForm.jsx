import React from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import Input from './inputField';
import Button from './button';
import Heading from './Heading';

function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="p-12 w-[80%] text-center mx-auto flex flex-col gap-6">
      <div className="absolute top-4 left-4 text-gray-600 cursor-pointer">
        <FaArrowLeft />
      </div>
      <Heading tsize="text-2xl"
        Heading="Welcome back"
        subHeading="Enter your password and login as nmasky3@gmail.com"
        center
      />
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          value="Password *"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-3 right-3 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <Button value="Log in" bg="bg-black" text="text-white" />
      <div className="text-sm text-blue-500 underline cursor-pointer">
        Forgot your password?
      </div>
    </div>
  );
}

export default LoginForm;
