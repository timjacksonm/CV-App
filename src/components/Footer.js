import React, { Component } from 'react';
import { ReactComponent as Github } from '../assets/github-icon.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import '../styles/Footer.scss';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div>Created by TJ</div>
				<div className="logo">
					<a href="https://github.com/timjacksonm">
						<Github />
					</a>
					<a href="https://twitter.com/TimJacksonMN">
						<Twitter />
					</a>
				</div>
			</div>
		);
	}
}

export default Footer;
