import { useState } from 'react';
import '../styles/textbox.css';

export default function Textbox({name, type, callback, data}) {

  const [val, setVal] = useState(data[name]);
  
  if (data[name] !== val) setVal(data[name]);

  function makeFirstLetterCapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleChange(event) {
    setVal(event.target.value);
    callback({[name]: event.target.value});
  }

  return (
    <div className='textbox'>
      <label htmlFor={name}>{makeFirstLetterCapital(name)}:</label>
      {
        type ?
        <textarea rows={10} name={name} id={name} value={val ? val : ''} onChange={handleChange}></textarea>
        :
        <input id={name} value={val ? val : ''} onChange={handleChange}/>

      }
    </div>
  );
}