import Textbox from './Textbox';
import '../styles/page.css'

function Page(props) {
  const dimensions = { height: 500, width: 200 };

  return (
    <div className="page">
      <Textbox className='name'/>
    </div>
  );
}

export default Page;