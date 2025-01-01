import React from 'react';

function Checkbox({id, label }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}

export default Checkbox;
