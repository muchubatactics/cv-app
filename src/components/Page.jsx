import '../styles/page.css';

export default function Page(props) {
  return (
    <div className='page'>
      <div className="top">
        <h1 className="name">Matthew Jones</h1>
        <span className='title'>Financial Analyst</span>
      </div>
      <div>
        <div className="main">
          <div className="profile">
            <div>
              <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg></span>
              <span>Profile</span>
            </div>
            <div className="contents">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor tortor, lobortis vitae urna vitae, vehicula finibus nibh. Maecenas elementum tellus vel ex sodales sagittis. Duis porttitor lacinia tellus, id mattis tellus vestibulum eu. Nam vestibulum porttitor faucibus. Donec porttitor nisi nec quam malesuada, at blandit tortor cursus. Phasellus tempor leo eget ullamcorper placerat. Curabitur pellentesque dui vel lectus egestas, at pretium metus malesuada. Vivamus eleifend volutpat molestie. Vestibulum mollis eros metus, at ullamcorper velit tempor eu. Vestibulum et velit vulputate, pretium ante in, placerat urna. Phasellus cursus faucibus mollis. Nulla ac dolor turpis. Sed id nulla et dolor tincidunt feugiat nec ac felis. Phasellus sit amet mollis arcu. Suspendisse eu mi at felis ultrices sodales id at enim. Nullam viverra efficitur libero at mattis.
            </div>
          </div>
          <div className="employ-hist"></div>
          <div className="educ"></div>
          <div className="ref"></div>
        </div>
        <div className="sidebar">
          <div className="contact">
            <span>Details</span>
            <p>33 Oklahoma Road, New York, NY 10024, United States</p>
            <p>(917) 407-5112</p>
            <p>mpj23@gmail.com</p>
          </div>
          <div className="skills">
            <span>Skills</span>
            <p>Financial Planning</p>
            <p>Strategic Planning</p>
            <p>Financial Analysis</p>
            <p>Market Assessment</p>
            <p>Team Leadership</p>
          </div>
          <div className="lang">
            <span>Languages</span>
            <p>English</p>
            <p>Japanese</p>
            <p>Nihongo</p>
          </div>
        </div>
      </div>
    </div>
  );
}