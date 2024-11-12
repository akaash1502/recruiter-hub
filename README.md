
# ENTNT Technical Assignment

This repository contains the source code for a Web Hiring Platform Application. The application enables job posting management, candidate tracking, and job-specific assessment creation.

---

## **Table of Contents**

1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Setup Instructions](#setup-instructions)  
5. [Deployment](#deployment)  
6. [Testing & Validation](#testing--validation)  
7. [Test Data](#test-data)  

---

## **Overview**

This project is a web-based platform designed for administrators to manage hiring processes. Administrators can:  
- Post and manage job listings.  
- Create and track assessments for job-specific roles.  
- Manage candidates and their evaluations.  

**Live Demo:** [EntNT Technical Assignment App](https://entnt-technical-assignment-final.vercel.app/)  

---

## **Features**

- **Dynamic Job Management:** Add, delete, and edit jobs dynamically using React Context API.  
- **Assessment Creation:** Create distinct assessments for each job with multiple-choice questions.  
- **Responsive Design:** Fully responsive user interface built with Tailwind CSS.  
- **Persistent Data:** Local storage integration for persisting assessment data.  
- **Error Handling:** Prevents duplicate assessments or adding questions to deleted assessments.  

---

## **Technologies Used**

- **Frontend:** React.js, Context API, Tailwind CSS  
- **Deployment Platform:** Vercel  
- **Version Control:** GitHub  

---

## **Setup Instructions**

Follow these steps to set up and run the project locally:

### **Prerequisites**

Ensure you have the following installed:  
- **Node.js** (v14 or later)  
- **npm** (comes with Node.js) or **yarn**  

### **Steps to Setup**

1. **Clone the Repository**  
   Clone the project using the following command:  
   ```bash
   git clone https://github.com/akaash1502/entnt-technical-assignment-final.git
   cd entnt-technical-assignment-final
   ```

2. **Install the Required Dependencies**  
   Navigate to the project folder and install the dependencies using the following command:  
   ```bash
   npm install
   ```
   This will download all required packages, including React, Tailwind CSS, and any other dependencies specified in the `package.json` file.

3. **Run the Development Server**  
   Start the development server locally:  
   ```bash
   npm start
   ```
   The application will be accessible at:  
   [http://localhost:3000](http://localhost:3000)  

4. **Optional: Build the Project for Production**  
   To create a production-ready build, run:  
   ```bash
   npm run build
   ```
   The production files will be available in the `build` folder.

---

## **Deployment**

The application is deployed on Vercel and can be accessed at the following URL:  
**[Live Application](https://entnt-technical-assignment-final.vercel.app/)**  

---

## **Testing & Validation**

### **Testing**

1. The application has been thoroughly tested for:  
   - Functional bugs.  
   - Responsiveness on various screen sizes.  
   - Performance optimizations.

2. Test cases include:  
   - Adding, deleting, and editing jobs.  
   - Creating, editing, and removing assessments.  
   - Validation for duplicate or empty data entries.  

---

## **Test Data**

To demonstrate functionality, the application comes with sample data:  

- **Jobs:**  
  - Software Developer  
     - Description - Designs, develops, and maintains software applications, ensuring they meet user needs and performance requirements. Collaborates with cross-functional teams to write clean, efficient, and scalable code.
  - Product Manager  
     - Description - Oversees the entire product lifecycle, from ideation to launch, ensuring alignment with business goals and user needs. Coordinates with stakeholders to define product features and prioritize development efforts.
  - Data Scientist  
     - Analyzes complex datasets to uncover actionable insights and build predictive models. Leverages statistical methods and machine learning algorithms to solve business problems and drive data-driven decisions.


# Sample Assessment Questions

### Software Developer

- **Question 1:** What is the primary purpose of version control systems like Git?
  - Testing software
  - Tracking and managing code changes
  - Compiling code
  - Debugging applications
  - **Correct Answer:** Option 2 - Tracking and managing code changes

- **Question 2:** Which programming paradigm focuses on objects and their interactions?
  - Functional programming
  - Procedural programming
  - Object-oriented programming
  - Logical programming
  - **Correct Answer:** Option 3 - Object-oriented programming

- **Question 3:** What is the role of a software developer in the Agile methodology?
  - Writing code only at the start of a project
  - Building and delivering incremental updates based on user feedback
  - Creating only project documentation
  - Debugging at the end of the project
  - **Correct Answer:** Option 2 -  Building and delivering incremental updates based on user feedback

- **Question 4:** What does "DRY" stand for in software development?
  - Do Right Yesterday
  - Don't Repeat Yourself
  - Develop Rapidly, Yes
  - Debugging Runs Yearly
  - **Correct Answer:** Option 2 - Don't Repeat Yourself

- **Question 5:** Which of these is a commonly used JavaScript framework?
  - Django
  - Flask
  - React
  - Spring
  - **Correct Answer:** Option 3 - React

### Product Manager

- **Question 1:** What is the primary responsibility of a product manager?
  - Writing code
  - Managing team schedules
  - Defining product vision and strategy
  - Creating financial reports
  - **Correct Answer:** Option 3 - Defining product vision and strategy

- **Question 2:** In product development, what does "MVP" stand for?
  - Most Valuable Product
  - Minimum Viable Product
  - Maximum Value Proposition
  - Market Viability Process
  - **Correct Answer:** Option 2 - Minimum Viable Product

- **Question 3:** What tool is commonly used to track tasks in Agile project management?
  - Trello
  - Visual Studio
  - Slack
  - GitHub
  - **Correct Answer:** Option 1 - Trello

- **Question 4:** What is a key component of a product roadmap?
  - Budget details
  - Feature priorities and release timeline
  - Employee performance reviews
  - Marketing ads
  - **Correct Answer:** Option 2 - Feature priorities and release timeline

- **Question 5:** Which of the following is a prioritization framework for product features?
  - SWOT Analysis
  - RICE Scoring Model
  - Kanban Chart
  - 5 Whys
  - **Correct Answer:** Option 2 - RICE Scoring Model

### Data Scientist

- **Question 1:** What is the primary goal of a Data Scientist?
  - Writing code for web development
  - Managing customer relationships
  - Extracting insights from data
  - Selling data to clients
  - **Correct Answer:** Option 3 - Extracting insights from data

- **Question 2:** Which machine learning algorithm is used for classification tasks?
  - Linear Regression
  - K-Nearest Neighbors
  - Principal Component Analysis
  - K-Means Clustering
  - **Correct Answer:** Option 2 - K-Nearest Neighbors

- **Question 3:** What does the term "overfitting" refer to in machine learning?
  - A model that performs poorly on both training and test data
  - A model that captures noise in the training data and performs poorly on test data
  - A model that has too many features
  - A model that uses incorrect algorithms
  - **Correct Answer:** Option 2 - A model that captures noise in the training data and performs poorly on test data

- **Question 4:** Which programming language is widely used for data analysis?
  - Java
  - Python
  - Ruby
  - C#
  - **Correct Answer:** Option 2 - Python

- **Question 5:** What is the purpose of a confusion matrix in machine learning?
  - To debug code
  - To measure the performance of a classification model
  - To visualize data
  - To train the model
  - **Correct Answer:** Option 2 - To measure the performance of a classification model
    
  
- **Candidates:**  
  - Candidate details are optional but can be extended for enhanced features.  