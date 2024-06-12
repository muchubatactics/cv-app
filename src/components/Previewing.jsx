import Page from "./Page";
import Button from "./Button";
import '../styles/previewing.css';

export default function Previewing({className, data, loadsamplecallback}) {

  function handleSample() {
    loadsamplecallback();
  }

  function handlePrint() {
    let win = window.open('', 'PRINT', 'height=1123,width=794,top=100,left=150');
    win.document.write('<html><head><title>my cv</title>');
    win.document.write(`<link rel='stylesheet' href='/src/styles/page.css' type='text/css' media='print'/>`);
    win.document.write('</head><body>');
    win.document.write(`<div class='page'> ${document.querySelector('.page').innerHTML} </div>`);
    win.document.write('</body></html>');
    win.document.close();
    win.focus();
    
    setTimeout( function() {win.print();win.close();} , 500 );
    
  }

  return (
    <div className={className}>
      <h1>Preview</h1>
      <div className="buttons">
        <Button text="Sample" func={handleSample}/>
        <Button text="Print" func={handlePrint}/>
      </div>
      <Page data={data} />
    </div>
  );
}
