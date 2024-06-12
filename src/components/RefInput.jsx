import { useState } from "react";

export default function RefInput({callback, data, obj}) {
  const [val, setVal] = useState({...obj});
  function handleChange(e) {
    let tmp = e.target.id === 'refname' ? {...val, name: e.target.value} : {...val, contact: e.target.value};
    setVal(tmp);
    let newObj = {refs: [...data.refs]};
    newObj.refs[tmp.id] = {...tmp};
    callback(newObj); 
  }

  return (
    <div>
      <span>
        <label htmlFor="refname">Name:</label>
        <input type="text" name="refname" id="refname" value={val.name} onChange={handleChange}/>
      </span>
      <span>
        <label htmlFor="refcontact">Contact:</label>
        <input type="text" name="refcontact" id="refcontact" value={val.contact} onChange={handleChange}/>
      </span>
    </div>
  );
}
