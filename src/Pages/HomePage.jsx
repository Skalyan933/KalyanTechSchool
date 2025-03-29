import React from 'react';
import '../Pages/HomePage.css';
import { FaCode, FaBook, FaLaptopCode, FaGithub, FaUserTie, FaChalkboardTeacher, FaGraduationCap, FaProjectDiagram, FaUndo, FaClipboardList } from "react-icons/fa";

const HomePage = () => {
    const steps = [
        {
          icon: <FaCode />,
          title: "Choose in-demand technology",
          description: "Select career paths, not just basic courses, to secure a job faster.",
        },
        {
          icon: <FaBook />,
          title: "Learn real-time skills, not theory",
          description: "Companies need coders, not theory experts. Master real-world concepts.",
        },
        {
          icon: <FaLaptopCode />,
          title: "Build demo apps",
          description: "Gain experience by creating apps like blogs or e-commerce sites.",
        },
        {
          icon: <FaGithub />,
          title: "Showcase skills on GitHub",
          description: "Upload code to GitHub and share repositories with recruiters.",
        },
        {
          icon: <FaUserTie />,
          title: "Optimize Resume & LinkedIn",
          description: "Enhance your resume and LinkedIn with project links for visibility.",
        },
        {
          icon: <FaChalkboardTeacher />,
          title: "Interview Prep & Mock Tests",
          description: "Practice mock interviews and FAQs to ace real job interviews.",
        },
      ];

      const reasons = [
        {
            icon:<FaClipboardList />,
            title:"Structured Curriculum",
            description:"Updated syllabus based on latest industry standards and learning objectives."
        },
        {
          icon: <FaUserTie />,
          title: "Learn from Industry Experts",
          description: "Tutors from top IT firms with hands-on experience in large-scale projects.",
        },
        {
          icon: <FaGraduationCap />,
          title: "Job-Ready Training",
          description: "From basics to advanced skills—no prior knowledge required.",
        },
        {
          icon: <FaLaptopCode />,
          title: "Practical Learning, Less Theory",
          description: "90% hands-on learning to build real-world applications.",
        },
        {
          icon: <FaProjectDiagram />,
          title: "Live Projects & Mock Interviews",
          description: "Work on real applications and attend mock interviews for preparation.",
        },
        {
          icon: <FaUndo />,
          title: "1-Week Money-Back Guarantee",
          description: "Not satisfied? Get a full refund—no questions asked!",
        },
      ];
    
  return (
    <>
        <div className='section1'>
            <div className='left'>
                <h1>Learn Real-World Skills & Crack Interviews</h1>
                <p>Master in-demand career paths from industry professionals and become job-ready.</p>
            </div>
            <div className='right'>
                <h1>Connect With Us</h1>
                <div className='btns'>
                    <button id='btn'>WhatsApp: +91 9660806904</button>
                    <h5>OR</h5>
                    <button id='btn'>Call: +91 7660806904</button>
                </div>
            </div>
        </div>

        <div className="section2">
            <h1>6 Steps to Your Dream Job</h1>
            <div className="steps-container">
                {steps.map((step, index) => (
                <div key={index} className="step-card">
                    <div className="icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </div>
                ))}
            </div>
        </div>

        <div className="section3">
            <h1>Why Choose Our Courses?</h1>
            <div className="cards-container">
                {reasons.map((reason, index) => (
                <div key={index} className="card">
                    <div className="icon">{reason.icon}</div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default HomePage;
