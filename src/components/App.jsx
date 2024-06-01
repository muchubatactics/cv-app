import Page from "./Page";
import '../styles/App.css';
import Button from "./Button";

export default function App() {
  function print() {
    let temp = document.body.innerHTML;
    document.body.innerHTML = document.querySelector('.page').innerHTML;
    window.print();
    document.body.innerHTML = temp;
    console.log('her');
  }

  return (
    <>
      <Page />
      <Button func={print} text='print' />
    </>
  );
}