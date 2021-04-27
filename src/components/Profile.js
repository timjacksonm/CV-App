import React from 'react';
import '../styles/Profile.scss';

const Profile = (props) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <form id='profile' className='profile'>
        <input
          placeholder='First Name'
          name='firstName'
          onChange={props.handleChange}
          type='text'
          value={props.firstName}
        />
        <input
          placeholder='Last Name'
          name='lastName'
          onChange={props.handleChange}
          type='text'
          value={props.lirstName}
        />
        <input
          placeholder='Email'
          name='email'
          onChange={props.handleChange}
          type='email'
          value={props.email}
        />
        <input
          placeholder='Phone Number'
          type='tel'
          onChange={props.handleChange}
          pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
          name='phoneNumber'
          value={props.phoneNumber}
        />
      </form>
    </div>
  );
};

export default Profile;
