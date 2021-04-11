import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Preview from './Preview';

const PdfBtn = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='navBtns'>
      <Preview state={props.state} ref={componentRef} />
      <button onClick={handlePrint}>Export to PDF!</button>
    </div>
  );
};
export default PdfBtn;
