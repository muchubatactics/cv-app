import '../styles/page.css';

export default function Page({data}) {

  function formatDetails(str) {
    let id = 0;
    let arr = str.split('.').map((strr) => {
      return {val: strr, id: ++id};
    });
    return (
      <>
      {
        arr.map((obj) => {
          return (
            obj.val ? (
              <div className='details-instance' key={obj.id}>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="5px" viewBox="0 -960 960 960" width="5px" fill="#00000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg></span>
                <span>{obj.val}</span>
              </div>
            ) : null
          )
        })
      }
      </>
    );
  }

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
          
          <div className="employ-hist">
            <div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z"/></svg>
              </span>
              <span>Employment History</span>
            </div>
            <div className="work-area">
              {
                data.work.map((obj) => {
                  return (
                    <div key={obj.id} className='work-instance'>
                      <div className="title">{obj.title}</div>
                      <div className="from to">{obj.from} - {obj.to}</div>
                      <div className="details">
                        {formatDetails(obj.details)}
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>

          <div className="educ">
            <div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z"/></svg>
              </span>
              <span>Education</span>
            </div>
            <div className="education-area">
              {
                data.education.map((obj) => {
                  return (
                    <div key={obj.id} className='education-instance'>
                      <div className="title">{obj.title}</div>
                      <div className="from to">{obj.from} - {obj.to}</div>
                      <div className="details">
                        {formatDetails(obj.details)}
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>

          <div className="ref">
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm360-146v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346Z"/></svg>
                </span>
                <span>References</span>
              </div>
          </div>
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