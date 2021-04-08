import React, { Component } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/References.scss';

class References extends Component {
  render() {
    return (
      <div className='references'>
        <h3>References</h3>
        <form
          id='references'
          className='formQuestions'
          onSubmit={this.props.onAdd}
        >
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
            // pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
            required
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.props.referencesList.map((item) => {
            return (
              <div key={uniqid()}>
                <li key={uniqid()} className='referencesAdded'>
                  <ul>
                    <li>{`Name: ${item.Name}`}</li>
                    <li>{`Relation: ${item.Relation}`}</li>
                    <li>{`Phone #: ${item.PhoneNumber}`}</li>
                  </ul>
                  <FontAwesomeIcon
                    onClick={() => this.props.onDelete('references', item)}
                    key={uniqid()}
                    icon='trash'
                  />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default References;
