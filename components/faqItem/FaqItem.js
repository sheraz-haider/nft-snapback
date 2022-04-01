import React, { useRef } from 'react';

const FaqItem = ({ question, answer }) => {
  const detailsRef = useRef(null);
  const h4Ref = useRef(null);

  const handleToggleDetails = () => {
    detailsRef.current.classList.toggle('show_faq_details');
    h4Ref.current.classList.toggle('toggle');
  };

  return (
    <div className='faq_cont'>
      <h4 ref={h4Ref} onClick={handleToggleDetails}>
        {question}
      </h4>
      <div ref={detailsRef} className='faq_details '>
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
