import '../styles/page.css';

export default function Page({data}) {
  return (
    <div className='page'>
      <div className="top">
        <h1 className="name">{data.name}</h1>
        <span className='title'>{data.title}</span>
      </div>
      <div>
        <div className="main">
          <div className="profile">
            <div>
              <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg></span>
              <span>Profile</span>
            </div>
            <div className="contents">
              {data.about}
            </div>
          </div>
          <div className="employ-hist"></div>
          <div className="educ"></div>
          <div className="ref"></div>
        </div>
        <div className="sidebar">
          <div className="contact">
            <span>Details</span>
            <p>{data.location}</p>
            <p>{data.tel}</p>
            <p>{data.email}</p>
            <p>{data.website}</p>
          </div>
          <div className="skills">
            <span>Skills</span>
            {
              data.skills.map((val) => {
                return (<p key={val.id}>{val.val}</p>);
              })
            }
          </div>
          <div className="lang">
            <span>Languages</span>
            {
              data.languages.map((val) => {
                return (<p key={val.id}>{val.val}</p>);
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}