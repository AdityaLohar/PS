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
      "What is the Product Space Product Management Fellowship?",
      "Who is eligible to apply for the Product Space Fellowship?",
      "How much does the Product Space Fellowship cost? Are there hidden fees?",
      "What if I miss a live session?",
      "What benefits do I get as a Fellow?",
      "I'm a UG/PG student. Can I still apply?",
      "What resources and support will I have access to during the fellowship?",
      "How often do new cohorts start?",
      "What type of roles can I apply for after completing the fellowship?",
      "Do I need prior work experience to be eligible for job interviews?",
      "Which companies hire from the Product Space Fellowship?",
      "What if I need to withdraw from the program? Is there a refund policy?",
      "Is the Product Space Fellowship worth it?"
    ];
    
    const contents = [
      "Our Product Management Fellowship is a 10-week intensive online program designed to help you kickstart or transition into a product management career. Delivered through live sessions on Teams, our fellowship is led by experienced industry professionals and product leaders from top companies. You'll learn PM fundamentals, tackle real-world case studies, and receive personalized feedback and mentorship.",
      
      "Anyone with a passion for product management can apply! Whether you're a student, working professional, or looking for a career switch, we welcome applicants from all backgrounds. No specific degree, CGPA, or prior experience is required.",
      
      "The fellowship has a one-time enrollment fee. There are no hidden costs—everything you need to succeed is included in this fee, from live sessions to placement support.",
      
      "No worries! All live sessions are recorded and shared with fellows, so you can catch up at your convenience. That said, we encourage attending live sessions for maximum engagement, as they're designed to be interactive and packed with opportunities to ask questions.",
      
      "As a Product Space Fellow, you'll receive:\n- Expert instruction from seasoned product managers.\n- Hands-on learning with real-world case studies.\n- Comprehensive placement support with access to mock interviews, alumni connections, and hiring managers.\n- Exclusive resources and tools to help you succeed in the PM world.",
      
      "Absolutely! We welcome pre-final year students who are eager to learn and build their careers early. This fellowship can give you a head start in the product management field.",
      
      "You'll receive:\n- Weekly live sessions with industry experts.\n- Access to exclusive learning materials, tools, and weekly challenges based on real-world scenarios.",
      
      "We have a new cohort starting every 1.5 months. Stay tuned for our next opening!",
      
      "Upon completion, you'll be ready to apply for full-time product management roles or internships at top companies. Whether you're a student or a working professional, this fellowship will make you eligible for PM, APM, and product internships across industries.",
      
      "Nope! Completing your weekly milestones and final project with a passing grade is all it takes to be eligible for interviews.",
      
      "We partner with a diverse range of companies, from startups to established enterprises. Our hiring partners include over 310 companies, and new companies/startups are added with each cohort.",
      
      "Refunds can be requested up to two weeks before the fellowship start date. We'll issue a full refund if the reason is valid. Requests made after the deadline will be reviewed at the discretion of our team.",
      
      "If you're serious about launching your product management career, the fellowship offers the perfect blend of knowledge, mentorship, and placement support. But don't take our word for it—check out our success stories from alumni who've landed their dream PM roles!"
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
        <div className='flex flex-col gap-2'>
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

export default DropdownList;