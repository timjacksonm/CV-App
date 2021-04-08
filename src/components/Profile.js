import React, { Component } from 'react';
import '../styles/Profile.scss';

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>Personal Information</h3>
        <form className='profile'>
          <input placeholder='First Name' type='text' />
          <input placeholder='Last Name' type='text' />
          <input placeholder='Email' type='email' />
          <input
            placeholder='Phone Number'
            type='tel'
            pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
          />
        </form>
      </div>
    );
  }
}

export default Profile;
