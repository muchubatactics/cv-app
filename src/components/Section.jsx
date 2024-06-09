import Textbox from "./Textbox";
import '../styles/section.css';
import dropdown_icon from '../assets/dropdown.svg';
import { useState } from "react";
import DetailedInput from "./DetailedInput";
import Button from "./Button";

export default function Section({text, inputs, callback, data, special}) {
  const [isShowing, setIsShowing] = useState(false);
  const [svgClass, setSvgClass] = useState('');

  function handleClick() {
    setIsShowing((prev) => {
      return prev ? false : true;
    });
    setSvgClass(isShowing ? 'dd-animate-up': 'dd-animate-down');
  }

  function handleAddNew() {

  }

  return (
    <div className="sect">
      <div onClick={handleClick} className="head">
        <span>{text}</span>
        <img src={dropdown_icon} alt="drop down icon" className={svgClass} />
      </div>
      {
        special ? 
        isShowing ? 
        (
          <>
            {
              text === 'Education' ? (
                data.education.map((obj) => {
                  return <DetailedInput key={obj.id} data={data} obj={obj} callback={callback} educ={true} />
                })
              ) : (
                data.work.map((obj) => {
                  return <DetailedInput key={obj.id} data={data} obj={obj} callback={callback} educ={false} />
                })
              )
            }
            <Button text='Add New' func={handleAddNew}/>
          </>
        ): null
        :
        isShowing ? inputs.map(
          (input) => {
            return (
              <Textbox name={input.name} key={input.id} type={input.type} callback={callback} data={data} />
            );
          }
        ) : null
      }
    </div>
  );
}

// ::todo work on add new