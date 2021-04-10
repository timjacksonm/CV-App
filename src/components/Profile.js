import React, { Component } from 'react';
import '../styles/Profile.scss';

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>Personal Information</h3>
        <form className='profile'>
          <input
            placeholder='First Name'
            name='profileFirstName'
            onChange={this.props.handleChange}
            type='text'
          />
          <input
            placeholder='Last Name'
            name='profileLastName'
            onChange={this.props.handleChange}
            type='text'
          />
          <input
            placeholder='Email'
            name='profileEmail'
            onChange={this.props.handleChange}
            type='email'
          />
          <input
            placeholder='Phone Number'
            type='tel'
            onChange={this.props.handleChange}
            pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
            name='profilePhoneNum'
          />
        </form>
      </div>
    );
  }
}

export default Profile;
