# Software Requirements Specification V2

### Team Number: 12
### Project Manager: Gustavo Santos
### Team Members: Patrick Brown, John Diveris, Yifan Gao, Fredrick Hernandez, Michael Lowell, Gustavo Santos

---

### Revisions

| Version | Primary Author(s) | Description of Version | Date Completed |
|---------|-------------------|------------------------|----------------|
| 2.1 | Gustavo Santos | Created and tweaked the document | 10/22/2024 |
| 2.2 | Patrick Brown | Added training steps | 10/26/2024 |
| 2.3 | Michael Lowell | Added Security requirements and External Interface requirements | 10/27/2024 |
| 2.3.1 | Michael Lowell | Added revision markup | 10/28/2024 |
| 2.3.2 | Patrick Brown | Added testing plans for 6.1 and 6.10 | 10/29/2024 |
| 2.4 |  John Diveris  | Added ERD Diagram Visual | 11/1/2024 |
| 2.4.1 |  John Diveris  | Added Database Requirements | 11/1/2024 |
| 2.4.2 | John Diveris | Added Class Diagram | 11/1/2024  |
| 2.4.3 | John Diveris | Added Class Requirements| 11/2/2024 |
| 2.5 | Michael Lowell | Added hardware requirements | 11/2/2024 |
| 2.5.1 | Michael Lowell | Updated hardware requirements | 11/3/2024 |
| 2.6 | Michael Lowell | Added architecture requirements | 11/3/2024 |
| 2.7 | Michael Lowell | Added internal interface requirements | 11/3/2024 |
| 2.8 | Yifan Gao| Complete 6.3, 6.8, 6.11, 6.12 | 11/3/2024 |
| 2.9 | Patrick Brown | Added test plans to hardware requirements | 11/3/2024 |
| 2.10 | John Diveris | Added Data Flow Diagrams & Requirements | 11/3/2024  |
| 2.11 | Gustavo Santos | Added Appendix | 11/3/2024  |


---

### Review History

| Reviewer | Version Reviewed | Date |
|----------|-------------------|------|
| Gustavo Santos | 2.1-2.3 | 10/27/2024 |
| Gustavo Santos | 2.4-2.11 | 11/3/2024 |

---

## Table of Contents (version 2)

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
6. [High-level Design](#6-high-level-design)  
    6.1 [Security (Required)](#61-security-required)  
    6.2 [Hardware (Required)](#62-hardware-required)  
    6.3 [User Experience (Required)](#63-user-experience-required)  
    6.4 [Architecture (Required)](#64-architecture-required)  
    6.5 [Database (Required)](#65-database-required)  
    6.6 [Top-level Classes (Required)](#66-top-level-classes-required)  
    6.7 [Data Flow and States (Required)](#67-data-flow-and-states-required)  
    6.8 [Reports (Required)](#68-reports-required)  
    6.9 [Internal Interfaces (Optional)](#69-internal-interfaces-optional)  
    6.10 [External Interfaces (Optional)](#610-external-interfaces-optional)  
    6.11 [Other Outputs (Optional)](#611-other-outputs-optional)  
    6.12 [Configuration Data (Optional)](#612-configuration-data-optional)  
    6.13 [Training (Optional)](#613-training-optional)  
7. [Appendixes (Optional)](#7-appendixes-optional)  

---

## 1. Introduction

### 1.1 Project Objectives  
Define the primary goals of the software being developed and set clear expectations for what the system aims to achieve.  

* The primary goal of our group is to create an app with the needs of a student in mind. The team decided to put forth a plan to develop a time tracker/ management app. This app would help students track their study hours, breaks, complete and incomplete goals, and just their overall productivity, The app will provide other features like showing personalized analytics and insights to encourage better time management and study habits.


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

---

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

---

## 6. High-level Design

### 6.1 Security (Required)

* **Requirement ID:** SEC1
  
  **Description:** User Authentication

  **Requirement:** The system shall implement a username and password system that requires users to authenticate before accessing the system.

  **Testing:** This shall be tested using a Python unit  test that will give the wrong login info and correct info, and test the responses for each of them to see if they are correct.

* **Requirement ID:** SEC2

  **Description:** 2-Factor Authentication

  **Requirement:** The system shall implement a 2fa system that users may opt into for added data security. When active, the system will send the user a one-time code via either email or sms when attempting to log in.

  **Testing:** This will be tested first by python unit tests for the 2fa system, app webpage, and email or sms making software, and then by performing integration  testing when they are linked together.

* **Requirement ID:** SEC3

  **Description:** User IDs

  **Requirement:** The system shall implement a secure hashing system for generating user IDs to prevent attackers from guessing an ID. Any API tokens generated by the software will also be generated securely.

  **Testing:**  This will be tested with Python integration  testing by creating a secure token via the app and attempting to brute force the token's id.
  
  ---

### 6.2 Hardware (Required)

* **Requirement ID:** HW1

  **Description:** Web Hosting
  
  **Requirement:** Server Hardware will be rented from a cloud hosting service. We will rent the servers from Amazon Web Services, choosing the m5ad.2xlarge package.
  
  **Testing:** This will be tested using unit tests to determine whether or not users can connect to the server using a selenium python test which will try to connect to the app and perform a simple command.

* **Requirement ID:** HW2
  
  **Description:** Database systems
  
  **Requirement:** Database Hardware will be rented from the same web host as above.
  
  **Testing:** This will be tested using integration tests which will use selenium in python to perform information calls in the app.

* **Requirement ID:** HW3
  
  **Description:** Development Environment
  
  **Requirement:** Digital workspaces will be procured for each member of the development team. Each member will be provided with a desktop PC with a monitor, keyboard, and mouse. Graphics designers will be provided with additional GPU power to facilitate graphics rendering. Programmers will be provided with an additional monitor to facilitate reference lookups and a rubber duck to facilitate debugging.
  
  **Testing:** This will be tested using a python file containing instructions to confirm the setup and the presence of the hardware.
  
* **Requirement ID:** HW4
  
  **Description:** Deployment Test Platforms
  
  **Requirement:** Devices corresponding to expected user hardware will be procured. Such devices will include: current gen mobile phones running both IOS (v18.1) and Droid (v15) systems, modern consumer-grade laptop, older gen mobile phones running both IOS and Droid systems, tablet computers.
  
  **Testing:** This will be tested manually to confirm the setup and the presence of IOS (v18.1) and Droid (v15) systems, and whether or not the phones are current models.
  
  ---

### 6.3 User Experience (Required)
Describe at least two user experiences to outline how users will interact with the system and the overall experience they should have while using it. Use a free User Interface Design Software to create wireframe for each user interface. Example of a User Experience Requirement:
Requirement ID: UX1
Description: User Login
Requirement: ……………….

#### **User Experience 1: User Login and Authentication**

1. **Objective**: The user can securely log in to access the application’s features.
2. **Steps**:
   - **Step 1**: User opens the application and is presented with the login screen.
   - **Step 2**: The login screen has fields for "Username" and "Password" and a "Login" button.
   - **Step 3**: User enters their credentials and clicks the "Login" button.
   - **Step 4**: The system validates the credentials.
     - If the credentials are correct, the user is directed to the main dashboard.
     - If incorrect, an error message ("Invalid username or password") appears, prompting the user to try again.
   - **Step 5**: Upon successful login, the user's session is securely initiated, and they can proceed to use other system features.

3. **Wireframe Suggestions**:
   - **Login Screen**: Include text fields for username and password, a login button, and an error message placeholder below the form. Optionally, add a "Forgot Password" link below the login button for recovery.
   - **Error Message Placement**: Show an error message in red text just below the password field.

4. **Testing:** This will be tested using a python selenium integration test which will attempt to log in using correct and incorect login info and confirm whether the responces are correct.

---

#### **User Experience 2: Navigating the Dashboard and Accessing Reports**

1. **Objective**: After logging in, the user navigates to the dashboard to view key information and access reports.
2. **Steps**:
   - **Step 1**: User is on the main dashboard after successful login.
   - **Step 2**: The dashboard presents key sections, including "Recent Activity," "Notifications," and a "Reports" section.
   - **Step 3**: User clicks on the "Reports" section to access available reports.
   - **Step 4**: The system displays a list of report types (e.g., "User Activity," "System Usage," "Error Logs").
   - **Step 5**: User selects "User Activity Report."
     - If additional parameters are required, the system prompts for details (e.g., date range).
   - **Step 6**: User inputs parameters (e.g., "Last 30 Days") and clicks "Generate Report."
   - **Step 7**: The system generates and displays the report on-screen or provides an option to download it in a preferred format (e.g., PDF or CSV).

3. **Wireframe Suggestions**:
   - **Dashboard Screen**: Include a top navigation bar and sections for Recent Activity, Notifications, and Reports.
   - **Reports Section**: Show a list of report types with a "Generate" button beside each.

4. **Testing:** This will be tested using a python selenium integration test that will exicute a series of commands and then navigate to the dashboard to confirm that info and reports on the commands are present.

---

### 6.4 Architecture (Required)
Describe the overall structure and organization of the software system. Define how various components interact, the technologies to be used, and any constraints that must be considered during the design phases. Example of Architecture Requirement:
Requirement ID: ARCH1
Description: Client-Server Architecture
Requirement: ……………….

* **Requirement ID:** ARCH1
  **Description:** Client-Server Architecture
  **Requirement:** The system will implement a Client-Server architecture, with the servers being hosted by a cloud hosting service.
  
 ---

### 6.5 Database (Required)
The database for this task management app will store and manage data related to users, tasks, work-sessions, goals, and tags, supporting efficient organization and retrieval of each entity. Each table is designed with primary keys and relationships to ensure consistency, enforce data integrity, and accommodate user-specific and goal-tracking functionality.

---

### 6.5.1 Entity Relationship Diagram

![Entity Relationship Diagram](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/ERD_Diagram_v2.png)

---

### 6.5.2 Requirements for Task Management Database


**Requirement ID**: REQ-DB-001   
**Requirement Title**: User Table Implementation  
**Description**: The system shall implement a `USERS` table to store user account information.  
1. **Fields**:
   - `user_id` (INT, PRIMARY KEY): Unique identifier for each user.
   - `username` (VARCHAR(20), UNIQUE, NOT NULL): The username of the user.
   - `password` (PASSWORD, NOT NULL): The hashed password of the user.
   - `email` (EMAIL, UNIQUE, NOT NULL): The email address of the user.
   - `created_on` (TIMESTAMP, NOT NULL): The timestamp when the user account was created.  
1. **Constraints**:
   - The `username` and `email` must be unique across all records.  
1. **Acceptance Criteria**:
   - Verify that the `USERS` table is created with the specified fields and constraints.
   - Ensure that unique constraints for `username` and `email` are enforced.

---

**Requirement ID**: REQ-DB-002   
**Requirement Title**: Task Table Implementation  
**Description**: The system shall implement a `TASKS` parent table to store base information about tasks associated with users.  
1. **Fields**:
   - `task_id` (INT, PRIMARY KEY): Unique identifier for each task.
   - `title` (VARCHAR(20), NOT NULL): The title of the task.
   - `description` (VARCHAR(140), NOT NULL): The description of the task.
   - `priority` (VARCHAR(10)): The priority level of the task (e.g., Low, Medium, High).
   - `status` (VARCHAR(12)): The current status of the task (e.g., Pending, In Progress, Completed).
   - `task_type` (VARCHAR(20)): The type of the task (e.g., Due Date, Time Bracket).
   - `created_on` (TIMESTAMP, NOT NULL): The timestamp when the task was created.
   - `user_id` (INT, FOREIGN KEY): The identifier of the user associated with the task.  
1. **Constraints**:
   - `user_id` must reference a valid `user_id` in the `USERS` table.  
1. **Acceptance Criteria**:
   - Verify that the `TASKS` table is created with the specified fields and constraints.

---

**Requirement ID**: EQ-DB-003    
**Requirement Title**: Due Date Tasks Table Implementation  
**Description**: The system shall implement a `DUE_DATE_TASKS` sub-table to store details about tasks with set due dates for completion.  
1. **Fields**:
   - `task_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the task with an associated due date.
   - `due_date` (DATETIME, NOT NULL): The scheduled due date for this task.
1. **Constraints**:
   - `task_id` must reference a valid `task_id` in the `TASKS` table.  
1. **Acceptance Criteria**:
   - Verify that the `DUE_DATE_TASKS` table is created with the specified fields and constraints.

---

**Requirement ID**: REQ-DB-004   
**Requirement Title**: Time Bracket Tasks Table Implementation  
**Description**: The system shall implement a `TIME_BRACKET_TASKS` sub-table to store details about tasks with specific time-brackets.  
1. **Fields**:
   - `task_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the task with an associated time bracket.
   - `start_time` (DATETIME, NOT NULL): The scheduled start time for the time-bracketed task.
   - `end_time` (DATETIME, NOT NULL): The scheduled end time for the time-bracket task.
1. **Constraints**:
   - `task_id` must reference a valid `task_id` in the `TASKS` table.  
1. **Acceptance Criteria**:
   - Verify that the `TIME_BRACKET_TASKS` table is created with the specified fields and constraints.

---

**Requirement ID**: REQ-DB-005   
**Requirement Title**: Tags Table Implementation  
**Description**: The system shall implement a `TAGS` table to store information about tags used in the application.  
1. **Fields**:
   - `tag_id` (INT, PRIMARY KEY): Unique identifier for each tag.
   - `name` (VARCHAR): The name of the tag.
   - `color_hex` (VARCHAR): The color representation of the tag in hexadecimal format.  
1. **Acceptance Criteria**:
   - Verify that the `TAGS` table is created with the specified fields.

---

**Requirement ID**: REQ-DB-006   
**Requirement Title**: Task Tags Table Implementation  
**Description**: The system shall implement a `TASK_TAGS` junction table to associate a many-to-many relationshiy of tags and tasks.  
1. **Fields**:
   - `tag_id` (INT, PRIMARY KEY): Unique identifier for each tag-task association.
   - `task_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the task associated with a tag.  
1. **Constraints**:
   - `task_id` must reference a valid `task_id` in the `TASKS` table.  
1. **Acceptance Criteria**:
   - Verify that the `TASK_TAGS` table is created with the specified fields and constraints.

---
**Requirement ID**: REQ-DB-007   
**Requirement Title**: Goals Table Implementation  
**Description**: The system shall implement a `GOALS` parent table to store base information about user-defined goals related to tasks.  
1. **Fields**:
   - `goal_id` (INT, PRIMARY KEY): Unique identifier for each goal.
   - `tag_id` (INT, FOREIGN KEY): The identifier for the associated tag.
   - `description` (VARCHAR(140)): A description of the goal.
   - `goal_type` (VARCHAR(20)): The type of the goal (e.g., Due-Date, Time-Bracket).
   - `is_completed` (BOOLEAN): Indicates whether the goal has been completed.
   - `time_frame` (VARCHAR(10)): The time frame for the goal (e.g., Daily, Weekly).
   - `user_id` (INT, FOREIGN KEY): The identifier of the user associated with the goal.
   - `created_on` (TIMESTAMP, NOT NULL): The timestamp when the goal was created.  
1. **Constraints**:
   - `tag_id` must reference a valid `tag_id` in the `TAGS` table.
   - `user_id` must reference a valid `user_id` in the `USERS` table.  
1. **Acceptance Criteria**:
   - Verify that the `GOALS` table is created with the specified fields and constraints.

---

**Requirement ID**: REQ-DB-008   
**Requirement Title**: Task Completion Goals Table Implementation  
**Description**: The system shall implement a `TASK_COMPLETION_GOALS` sub-table to track details of task completion goals for users.  
1. **Fields**:
   - `goal_id` (INT, PRIMARY KEY): Unique identifier for each goal.
   - `target_count` (INT): The target number of tasks to complete.
   - `completed_task_count` (INT): The current count of completed tasks.  
1. **Acceptance Criteria**:
   - Verify that the `TASK_COMPLETION_GOALS` table is created with the specified fields.

---

**Requirement ID**: REQ-DB-009   
**Requirement Title**: Work Session Goals Table Implementation  
**Description**: The system shall implement a `WORK_SESSION_GOALS` sub-table to track details of goals related to user work-sessions.  
1. **Fields**:
   - `goal_id` (INT, PRIMARY KEY): Unique identifier for each session goal.
   - `target_duration` (INT): The target duration for the session goal in minutes.
   - `completed_duration` (INT): The current duration that has been completed.  
1. **Acceptance Criteria**:
   - Verify that the `WORK_SESSION_GOALS` table is created with the specified fields.

---

**Requirement ID**: REQ-DB-010  
**Requirement Title**: Work Sessions Table Implementation  
**Description**: The system shall implement a `WORK_SESSIONS` table to track user work-sessions.  
1. **Fields**:
   - `session_id` (INT, PRIMARY KEY): Unique identifier for each session.
   - `description` (VARCHAR(20)): A brief description of the session.
   - `status` (VARCHAR(12)): The current status of the session (e.g., Active, Completed).
   - `start_time` (DATE): The start date of the session.
   - `end_time` (DATE): The end date of the session.
   - `duration` (INT): The total duration of the session in minutes.
   - `user_id` (INT, FOREIGN KEY): The identifier of the user associated with the session.
   - `created_on` (TIMESTAMP, NOT NULL): The timestamp when the session was created.  
1. **Constraints**:
   - `user_id` must reference a valid `user_id` in the `USERS` table.  
1. **Acceptance Criteria**:
   - Verify that the `WORK_SESSIONS` table is created with the specified fields and constraints.

---

**Requirement ID**: REQ-DB-011  
**Requirement Title**: Work Session Tags Table Implementation  
**Description**: The system shall implement a `WORK_SESSION_TAGS` table to associate tags with user work-sessions.  
1. **Fields**:
   - `session_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the session.
   - `tag_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the associated tag.  
1. **Constraints**:
   - `session_id` must reference a valid `session_id` in the `WORK_SESSIONS` table.
   - `tag_id` must reference a valid `tag_id` in the `TAGS` table.  
1. **Acceptance Criteria**:
   - Verify that the `WORK_SESSION_TAGS` table is created with the specified fields and constraints.

---

**Requirement ID**: REQ-DB-012  
**Requirement Title**: Work Session Log Table Implementation  
**Description**: The system shall implement a `WORK_SESSION_LOG` table to log the start and end times of user sessions.  
1. **Fields**:
   - `session_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the session.
   - `start_time` (TIMESTAMP, PRIMARY KEY): The start time of the session.
   - `end_time` (TIMESTAMP): The end time of the session.  
1. **Constraints**:
   - `session_id` must reference a valid `session_id` in the `WORK_SESSIONS` table.  
1. **Acceptance Criteria**:
   - Verify that the `WORK_SESSION_LOG` table is created with the specified fields and constraints.

---

### 6.6 Top-level Classes (Required)


### 6.6.1 Class Diagram
![Class Diagram](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/UML_class_diagram_v2.png)

---

### 6.6.2 Requirements For Top-Level Classes


**Requirement ID:** CLASS_USER  
**Requirement Title:** User Class  
**Description:**  
The `User` class shall manage user account information and authentication within the system, with attributes `userID`, `username`, `password`, `email`, and `created_on`. The class shall provide the following functionalities:

1. **User Registration and Authentication:**
   - The `User` class shall include a `registerUser()` method that creates a new user account, returning a confirmation message upon successful registration.
   - The `login()` method shall authenticate the user based on `username` and `password`.
   - The `logout()` method shall log the user out of the system, returning a status message confirming the action.

2. **Account Management:**
   - The `updateInfo()` method shall allow users to update account details, such as `email` or other personal information, and return a status message confirming the update.
   - The `updatePass()` method shall allow users to securely update their password.
   - The `deleteAcct()` method shall remove the user's account from the system, including all associated data, if applicable.

3. **Access Control:**
   - `username` and `password` shall be private to ensure secure handling of user credentials.
   - `userID`, `email`, and `created_on` shall be accessible within the system for account management and user identification purposes.

---

**Requirement ID:** CLASS_INTERFACE  
**Requirement Title:** Task Manager Interface  
**Description:**  
The `TaskManager` interface shall serve as a central hub for managing tasks, tags, work-sessions, and goals within the system, supporting core functionalities and returning results in JSON string format where applicable. The class shall include the following methods:

1. **Task Management:**
   - The `createTask()` method shall allow users to create a new task, returning a JSON string with the details of the newly created task.
   - The `getTask()` method shall retrieve a specific task by its `taskID`, returning the task details as a JSON string.
   - The `getAllTasks()` method shall retrieve all tasks associated with the user, returning task data as a JSON string.
   - The `deleteTask()` method shall delete a specific task by `taskID`, ensuring all related data is removed from the system.

2. **Tag Management:**
   - The `createTag()` method shall allow users to create a new tag, returning a JSON string with the details of the newly created tag.
   - The `getAllTags()` method shall retrieve all tags associated with the user, returning tag data as a JSON string.
   - The `deleteTag()` method shall remove a specific tag by `tagID`, ensuring it is disassociated from all related tasks or work-sessions.

3. **Session Management:**
   - The `createSession()` method shall allow users to create a new session, returning a JSON string with the details of the newly created session.
   - The `getSession()` method shall retrieve a specific session by its `sessionID`, returning the session details as a JSON string.
   - The `deleteSession()` method shall delete a specific session by `sessionID`, ensuring all related data is removed from the system.

4. **Goal Management:**
   - The `createGoal()` method shall allow users to set a new goal, returning a JSON string with the details of the newly created goal.
   - The `deleteGoal()` method shall remove a specific goal by `goalID`, ensuring all associated data and references are cleared.

---

**Requirement ID:** CLASS_ABSTRACT_TASK  
**Requirement Title:** Abstract Task Class  
**Description:**  
The `Abstract Task` class shall serve as a base class for different types of tasks (e.g. Due-Date, Time-Bracketed), managing common task attributes and functionalities. It shall include the following components and abstract methods that must be implemented by all subclasses:

1. **Attributes:**
   - The `taskID` shall uniquely identify each task and be accessible across the system.
   - The `title` and `description` shall provide task details, accessible via getter methods.
   - The `taskTags` attribute shall store a list of tags associated with the task for categorization and quick retrieval.
   - The `priority` attribute shall indicate the urgency or importance of the task, with getter and setter methods for modification.
   - The `status` attribute shall represent the current state of the task (e.g., "Pending", "In Progress", "Completed"), with getter and setter methods.
   - The `userID` shall link each task to a specific user.
   - The `creationDate` shall record the date on which the task was created.

2. **Abstract Methods:**
   - The `updateTask()` method shall be an abstract method, requiring subclasses to define task-specific update functionality. This method shall return a JSON-formatted string with updated task details.
   - The `validate()` method shall be an abstract method to validate the task’s attributes, ensuring they meet task-specific requirements before saving or updating.

3. **Tag Management:**
   - The `addTag(Tag)` method shall allow adding a tag to the `taskTags` list, linking it to the task for filtering or organization.
   - The `removeTag(Tag)` method shall remove a specified tag from `taskTags`, disassociating it from the task.
   - The `getTags()` method shall return the current list of tags associated with the task.

4. **Task Details Accessors:**
   - The `getTitle()` method shall return the task's title.
   - The `getDesc()` method shall return the task's description.
   - The `setPriority(priority:str)` and `getPriority()` methods shall allow setting and retrieving the priority level of the task.
   - The `setStatus(status:str)` and `getStatus()` methods shall allow setting and retrieving the current status of the task.

5. **Completion Management:**
   - The `markComplete()` method shall privately set the task’s status to "completed" handle any associated goals or database logging and is accessible only within the class or by subclasses. 

---

**Requirement ID:** CLASS_DUE_DATE_TASK  
**Requirement Title:** Due-Date Task Class  
**Description:**  

The `DueDateTask` class shall extend the `Abstract Task` class, adding a due date attribute to represent tasks that have a specific completion deadline. This class shall provide the following features:

1. **Attributes:**
   - The `dueDate` attribute shall store the deadline date by which the task must be completed, represented as a `date` object.

2. **Abstract Method Implementations:**
   - The `updateTask()` method shall update task details, including the `dueDate`, and return a JSON-formatted string with updated task information.
   - The `validate()` method shall enforce that the `dueDate` is a valid date and set according to the requirements of the specific task (e.g., not in the past).

3. **Due Date Accessor:**
   - The `getDueDate()` method shall retrieve the `dueDate` of the task, returning it as a `date` object.

---

**Requirement ID:** CLASS_TIME_BRACKET_TASK  
**Requirement Title:** Time-Bracket Task Class  
**Description:**  

The `TimeBracketTask` class shall extend the `Abstract Task` class, adding start and end time attributes to represent tasks with defined time intervals. This class shall provide the following features:

1. **Attributes:**
   - The `startTime` attribute shall store the starting date and time for the task, represented as a `date` object.
   - The `endTime` attribute shall store the ending date and time for the task, represented as a `date` object.

2. **Abstract Method Implementations:**
   - The `updateTask()` method shall update task details, including `startTime` and `endTime`, and return a JSON-formatted string with updated task information.
   - The `validate()` method shall enforce that `startTime` and `endTime` are valid date-time values, with `endTime` occurring after `startTime`.

3. **Time Accessors:**
   - The `getStart()` method shall retrieve the `startTime` of the task, returning it as a `date` object.
   - The `getEnd()` method shall retrieve the `endTime` of the task, returning it as a `date` object.

---

**Requirement ID:** CLASS_TAG  
**Requirement Title:** Tag Class  
**Description:**  

The `Tag` class shall manage the tagging system within the application, allowing for the creation and modification of tags that can be associated with tasks and work-sessions. This class shall provide the following features:

1. **Attributes:**
   - The `tagID` attribute shall uniquely identify each tag within the system, ensuring that tags can be reliably referenced.
   - The `name` attribute shall store the name of the tag as a string.
   - The `color` attribute shall represent the color associated with the tag, stored as a string.
   - The `creationDate` attribute shall record the date on which the tag was created, providing a timestamp for tracking when tags were added.

2. **Tag Management:**
   - The `updateTag()` method shall allow for the modification of tag attributes, returning a JSON-formatted string with the updated tag information.
   
3. **Name Accessor:**
   - The `getName()` method shall return the current name of the tag, allowing other components of the application to retrieve tag identifiers.

4. **Color Management:**
   - The `setColor(color:str)` method shall allow for updating the color attribute of the tag, enabling customization.
   - The `getColor()` method shall return the current color of the tag.

---

**Requirement ID:** CLASS_ABSTRACT_GOAL  
**Requirement Title:** Abstract Goal Class  
**Description:**  

The `Abstract Goal` class shall serve as a blueprint for goal management within the application, providing common attributes and methods for specific goal types while enforcing the implementation of key functionalities in subclasses. This class shall include the following features:

1. **Attributes:**
   - The `goalID` attribute shall uniquely identify each goal within the system.
   - The `tagID` attribute shall associate the goal with a specific tag.
   - The `description` attribute shall store a textual description of the goal.
   - The `isCompleted` attribute shall indicate whether the goal has been completed.
   - The `timeFrame` attribute shall specify the duration or deadline for achieving the goal.
   - The `userID` attribute shall associate the goal with a specific user.
   - The `creationDate` attribute shall record the date on which the goal was created.

2. **Abstract Method Implementations:**
   - The `updateGoal()` method shall be defined as an abstract method that must be implemented by subclasses to update goal details, returning a JSON-formatted string with the updated information.
   - The `calcProgress()` method shall be defined as an abstract method that subclasses must implement to calculate and return the progress toward achieving the goal as a double value.
   - The `validate()` method shall be defined as an abstract method that must be implemented by subclasses to ensure that goal attributes meet required criteria before being processed.

3. **Tag Accessor:**
   - The `getTag()` method shall return the associated `tagID` of the goal, allowing for retrieval of the tag associated with the goal.

4. **Description Accessor:**
   - The `getDesc()` method shall retrieve the goal's description, providing context to other components of the application.

5. **Completion Status:**
   - The `setStatus()` method shall allow subclasses to update the `isCompleted` status of the goal.
   - The `getStatus()` method shall return the current completion status of the goal as a boolean value.

6. **Time Frame Management:**
   - The `setTimeFrame()` method shall allow for the updating of the `timeFrame` attribute, ensuring flexibility in goal deadlines.
   - The `getTimeFrame()` method shall return the current time frame associated with the goal as a string.

7. **Completion Method:**
   - The `markComplete()` method shall allow subclasses to mark the goal as completed, updating the `isCompleted` attribute accordingly.

---

**Requirement ID:** CLASS_TASK_GOAL  
**Requirement Title:** Task Goal Class  
**Description:**  

The `TaskGoal` class shall extend `Abstract Goal` and manage goals related to the number of tasks completed with associated `Tag`(s), tracking both target and completed task counts. This class shall include the following features:

1. **Attributes:**
   - The `targetCount` attribute shall specify the intended number of tasks to be completed for the goal.
   - The `completedCount` attribute shall track the actual number of tasks that have been completed toward the goal.

2. **Abstract Method Implementations:**
   - The `updateGoal()` method shall be implemented to update the task goal details, returning a JSON-formatted string with the updated information.
   - The `validate()` method shall be defined to ensure that the task goal attributes are valid before processing.
   - The `calcProgress()` method shall calculate and return the progress toward achieving the target count as a double value.

3. **Count Accessors:**
   - The `getTargetCount()` method shall return the target count for the task goal as an integer.
   - The `getCompletedCount()` method shall return the completed count for the task goal as an integer.

---

**Requirement ID:** CLASS_WORKSESSION_GOAL  
**Requirement Title:** Work Session Goal Class  
**Description:**  

The `WorkSessionGoal` class shall extend `Abstract Goal` and manage goals related to time spent on work-sessions with associated `Tag`(s), tracking both target and completed durations. This class shall include the following features:

1. **Attributes:**
   - The `targetDuration` attribute shall specify the intended time duration for the work-session goal.
   - The `completedDuration` attribute shall track the actual time spent on the work-session goal.

2. **Abstract Method Implementations:**
   - The `updateGoal()` method shall be implemented to update the work-session goal details, returning a JSON-formatted string with the updated information.
   - The `validate()` method shall be defined to ensure that the work-session goal attributes are valid before processing.
   - The `calcProgress()` method shall calculate and return the progress toward achieving the target duration as a double value.

3. **Duration Accessors:**
   - The `getTargetDuration()` method shall return the target duration for the work-session goal as an integer.
   - The `getCompletedDuration()` method shall return the completed duration for the work-session goal as an integer.

---

**Requirement ID:** CLASS_WORK_SESSION  
**Requirement Title:** Work Session Class  
**Description:**  

The `WorkSession` class shall manage the recording and tracking of user work-session within the application, capturing relevant details about each work-session's duration and status. This class shall include the following features:

1. **Attributes:**
   - The `sessionID` attribute shall uniquely identify each work-session in the system.
   - The `description` attribute shall provide a brief summary of the work-session's purpose or content.
   - The `status` attribute shall indicate the current state of the work-session (e.g., active, paused, completed).
   - The `startTime` attribute shall record the date and time when the work-session starts.
   - The `endTime` attribute shall capture the date and time when the work-session ends.
   - The `duration` attribute shall store the total duration of the work-session in minutes.
   - The `intervals` attribute shall maintain a list of logged time intervals for the work-session.
   - The `userID` attribute shall associate the work-session with a specific user.
   - The `creationDate` attribute shall record the date when the work-session was created.

2. **Work Session Management Methods:**
   - The `updateSession()` method shall be implemented to update the work-session details, returning a JSON-formatted string with the updated information.
   - The `startSession()` method shall initiate the work-session, recording the start time and updating the status to indicate the work-session is active.
   - The `endSession()` method shall conclude the work-session, recording the end time and updating the duration accordingly.
   - The `pauseSession()` method shall temporarily halt the work-session, changing the status to paused without concluding it.
   - The `resumeSession()` method shall restart a paused work-session, setting the status back to active.

3. **Logging and Calculation Methods:**
   - The `logInterval()` method shall record a time interval within the work-session, updating the intervals list.
   - The `calcDuration()` method shall calculate and return the total duration of the work-session in minutes.
   - The `getDuration()` method shall retrieve the total duration of the work-session as an integer.
   - The `getStartTime()` method shall return the start time of the work-session as a date object.
   - The `getEndTime()` method shall return the end time of the work-session as a date object.

---

### 6.7 Data Flow and States (Required)

**Requirement ID:** DF0  
**Description:** System Context for Task Management Application  
**Requirement:**  
The task management system shall accept user commands to perform operations on the tasks and other processes within, interacting with a centralized database to read and write data as needed. The system shall provide responses to the user, confirming actions, retrieving requested information, or notifying the user of errors, ensuring smooth interaction and data flow between the user and the database.

**Testing:** This will be tested during integration tests using selenium and python by inputting info into the app and then calling the info elsewhere on the app  for confirmation.

#### Level 0 Task Management Data Flow (Context):

![Level 0 Task Management Data Flow (Context)](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/Level_0_Sys_Context.png)

---

**Requirement ID:** DF1  
**Description:** Core Processes for Task Management Application  
**Requirement:**  
The system shall provide distinct management processes for handling tags, tasks, work sessions, goals, and user data. Each core process (Manage Tags, Manage Tasks, Manage Work Sessions, Manage Goals, Manage User) shall interact with its respective data store to perform read and write operations, allowing the user to create, update, and retrieve information as needed. The system shall return feedback to the user after each operation, including task, session, goal, tag, or user information, ensuring comprehensive data management and consistent responses to user actions.

**Testing:** This will be tested during integration tests using selenium and python by inputting info into the app and then confirming the result via the app's response messages.

#### Level 1 Task Management Data Flow (Core Processes):

![Level 1 Task Management Data Flow (Core Processes)](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/Level_1_Core_Processes.png)

---

**Requirement ID:** DF201    
**Description:** Task Management Data Flow  
**Requirement:**  
The system shall allow users to create, update, delete, and assign tags to tasks through a unified task management interface. Each task operation (create, update, delete, assign tag) shall interact with the `Task Data` storage to read or write task details, and the system shall provide feedback to the user by returning the created, updated, or deleted task information after each operation.

**Testing:** This will be tested during integration tests using selenium and python by creating, updating, deleting, and assigning tags and call info on the tags after each step to test whether the processes worked.

**Testing:** This will be tested during integration tests using selenium and python by creating, updating, deleting, and assigning tags and call info on the tags after each step to test whether the processes worked.

#### Level 2.1 Data Flow Diagram (Task Management):

![Level 2.1 Data Flow Diagram (Task Management)](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/Level_2.1_Task_Management.png)

---

**Requirement ID:** DF202  
**Description:** Tag Management Data Flow  
**Requirement:**  
The system shall allow users to create, edit, and delete tags within the application. Each tag operation (create, edit, delete) shall interact with the `Tag Data` storage to read or write tag information, and the system shall provide feedback to the user by returning the newly created or updated tag details upon successful completion of each action.

**Testing:** This will be tested during integration tests using selenium and python by creating, updating, deleting, and assigning tags and testing the app's response messages.

#### Level 2.2 Data Flow Diagram (Tag Management):

![Level 2.2 Data Flow Diagram (Tag Management)](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/Level_2.2_Tag_Management.png)

---

**Requirement ID:** DF203  
**Description:** Work Session Management Data Flow  
**Requirement:**  
The system shall allow users to create, update, delete, assign tags, and control (start, stop, pause, resume) work sessions within the application. Each work session operation shall interact with the `Work Session Data` or `Work Session Log` storage to read, write, or log session details. The system shall provide feedback to the user by returning the newly created or updated work session details for each create/update action.

**Testing:** This will be tested during integration tests using selenium and python by starting, stopping, pausing, and resuming work sessions and testing the app's feedback messages to confirm the events occurred correctly.

#### Level 2.3 Data Flow Diagram (Work Session Management):

![Level 2.3 Data Flow Diagram (Work Session Management)](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/Level_2.3_WSession_Management.png)

---

**Requirement ID:** DF204  
**Description:** Goal Management Data Flow  
**Requirement:**  
The system shall enable users to create, update, track progress, and delete goals within the application. Each goal operation shall interact with the `Goal Data` storage to read, write, or update goal information. The system shall provide feedback to the user by returning newly created goal details, updated goal details, progress status, or deletion confirmation, depending on the action performed.

**Testing:** This will be tested during integration tests using selenium and python by creating, updating, tracking progress, and deleting goals, verifying that feedback messages are correctly displayed for each operation to confirm the process functions as expected.

#### Level 2.4 Data Flow Diagram (Goal Management):

![Level 2.4 Data Flow Diagram (Goal Management)](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/Level_2.4_Goal_Management.png)

---

**Requirement ID:** DF205  
**Description:** User Management Data Flow  
**Requirement:**  
The system shall provide user management capabilities, including user registration, login, and updating user information. Each operation (register, login, update) shall interact with the `User Data` storage to read or write user credentials and details. The system shall provide feedback to the user by confirming registration, granting access upon successful login, and returning updated user details upon completion of profile updates.

**Testing:** This will be tested during integration tests using selenium and python by registering, logging in, and updating user profiles. Each test will verify that the system returns the appropriate feedback to ensure user management processes are functioning as required.

#### Level 2.5 Data Flow Diagram (Goal Management):

![Level 2.5 Data Flow Diagram (Goal Management)](https://github.com/GustavoSantosSantana/Trireme/blob/main/Images/Level_2.5_User_Management.png)

---

### 6.8 Reports (Required)

#### **6.8.1 User Activity Report**
- **Description**: Summarizes user activities within the system over a specified period. This includes logins, feature usage, and data entry/modification actions.
- **Data Sources**: User activity logs, login timestamps, session information.
- **Parameters**: Date range, user role, and department.
- **Format**: Table format with columns for user ID, timestamp, activity type, and description.
- **Intended Audience**: Administrators and department managers who need to monitor and analyze user engagement and system usage.

#### **6.8.2 System Usage Report**
- **Description**: Provides an overview of the system’s resource usage, including peak usage times, API call counts, and average response times.
- **Data Sources**: System logs, server performance data, API metrics.
- **Parameters**: Date range, specific endpoints or services, and time intervals (e.g., hourly, daily).
- **Format**: Charts and graphs, along with a summary table.
- **Intended Audience**: IT staff and system administrators for capacity planning and optimization of system performance.

#### **6.8.3 Error Logs Report**
- **Description**: Lists all errors encountered within the system, including error codes, descriptions, and timestamps.
- **Data Sources**: System error logs, application logs.
- **Parameters**: Date range, error severity level, and affected module.
- **Format**: Table format with error code, description, module, and timestamp.
- **Intended Audience**: Developers and IT support teams for debugging and maintenance.

#### **6.8.4 Financial Transactions Report**
- **Description**: Tracks all financial transactions processed through the system, detailing amounts, transaction types, and statuses.
- **Data Sources**: Financial transaction logs, payment gateway data.
- **Parameters**: Date range, transaction type (e.g., payment, refund), and transaction status (e.g., completed, pending).
- **Format**: Table with columns for transaction ID, amount, type, status, and timestamp.
- **Intended Audience**: Finance department for auditing and reconciliation purposes.

#### **6.8.5 Compliance and Audit Report**
- **Description**: A detailed record of user activities, especially those related to data access and modification, to ensure compliance with organizational policies and regulatory requirements.
- **Data Sources**: User activity logs, data access logs.
- **Parameters**: Date range, user role, and department.
- **Format**: Table format, with columns for user ID, action type, data modified, and timestamp.
- **Intended Audience**: Compliance officers, auditors, and administrators for ensuring adherence to policies.

#### **6.8.6 Customizable Report Builder**
- **Description**: Allows users to create custom reports by selecting fields, filters, and data sources as needed. Users can specify parameters to tailor the report to their requirements.
- **Data Sources**: All available system data sources based on user permissions.
- **Parameters**: Customizable based on user selection, including date range, specific data fields, and grouping options.
- **Format**: User-defined format, typically a table with selectable fields and optional chart visualizations.
- **Intended Audience**: General users, administrators, and managers who need to generate ad-hoc reports based on specific criteria.

---

### 6.9 Internal Interfaces (Optional)
* **Requirement ID:** IxI-1

  **Description:** Network interface

  **Requirement:** The client will interface with the server to synchronize user data and user preferences.
  
* **Requirement ID:** IxI-2

  **Description:** Data interface

  **Requirement:** The server will interface with the database to store and retrieve data.
  
  ---

### 6.10 External Interfaces (Optional)

* **Requirement ID:** ExI-1

  **Description:** Timing interface

  **Requirement:** The application will interface with the clock functionality of the host machine for timekeeping purposes.

  **Testing:** This will be tested using a Python  integration test that will activate this function on the app and then compare the time the program says passed to the actual time that passed.

* **Requirement ID:** ExI-2

  **Description:** Output interface

  **Requirement:** The application will interface with the host machine's display and audio hardware in order to relay information to the user.

  **Testing:** This will be tested using 2 python integration tests that will check to see if the app is connecting to the display hardware and the audio hardware.

* **Requirement ID:** ExI-3

  **Description:** Push Notifications

  **Requirement:** When installed onto a smartphone, The application will utilize push notifications as implemented on that device.

  **Testing:** THis can be tested using Python unit tests to perform an action on the app and then test whether the notification was sent and received by the phone.
  
  ---

### 6.11 Other Outputs (Optional)
Specify the possible outputs generated by the project.

#### **6.11.1 Notifications**
- **Description**: The system generates notifications to inform users of significant events, updates, or changes in data status. Notifications are triggered by predefined events or actions within the system.
- **Types of Notifications**:
  - **Error Notifications**: Inform users of errors encountered during system operations or data processing.
  - **Task Completion Notifications**: Notify users when specific tasks (e.g., data processing, report generation) are completed.
  - **System Update Notifications**: Inform users of upcoming system maintenance or software updates.
- **Format**: Notifications appear as pop-up alerts within the system interface and are logged in the user’s notification panel.
- **Audience**: End users, administrators, and system operators based on role and relevance.

#### **6.11.2 Automated Alerts**
- **Description**: Alerts are sent to designated users when predefined thresholds are exceeded or critical events occur, allowing for timely action.
- **Examples of Alerts**:
  - **Performance Alerts**: Triggered if system performance falls below acceptable standards (e.g., slow response times).
  - **Security Alerts**: Generated when potential security risks are detected (e.g., multiple failed login attempts, unauthorized access).
  - **Compliance Alerts**: Sent when compliance rules are violated, such as unauthorized access to restricted data.
- **Delivery Format**: Alerts are sent via email and/or SMS, depending on the user’s configured preferences, with detailed information on the incident.
- **Audience**: Administrators, IT staff, compliance officers, and end users (when relevant to their role).

#### **6.11.3 Data Exports**
- **Description**: Users can export data from the system in various formats for further analysis or integration with external applications.
- **Supported Formats**: CSV, Excel, JSON, and XML.
- **Customizable Options**:
  - **Fields Selection**: Users can choose which fields to include in the export.
  - **Date Range and Filters**: Exports can be limited by date range or specific filter criteria to focus on relevant data.
- **Output Frequency**: Data exports are generated on-demand by users or scheduled for periodic automatic export.
- **Audience**: Data analysts, managers, and administrators who need offline data access or integration with other tools.

#### **6.11.4 Summary Dashboards**
- **Description**: Dashboards provide real-time visualizations of key metrics and KPIs, allowing users to quickly assess system performance, user activity, and data trends.
- **Components**:
  - **Graphs and Charts**: Real-time data visualizations, such as line graphs for performance metrics, bar charts for usage statistics, and pie charts for data distribution.
  - **Key Metrics Display**: Highlights essential metrics, such as daily active users, error rates, and transaction counts.
  - **Recent Activity**: A snapshot of recent activities, including logins, data updates, and new alerts.
- **Update Frequency**: Dashboards update at regular intervals (e.g., every 5 minutes) to provide the latest data.
- **Audience**: All user levels, with dashboards customized based on user role and access permissions.

#### **6.11.5 Audit Log Export**
- **Description**: The system logs all user actions and critical system events, which can be exported as an audit log for compliance, review, and record-keeping purposes.
- **Content**:
  - **User Actions**: Includes login attempts, data modifications, and access to restricted sections.
  - **System Events**: Logs server restarts, software updates, and detected security incidents.
- **Format**: CSV or JSON format with timestamped entries.
- **Audience**: Administrators, compliance officers, and security teams who need detailed records for auditing and monitoring.

#### **6.11.6 Email Summaries**
- **Description**: The system can send scheduled email summaries with key updates, performance metrics, and any critical alerts or notifications.
- **Content Options**:
  - **Daily/Weekly Activity Summary**: Provides an overview of recent activities, including usage statistics and alert summaries.
  - **Performance Overview**: Highlights system performance metrics such as uptime and error rates.
  - **Compliance Snapshot**: Summarizes any recent compliance violations or security alerts.
- **Frequency**: Configurable by users, typically daily or weekly.
- **Audience**: Administrators, managers, and any users who opt in for email summaries.

---

### 6.12. Configuration Data (Optional)
Specify what data and parameters will be configurable in the configuration page or file.

#### **6.12.1 User Preferences**
- **Language Settings**: Users can select their preferred language from available options (e.g., English, Spanish, French).
- **Time Zone**: Users can configure the time zone to ensure timestamps reflect their local time.
- **Notification Preferences**:
  - **Notification Frequency**: Allows users to set the frequency of notifications (e.g., instant, daily summary, weekly summary).
  - **Delivery Method**: Users can choose to receive notifications via in-app pop-ups, email, SMS, or a combination.
- **Theme**: Users can choose between light and dark mode for the system interface.
- **Dashboard Customization**: Users can customize dashboard layouts and select which metrics or graphs are displayed based on their priorities.

#### **6.12.2 System Settings**
- **Data Refresh Interval**: Configurable interval for refreshing live data feeds and dashboards (e.g., every 5 minutes, every 10 minutes).
- **Data Retention Period**: Specifies how long data is stored in the system before it is archived or deleted. Retention periods may be set for different data types, such as logs, reports, and transactional data.
- **Backup Frequency**: Determines how frequently system backups are created (e.g., daily, weekly).
- **Cache Settings**: Allows configuration of cache expiration time for frequently accessed data to optimize system performance.
- **Logging Levels**: Configurable logging options to set levels (e.g., error, warning, info) for system event tracking.

#### **6.12.3 Security Settings**
- **Password Policies**:
  - **Minimum Length**: Enforces a minimum character count for passwords.
  - **Complexity Requirements**: Requires combinations of uppercase, lowercase, numbers, and special characters.
  - **Password Expiration**: Sets an expiration period for passwords, prompting users to change them periodically.
- **Two-Factor Authentication (2FA)**:
  - **Activation**: Allows administrators to require or make optional the use of 2FA for all users.
  - **Method**: Users may select a preferred method for 2FA (e.g., SMS, authenticator app).
- **Session Timeout**: Defines the period of inactivity before a user is automatically logged out.
- **Access Control**:
  - **Role-Based Access**: Assigns access levels based on user roles (e.g., admin, user, viewer), limiting permissions based on function.
  - **IP Whitelisting**: Configurable IP address restrictions to control access from specific networks for added security.

#### **6.12.4 API and Integration Settings**
- **API Access**:
  - **API Key Generation**: Enables users to generate and manage API keys for external integrations.
  - **Rate Limiting**: Allows administrators to set limits on the number of API calls per minute/hour to prevent overuse.
- **Data Export Formats**: Allows administrators to enable or disable certain export formats (e.g., CSV, JSON, XML) based on organizational policies.
- **Integration with Third-Party Services**: Settings to configure integration with external applications, including setting endpoints, authentication, and data synchronization intervals.

#### **6.12.5 Notification and Alert Settings**
- **Thresholds for Alerts**:
  - **Performance Metrics**: Configurable thresholds for performance indicators (e.g., CPU usage above 80%) that trigger alerts.
  - **Error Rates**: Set maximum allowable error rates before alerting administrators.
- **Notification Recipients**: Designate which users or groups should receive specific alerts (e.g., security alerts to IT team).
- **Alert Escalation Rules**: Rules to automatically escalate unresolved alerts after a set period (e.g., 1 hour) to higher-level users.

#### **6.12.6 Audit and Compliance Settings**
- **Audit Log Retention**: Configures how long audit logs are stored in the system for compliance and record-keeping.
- **Compliance Checks**: Enables or disables certain compliance checks based on organizational requirements.
- **Data Encryption Settings**: Allows administrators to configure encryption levels for stored and transmitted data.
- **Access Reporting Frequency**: Sets the frequency for generating reports on data access and modifications for compliance review.

### 6.13 Training (Optional)
Describe the training plan for the user.

 1. The user will be asked to sign up for the app and provide their email and make a password for their account setup.
 2. A welcome message will be given and users will be told in the message what the app is, why it was made, and what it is meant to do.
 3. The user will then be given a small tour of the user interface with each button and field of the interface being temporarily highlighted and a function description.
 4. A brief overview of their user profile setup will also be given after the user interface is explained.
 5. Contact and help information concerning the app will be displayed for the user at the end of the tour.

---

## 7. Appendixes (Optional)

* **Glossary:**
  - **2-Factor Authentication (2FA):** A security process in which a user provides two different authentication factors to verify their identity, often involving a combination of a password and a one-time code sent via email or SMS.
  - **Affordances:** Design elements that suggest intuitive interactions for users.
  - **Audit Log:** A detailed record of user actions and system events, used for monitoring, compliance, and debugging.
  - **Brute Force Attack:** A method used by attackers to try every possible combination of credentials until access is achieved, often countered by secure password and token implementations.
  - **Client-Server Architecture:** A network architecture where client devices request resources or services from a centralized server, which processes and delivers the required data or functionality back to the clients.
  - **Compliance Alerts:** Notifications triggered by the system when certain policies or regulatory requirements are violated.
  - **Data Flow:** The movement of data through the system as it interacts with users and processes.
  - **Entity Relationship Diagram (ERD):** A visual representation of the data structure, illustrating relationships between entities (tables) in a database.
  - **MOSCOW Code:** A prioritization technique in requirement gathering.
  - **Productivity Insights:** Feedback based on tracked data to suggest better time management.
  - **Secure Hashing:** A method of encoding data, such as passwords or IDs, to protect it from unauthorized access by converting it into an irreversible format.
  - **Selenium:** An open-source testing framework used for automating web applications for testing purposes. It is often used in conjunction with Python to conduct automated tests for web-based applications.
  - **Task Timer:** A tool allowing users to track time on tasks.
  - **Time Interval:** A set period during which a specific task or event is scheduled to occur.
  - **Wireframe**: A basic, visual guide to the structure of a user interface, used in design to illustrate layout and content arrangement before development begins.
 
* **Abbreviations:**
  - **2FA:** Two-Factor Authentication
  - **API:** Application Programming Interface
  - **BR:** Business Requirement
  - **CRUD:** Create, Read, Update, Delete
  - **CSV:** Comma-Separated Values
  - **ERD:** Entity Relationship Diagram
  - **FR:** Functional Requirement
  - **GPU:** Graphics Processing Unit
  - **ID:** Identifier
  - **IOS:** iPhone Operating System
  - **IP:** Internet Protocol
  - **IR**: Implementation Requirement
  - **JSON:** JavaScript Object Notation
  - **KPI:** Key Performance Indicator
  - **NFR:** Non-Functional Requirement
  - **QA:** Quality Assurance
  - **SMS:** Short Message Service
  - **UI:** User Interface
  - **UR:** User Requirement
  - **UX:** User Experience
