import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Input from './inputField';

import Checkbox from './checkbox';
import Button from './button';
import Heading from './Heading';

function RegisterForm() {
  return (
    <div className="p-[65px] w-[80%] mx-auto text-center flex flex-col gap-6">
      <div className="absolute top-4 left-4 text-gray-600 cursor-pointer">
        <FaArrowLeft />
      </div>

      <Heading tsize="text-2xl"
        Heading="Create account"
        subHeading="You’re almost there! Create your new account by completing these details."
        center
      />

      {/* Form Fields */}
      <div className="flex flex-col gap-4">
        <Input type="text" value="First name" />
        <Input type="text" value="Last name" />
        <Input type="password" value="Password" />
        <div className="flex gap-2">
          <select className="p-2 border border-gray-300 rounded-md focus:outline-none">
            <option value="+92">+92</option>
          </select>
          <Input type="tel" value="300 1234567" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Checkbox
          label={
            <>
              I agree to the{' '}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy, Terms of Use, and Terms of Service
              </a>
            </>
          }
        />
        <Checkbox label="I agree to receive marketing notifications with offers and news" />
      </div>
      <Button value="Continue" bg="bg-black" text="text-white" />
    </div>
  );
}

export default RegisterForm;
