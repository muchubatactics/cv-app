import '../styles/textbox.css'

export default function Textbox({name, type}) {

  function makeFirstLetterCapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='textbox'>
      <label htmlFor={name}>{makeFirstLetterCapital(name)}:</label>
      {
        type ?
        <textarea rows={10} name={name} id={name}></textarea>
        :
        <input id={name}/>

      }
    </div>
  );
}