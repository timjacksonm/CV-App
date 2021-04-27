import React from 'react';
import '../styles/Profile.scss';

const Profile = (props) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <form className='profile'>
        <input
          placeholder='First Name'
          name='profileFirstName'
          onChange={props.handleChange}
          type='text'
          value={props.profileFirstName}
        />
        <input
          placeholder='Last Name'
          name='profileLastName'
          onChange={props.handleChange}
          type='text'
        />
        <input
          placeholder='Email'
          name='profileEmail'
          onChange={props.handleChange}
          type='email'
        />
        <input
          placeholder='Phone Number'
          type='tel'
          onChange={props.handleChange}
          pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
          name='profilePhoneNum'
        />
      </form>
    </div>
  );
};

export default Profile;
