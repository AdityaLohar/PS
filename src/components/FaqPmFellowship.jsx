import React, { useState } from 'react';
import { Link } from 'react-router-dom';

  const DropdownItem = ({ question, content, isOpen, onClick }) => {
      return (
          <div className={`relative bg-white px-6 py-4 rounded-lg transition-all duration-200 ease-in-out ${isOpen ? "border border-2 border-[#C3C3C3]" : "border border-2 border-transparent"}`}>
              <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
                  <div className='text-[16px] font-semibold text-gray-700'>
                      <p>{question}</p>
                  </div>
                  <div className=''>
                      <svg
                          className={`h-6 w-6 transition-transform duration-200 rounded-full ease-in-out ${isOpen ? 'rotate-[0deg] bg-[#111] text-white' : 'text-gray-400 rotate-[-90deg]'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ maxHeight: isOpen ? '1000px' : '0' }}
            >
                <div className="pt-4 text-gray-600 lg:pr-16">
                    {content}
                </div>
            </div>
        </div>
    );
};

const DropdownList = ({ len, flag }) => {
    const [visibleCount, setVisibleCount] = useState(len);
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        "Who is eligible to apply for the Product Fellowship Cohort?",
        "What is the price for the Product Fellowship Cohort?",
        "When does the next cohort begin?",
        "Do I get a certificate post-completion of the cohort?",
        "Can I connect with past alumni after the cohort?",
      ];
      
      const contents = [
        "Anyone with a passion for product management and a desire to transition into the role, regardless of background, can apply.",
  
        "Pricing details are available upon request. Please reach out to us for the latest information.",
        
        "The next cohort dates are announced on our website. Stay tuned for updates!",
        
        "Yes, you will receive a certificate upon successfully completing the fellowship.",
        
        "Yes, you will have opportunities to engage with our alumni network for mentorship and guidance.",
      ];
      

      const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      const showMoreQuestions = () => {

        setVisibleCount(questions.length);
      };
      const showLessQuestions = () => {
        setVisibleCount(len);
      };
    
      return (
        <div className='flex flex-col gap-2 w-full'>
          {questions.slice(0, visibleCount).map((question, index) => (
            <DropdownItem
              key={index}
              question={question}
              content={contents[index]}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
    
          {flag && visibleCount < questions.length ? (
            <Link to={"/faq"}
              onClick={showMoreQuestions}
              className='mt-8 text-[16px] text-[#FF559E] font-semibold underline text-center'
            >
              Show More Questions
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      );
};

const FaqPmFellowship = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5] pb-20">
      <div className="py-5 lg:py-8">
        <div className="text-[28px] lg:text-[40px] font-bold text-center font-sans px-4">
          Frequently Asked Questions
        </div>
      </div>

      <div className="flex justify-between px-4 lg:px-20 gap-4">
        <DropdownList len={5} flag={1} />
      </div>
    </div>
  );
};

export default FaqPmFellowship;