import React from 'react';
import '../styles/Profile.scss';

const Profile = (props) => {
  const { handleChange } = props;
  const { firstName, lastName, email, phoneNumber } = props.input;
  return (
    <div>
      <h3>Personal Information</h3>
      <form id="profile" className="profile">
        <input
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          type="text"
          value={firstName}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          type="text"
          value={lastName}
        />
        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
          type="email"
          value={email}
        />
        <input
          placeholder="Phone Number"
          type="tel"
          onChange={handleChange}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          name="phoneNumber"
          value={phoneNumber}
        />
      </form>
    </div>
  );
};

export default Profile;
