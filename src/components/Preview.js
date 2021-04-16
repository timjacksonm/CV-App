import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Preview.scss';

class Preview extends Component {
  render() {
    return (
      <div className='preview'>
        <div id='cv' className='quickFadeIn'>
          <div className='titleDetails'>
            <div id='name'>
              {
                <h1
                  key={uniqid()}
                >{`${this.props.state.profileFirstName} ${this.props.state.profileLastName}`}</h1>
              }
            </div>

            <div id='contactDetails'>
              <ul>
                <li>
                  e:{' '}
                  {
                    <a key={uniqid()} href={this.props.state.profileEmail}>
                      {this.props.state.profileEmail}
                    </a>
                  }
                </li>
                <li>m: {this.props.state.profilePhoneNum}</li>
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
                  {this.props.state.skills.map((item) => {
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
                {this.props.state.jobs.map((item) => {
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
                {this.props.state.education.map((item) => {
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
                {this.props.state.references.map((item) => {
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
  }
}
export default Preview;
