import React from 'react';
import './Courses.css';
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: "react",
    title: "React - UI Developer",
    image: "https://d2b98ifobtd07j.cloudfront.net/n_reactjs_1.png",
    skills: "HTML, CSS, Bootstrap, TypeScript, React, Git, Website Hosting",
    price: "₹10,000",
    offerPrice: "₹7,500",
    details: [
      "3 months duration",
      "Real-time concepts",
      "Beginner to job-ready",
      "Industry experts as tutors"
    ],
  },
  {
    id: "java",
    title: "Java - Backend Developer",
    image: "https://d2b98ifobtd07j.cloudfront.net/n_java.png",
    skills: "Java, Spring Boot, Microservices, JUnit, Redis, Git, REST API, Website Hosting",
    price: "₹12,000",
    offerPrice: "₹8,500",
    details: [
      "3 months duration",
      "Real-time concepts",
      "Beginner to job-ready",
      "Industry experts as tutors"
    ],
  },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="courses" >
      <h1 className="courses-title">In-demand Courses for Quick Jobs</h1>
      <div className="coursesList">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card" onClick={() => navigate(`/DisplayContent/${course.id}`)}>
            <img src={course.image} alt={course.title} className="course-img" />
            <div className="course-content">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-skills">{course.skills}</p>
              <ul className="course-details">
                {course.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <button className="course-btn" onClick={() => navigate(`/DisplayContent/${course.id}`)}>
                Course Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
