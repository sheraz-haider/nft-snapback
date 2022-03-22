import React, { useRef } from 'react';

const FaqItem = () => {
  const detailsRef = useRef(null);
  const h4Ref = useRef(null);

  const handleToggleDetails = () => {
    detailsRef.current.classList.toggle('show_faq_details');
    h4Ref.current.classList.toggle('toggle');
  };

  return (
    <div className='faq_cont'>
      <h4 ref={h4Ref} onClick={handleToggleDetails}>
        Lorem ipsum ipsum?
      </h4>
      <div ref={detailsRef} className='faq_details '>
        <p>
          There are great tutorials that you can find and watch online via
          Youtube.
        </p>

        <p>
          We have a link provided by EddieIsKong on his YouTube channel and can
          talk you through the steps, on how to use Polygon Matic Network.
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
