import React, { Component } from 'react';
import './styles/App.scss';
import PrevBtn from './components/PrevBtn';
import NextBtn from './components/NextBtn';
import Title from './components/Title';
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
} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faAngleRight, faAngleLeft);

class App extends Component {
  constructor() {
    super();

    this.state = {
      skills: [],
      education: [],
      jobs: [],
      jobDuties: [],
      references: [],
      profileFirstName: '',
      profileLastName: '',
      profileEmail: '',
      profilePhoneNum: '',
      skillInput: '',
      eduNameInput: '',
      eduLocationInput: '',
      eduDegreeInput: '',
      eduMajorInput: '',
      eduDateInput: '',
      workNameInput: '',
      workTitleInput: '',
      workLocationInput: '',
      workStartInput: '',
      workEndInput: '',
      jobDescription: '',
      referenceNameInput: '',
      referenceRelationInput: '',
      referencePhoneInput: '',
    };
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };
  handleAdd = (e) => {
    e.preventDefault();
    const selectForm = e.target;

    switch (selectForm.id) {
      case 'skills':
        this.setState((prevState) => ({
          skillInput: '',
          skills: prevState.skills.concat(
            selectForm.querySelector('input').value
          ),
        }));
        break;
      case 'education':
        this.setState((prevState) => ({
          education: prevState.education.concat({
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
          }),
          eduNameInput: '',
          eduLocationInput: '',
          eduDegreeInput: '',
          eduMajorInput: '',
          eduDateInput: '',
        }));
        break;
      case 'workExp':
        this.setState((prevState) => ({
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
        this.setState((prevState) => ({
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
  handleDelete = (section, name) => {
    const reference = name;
    switch (section) {
      case 'skills':
        this.setState((prevState) => ({
          skills: prevState.skills.filter((index) => {
            if (index !== reference) {
              return true;
            }
            return false;
          }),
        }));
        break;

      case 'education':
        this.setState((prevState) => ({
          education: prevState.education.filter((index) => {
            if (index.Name !== reference) {
              return true;
            }
            return false;
          }),
        }));
        break;
      case 'workExp':
        this.setState((prevState) => ({
          jobs: prevState.jobs.filter((index) => {
            if (index.Name !== reference) {
              return true;
            }
            return false;
          }),
        }));
        break;
      case 'jobDuties':
        this.setState((prevState) => ({
          jobDuties: prevState.jobDuties.filter((index) => {
            if (index !== reference) {
              return true;
            }
            return false;
          }),
        }));
        break;
      case 'references':
        this.setState((prevState) => ({
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
  handleAddDescription = (e) => {
    const reference = e.target.previousSibling.value;
    this.setState((prevState) => ({
      jobDescription: '',
      jobDuties: prevState.jobDuties.concat(reference),
    }));
  };
  previewScreen = () => {
    document.getElementById('centerContent').classList = 'formContainer hidden';
    // document.getElementById('prevBtn').classList = 'navBtns';
    document.getElementById('preview').classList = 'preview';
  };
  showEditScreen = () => {
    document.getElementById('centerContent').classList = 'formContainer';
    // document.getElementById('prevBtn').classList = 'navBtns hidden';
    document.getElementById('preview').classList = 'preview hidden';
  };
  exportToPDF = () => {
    console.log('PDF');
  };
  johnDoe = () => {
    document.forms[0].querySelector("input[name='profileFirstName']").value =
      'John';
    document.forms[0].querySelector("input[name='profileLastName']").value =
      'Doe';
    document.forms[0].querySelector("input[name='profileEmail']").value =
      'JohnDoe@gmail.com';
    document.forms[0].querySelector("input[name='profilePhoneNum']").value =
      '123-456-7890';
    this.setState({
      profileFirstName: 'John',
      profileLastName: 'Doe',
      profileEmail: 'JohnDoe@gmail.com',
      profilePhoneNum: '123-456-7890',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'C#',
        'C++',
        'Ruby',
        'Python',
        'Java',
        'PHP',
      ],
      education: [
        {
          Name: 'Stanford University',
          Location: 'Standford, CA',
          Degree: 'Bachelor of Sciences (BS)',
          Major: 'Computer Science',
          DateCompleted: '2021-01-01',
        },
      ],
      jobs: [
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
      ],
      references: [
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
      ],
    });
  };
  render() {
    return (
      <div className='content'>
        <section>
          <div className='skewed'></div>
        </section>
        <header>
          <PrevBtn returnToEdit={this.showEditScreen} />
          <Title />
          <NextBtn createPreview={this.previewScreen} />
        </header>
        <main id='centerContent' className='formContainer'>
          <FakeDataBtn AutoFillData={this.johnDoe} />
          <Profile handleChange={this.handleChange} />
          <Skills
            state={this.state}
            handleChange={this.handleChange}
            skillList={this.state.skills}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
          <Education
            state={this.state}
            handleChange={this.handleChange}
            educationList={this.state.education}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
          <WorkExp
            state={this.state}
            handleChange={this.handleChange}
            jobList={this.state.jobs}
            onAdd={this.handleAdd}
            onAddDescription={this.handleAddDescription}
            onDelete={this.handleDelete}
          />
          <References
            state={this.state}
            handleChange={this.handleChange}
            referencesList={this.state.references}
            onAdd={this.handleAdd}
            onAddDescription={this.handleAddDescription}
            onDelete={this.handleDelete}
          />
        </main>
        <Preview state={this.state} />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
