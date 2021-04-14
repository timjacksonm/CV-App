import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NextBtn(props) {
  return (
    <div id='nextBtn' className='navBtns'>
      <button className='nextBtn' onClick={props.createPreview}>
        <div>Next</div>
        <FontAwesomeIcon
          onClick={() => console.log('test')}
          icon='angle-right'
        />
      </button>
    </div>
  );
}
export default NextBtn;
