import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NextBtn() {
  return (
    <div className='navBtns'>
      <button>
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
