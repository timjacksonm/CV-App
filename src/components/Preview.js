import React from 'react';
import uniqid from 'uniqid';
import '../styles/Preview.scss';

function Preview(props) {
  console.log(props);
  return (
    <div id='preview' className='preview hidden'>
      <div id='cv' className='instaFade'>
        <div className='mainDetails'>
          <div id='name'>
            {
              <h1 className='quickFade delayTwo'>{`${props.state.profileFirstName} ${props.state.profileLastName}`}</h1>
            }
          </div>

          <div id='contactDetails' className='quickFade delayFour'>
            <ul>
              <li>
                e:{' '}
                <a href={props.state.profileEmail}>
                  {props.state.profileEmail}
                </a>
              </li>
              <li>m: {props.state.profilePhoneNum}</li>
            </ul>
          </div>
        </div>

        <div id='mainArea' className='quickFade delayFive'>
          <section>
            <div className='sectionTitle'>
              <h1>Skills</h1>
            </div>

            <div className='sectionContent'>
              <ul className='keySkills'>
                {props.state.skills.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </section>

          <section>
            <div className='sectionTitle'>
              <h1>Work Experience</h1>
            </div>
            <div className='sectionContent'>
              {props.state.jobs.map((item) => {
                return (
                  <article>
                    <h2>{item.Name}</h2>
                    <p className='subDetails'>{`${item.Start} ${item.End}`}</p>
                    <ul>
                      {item.Description.map((item) => (
                        <li key={uniqid()}>item</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </section>

          <section>
            <div className='sectionTitle'>
              <h1>Education</h1>
            </div>
            <div className='sectionContent'>
              {props.state.education.map((item) => {
                return (
                  <article>
                    <h2>{item.Name}</h2>
                    <p>{item.Major}</p>
                    <p className='subDetails'>{`${item.Degree} ${item.DateCompleted}`}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section>
            <div className='sectionTitle'>
              <h1>References</h1>
            </div>
            <div className='sectionContent'>
              {props.state.references.map((item) => {
                return (
                  <article>
                    <h2>{item.Name}</h2>
                    <p>{item.Relation}</p>
                    <p className='subDetails'>{item.PhoneNumber}</p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Preview;
