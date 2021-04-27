import React from 'react';
import uniqid from 'uniqid';
import '../styles/Preview.scss';

const Preview = (props) => {
  return (
    <div className='preview'>
      <div id='cv' className='quickFadeIn'>
        <div className='titleDetails'>
          <div id='name'>
            {
              <h1
                key={uniqid()}
              >{`${props.data.profile.firstName} ${props.data.profile.lastName}`}</h1>
            }
          </div>

          <div id='contactDetails'>
            <ul>
              <li>
                e:{' '}
                {
                  <a key={uniqid()} href={props.data.profile.email}>
                    {props.data.profile.email}
                  </a>
                }
              </li>
              <li>m: {props.data.profile.phoneNumber}</li>
            </ul>
          </div>
        </div>

        <div id='mainArea'>
          <section>
            <div className='sectionTitle'>
              <h1>Skills</h1>
            </div>

            <div className='sectionContent'>
              <ul className='keySkills'>
                {props.data.skills.map((item) => {
                  return <li key={uniqid()}>{item}</li>;
                })}
              </ul>
            </div>
          </section>

          <section>
            <div className='sectionTitle'>
              <h1>Work Experience</h1>
            </div>
            <div className='sectionContent'>
              {props.data.jobs.map((item) => {
                return (
                  <article key={uniqid()}>
                    <h2 key={uniqid()}>{item.Name}</h2>
                    <h5>{item.Title}</h5>
                    <p
                      key={uniqid()}
                      className='subDetails'
                    >{`${item.Start} - ${item.End}`}</p>
                    <ul>
                      {item.Description.map((item) => {
                        return <li key={uniqid()}>{item}</li>;
                      })}
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
              {props.data.education.map((item) => {
                return (
                  <article key={uniqid()}>
                    <h2 key={uniqid()}>{item.Name}</h2>
                    <p>{item.Location}</p>
                    <p key={uniqid()}>{item.Major}</p>
                    <p
                      key={uniqid()}
                      className='subDetails'
                    >{`${item.Degree} - Completed: ${item.DateCompleted}`}</p>
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
              {props.data.references.map((item) => {
                return (
                  <article key={uniqid()}>
                    <h2 key={uniqid()}>{item.Name}</h2>
                    <p key={uniqid()}>{item.Relation}</p>
                    <p key={uniqid()} className='subDetails'>
                      {item.PhoneNumber}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Preview;
