import React from 'react';

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <>
      <label htmlFor="">
        <input
          type="text"
          value={text}
          onChange={e => handleInput(e.target.value)}
        />
      </label>

      <button onClick={handleSubmit} type="button">
        add todo
      </button>
    </>
  );
};

export default InputField;
