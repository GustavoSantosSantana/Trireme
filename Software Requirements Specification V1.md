# Software Requirements Specification V1

### Team Number: 12
### Project Manager: Gustavo Santos
### Team Members: Patrick Brown, John Diveris, Yifan Gao, Fredrick Hernandez, Michael Lowell, Gustavo Santos

---

### Revisions

| Version | Primary Author(s) | Description of Version | Date Completed |
|---------|-------------------|------------------------|----------------|
|    1.1    | Gustavo Santos       |           Created and tweaked the document          |       10/9/2024        |
|    1.2    | Patrick Brown        |           Sections 2.4 and 5.5 completed only          |       10/10/2024        |
|    1.3    | Frederick Hernandez  |           Completed section 1 , 3 and 4            |       10/13/2024        |
|    1.4    | Gustavo Santos       |           Did sections 2.1 and 5.1          |       10/13/2024        |
|    1.5    | Michael Lowell       | Added Non-Functional requirements |       10/13/2024        |
|    1.6    | John Diveris         | Added Functional Requirements |       10/13/2024        |
|    1.7    | Michael Lowell       | 1st draft of use cases |       10/14/2024        |
|    1.8    | Yifan Gao            |  Completed section 2.2 and 5.2 |       10/14/2024        |
|    1.8.1  | Michael Lowell       | Added user cases visual |       10/20/2024        |
|    1.8.2  | Gustavo Santos       | Added business requirements visual |       10/20/2024        |
|    1.8.3  | John Diveris         | 2nd Draft of Use Cases  |       10/20/2024        |
|    1.8.4  | Gustavo Santos       | Corrected some misspelled words |       10/20/2024        |




---

### Review History

| Reviewer | Version Reviewed | Date |
|----------|-------------------|------|
|    Gustavo Santos     |         1.1-1.4         |  10/13/2024   |
|    Gustavo Santos     |         1.5-1.8.4        |  10/20/2024   |

---

## Table of Contents (version 1)

1. [Introduction](#1-introduction)  
    1.1 [Project Objectives](#11-project-objectives)  
    1.2 [Project Scope](#12-project-scope)  
    1.3 [Project Overview](#13-project-overview)  
2. [Project Description](#2-project-description)  
    2.1 [Project Features / Functions](#21-project-features--functions)  
    2.2 [User Stories](#22-user-stories)  
    2.3 [Use Cases](#23-use-cases)  
    2.4 [Project Assumptions and Dependencies](#24-project-assumptions-and-dependencies)  
3. [Project Collaboration and Documentation](#3-project-collaboration-and-documentation)  
4. [Project Management](#4-project-management)  
5. [Requirements Specification](#5-requirements-specification)  
    5.1 [Business Requirements](#51-business-requirements)  
    5.2 [User Requirements](#52-user-requirements)  
    5.3 [Functional Requirements](#53-functional-requirements)  
    5.4 [Non-Functional Requirements](#54-non-functional-requirements)  
    5.5 [Implementation (Performance) Requirements (Optional)](#55-implementation-performance-requirements-optional)  

---

## 1. Introduction

### 1.1 Project Objectives  
Define the primary goals of the software being developed and set clear expectations for what the system aims to achieve.  

**• The primary goal of our group is to create an app with the needs of a student in mind. The team decided to put forth a plan to develop a time tracker/ management app. This app would help students track their study hours, breaks, complete and incomplete goals, and just their overall productivity, The app will provide other features like showing personalized analytics and insights to encourage better time management and study habits.**


### 1.2 Project Scope  
Define the boundaries of the project, including what is included and excluded.
| Included | Excluded |
| --- | --- |
| **Time Tracking**: The ability to log study sessions, tasks to be completed, and breaks. | **Advanced AI Recs**: Using smart technology to suggest personalized options. |
| **User Accounts**: Basic account creation and login features. | **Multi-Device Syncing**: Keeping data updated across all user devices. |
| **Task Categorization**: Organize study sessions by subject and tasks. | **Third Party Tool Integrations**: Ability to work with external tools and apps not affiliated with our own. |
| **Productivity Insights**: View personalized statistics like "Total study time" and "Average session length." | **Monetization/Ads**: Offering premium features or ads to generate income. |
| **Reminders**: Push notifications for study or break reminders. | **Mobile App (Web-Based)**: A mobile-based app option. |
| **User Interface**: Simple, easy-to-use dashboard for tracking time and viewing progression or completed goals. | |
| **Data Storage**: Ability to save user data locally or in the cloud. | |


### 1.3 Project Overview  
Describe the project's goals, the steps to achieve these goals, and the expected outcomes. Outline the project schedule, necessary resources, and status.
* As previously mentioned, the primary goal of the project is to develop and app that helps students be successful in their studies. This being a time tracker/management app.
* There aren't a specified set of steps being followed in the process. We do however have a routine. The group meets sometime during the week, plan out the duties for said week, share information such as documents, ideas, responsibilities, etc. and all work on the project for another successful cycle.
* As for outcomes, we would like to have our project coherent and concise. To develop a reputable app that can earn us a good standing during the review phase of the evaluation. 
* We follow the schedule provided by the instructor.

![image](https://github.com/user-attachments/assets/cfc78ae2-afef-4a0c-9a41-d508942942d9)

---

## 2. Project Description

### 2.1 Project Features / Functions  
List at least 3 main features and functionalities to be developed.

1. **Task Timer**: Core functionality that allows users to start, pause, and stop a timer for specific tasks or study sessions, providing the foundation for tracking time spent on activities.
2. **Daily and Weekly Reports**: Automatically generate detailed reports summarizing the time spent on tasks, helping users analyze their productivity patterns and make improvements.
3. **Goal Setting**: Enables users to set daily or weekly time goals for tasks, providing motivation and tracking progress towards productivity targets.

### 2.2 User Stories  
Simple, concise description of a feature or requirement from the perspective of an end user. User stories are often used in Agile development methodologies to capture user needs and facilitate communication between stakeholders. List at least 3 user story statements to briefly describe the type of user, what they want and why.

1. As a student, I want to track my study time so that I can optimize my study habits and be more productive.  
2. As a user, I want to set reminders for breaks so that I can avoid burnout and stay focused throughout my study sessions.  
3. As a busy student, I want to view my daily and weekly productivity reports so that I can assess my performance and make improvements.

### 2.3 Use Cases  
Describes a specific interaction between a user (or "actor") and the application to achieve a particular goal. It outlines the steps involved in this interaction and can help to clarify functional requirements. List at least 3 user cases to describe a set of interactions between a system and one or more actors.

---
**Use Case Title:** User Creates a Task

**Actor(s):** 
- Primary: User
- Secondary: Database

**Preconditions:**
- User must be logged in.

**Description:** An authenticated user creates a task with a name, optional descriptor, and either a duration, due-date, or time interval. The task is saved to the database and rendered on the screen. Timers are started during the relevant time periods.

**Steps:**
1. The user selects the `Create Task` option.
2. The system prompts the user for task details (name, description, due date/duration/interval, optional additional tags)
3. The user fills out all required form fields and submits.
4. The system validates the input details, if invalid a proper error message will display.
5. The system saves the task data to the database.
6. The database returns a success message to the system. If unsuccessful, the system reports the error to user.
7. The system displays a success message to user and displays the new task.

**Postconditions:**
- A new task is successfully stored in the database.
- A new task is displayed in the task list.
- A new task is present in the user's calendar.
- If applicable, timers may be started and running if the task is set to begin immediately.

**Diagram:**<br>
![Use Case Diagram](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/UseCaseDiagramCaching.jpeg?raw=true)

---

**Use Case Title**: Logging In While Task In Progress

**Actor(s)**: 
- Primary: System
- Secondary: User

**Preconditions**: 
- Preexisting task in database with a set time interval.
- The interval must be scheduled for the time of user login.

**Description**: A user logs in while a pre-set task is running. The program alerts the user that the task is in progress and begins its timers.

**Steps**:
1. User logs into account.
2. System retrieves user task information from database to display to user.
3. System checks task data for any current meetings/task intervals.
4. System finds an ongoing interval and starts timers.
5. System displays task list to user.
6. System displays message to user to alert them to an ongoing interval and displays a timer widget.
7. User may interact with the widget to start/stop the timer.

**Postconditions**: 
- Timer widget displayed to user.
- Timer running for this associated task.

---

**Use Case Title**: Interval Task Starting Soon

**Actor(s)**: 
- Primary: System
- Secondary: User

**Preconditions**: 
- Preexisting task in database with a set time interval.
- The interval must be starting soon.

**Description**: A user logs in when a time-interval task will start soon. The program alerts the user upon login, as well as when the time interval is reached. The program begins its timers only once the time interval starts

**Steps**:
1. User logs into system.
2. System retrieves user task information from database to display to user.
3. System checks task data for any upcoming meetings/task intervals.
4. System finds an upcoming task interval.
5. System displays task list.
6. System alerts user to the upcoming task.<br>
...
7. System alerts user again once the scheduled time interval starts.
8. System starts timer and displays widget.
   
**Postconditions**: 
- Proper alert is displayed to user.
- Timer is started and widget is displayed.
---



### 2.4 Project Assumptions and Dependencies

   1. **Technical Assumption**: The software assumes that it will be given factual data from which it can formulate a study schedule from.
   2. **Operational Assumption**: The software assumes that users will have a basic understanding of the time it takes to do a task and familiarity with similar applications, reducing the need for extensive training.
   3. **Business Assumption**: The software assumes a stable internet connection will be available to all users for accessing the application at all times.
   4. **Resource Constraint**: The project is subject to a fixed budget of $256,342 and must be completed within a 6-month time frame.
   5. **Technological Constraint**: The software must be able to run and appear correctly on mobile and traditional computer devices.
   6. **External Constraint**: The software must comply with the current data protection regulatory laws and protect user data by handling it securely and in adherence to data protection laws.
   7. **Operational Constraint**: The software must support multiple user accounts with different schedules and task assignments, requiring proper user authentication and secure schedule and personal info storage.
   8. **Performance Constraint**: The software must handle multiple concurrent requests from a minimum of 680 users as well as maintaining a response time of less than 2 seconds under normal operating conditions.

## 3. Project Collaboration and Documentation  
Specify what collaboration and documentation tools/platforms that will be used in this project development and how your group will use these tools/platforms.
- **GitHub**: All major project details, documents, files, etc., will be shared in our group repository. This ensures the team can access important information while working on the project.
- **Trello**: Personal tasks will be visible to everyone, organized by person/priority, and moved or discarded upon completion.
- **MS Teams**: The main point of communication, used for weekly meetings, discussing goals, responsibilities, and new ideas.
- **MS Teams Recordings**: In case of absence, meeting recordings will be kept so team members can refer to previous discussions.
- **Outlook**: Initially used to send the original project file and GitHub invites. While not the primary contact route, it's a reliable backup if other tools are unavailable.


---

## 4. Project Management  
Specify what project management methods and tools will be used in this project development and how your group will use these methods and tools.
- **Agile Methodology**: Iterative development with regular feedback.
- **Scrum Framework**: Organized sprints and sprint reviews.
- **Trello**: Task tracking and workflow management.
- **GitHub**: Version control for code collaboration and documentation.
- **MS Teams**: Quick updates and team communication.
---

## 5. Requirements Specification

### 5.1 Business Requirements  
Outline the high-level needs of the business or organization that the application must fulfill. List at least 3 business requirements with MOSCOW code.

| Requirement ID | Requirement Description | MOSCOW |
|----------------|--------------------------|--------|
| BR1            | The application must allow users to start, pause, and stop a timer to track time spent on tasks. | M |
| BR2            | The application must generate daily and weekly reports that summarize time spent on various tasks. | M |
| BR3            | The application must enable users to set time-tracking goals for tasks or categories. | M |

![Business Requirements](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/BusinessRequirementsVisual.jpeg?raw=true)

### 5.2 User Requirements  
Describe what the end users need or expect from the application. These requirements focus on the functionality and usability aspects of the software from the user's perspective. List at least 3 user requirements with MOSCOW code.

| Requirement ID | Requirement Description | MOSCOW |
|----------------|--------------------------|--------|
| UR1            | Users must be able to create an account and log in securely using their email and password. | M |
| UR2            | Users must be able to start, pause, and stop a timer for tracking time spent on specific tasks or study sessions.| M |
| UR3            | Users must be able to view a list of tasks, categorized by subject, priority, or due date. | M |
| UR4            | Users must be able to set reminders for tasks or breaks via push notifications or in-app alerts. | M |
| UR5            | Users must be able to set goals for specific tasks (e.g., study for 2 hours on a task) and track their progress. | M |
| UR6            | Users should be able to edit or delete existing tasks and study sessions. | S |
| UR7            | Users should be able to generate and view daily or weekly reports summarizing their productivity (e.g., time spent, tasks completed). | S |
| UR8            | Users should be able to tag tasks as "Completed" or "In Progress" to track their progress efficiently. | S |
| UR9            | Users could be able to set tasks as recurring based on a specific time interval (e.g., daily, weekly). | C |
| UR10           | Users could be able to customize the sorting of tasks by due date, priority, subject, or progress status. | C |

### 5.3 Functional Requirements  
Detail the specific behaviors, functions, and capabilities that the application must provide. List at least 3 functional requirements with MOSCOW code.

| Requirement ID | Requirement Description | MOSCOW |
|----------------|--------------------------|--------|
| FR1            | The application must allow users to create new tasks, including a name, description, optional date/time, subject tag, and predefined priority. | M |
| FR2            | The application must allow users to view a list of all created tasks in either list or calendar view. | M |
| FR3            | The application must allow users to edit the details of existing tasks. | M |
| FR4            | The application must allow users to delete any existing task. | M |
| FR5            | The application must allow tasks to be tagged as 'Completed' or 'In Progress'. | M |
| FR6            | The application must allow users to schedule tasks or a lot time-blocks to a given task. | M |
| FR7            | The application must implement notifications for upcoming task deadlines in-app or email opt-in, as well as custom in-app alerts for time tracked tasks. | M |
| FR8            | The application must sort and display tasks in order of Due Date > Priority > Creation Date as default. | M |
| FR9            | The application should allow custom sorting of tasks according to Due Date, Priority, Subject Tag, Creation Date, or Completion. | S |
| FR10           | The application should provide data persistence in the case of unexpected shutdowns, i.e. a drafts feature. | S |
| FR11           | The application should include progress statistics of active tasks with subtasks. | S |
| FR12           | The application should allow the user to create subtasks or checklists for tasks. | S |
| FR13           | The application could include external APIs for integration with other existing calendar/scheduling apps. | C |
| FR14           | The application could allow users to set custom goals for subjects and include progress statistics towards those goals. | C |
| FR15           | The application could allow users to optionally set tasks as recurring and automatically populate future tasks based on a specified timeframe. | C |
| FR16           | The application will not allow the user to add other users to tasks for group collaboration. | W |

### 5.4 Non-Functional Requirements  
Describe the attributes, qualities, and constraints of the application that are not directly related to specific functionalities. List at least 3 non-functional requirements with MOSCOW code.

| Requirement ID | Requirement Description | MOSCOW |
|----------------|--------------------------|--------|
| NFR1           | The application must make use of common affordances to allow users to use it like they would any other program. | M |
| NFR2           | The application must inform the user every time they provide identifying data that will be stored. | M |
| NFR3           | The application must respond promptly to user input, with a delay below 100ms even if ping times are higher. | M |
| NFR4           | The database must be able to process all our normal user's requests without slowdown during peak hours. | S |
| NFR5           | The application must load in under 1s on current generation mobile devices. | S |
| NFR6           | The web portal must load as fast as YouTube on all web platforms. | S |
| NFR7           | The web portal must support all modern browsers (Chromium and Firefox). | S |
| NFR8           | The application must load in under 1s on last generation mobile devices. | C |
| NFR9           | The application must load in under 1s on legacy mobile devices. | W |

### 5.5 Implementation (Performance) Requirements (Optional)

| Requirement ID | Requirement Description | MOSCOW |
|----------------|--------------------------|--------|
| IR1            |The application should be developed using Python or JavaScript. |  S |
| IR2            |The project should use Oracle as the primary database management system. | M  |
| IR3            |The project should be developed using Visual Studio Code and GitHub.  | M  |
