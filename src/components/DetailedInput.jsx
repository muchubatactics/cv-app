import '../styles/detailed.css';
import { useState } from 'react';
import Button from './Button';

export default function DetailedInput({callback, data, obj, educ, rerender}) {
  const [val, setVal] = useState(obj);
  const [minimized, setMinimized] = useState(true);

  function handleChange(e) {
    let name = e.target.id;
    let tmp = e.target.value;
    setVal({...val, [name]: tmp});
    let newObj;
    if (educ) {
      newObj = { education: [
        ...data.education
      ]};
      newObj.education[obj.id] = {...val, [name]: tmp};
    } else { 
      newObj = {work : [
        ...data.work
      ]};
      newObj.work[obj.id] = {...val, [name]: tmp};
    }
    callback(newObj);
  }

  function minimize() {
    setMinimized((prev) => {
      return prev ? false : true;
    });
  }

  function deleteInstance() {
    let arr;
    if (educ) arr = [...data.education];
    else arr = [...data.work];
    
    arr = arr.filter((xx) => {
      return xx.id != val.id;
    });
    for (let i = 0; i < arr.length; i++) {
      arr[i].id = i;
    }
    let objj;
    if (educ) objj = {education: arr};
    else objj = {work: arr};
    rerender();
    callback(objj);
  }

  return (
    minimized ? 
    (
      <div className='detailed-input-minimized' key={val.id} onClick={minimize}>
        {val.title}
      </div>
    ) 
    :
    (
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
          <Button text='minimize' func={minimize}/>
          <Button style={{backgroundColor: '#ce2222'}} text='delete' func={deleteInstance} />
        </div>
      </div>
    )
  );
}

// ::todo force a rerender when something is deleted