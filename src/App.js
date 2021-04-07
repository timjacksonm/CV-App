import React, { Component } from 'react';
import './styles/App.scss';
import Title from './components/Title';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
import References from './components/References';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  constructor() {
    super();

    this.state = {
      skills: [],
      education: [],
      jobs: [],
      jobDuties: [],
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
          workNameInput: '',
          workTitleInput: '',
          workLocationInput: '',
          workStartInput: '',
          workEndInput: '',
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
  render() {
    console.log(this.state);
    return (
      <div className='content'>
        <section>
          <div className='skewed'></div>
        </section>
        <header>
          <Title />
        </header>
        <main className='form'>
          <Profile />
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
          <References />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
