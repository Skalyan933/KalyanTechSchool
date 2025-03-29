import React, { useState } from 'react';
import "./JobPortal.css";

const jobListings = [
  {
    title: "Java, Spring Boot, Microservices, Angular 13+ Developer For Pune",
    description: "Urgent opening in Big Insurance company for Java Full Stack Developer with Angular 13+ Experience.",
    technologies: ["Java", "Spring Boot", "Angular 13", "Microservices"],
    salary: "5-15 Lacs P.A",
    experience: "3 - 8 years",
    location: "Pune",
    source: "Naukri",
     url: "https://www.naukri.com/"
  },
  {
    title: "Java, Spring Boot, Microservices, Angular 13+ Developer For Pune",
    description: "Urgent opening in Big Insurance company for Java Full Stack Developer with Angular 13+ Experience.",
    technologies: ["Java", "Spring Boot", "Angular 13", "Microservices"],
    salary: "5-15 Lacs P.A",
    experience: "3 - 8 years",
    location: "Pune",
    source: "Naukri",
     url: "https://www.naukri.com/"
  },
  {
    title: "Senior Java Developer with Spring Boot & Microservices - Bangalore",
    description: "Looking for experienced Java backend developers for a fintech company.",
    technologies: ["Java", "Spring Boot", "Microservices"],
    salary: "8-18 Lacs P.A",
    experience: "4 - 10 years",
    location: "Bangalore",
    source: "LinkedIn",
     url: "https://www.linkedin.com/jobs/"
  },
  {
    title: "Full Stack Java Developer - Noida (Angular 14+)",
    description: "A leading e-commerce company is hiring Full Stack Java Developers with Angular 14+ experience.",
    technologies: ["Java", "Spring Boot", "Angular 14", "Microservices"],
    salary: "6-16 Lacs P.A",
    experience: "3 - 7 years",
    location: "Noida",
    source: "Monster",
    url: "https://www.monsterindia.com/"
  },
  {
    title: "Full Stack Java Developer - Noida (Angular 14+)",
    description: "A leading e-commerce company is hiring Full Stack Java Developers with Angular 14+ experience.",
    technologies: ["Java", "Spring Boot", "Angular 14", "Microservices"],
    salary: "6-16 Lacs P.A",
    experience: "3 - 7 years",
    location: "Noida",
    source: "Monster",
    url: "https://www.monsterindia.com/"
  },
  {
    title: "Full Stack Java Developer - Noida (Angular 14+)",
    description: "A leading e-commerce company is hiring Full Stack Java Developers with Angular 14+ experience.",
    technologies: ["Java", "Spring Boot", "Angular 14", "Microservices"],
    salary: "6-16 Lacs P.A",
    experience: "3 - 7 years",
    location: "Noida",
    source: "Monster",
    url: "https://www.monsterindia.com/"
  }
];

const JobPortal = () => {
  const [selectedSource, setSelectedSource] = useState("All");

  const filteredJobs = selectedSource === "All" ? jobListings : jobListings.filter(job => job.source === selectedSource);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Job Portal</h1>
      <div className="flex justify-center gap-4 mb-6">
        {['All', 'Naukri', 'LinkedIn', 'Monster'].map((source) => (
          <button
            key={source}
            onClick={() => setSelectedSource(source)}
            className={`px-4 py-2 rounded-lg text-white font-semibold ${selectedSource === source ? 'bg-blue-600' : 'bg-gray-500 hover:bg-gray-700'}`}
          >
            {source}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-600">{job.title}</h2>
            <p className="text-gray-600 mt-2">{job.description}</p>
            <div className="mt-4">
              <span className="font-semibold">Technologies: </span>
              {job.technologies.join(", ")}
            </div>
            <div className="mt-2">
              <span className="font-semibold">Experience: </span>
              {job.experience}
            </div>
            <div className="mt-2">
              <span className="font-semibold">Salary: </span>
              {job.salary}
            </div>
            <div className="mt-2">
              <span className="font-semibold">Location: </span>
              {job.location}
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800" onClick={() => window.open(job.url, "_blank")}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;
