import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div>
				<h3>Personal Information</h3>
				<input placeholder="First Name" type="text" />
				<input placeholder="Last Name" type="text" />
				<input placeholder="Email" type="email" />
				<input placeholder="Phone Number" type="tel" />
			</div>
		);
	}
}

export default Profile;
