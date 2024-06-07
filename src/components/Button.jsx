export default function Button({text, func, style}) {
  return (
    <button style={style} onClick={func}>{text}</button>
  );
}