import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return (
			<div>
				<h3>Personal Information</h3>
				<input placeholder="First Name" />
				<input placeholder="Last Name" />
				<input placeholder="Email" />
				<input placeholder="Phone Number" type="tel" />
			</div>
		);
	}
}

export default Profile;
