import Companies from "../components/Companies";
import HandsOnTools from "../components/HandsOnTools";
import MeetAlums from "../components/MeetAlums";
import MeetMentors from "../components/MeetMentors";
import PmFellowshipHeroSection from "../components/PmFellowshipHeroSection";
import ResultsPmFellowship from "../components/ResultsPmFellowship";
import ReviewPmFellowship from "../components/ReviewPmFellowship";
import WhyPmFellowship from "../components/WhyPmFellowship";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Transitions from "../components/Transitions";
import CourseSnapshot from "../components/CourseSnapshot";
import Curriculum1 from './../components/Curriculum1';
import Faq from "../components/Faq";

const PmFellowship = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  // Scroll to section if the URL has a hash
  useEffect(() => {
    if (location.hash === "#reviews") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <HelmetProvider>
      <div className="bg-white font-hind xl:flex xl:flex-col items-center">
        <Helmet>
          <title>PM Fellowship Page - Product Space</title>
          <meta
            name="description"
            content="Welcome to the PM Fellowship page of Product Space."
          />
        </Helmet>

        <div className="w-full max-w-screen-2xl">
          <PmFellowshipHeroSection />
          <Transitions />
          <Companies />
          <ResultsPmFellowship />
          <CourseSnapshot />
          <Curriculum1 />
          <HandsOnTools />
          <WhyPmFellowship bgColor={"#F7F0FF"} />
          <MeetMentors bgColor={"#fff"} />
          <div ref={sectionRef} id="reviews">
            <ReviewPmFellowship />
          </div>
          <Faq />
          <MeetAlums />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PmFellowship;
