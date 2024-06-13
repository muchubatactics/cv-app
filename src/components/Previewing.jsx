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
    win.document.write(`<link rel='stylesheet' href='/forprintonly.css' type='text/css' media='print'/>`);
    win.document.write(`<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.page {
  height: 1123px;
  width: 794px;
  font-size: 1.3rem;
  font-family: 'Inter';
  user-select: none;
}

.page .top .name {
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 2.3rem;
  margin: 0px;
}

.profile, .employ-hist, .educ, .ref {
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: 500;
}

.profile > div:nth-child(1), .employ-hist > div:nth-child(1), .educ > div:nth-child(1), .ref > div:nth-child(1)  {
  display: flex;
  align-items: center;
  margin-bottom: 7px;
}

.profile > div:nth-child(1) > span:nth-child(1), .employ-hist > div:nth-child(1) > span:nth-child(1), .educ > div:nth-child(1) > span:nth-child(1), .ref > div:nth-child(1) > span:nth-child(1){
  margin-right: 10px;
  margin-left: -5px;
  display: flex;
  align-items: center;
  height: 18px;
  width: 18px;
}

.profile > div:nth-child(1) > span:nth-child(1) > svg, 
.employ-hist > div:nth-child(1) > span:nth-child(1) > svg, 
.educ > div:nth-child(1) > span:nth-child(1) > svg, 
.ref > div:nth-child(1) > span:nth-child(1) > svg {
  fill: rgb(0, 0, 80);
}


.profile .contents {
  font-size: 1rem;
  padding-left: 30px;
  font-weight: 300;
}

.page > div:nth-child(2) {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
}

/* .page .main {
} */

.page .sidebar {
  margin-left: 20px;
  max-width: 250px;
}

.page .sidebar span {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 15px 0px;
  display: block;
}

.page .sidebar p {
  font-size: 1rem;
  font-weight: 300;
  margin: 5px 0px;
}

/* .employ-hist .work-area, .educ .education-area {
  
} */

.employ-hist .work-area .work-instance, .educ .education-area .education-instance , .ref .ref-area .ref-instance{
  display: flex;
  flex-direction: column;
  padding-left: 30px;
}

.ref .ref-area .ref-instance .title {
  font-size: 1.2rem;
  font-weight: 500;
}

.ref .ref-area .ref-instance .contact {
  font-size: 1rem;
  font-weight: 300;
  color: rgb(156, 156, 156);
  margin-bottom: 10px;
}

.employ-hist .title, .educ .title {
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: start;
}

.employ-hist .to.from, .educ .to.from {
  font-size: 1rem;
  font-weight: 300;
  color: rgb(156, 156, 156);
  margin-bottom: 8px;
}

.employ-hist .work-instance, .educ .education-instance {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
}

.details-instance {
  margin-left: 10px;
  display: flex;

}

.details-instance > span:nth-child(1) {
  height: 10px;
  padding-right: 7px;
  position: relative;
}

.details-instance > span:nth-child(1) > svg {
  fill: rgb(0, 0, 80);
  position: absolute;
  top: 8px;
  left: -2px;
}


    </style>`)
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
