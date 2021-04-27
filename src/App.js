import React, { useState } from 'react';
import './styles/App.scss';
import PrevBtn from './components/PrevBtn';
import NextBtn from './components/NextBtn';
import FakeDataBtn from './components/FakeDataBtn';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
import References from './components/References';
import Footer from './components/Footer';
import PdfBtn from './components/PrintPdf';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrash,
  faAngleRight,
  faAngleLeft,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash, faAngleRight, faAngleLeft, faPaperclip);

const App = (props) => {
  const [input, setInput] = useState('');
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobDuties, setJobDuties] = useState([]);
  const [references, setReferences] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({
      [e.target.name]: value,
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const selectForm = e.target;

    switch (selectForm.id) {
      case 'skills':
        setSkills([...skills, selectForm.querySelector('input').value]);
        setInput({
          skillValue: '',
        });
        break;
      case 'education':
        setEducation([
          ...education,
          {
            Name: selectForm.querySelector("input[name='eduNameInput']").value,
            Location: selectForm.querySelector("input[name='eduLocationInput']")
              .value,
            Degree: selectForm.querySelector("input[name='eduDegreeInput']")
              .value,
            Major: selectForm.querySelector("input[name='eduMajorInput']")
              .value,
            DateCompleted: selectForm.querySelector(
              "input[name='eduDateInput']"
            ).value,
          },
        ]);
        setInput({
          eduNameInput: '',
        });
        setInput({
          eduDegreeInput: '',
        });
        setInput({
          eduMajorInput: '',
        });
        setInput({
          eduDateInput: '',
        });
        break;
      case 'workExp':
        setJobs((prevState) => ({
          jobs: prevState.jobs.concat({
            Name: selectForm.querySelector("input[name='workNameInput']").value,
            Title: selectForm.querySelector("input[name='workTitleInput']")
              .value,
            Location: selectForm.querySelector(
              "input[name='workLocationInput']"
            ).value,
            Start: selectForm.querySelector("input[name='workStartInput']")
              .value,
            End: selectForm.querySelector("input[name='workEndInput']").value,
            Description: prevState.jobDuties,
          }),
          workNameInput: '',
          workTitleInput: '',
          workLocationInput: '',
          workStartInput: '',
          workEndInput: '',
          jobDuties: [],
        }));
        break;
      case 'references':
        setReferences((prevState) => ({
          references: prevState.references.concat({
            Name: selectForm.querySelector("input[name='referenceNameInput']")
              .value,
            Relation: selectForm.querySelector(
              "input[name='referenceRelationInput']"
            ).value,
            PhoneNumber: selectForm.querySelector(
              "input[name='referencePhoneInput']"
            ).value,
          }),
          referenceNameInput: '',
          referenceRelationInput: '',
          referencePhoneInput: '',
        }));
        break;

      default:
        console.log('there was an error in handleAdd');
        break;
    }
  };
  const handleDelete = (section, name) => {
    const reference = name;
    switch (section) {
      case 'skills':
        setSkills(
          skills.filter((index) => {
            if (index !== reference) {
              return true;
            }
            return false;
          })
        );
        break;

      case 'education':
        setEducation(
          education.filter((index) => {
            if (index.Name !== reference) {
              return true;
            }
            return false;
          })
        );
        break;
      case 'workExp':
        setJobs((prevState) => ({
          jobs: prevState.jobs.filter((index) => {
            if (index.Name !== reference) {
              return true;
            }
            return false;
          }),
        }));
        break;
      case 'jobDuties':
        setJobDuties((prevState) => ({
          jobDuties: prevState.jobDuties.filter((index) => {
            if (index !== reference) {
              return true;
            }
            return false;
          }),
        }));
        break;
      case 'references':
        setReferences((prevState) => ({
          references: prevState.references.filter((index) => {
            if (index !== reference) {
              return true;
            }
            return false;
          }),
        }));
        break;
      default:
        console.log('there was an error in handleDelete');
        break;
    }
  };
  const handleAddDescription = (e) => {
    const reference = e.target.previousSibling.value;
    setJobDuties((prevState) => ({
      jobDescription: '',
      jobDuties: prevState.jobDuties.concat(reference),
    }));
  };
  const previewScreen = () => {
    document.getElementById('formContainer').classList =
      'formContainer removeDisplay quickFadeOut';
    document.getElementById('previewContainer').classList = 'previewContainer';
    document.getElementById('nextBtn').classList = 'navBtns hidden';
    document.getElementById('prevBtn').classList = 'navBtns';
  };
  const showEditScreen = () => {
    document.getElementById('formContainer').classList = 'formContainer';
    document.getElementById('previewContainer').classList = 'removeDisplay';
    document.getElementById('nextBtn').classList = 'navBtns';
    document.getElementById('prevBtn').classList = 'navBtns hidden';
  };
  // const johnDoe = () => {
  //   document.forms[0].querySelector("input[name='profileFirstName']").value =
  //     'John';
  //   document.forms[0].querySelector("input[name='profileLastName']").value =
  //     'Doe';
  //   document.forms[0].querySelector("input[name='profileEmail']").value =
  //     'JohnDoe@gmail.com';
  //   document.forms[0].querySelector("input[name='profilePhoneNum']").value =
  //     '123-456-7890';
  //   setState({
  //     profileFirstName: 'John',
  //     profileLastName: 'Doe',
  //     profileEmail: 'JohnDoe@gmail.com',
  //     profilePhoneNum: '123-456-7890',
  //     skills: [
  //       'HTML',
  //       'CSS',
  //       'JavaScript',
  //       'C#',
  //       'C++',
  //       'Ruby',
  //       'Python',
  //       'Java',
  //       'PHP',
  //     ],
  //     education: [
  //       {
  //         Name: 'Stanford University',
  //         Location: 'Standford, CA',
  //         Degree: 'Bachelor of Sciences (BS)',
  //         Major: 'Computer Science',
  //         DateCompleted: '2021-01-01',
  //       },
  //     ],
  //     jobs: [
  //       {
  //         Name: 'Facebook',
  //         Title: 'Software Engineer',
  //         Location: 'Menlo Park, CA',
  //         Start: '01-01-2021',
  //         End: '04-01-2021',
  //         Description: [
  //           'Work closely with our product and design teams to build new and innovative application experiences for the iOS platform',
  //           'Implement custom native user interfaces using the latest iOS programming techniques',
  //           'Build reusable iOS software components for interfacing with our back-end platforms',
  //         ],
  //       },
  //       {
  //         Name: 'Google',
  //         Title: 'Product Manager',
  //         Location: 'Mountain View, CA',
  //         Start: '01-01-2021',
  //         End: '04-01-2021',
  //         Description: [
  //           'Work collaboratively with engineering, marketing, legal, UX, and other teams on cutting edge technologies.',
  //           'Understand markets, competition, and user requirements in depth.',
  //           'Launch new products and features, test their performance, and iterate quickly.',
  //         ],
  //       },
  //       {
  //         Name: 'Tesla',
  //         Title: 'Simulation Engineer',
  //         Location: 'Grand Rapids, MI',
  //         Start: '01-01-2021',
  //         End: '04-01-2021',
  //         Description: [
  //           'Lead design for manufacturing formability studies, working with the product designer to determine best tooling plan for all stamped parts.',
  //           'ead tooling engineering team in developing formability plans and laying out tooling processes for sheet metal stamping parts – ranging from large Class A automotive parts to small progressive parts.',
  //           'Use Autoform and/or PamStamp simulation software to setup and run formability feasibility studies on sheet metal stamping parts/processes. This includes the completion of all trim development and form compensations.',
  //         ],
  //       },
  //     ],
  //     references: [
  //       {
  //         Name: 'Steve Jobs',
  //         Relation: 'Mentor',
  //         PhoneNumber: '123-456-7890',
  //       },
  //       {
  //         Name: 'Bill Gates',
  //         Relation: 'Finance Manager',
  //         PhoneNumber: '098-654-3210',
  //       },
  //       {
  //         Name: 'Tim Jackson',
  //         Relation: 'Best Friend',
  //         PhoneNumber: '999-999-9999',
  //       },
  //     ],
  //   });
  // };
  return (
    <div className='content'>
      <section>
        <div className='skewed'></div>
      </section>
      <header>
        {/* <PrevBtn returnToEdit={showEditScreen} /> */}
        <h1>
          Resume App <FontAwesomeIcon icon='paperclip' />
        </h1>
        {/* <NextBtn createPreview={previewScreen} /> */}
      </header>
      <main id='centerContent'>
        {/* <PdfBtn state={''} /> */}
        <div id='formContainer' className='formContainer'>
          {/* <FakeDataBtn AutoFillData={this.johnDoe} /> */}
          <Profile handleChange={handleChange} />
          <Skills
            inputState={input}
            handleChange={handleChange}
            skillList={skills}
            onAdd={handleAdd}
            onDelete={handleDelete}
          />
          <Education
            inputState={input}
            handleChange={handleChange}
            educationList={education}
            onAdd={handleAdd}
            onDelete={handleDelete}
          />
          {/* <WorkExp
            state={jobs}
            handleChange={handleChange}
            jobList={jobs}
            onAdd={handleAdd}
            onAddDescription={handleAddDescription}
            onDelete={handleDelete}
          /> */}
          {/* <References
            state={references}
            handleChange={handleChange}
            referencesList={references}
            onAdd={handleAdd}
            onAddDescription={handleAddDescription}
            onDelete={handleDelete}
          /> */}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
