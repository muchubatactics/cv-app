import Section from './Section.jsx';

export default function Inputing({className}) {

  // 0 for input text 1 for text area

  return (
    <div className={className}>
      <h1>Input your details</h1>
      <Section text="Personal Details" inputs=
      {
        [
          {name: 'name', id: 1, type: 0},
          {name: 'title', id: 2, type: 0},
          {name: 'about', id: 3, type: 1}
        ]
      } 
      />
      <Section text="Contact Information" inputs=
      {
        [
          {name: 'location', id: 1, type: 0},
          {name: 'telephone number', id: 2, type: 0},
          {name: 'email', id: 3, type: 0},
          {name: 'website', id: 4, type: 0},
        ]
      } 
      />
    </div>
  );
}