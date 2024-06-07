import '../styles/detailed.css';
import { useState } from 'react';
import Button from './Button';

export default function DetailedInput({callback, data, obj}) {
  const [val, setVal] = useState(obj);

  function handleChange(e) {
    let id = e.target.id;
    let tmp = e.target.value;
    setVal({...val, [id]: tmp});
  }

  return (
    <div className="detailed-input" key={val.id}>
      <label htmlFor='title'>Title:</label>
      <input type="text" id="title" value={val.title} onChange={handleChange}/>
      <span>
        <label>From: <input type="text" name="from" id="from" value={val.from} onChange={handleChange}/></label>
        <label htmlFor="to">To: <input type="text" name="to" id="to" value={val.to} onChange={handleChange}/></label>
      </span>
      <label htmlFor='details'>Details <i>period-separeted</i>:</label>
      <textarea name="details" id="details" rows="10" value={val.details} onChange={handleChange}></textarea>
      <div className="btns">
        <Button text='minimize' func={undefined}/>
        <Button style={{backgroundColor: '#ce2222'}} text='delete' func={undefined} />
      </div>
    </div>
  );
}