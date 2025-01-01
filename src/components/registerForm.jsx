import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Input from './inputField';

import Checkbox from './checkbox';
import Button from './button';
import Heading from './Heading';

function RegisterForm(props) {
  return (
    <div className="p-[65px] w-[80%] mx-auto text-center flex flex-col gap-6">
      <div className="absolute top-4 left-4 text-gray-600 cursor-pointer">
        <FaArrowLeft />
      </div>

      <Heading tsize="text-2xl"
        Heading="Create account"
        subHeading={`You’re almost there! Create your new account for ${props.userEmail} by completing these details.`}
        center
      />

      {/* Form Fields */}
      <div className="flex flex-col gap-4">
        <p className='text-left'>First Name</p>
        <Input id="FirstName" type="text" placeholder="First Name" value="First name" />
        <p className='text-left'>Last Name</p>
        <Input id="LastName" type="text" placeholder="Last Name" value="Last name" />
        <p className='text-left'>Password</p>
        <Input id="UserPassword" type="password" placeholder="Password" value="Password" />
        <p className='text-left'>Phone Number</p>
        <div className="flex gap-2">
          <select className="p-2 border border-gray-300 rounded-md focus:outline-none">
            <option value="+92">+92</option>
          </select>
          <Input id="PhoneNumber" type="number" placeholder="3xx xxxxxxx" value="300 0000000" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Checkbox id="CheckBox1"
          label={
            <>
              I agree to the{' '}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy, Terms of Use, and Terms of Service
              </a>
            </>
          }
        />
        <Checkbox id="CheckBox2" label="I agree to receive marketing notifications with offers and news" />
      </div>
      <Button id="registerBtn" Click={props.changes} value="Continue" bg="bg-black" text="text-white" />
    </div>
  );
}

export default RegisterForm;
