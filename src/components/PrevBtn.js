import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PrevBtn() {
  return (
    <div className='navBtns'>
      <button>
        <FontAwesomeIcon
          onClick={() => console.log('test')}
          icon='angle-left'
        />
        <div>Prev</div>
      </button>
    </div>
  );
}
export default PrevBtn;
