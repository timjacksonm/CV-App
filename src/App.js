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
    const selectForm = document.forms.profile.children;
    setProfile({
      firstName: selectForm.firstName.value,
      lastName: selectForm.lastName.value,
      email: selectForm.email.value,
      phoneNumber: selectForm.phoneNumber.value,
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
  const johnDoe = () => {
    const selectForm = document.forms.profile.children;
    selectForm.firstName.value = 'John';
    selectForm.lastName.value = 'Doe';
    selectForm.email.value = 'JohnDoe@gmail.com';
    selectForm.phoneNumber.value = '123-456-7890';
    setProfile({
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohnDoe@gmail.com',
      phoneNumber: '123-456-7890',
    });
    setSkills([
      'HTML',
      'CSS',
      'JavaScript',
      'C#',
      'C++',
      'Ruby',
      'Python',
      'Java',
      'PHP',
    ]);
    setEducation([
      {
        Name: 'Stanford University',
        Location: 'Standford, CA',
        Degree: 'Bachelor of Sciences (BS)',
        Major: 'Computer Science',
        DateCompleted: '2021-01-01',
      },
    ]);
    setJobs([
      {
        Name: 'Facebook',
        Title: 'Software Engineer',
        Location: 'Menlo Park, CA',
        Start: '01-01-2021',
        End: '04-01-2021',
        Description: [
          'Work closely with our product and design teams to build new and innovative application experiences for the iOS platform',
          'Implement custom native user interfaces using the latest iOS programming techniques',
          'Build reusable iOS software components for interfacing with our back-end platforms',
        ],
      },
      {
        Name: 'Google',
        Title: 'Product Manager',
        Location: 'Mountain View, CA',
        Start: '01-01-2021',
        End: '04-01-2021',
        Description: [
          'Work collaboratively with engineering, marketing, legal, UX, and other teams on cutting edge technologies.',
          'Understand markets, competition, and user requirements in depth.',
          'Launch new products and features, test their performance, and iterate quickly.',
        ],
      },
      {
        Name: 'Tesla',
        Title: 'Simulation Engineer',
        Location: 'Grand Rapids, MI',
        Start: '01-01-2021',
        End: '04-01-2021',
        Description: [
          'Lead design for manufacturing formability studies, working with the product designer to determine best tooling plan for all stamped parts.',
          'ead tooling engineering team in developing formability plans and laying out tooling processes for sheet metal stamping parts – ranging from large Class A automotive parts to small progressive parts.',
          'Use Autoform and/or PamStamp simulation software to setup and run formability feasibility studies on sheet metal stamping parts/processes. This includes the completion of all trim development and form compensations.',
        ],
      },
    ]);
    setReferences([
      {
        Name: 'Steve Jobs',
        Relation: 'Mentor',
        PhoneNumber: '123-456-7890',
      },
      {
        Name: 'Bill Gates',
        Relation: 'Finance Manager',
        PhoneNumber: '098-654-3210',
      },
      {
        Name: 'Tim Jackson',
        Relation: 'Best Friend',
        PhoneNumber: '999-999-9999',
      },
    ]);
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
          <FakeDataBtn AutoFillData={johnDoe} />
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
