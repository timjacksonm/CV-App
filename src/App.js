import React, { Component } from 'react';
import './styles/App.scss';
import Title from './components/Title';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExp from './components/WorkExp';
import References from './components/References';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="content">
				<header>
					<Title />
				</header>
				<main>
					<Profile />
					<Skills />
					<Education />
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
