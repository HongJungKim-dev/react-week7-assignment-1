import React from 'react';

export default function TextField({
  onChange, label, name, value, type = 'text',
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { value } = event.target;

    onChange({ name, value });
  }

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
