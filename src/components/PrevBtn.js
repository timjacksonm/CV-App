import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PrevBtn(props) {
  return (
    <div id='prevBtn' className='navBtns'>
      <button onClick={props.returnToEdit}>
        <FontAwesomeIcon icon='angle-left' />
        <div>Prev</div>
      </button>
    </div>
  );
}
export default PrevBtn;
