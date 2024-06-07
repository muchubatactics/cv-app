import { useState } from 'react';
import '../styles/textbox.css';

export default function Textbox({name, type, callback, data}) {

  const [val, setVal] = useState(data[name]);
  const [arrVal, setarrVal] = useState(typeof val === 'object' ? convertFromArray(val) : '');
  
  if (data[name] !== val) setVal(data[name]);

  function makeFirstLetterCapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleChange(event) {
    setVal(event.target.value);
    callback({[name]: event.target.value});
  }

  function convertToArray(str) {
    let arr = str.split(',');
    let id = 0;
    arr = arr.map(str => str.trim() ).filter(str => str !== '').map(str => {
      id++;
      return {val: str, id: id}
    });
    return arr;
  }

  function convertFromArray(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
        str += arr[i].val;
      } else {
        str += (arr[i].val + ', ');
      }
    }
    return str;
  }

  function handleChangeArray(e) {
    setarrVal(e.target.value);
  }

  function handleArrayEdit() {
    setarrVal(convertFromArray(val));
  }

  function handleArraySave() {
    let tmp = convertToArray(arrVal);
    setVal(tmp);
    callback({[name]: tmp});
  }

  return (
    <div className='textbox'>
      {
        typeof val === 'object' ? <label htmlFor={name}>{makeFirstLetterCapital(name)} <i>(comma-separated list)</i> :</label>: <label htmlFor={name}>{makeFirstLetterCapital(name)}:</label>
      }
      {
        typeof val !== 'object' ?
        type ?
        <textarea rows={10} name={name} id={name} value={val ? val : ''} onChange={handleChange}></textarea>
        :
        <input id={name} value={val ? val : ''} onChange={handleChange}/>
        :
        type ?
        <div className='array-input'>
          <textarea rows={10} name={name} id={name} value={arrVal} onChange={handleChangeArray}></textarea>
          <span onClick={handleArrayEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z"/></svg>
          </span>
          <span onClick={handleArraySave}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
          </span>
        </div>
      
        :
        <div className='array-input'>
          <input id={name} value={arrVal} onChange={handleChangeArray}/>
          <span onClick={handleArrayEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z"/></svg>
          </span>
          <span onClick={handleArraySave}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
          </span>
        </div>
              

      }
    </div>
  );
}
