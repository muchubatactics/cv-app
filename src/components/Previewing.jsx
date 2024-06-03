import Page from "./Page";
import Button from "./Button";
import '../styles/previewing.css'

export default function Previewing(props) {

  function handleSample() {

  }

  function handlePrint() {

  }

  return (
    <div className={props.className}>
      <h1>Preview</h1>
      <div className="buttons">
        <Button text="Sample" func={handleSample}/>
        <Button text="Print" func={handlePrint}/>
      </div>
      <Page />
    </div>
  );
}