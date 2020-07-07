import { useState } from 'react';

function useFormInput(placeholder) {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange: handleChange, placeholder };
}


export default useFormInput;
