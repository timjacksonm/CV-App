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
import Preview from './components/Preview';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrash,
  faAngleRight,
  faAngleLeft,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash, faAngleRight, faAngleLeft, faPaperclip);

const App = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    skillValue: '',
    schoolName: '',
    schoolLocation: '',
    degree: '',
    major: '',
    completionDate: '',
    companyName: '',
    jobTitle: '',
    jobLocation: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
    referenceName: '',
    referenceRelation: '',
    referencePhonenumber: '',
  });
  const [profile, setProfile] = useState('');
  const [skills, setSkills] = useState([]);
  const [schools, setEducation] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobDuties, setJobDuties] = useState([]);
  const [references, setReferences] = useState([]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case 'Skills and Highlights':
        setSkills([...skills, input.skillValue]);
        setInput({ ...input, [e.target[0].name]: '' });
        break;

      case 'Education and Training':
        setEducation([
          ...schools,
          {
            Name: input.schoolName,
            Location: input.schoolLocation,
            Degree: input.degree,
            Major: input.major,
            DateCompleted: input.completionDate,
          },
        ]);
        setInput({
          ...input,
          schoolName: '',
          schoolLocation: '',
          degree: '',
          major: '',
          completionDate: '',
        });
        break;

      case 'Your Work Experience':
        setJobs([
          ...jobs,
          {
            Name: input.companyName,
            Title: input.jobTitle,
            Location: input.jobLocation,
            Start: input.startDate,
            End: input.endDate,
            Description: jobDuties,
          },
        ]);
        setInput({
          ...input,
          companyName: '',
          jobTitle: '',
          jobLocation: '',
          startDate: '',
          endDate: '',
        });
        setJobDuties([]);
        break;

      case 'References':
        setReferences([
          ...references,
          {
            Name: input.referenceName,
            Relation: input.referenceRelation,
            PhoneNumber: input.referencePhonenumber,
          },
        ]);
        setInput({
          ...input,
          referenceName: '',
          referenceRelation: '',
          referencePhonenumber: '',
        });
        break;

      default:
        console.log('there was an error in handleAdd');
        break;
    }
  };
  const handleDelete = (section, value) => {
    switch (section) {
      case 'Skills and Highlights':
        setSkills(skills.filter((skill) => skill !== value));
        break;

      case 'Education and Training':
        setEducation(
          schools.filter(
            (school) => JSON.stringify(school) !== JSON.stringify(value)
          )
        );
        break;
      case 'Your Work Experience':
        setJobs(
          jobs.filter((job) => JSON.stringify(job) !== JSON.stringify(value))
        );
        break;

      case 'References':
        setReferences(
          references.filter(
            (reference) => JSON.stringify(reference) !== JSON.stringify(value)
          )
        );
        break;

      default:
        console.log('there was an error in handleDelete');
        break;
    }
  };

  const previewScreen = () => {
    setProfile({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phoneNumber: input.phoneNumber,
    });
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

  return (
    <div className="content">
      <section>
        <div className="skewed"></div>
      </section>
      <header>
        <PrevBtn returnToEdit={showEditScreen} />
        <h1>
          Resume App <FontAwesomeIcon icon="paperclip" />
        </h1>
        <NextBtn createPreview={previewScreen} />
      </header>
      <main id="centerContent">
        <Preview
          profile={profile}
          skills={skills}
          schools={schools}
          jobs={jobs}
          references={references}
        />
        <div id="formContainer" className="formContainer">
          <FakeDataBtn
            input={input}
            setInput={setInput}
            setSkills={setSkills}
            setEducation={setEducation}
            setJobs={setJobs}
            setReferences={setReferences}
          />
          <Profile handleChange={handleChange} input={input} />
          <Skills
            input={input}
            handleChange={handleChange}
            skills={skills}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
          <Education
            input={input}
            handleChange={handleChange}
            schools={schools}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
          <WorkExp
            input={input}
            handleChange={handleChange}
            jobs={jobs}
            jobDuties={jobDuties}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            setJobDuties={setJobDuties}
            setInput={setInput}
          />
          <References
            input={input}
            handleChange={handleChange}
            references={references}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
