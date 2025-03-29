import React, { useState } from 'react';
import "../LearnJobPortal/Learn.css";

const courseContent = [
    { title: "Introduction to Course & Setup", videoId: "7TaBhrnPH78", assignment: "Create classes and methods as explained in the video." },
    { title: "Variables, Classes, Methods Intro", videoId: "k6pNZcVe2DM", assignment: "Define int, float, char, boolean variables." },
    { title: "Strings", videoId: "xyz001", assignment: "Explain how strings work in Java." },
    { title: "Numbers", videoId: "xyz002", assignment: "Work with numbers and perform arithmetic operations." },
    { title: "Boolean, Comparison Operators", videoId: "xyz003", assignment: "Understand boolean values and comparison operators." },
    { title: "Logical Operators", videoId: "xyz004", assignment: "Use logical operators to control program flow." },
    { title: "Conditional Statements", videoId: "xyz005", assignment: "Write a program using if-else and switch case." },
    { title: "Switch case", videoId: "xyz006", assignment: "Implement switch-case statements in Java." },
    { title: "Arrays", videoId: "xyz007", assignment: "Declare and use arrays in Java." },
    { title: "For Loop", videoId: "xyz008", assignment: "Understand and use for loops." },
    { title: "Break, Continue", videoId: "xyz009", assignment: "Use break and continue in loops." },
    { title: "While Loop", videoId: "xyz010", assignment: "Work with while loops." },
    { title: "OOPS Class 1", videoId: "xyz011", assignment: "Understand Object-Oriented Programming basics." },
    { title: "Inheritance", videoId: "xyz012", assignment: "Implement inheritance in Java." },
    { title: "Method overloading, overriding", videoId: "xyz013", assignment: "Practice method overloading and overriding." },
    { title: "Access modifiers -> private, public, protected", videoId: "xyz014", assignment: "Explore access modifiers." },
    { title: "Abstract classes and methods", videoId: "xyz015", assignment: "Implement abstract classes and methods." },
    { title: "Interfaces, Enums", videoId: "xyz016", assignment: "Work with interfaces and enums." },
    { title: "SpringBoot Intro, Project setup", videoId: "xyz017", assignment: "Set up a Spring Boot project." },
    { title: "Docker", videoId: "xyz026", assignment: "Containerize an application using Docker." },
    { title: "Kubernetes", videoId: "xyz027", assignment: "Deploy applications using Kubernetes." },
    { title: "Git - 3", videoId: "xyz028", assignment: "Advanced Git workflows." },
    { title: "Amazon - Project 1", videoId: "xyz029", assignment: "Build an Amazon clone - Part 1." },
    { title: "Amazon - Project 2", videoId: "xyz030", assignment: "Build an Amazon clone - Part 2." },
    { title: "Amazon - Project 3", videoId: "xyz031", assignment: "Build an Amazon clone - Part 3." },
    { title: "Amazon - Project 4", videoId: "xyz032", assignment: "Build an Amazon clone - Part 4." },
    { title: "Amazon - Project 5", videoId: "xyz033", assignment: "Build an Amazon clone - Part 5." },
    { title: "Amazon - Project 6", videoId: "xyz034", assignment: "Build an Amazon clone - Part 6." },
    { title: "Amazon - Project 7", videoId: "xyz035", assignment: "Build an Amazon clone - Part 7." },
    { title: "Amazon - Project 8", videoId: "xyz036", assignment: "Build an Amazon clone - Part 8." },
    { title: "Amazon - Project 9", videoId: "xyz037", assignment: "Build an Amazon clone - Part 9." },
    { title: "Amazon - Project 10", videoId: "xyz038", assignment: "Build an Amazon clone - Part 10." },
    { title: "Amazon - Project 11", videoId: "xyz039", assignment: "Build an Amazon clone - Part 11." },
    { title: "Amazon - Project 12", videoId: "xyz040", assignment: "Build an Amazon clone - Part 12." }
];

const Learn = () => {
    const [selectedTopic, setSelectedTopic] = useState(courseContent[0]);
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className='Learn'>
            <div className="LearnLeft">
            <div className="btn-container">
            <button 
                className={`btn ${menuOpen ? "active" : ""}`} 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                Classes
            </button>
            
            <button 
                className={`btn ${!menuOpen ? "active" : ""}`}
            >
                Live
            </button>
        </div>

                {menuOpen && (
                <div className="menu">
                    {courseContent.map((topic, index) => (
                        <button 
                            key={index} 
                            className={`menuItem ${selectedTopic.title === topic.title ? "active" : ""}`} 
                            onClick={() => setSelectedTopic(topic)}
                        >
                            {topic.title}
                        </button>
                    ))}
                </div>
                )}
               
            </div>
            <div className="LearnRight">
                <h1>{selectedTopic.title}</h1>
                <iframe
                    width="100%"
                    height="460"
                    src={`https://www.youtube.com/embed/${selectedTopic.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <h2>Assignment</h2>
                <p>{selectedTopic.assignment}</p>
                <p>Complete the task and upload your code here.</p>
                <input type="file" className='fileInput' />
                <button className='submitbtn'>Submit Assignment</button>
                <hr/>
                <button className='markBtn'>Mark as Completed</button>
            </div>
        </div>
    )
}

export default Learn;
