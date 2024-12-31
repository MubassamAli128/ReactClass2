import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Heading from './Heading';
import Button from './button';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import HrLine from './hrLine';
import Input from './inputField';
// import { GrLanguage } from "react-icons/gr";
// import { SlSupport } from "react-icons/sl";
function EmailLogin() {
    return (
        <div className='p-24 gap-3 flex flex-col justify-center items-center'>
            <div className='absolute left-3 top-3'>
                <FaArrowLeft />
            </div>
            <div className='text-center w-[90%]'>
                <Heading tsize="text-2xl" Heading="Fresha for Customers" subHeading="creating an account to log in to book and manage your appointments." />
            </div>
            <div className=' relative w-full'>
                <Button value="Continue with Facebook">
                    <MdFacebook className='text-blue-600' />
                </Button>
            </div>
            <div className=' relative w-full'>
                <Button value="Continue with Google">
                    <FcGoogle />
                </Button>
            </div>
            <div className='w-full m-3'>
                <HrLine />
            </div>
            <div className='w-full'>
                <Input value="Email Address" type="email" />
            </div>
            <div className='w-full'>
                <Button value="Continue" bg="bg-black" text="text-white" />
            </div>
            <div className='text-center '>
                <Heading tsize="text-md" Heading="Have a bussiness account?" subHeading="Sign in as a professional" />
            </div>
            {/* <footer className='absolute justify-center items-center bottom-2 flex gap-2 '>
            <GrLanguage />
            <Heading subHeading="English" />
            <SlSupport />
            <Heading subHeading="English" />
            </footer> */}
        </div>
    )
}
export default EmailLogin
