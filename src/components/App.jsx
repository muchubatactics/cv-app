import Inputing from './Inputing.jsx';
import Previewing from './Previewing.jsx';
import '../styles/app.css'
import { useState } from 'react';

const sampleData = {
  name: 'Matthew Jones',
  title: 'Financial Analyst',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor tortor, lobortis vitae urna vitae, vehicula finibus nibh. Maecenas elementum tellus vel ex sodales sagittis. Duis porttitor lacinia tellus, id mattis tellus vestibulum eu. Nam vestibulum porttitor faucibus. Donec porttitor nisi nec quam malesuada, at blandit tortor cursus. Phasellus tempor leo eget ullamcorper placerat. Curabitur .',
  location: '33 Oklahoma Road, New York, NY 10024, United States',
  tel: '(917) 407-5112',
  email: 'mpj23@gmail.com',
  website: '',
  skills: [
    {val: 'Financial Planning',  id: 1},
    {val: 'Strategic Planning',  id: 2},
    {val: 'Financial Analysis',  id: 3},
    {val: 'Market Assessment',  id: 4},
    {val: 'Team Leadership', id: 5},
  ],
  languages: [
    {val: 'English',  id: 1},
    {val: 'Japanese',  id: 2},
    {val: 'Nihongo', id: 3},
  ],
  work: [
    {
      title: 'Financial Analyst at GEO Corp., New York',
      from: 'October 2012',
      to: 'September 2019',
      details: 'Created budgets and ensured that labor costs were decreased by 15 percent. Generated financial statements including cash flow charts and balance sheets. Introduced and implemented a different type of innovative software.',
      id: 1,
    },
    {
      title: 'Financial Analyst at Sisco Enterprises, New York',
      from: 'September 2008',
      to: 'September 2012',
      details: 'Created budgets and ensured that labor costs were decreased by 15 percent. Generated financial statements including cash flow charts and balance sheets. Introduced and implemented a different type of innovative software.',
      id: 2,
    },
  ],
  education: [
    {
      title: 'Bachelor of Finance, Villaova University, King of Prussia',
      from: 'August 2004',
      to: 'May 2008',
      details: 'Graduated best of my class',
      id: 1,
    },
    {
      title: 'High School Diploma, Mary Stuart Insitute of Diplomas',
      from: 'September 2000',
      to: 'June 2004',
      details: '',
      id: 2,
    },
  ],
};

export default function App() {

  const [data, setData] = useState({...sampleData});

  function callbackToChangeData(obj) {
    let key = Object.keys(obj)[0];
    let val = obj[key];
    setData({...data, [key]: val});
  }

  function loadSampleCallback() {
    setData({...sampleData});
  }

  return (
    <>
      <Inputing className='inputing' data={data} callback={callbackToChangeData} />
      <Previewing className='previewing' data={data} loadsamplecallback={loadSampleCallback} />
    </>
  );
}
