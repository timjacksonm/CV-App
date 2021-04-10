import React from 'react';

function FakeDataBtn(props) {
  return (
    <div>
      <button className='autofill' onClick={props.AutoFillData}>
        Auto-Fill
      </button>
    </div>
  );
}
export default FakeDataBtn;
