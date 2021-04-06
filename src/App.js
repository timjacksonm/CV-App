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
      inputs: '',
      skills: [],
      education: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      inputs: e.target.value,
    });
  };
  handleAdd = (e) => {
    e.preventDefault();
    const selectForm = e.target;

    switch (selectForm.id) {
      case 'skills':
        this.setState((prevState) => ({
          inputs: '',
          skills: prevState.skills.concat(
            selectForm.querySelector('input').value
          ),
        }));
        break;
      case 'education':
        this.setState((prevState) => ({
          education: prevState.education.concat({
            Name: selectForm.querySelector("input[name='name']").value,
            Location: selectForm.querySelector("input[name='location']").value,
            Degree: selectForm.querySelector("input[name='degree']").value,
            Major: selectForm.querySelector("input[name='major']").value,
            DateCompleted: selectForm.querySelector("input[name='date']").value,
          }),
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

      default:
        console.log('there was an error in handleDelete');
        break;
    }
  };
  render() {
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
            currentInput={this.state.inputs}
            resetInput={this.handleChange}
            skillList={this.state.skills}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
          <Education
            currentInput={this.state.inputs}
            resetInput={this.handleChange}
            educationList={this.state.education}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
          <WorkExp />
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
