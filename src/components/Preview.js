import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Document from './Document';

const Preview = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div id='previewContainer' className='removeDisplay'>
      <Document data={props} ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Preview;
