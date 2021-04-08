import React, { Component } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class References extends Component {
  render() {
    return (
      <div>
        <h3>References</h3>
        <form id='references' onSubmit={this.props.onAdd}>
          <h5>Name</h5>
          <input
            type='text'
            placeholder=''
            name='referenceNameInput'
            onChange={this.props.handleChange}
            value={this.props.state.referenceNameInput}
            required
          />
          <h5>Relation</h5>
          <input
            type='text'
            placeholder=''
            name='referenceRelationInput'
            onChange={this.props.handleChange}
            value={this.props.state.referenceRelationInput}
            required
          />
          <h5>Phone Number</h5>
          <input
            type='tel'
            placeholder=''
            name='referencePhoneInput'
            onChange={this.props.handleChange}
            value={this.props.state.referencePhoneInput}
            pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
            required
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.props.referencesList.map((item) => {
            return (
              <div key={uniqid()}>
                <li
                  key={uniqid()}
                >{`Name:${item.Name} Relation:${item.Relation} Phone Number:${item.PhoneNumber}`}</li>
                <FontAwesomeIcon
                  onClick={() => this.props.onDelete('references', item)}
                  key={uniqid()}
                  icon='trash'
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default References;
