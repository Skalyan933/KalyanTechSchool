import React from "react";
import { useParams } from "react-router-dom";
import "../DisplayContent/DisplayContent.css";

const coursesData = [
  {
    id: "react",
    title: "React - UI Developer",
    image: "https://d2b98ifobtd07j.cloudfront.net/n_reactjs_1.png",
    price: "₹10,000",
    offerPrice: "₹7,500",
    para:"Build beautiful, powerful enterprise web applications using React. Most demanded technology and it is very easy to learn and develop websites.",
    whatYouWillLearn: [
      "Learn ReactJs from ground up to building real-time applications",
      "Learn to consume APIs and handle API errors",
      "Learn payment gateway implementation",
      "Optimising website performance",
      "Learn to implement Authentication (Signup, Login, Forgot Password)",
      "Displaying e-commerce products, images, videos, and lists",
      "Learn Git and GitHub to collaborate with your team",
      "Buying a domain and deploying a website",
    ],
    technologiesAndConcepts: [
      "ReactJS",
      "HTML",
      "JavaScript",
      "GitHub",
      "Payment Gateway",
      "Redux",
      "CSS",
      "Git",
      "Bootstrap",
    ],
    details: [
      "Real-time projects",
      "Resume preparation",
      "Interview preparation",
      "Mock interviews",
      "Job search support (Naukri, LinkedIn)",
      "Life-time access to recorded classes",
    ],
    courseContent: {
        HTML: [
            "1. Introduction",
            "2. HTML page syntax",
            "3. Create html page and check output",
            "4. Html, head, body tags",
            "5. Heading, paragraph tags",
            "6. Attributes",
            "7. Working with images -> display, height, width",
            "8. Ordered list",
            "9. Unordered list",
            "10. Working with tables -> rows, columns",
            "11. Forms -> Text, Password, email, date, file",
            "12. Forms -> Dropdowns",
            "13. Forms -> Radio buttons, checkbox, textarea",
            "14. Buttons",
            "15. Style tag",
            "16. Import CSS -> link tag",
            "17. Import JavaScript -> script tag",
            "18. Class, id attributes",
            "19. Div tag -> divide page into blocks",
            "20. Meta tags -> title, description, keywords",
            "21. Meta tags -> SEO -> Facebook, Twitter, Google tags"
          ],
          CSS: [
            "22. Color -> hexa, rgb, rgba",
            "23. Font -> name, color, size",
            "24. Apply color to html tag",
            "25. Apply color based on class and id",
            "26. Image styles -> width, height, auto",
            "27. Width, Height",
            "28. Border -> radius, color",
            "29. Padding",
            "30. Margin",
            "31. Background color",
            "32. Shadow",
            "33. Flex",
            "34. Align",
            "35. Position",
            "36. Grid",
            "37. How to use new fonts",
            "38. Icons - FontAwesome"
          ],
          Bootstrap: [
            "39. Bootstrap introduction",
            "40. How to use bootstrap in ReactJS",
            "41. Page -> rows, columns",
            "42. Navigation",
            "43. Forms",
            "44. Tables",
            "45. Text formatting",
            "46. Cards",
            "47. Text colors",
            "48. Background colors",
            "49. Modal popups",
            "50. Tool tips",
            "51. Alerts"
          ],
          JavaScript: [
            "52. Introduction",
            "53. Local setup - NodeJS setup, Visual Studio Code",
            "54. Writing First JS code and checking output",
            "55. Variables introduction",
            "56. Let, Var, Const",
            "57. Strings, String methods",
            "58. Practice Strings",
            "59. Numbers",
            "60. Boolean",
            "61. String to Numbers and Numbers to String Conversion",
            "62. JSON Object",
            "63. Practice JSON Object",
            "64. Arrays - String, Number, and Mixed",
            "65. Arrays - Access and Update Array values",
            "66. JSON Array - Access and Update",
            "67. For loop",
            "68. While loop",
            "69. Do while loop",
            "70. Foreach loop",
            "71. Break, Continue",
            "72. Practice Loops",
            "73. Comparison operators -> ==, >, < etc.",
            "74. Logical operators -> and, or, and not",
            "75. Conditional operator",
            "76. If Else Conditions",
            "77. Switch case",
            "78. Arrays - map function",
            "79. Arrays - filter function",
            "80. Arrays - sort function",
            "81. Practice array functions",
            "82. Functions/methods",
            "83. Arrow function",
            "84. Class, This keyword",
            "85. Module",
            "86. Import, Export",
            "87. Practice functions, classes",
            "88. Callbacks",
            "89. Promises",
            "90. Async and Await",
            "91. Practice callbacks, async-await",
            "92. Error Handling",
            "93. Working with dates",
            "94. Practice Realtime concepts",
            "95. Real-time use cases on Strings",
            "96. Real-time use cases on Numbers",
            "97. Real-time use cases on JSON object",
            "98. Filter JSON array elements",
            "99. Update JSON array elements",
            "100. Data validation -> form, API inputs",
            "101. If-else conditions",
            "102. Working with arrays"
          ],
          ReactJS: [
            "103. Introduction",
            "104. Install -> Create ReactJS project",
            "105. Run Project & Check output in the browser",
            "106. Explore project folders",
            "107. Create React component -> JS code and HTML code",
            "108. Display React component in the browser",
            "109. Use state variables",
            "110. Display JS variable data in HTML",
            "111. JSX syntax and rules",
            "112. Create page with multiple components",
            "113. NPM -> install new packages, update and delete",
            "114. Create multiple web pages and add navigation -> react-router-dom",
            "115. Website home page design -> nav bar, content, and footer -> displaying images, headers, paragraphs, and using rows and columns",
            "116. Forms -> name, email, password, dropdown, radio, checkbox, and buttons",
            "117. Forms -> get form data into JavaScript variables",
            "118. Data validation -> display errors",
            "119. How to use APIs -> introduction, fetch API, and axios packages",
            "120. APIs error handling and reading API response",
            "121. LocalStorage -> store and retrieve data from the browser",
            "122. APIs practice -> Login, Signup, Contact form",
            "123. How login works -> login, logout, and cookies",
            "124. UseEffect and UseRef",
            "125. Pass data from parent to child and child to parent",
            "126. E-commerce products list page design",
            "127. Single product page design",
            "128. Update profile page",
            "129. Add, update, delete, and view addresses",
            "130. Display table -> API response data to table in HTML",
            "131. Redux -> setup, store data, and retrieve data",
            "132. File upload -> images, docs, etc., and validations",
            "133. Build project",
            "134. Deploying in the server"
          ],
          Git: [
            "135. What is Git and GitHub",
            "136. Install Git",
            "137. Create repository",
            "138. Clone project to your system",
            "139. Create/delete/rename branches",
            "140. Add file to track",
            "141. Commit code",
            "142. Push and pull",
            "143. Create pull request and merge branches",
            "144. Merge branches",
            "145. Merge conflicts and how to fix them"
          ],
          JobAssistance: [
            "146. Interview preparation",
            "147. Mock interviews",
            "148. Resume preparation",
            "149. LinkedIn and Naukri profile setup"
          ],
    },
  },
  {
    "id": "java",
    "title": "Java - Backend Developer",
    "image": "https://d2b98ifobtd07j.cloudfront.net/n_java.png",
    "price": "₹12,000",
    "offerPrice": "₹8,500",
    "details": [
      "Real-time projects",
      "Resume preparation",
      "Interview preparation",
      "Mock interviews",
      "Job search support (Naukri, LinkedIn)",
      "Life-time access to recorded classes"
    ],
    "para":"Build highly scalable, powerful APIs and backend for the websites and mobile applications. Learn how to build production grade backend using spring framework.",
    "whatYouWillLearn": [
      "Learn Java with Spring Boot framework from ground up to building real-time applications",
      "Learn to handle requests",
      "Learn payment gateway implementation",
      "Optimising website performance",
      "Learn to implement Authentication (Signup, Login, and Forgot password) in websites",
      "Learn MySQL and querying data",
      "Learn Git and GitHub to collaborate with your team",
      "Buying domain and deploying website"
    ],
    "technologiesAndConcepts": [
      "Java",
      "Junit",
      "Redis",
      "MySQL",
      "GitHub",
      "Spring Boot framework",
      "Docker",
      "Kafka",
      "Git"
    ],
    "courseContent": {
        "Java": [
          "1. Introduction to backend",
          "2. Install Java, Eclipse, VS Code, Env Path setup",
          "3. How to write Java code and execute",
          "4. What are Classes and Methods",
          "5. Variables and data types",
          "6. Strings and String methods",
          "7. Numbers -> int, float",
          "8. Post, Pre increment",
          "9. Post, Pre decrement",
          "10. Boolean",
          "11. Arithmetic Operators -> +, -, *, /, %",
          "12. Comparison Operators -> <, >, >=, <=, ==, !=",
          "13. Logical Operators -> &&, ||, !",
          "14. If-else conditions",
          "15. Nested if else",
          "16. Switch case",
          "17. For Loop",
          "18. While Loop",
          "19. Do-While",
          "20. Break, Continue",
          "21. OOPS Introduction",
          "22. Class & Constructors",
          "23. Objects and calling methods",
          "24. Inheritance",
          "25. Method overloading",
          "26. Method overriding",
          "27. Access modifiers -> private, public, protected",
          "28. Abstract classes and methods",
          "29. Interfaces",
          "30. ArrayList",
          "31. LinkedList",
          "32. HashMap",
          "33. HashSet",
          "34. Handling exceptions",
          "35. Threads",
          "36. Working with dates",
          "37. File Handling",
          "38. Stream API"
        ],
        "SQL": [
          "39. Introduction to db, install db and create table",
          "40. Data types",
          "41. Primary key, auto increment",
          "42. Insert data, update data, delete",
          "43. Where, and, or, not, in, like, limit",
          "44. Min, max, count, avg, sum",
          "45. Joins -> left, right, inner join",
          "46. Union, union all",
          "47. Group by, having",
          "48. Case statements",
          "49. Stored procedures",
          "50. Alter table -> column, data type",
          "51. Truncate, delete",
          "52. Constraints -> null, not null, unique, check",
          "53. Create tables for different use cases like e-commerce, college",
          "54. Foreign key",
          "55. Create index",
          "56. Working with dates",
          "57. Export, Import -> tables, data, stored procedures"
        ],
        "SpringBoot": [
          "58. Introduction, STS, Project setup",
          "59. How to run project",
          "60. Annotations",
          "61. Folder structure -> controller, service, entity, pojo",
          "62. Dependency injection",
          "63. Rest Controller",
          "64. GET API",
          "65. POST API",
          "66. PUT, Delete, Patch",
          "67. Lombok package -> pojo classes for post, put, delete and patch",
          "68. Receive data and validations",
          "69. Response -> errors, data",
          "70. Sending emails",
          "71. Spring Data JPA -> create tables, run queries, select, insert, update, delete, stored procedure",
          "72. Read HTTP headers, cookies",
          "73. Login, Signup APIs",
          "74. Forgot Password, Update Password APIs",
          "75. APIs -> Get commerce products, get single product, comments, reviews",
          "76. File upload -> image, pdf, zip and cloud upload and validations",
          "77. JWT tokens",
          "78. Logging",
          "79. Microservices -> Creating and Using",
          "80. Spring Boot Actuator",
          "81. Swagger",
          "82. WAR and JAR files for deployment",
          "83. Deploying on AWS",
          "84. Schedulers",
          "85. Call external APIs from backend",
          "86. Build backend for SoftwareSchool",
          "87. Build Backend for E-commerce website"
        ],
        "Git": [
          "88. What is Git and GitHub",
          "89. Install Git",
          "90. Create repository",
          "91. Clone project to your system",
          "92. Create/delete/rename branches",
          "93. Add file to track",
          "94. Commit code",
          "95. Push and pull",
          "96. Create pull request and merge branches",
          "97. Merge branches",
          "98. Merge conflicts and how to fix them"
        ],
        "Job Assistance": [
          "99. Interview preparation",
          "100. Mock interviews",
          "101. Resume preparation",
          "102. LinkedIn and Naukri profile setup"
        ]
      },
  },  
];

export const DisplayContent = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="courseDetails">
      {/* Left Side - Course Description */}
      <div className="leftSide">
        <h2>
          {course.title} (Telugu) - Beginner to building
          <br /> real-time applications: Become {course.title} in 3 months
        </h2>
        <p>{course.para}</p>
        

        <h2>Please watch this video (Real-time work, syllabus, why we are better than other institutes)</h2>
        <iframe
          width="820"
          height="520"
          src="https://www.youtube.com/embed/7TaBhrnPH78"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="content">
          {/* What You'll Learn Section */}
          <h2 className="section-title">📌 What You'll Learn</h2>
          <ul className="learning-list">
            {course.whatYouWillLearn?.length ? (
              course.whatYouWillLearn.map((item, index) => (
                <li key={index} className="learning-item">
                  <span className="bullet">✔</span> {item}
                </li>
              ))
            ) : (
              <p className="empty-message">No learning topics available.</p>
            )}
          </ul>

 {/* Technologies & Concepts Section */}
<h2 className="section-title">🛠 Technologies & Concepts</h2>
<div className="tech-container">
  {course.technologiesAndConcepts?.length ? (
    course.technologiesAndConcepts.map((tech, index) => (
      <span key={index} className="tech-badge">
        <span className="tech-icon">✔</span> {tech}
      </span>
    ))
  ) : (
    <p className="empty-message">No technologies listed.</p>
  )}
</div>


  {/* Course Content Section */}
  <h2 className="section-title">📚 Course Content</h2>
  <div className="course-content">
    {course.courseContent ? (
      Object.entries(course.courseContent).map(([module, lessons], index) => (
        <div key={index} className="module">
          <h3 className="module-title">Module {index + 1}: {module}</h3>
          <ul className="lesson-list">
            {lessons.map((lesson, i) => (
              <li key={i} className="lesson-item">
                <span className="lesson-icon"></span> {lesson}
              </li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="empty-message">No course content available.</p>
    )}
  </div>
</div>

      </div>

      {/* Right Side - Course Details & Price */}
      <div className="rightSide">
        <img src={course.image} alt={course.title} className="course-img" />
        <div className="priceTag">
          <h1>
            <span className="original-price">{course.price}</span>
          </h1>
          <h2>
            <span className="offer-price">{course.offerPrice}</span>
          </h2>
          <h3>
            {course.price && course.offerPrice
              ? (
                  ((parseInt(course.price.replace(/[₹,]/g, "")) -
                    parseInt(course.offerPrice.replace(/[₹,]/g, ""))) /
                    parseInt(course.price.replace(/[₹,]/g, ""))) *
                  100
                ).toFixed(2) + "%"
              : "No Discount"}
          </h3>
        </div>
        <button>Buy Now</button>
        <p>7-day money-back guarantee (No refunds will be processed after 7 days)</p>
        <ul className="course-details">
          <h2>This Course Includes</h2>
          {course.details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          )) || <p>No additional details available.</p>}
        </ul>
        <h4>
          Talk to us? Please do call us on <br />
          <span>9660806904</span>
        </h4>
      </div>
    </div>
  );
};

export default DisplayContent;
