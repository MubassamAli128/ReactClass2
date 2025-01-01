import React, { useState } from 'react';

function Input({id, type, placeholder }) {
  const [inputValue, setInputValue] = useState('');

  const InputChanges = (event) => {
    const value=event.target.value;
    setInputValue(value);
  };

  return (
    <div>
      <input id={id} type={type} value={inputValue} onChange={InputChanges} placeholder={placeholder} className="bg-white pl-4 w-full p-2 justify-center items-center rounded-md flex border border-gray-300 placeholder:text-gray-400"/>
    </div>
  );
}

export default Input;
