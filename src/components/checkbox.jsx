import React from 'react';

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}

export default Checkbox;
