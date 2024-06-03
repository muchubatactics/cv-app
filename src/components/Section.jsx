import Textbox from "./Textbox";
import '../styles/section.css';
import dropdown_icon from '../assets/dropdown.svg';
import { useState } from "react";

export default function Section({text, inputs}) {
  const [isShowing, setIsShowing] = useState(false);
  const [svgClass, setSvgClass] = useState('');

  function handleClick() {
    setIsShowing((prev) => {
      return prev ? false : true;
    });
    setSvgClass(isShowing ? 'dd-animate-up': 'dd-animate-down');
  }

  return (
    <div className="sect">
      <div onClick={handleClick} className="head">
        <span>{text}</span>
        <img src={dropdown_icon} alt="drop down icon" className={svgClass} />
      </div>
      {
        isShowing ? inputs.map(
          (input) => {
            return (
              <Textbox name={input.name} key={input.id} type={input.type} />
            );
          }
        ) : null
      }
    </div>
  );
}