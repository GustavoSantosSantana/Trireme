# Software Requirements Specification V2

### Team Number: 12
### Project Manager: Gustavo Santos
### Team Members: Patrick Brown, John Diveris, Yifan Gao, Fredrick Hernandez, Michael Lowell, Gustavo Santos

---

### Revisions

| Version | Primary Author(s) | Description of Version | Date Completed |
|---------|-------------------|------------------------|----------------|
|    2.1    | Gustavo Santos       |           Created and tweaked the document          |       10/22/2024        |
| 2.2 | Patrick Brown | Added training steps | 10/26/2024 |
| 2.3 | Michael Lowell | Added Security requirements and External Interface requirements | 10/27/2024 |
| 2.3.1 | Michael Lowell | Added revision markup | 10/28/2024 |
| 2.3.2 | Patrick Brown | Added testing plans for 6.1 and 6.10 | 10/29/2024 |
| 2.4 |  John Diveris  | Added ERD Diagram Visual | 11/1/2024 |
| 2.4.1 |  John Diveris  | Added Database Requirements | 11/1/2024 |
| 2.5 | John Diveris | Added Class Diagram | 11/1/2024  |

| x | x | x | x |

---

### Review History

| Reviewer | Version Reviewed | Date |
|----------|-------------------|------|
| x | x | x | x |
| x | x | x | x |

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

### 6.1 Security Requirements

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

### 6.2 Hardware (Required)
Specify at least three physical components and infrastructure necessary to support the deployment and operation of the software application. Example of a Hardware Requirement:
Requirement ID: HW1
Description: Server Processor
Requirement: ……………….

* Specification 1
* Specification 2
* Specification 3

### 6.3 User Experience (Required)
Describe at least two user experiences to outline how users will interact with the system and the overall experience they should have while using it. Use a free User Interface Design Software to create wireframe for each user interface. Example of a User Experience Requirement:
Requirement ID: UX1
Description: User Login
Requirement: ……………….

* Specifications
* Specifications
* User Interface Wireframe

### 6.4 Architecture (Required)
Describe the overall structure and organization of the software system. Define how various components interact, the technologies to be used, and any constraints that must be considered during the design phases. Example of Architecture Requirement:
Requirement ID: ARCH1
Description: Client-Server Architecture
Requirement: ……………….

* Specifications
* ……

### 6.5 Database (Required)
The database for this task management app will store and manage data related to users, tasks, sessions, goals, and tags, supporting efficient organization and retrieval of each entity. Each table is designed with primary keys and relationships to ensure consistency, enforce data integrity, and accommodate user-specific and goal-tracking functionality.

**6.5.1 Requirements for Task Management Database**

---

**Requirement ID**: REQ-DB-001
**Requirement Title**: **User Table Implementation**  
**Description**: The system shall implement a `USERS` table to store user account information.  
**Attributes**:
- `user_id` (INT, PRIMARY KEY): Unique identifier for each user.
- `username` (VARCHAR(20), UNIQUE, NOT NULL): The username of the user.
- `password` (PASSWORD, NOT NULL): The hashed password of the user.
- `email` (EMAIL, UNIQUE, NOT NULL): The email address of the user.
- `created_on` (TIMESTAMP, NOT NULL): The timestamp when the user account was created.  
**Constraints**:
- The `username` and `email` must be unique across all records.  
**Acceptance Criteria**:
- Verify that the `USERS` table is created with the specified attributes and constraints.
- Ensure that unique constraints for `username` and `email` are enforced.

---

**Requirement ID**: REQ-DB-002
**Requirement Title**: **Task Table Implementation**  
**Description**: The system shall implement a `TASKS` parent table to store base information about tasks associated with users.  
**Attributes**:
- `task_id` (INT, PRIMARY KEY): Unique identifier for each task.
- `title` (VARCHAR(20), NOT NULL): The title of the task.
- `description` (VARCHAR(140), NOT NULL): The description of the task.
- `priority` (VARCHAR(10)): The priority level of the task (e.g., Low, Medium, High).
- `status` (VARCHAR(12)): The current status of the task (e.g., Pending, In Progress, Completed).
- `task_type` (VARCHAR(20)): The type of the task (e.g., Due Date, Time Bracket).
- `created_on` (TIMESTAMP, NOT NULL): The timestamp when the task was created.
- `user_id` (INT, FOREIGN KEY): The identifier of the user associated with the task.  
**Constraints**:
- `user_id` must reference a valid `user_id` in the `USERS` table.  
**Acceptance Criteria**:
- Verify that the `TASKS` table is created with the specified attributes and constraints.

---

**Requirement ID**: EQ-DB-003
**Requirement Title**: **Due Date Tasks Table Implementation**  
**Description**: The system shall implement a `DUE_DATE_TASKS` sub-table to store details about tasks with set due dates for completion.  
**Attributes**:
- `task_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the task with an associated due date.
- `due_date` (DATETIME, NOT NULL): The scheduled due date for this task.
**Constraints**:
- `task_id` must reference a valid `task_id` in the `TASKS` table.  
**Acceptance Criteria**:
- Verify that the `DUE_DATE_TASKS` table is created with the specified attributes and constraints.

---

**Requirement ID**: REQ-DB-004
**Requirement Title**: **Time Bracket Tasks Table Implementation**  
**Description**: The system shall implement a `TIME_BRACKET_TASKS` sub-table to store details about tasks with specific time-brackets.  
**Attributes**:
- `task_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the task with an associated time bracket.
- `start_time` (DATETIME, NOT NULL): The scheduled start time for the time-bracketed task.
- `end_time` (DATETIME, NOT NULL): The scheduled end time for the time-bracket task.
**Constraints**:
- `task_id` must reference a valid `task_id` in the `TASKS` table.  
**Acceptance Criteria**:
- Verify that the `TIME_BRACKET_TASKS` table is created with the specified attributes and constraints.

---

**Requirement ID**: REQ-DB-005
**Requirement Title**: **Tags Table Implementation**  
**Description**: The system shall implement a `TAGS` table to store information about tags used in the application.  
**Attributes**:
- `tag_id` (INT, PRIMARY KEY): Unique identifier for each tag.
- `name` (VARCHAR): The name of the tag.
- `color_hex` (VARCHAR): The color representation of the tag in hexadecimal format.  
**Acceptance Criteria**:
- Verify that the `TAGS` table is created with the specified attributes.

---

**Requirement ID**: REQ-DB-006
**Requirement Title**: **Task Tags Table Implementation**  
**Description**: The system shall implement a `TASK_TAGS` junction table to associate a many-to-many relationshiy of tags and tasks.  
**Attributes**:
- `tag_id` (INT, PRIMARY KEY): Unique identifier for each tag-task association.
- `task_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the task associated with a tag.  
**Constraints**:
- `task_id` must reference a valid `task_id` in the `TASKS` table.  
**Acceptance Criteria**:
- Verify that the `TASK_TAGS` table is created with the specified attributes and constraints.

---
**Requirement ID**: REQ-DB-007
**Requirement Title**: **Goals Table Implementation**  
**Description**: The system shall implement a `GOALS` parent table to store base information about user-defined goals related to tasks.  
**Attributes**:
- `goal_id` (INT, PRIMARY KEY): Unique identifier for each goal.
- `tag_id` (INT, FOREIGN KEY): The identifier for the associated tag.
- `description` (VARCHAR(140)): A description of the goal.
- `goal_type` (VARCHAR(20)): The type of the goal (e.g., Due-Date, Time-Bracket).
- `is_completed` (BOOLEAN): Indicates whether the goal has been completed.
- `time_frame` (VARCHAR(10)): The time frame for the goal (e.g., Daily, Weekly).
- `user_id` (INT, FOREIGN KEY): The identifier of the user associated with the goal.
- `created_on` (TIMESTAMP, NOT NULL): The timestamp when the goal was created.  
**Constraints**:
- `tag_id` must reference a valid `tag_id` in the `TAGS` table.
- `user_id` must reference a valid `user_id` in the `USERS` table.  
**Acceptance Criteria**:
- Verify that the `GOALS` table is created with the specified attributes and constraints.

---

**Requirement ID**: REQ-DB-008  
**Requirement Title**: **Task Completion Goals Table Implementation**  
**Description**: The system shall implement a `TASK_COMPLETION_GOALS` sub-table to track details of task completion goals for users.  
**Attributes**:
- `goal_id` (INT, PRIMARY KEY): Unique identifier for each goal.
- `target_count` (INT): The target number of tasks to complete.
- `completed_task_count` (INT): The current count of completed tasks.  
**Acceptance Criteria**:
- Verify that the `TASK_COMPLETION_GOALS` table is created with the specified attributes.

---

**Requirement ID**: **REQ-DB-009**  
**Requirement Title**: **Session Goals Table Implementation**  
**Description**: The system shall implement a `SESSION_GOALS` sub-table to track details of goals related to user sessions.  
**Attributes**:
- `goal_id` (INT, PRIMARY KEY): Unique identifier for each session goal.
- `target_duration` (INT): The target duration for the session goal in minutes.
- `completed_duration` (INT): The current duration that has been completed.  
**Acceptance Criteria**:
- Verify that the `SESSION_GOALS` table is created with the specified attributes.

---

**Requirement ID**: **REQ-DB-010**  
**Requirement Title**: **Sessions Table Implementation**  
**Description**: The system shall implement a `SESSIONS` table to track user work sessions.  
**Attributes**:
- `session_id` (INT, PRIMARY KEY): Unique identifier for each session.
- `description` (VARCHAR(20)): A brief description of the session.
- `status` (VARCHAR(12)): The current status of the session (e.g., Active, Completed).
- `start_time` (DATE): The start date of the session.
- `end_time` (DATE): The end date of the session.
- `duration` (INT): The total duration of the session in minutes.
- `user_id` (INT, FOREIGN KEY): The identifier of the user associated with the session.
- `created_on` (TIMESTAMP, NOT NULL): The timestamp when the session was created.  
**Constraints**:
- `user_id` must reference a valid `user_id` in the `USERS` table.  
**Acceptance Criteria**:
- Verify that the `SESSIONS` table is created with the specified attributes and constraints.

---

**Requirement ID**: **REQ-DB-011**  
**Requirement Title**: **Session Tags Table Implementation**  
**Description**: The system shall implement a `SESSION_TAGS` table to associate tags with user sessions.  
**Attributes**:
- `session_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the session.
- `tag_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the associated tag.  
**Constraints**:
- `session_id` must reference a valid `session_id` in the `SESSIONS` table.
- `tag_id` must reference a valid `tag_id` in the `TAGS` table.  
**Acceptance Criteria**:
- Verify that the `SESSION_TAGS` table is created with the specified attributes and constraints.

---

**Requirement ID**: **REQ-DB-012**  
**Requirement Title**: **Session Log Table Implementation**  
**Description**: The system shall implement a `SESSION_LOG` table to log the start and end times of user sessions.  
**Attributes**:
- `session_id` (INT, PRIMARY KEY, FOREIGN KEY): Unique identifier for the session.
- `start_time` (TIMESTAMP, PRIMARY KEY): The start time of the session.
- `end_time` (TIMESTAMP): The end time of the session.  
**Constraints**:
- `session_id` must reference a valid `session_id` in the `SESSIONS` table.  
**Acceptance Criteria**:
- Verify that the `SESSION_LOG` table is created with the specified attributes and constraints.

---

**6.5.2 Entity Relationship Diagram:**

![Entity Relationship Diagram](https://github.com/GustavoSantosSantana/Trireme/blob/diveris-working-branch/Images/ERD_DIagram_v1.png)


### 6.6 Top-level Classes (Required)
Design the major top-level classes and their components. Use a free Class Diagram Tool to draw the Class Diagram showing classes, their attributes, operations, and relationships between them. Example of Top-Level Classes Requirement:
Here’s a requirement for the `User` class based on the given attributes and methods:

**6.6.1 Requirements For Top-Level Classes:**
---

**Requirement ID:** CLASS_USER  
**Description:** User Class  
**Requirement:**  
The `User` class shall manage user account information and authentication within the system, with attributes `userID`, `username`, `password`, `email`, and `created_on`. The class shall provide the following functionalities:

1. **User Registration and Authentication:**
   - The `User` class shall include a `registerUser()` method that creates a new user account, returning a confirmation message upon successful registration.
   - The `login()` method shall authenticate the user based on `username` and `password`.
   - The `logout()` method shall log the user out of the system, returning a status message confirming the action.

2. **Account Management:**
   - The `updateInfo()` method shall allow users to update account details, such as `email` or other personal information, and return a status message confirming the update.
   - The `updatePass()` method shall allow users to securely update their password.
   - The `deleteAcct()` method shall remove the user’s account from the system, including all associated data, if applicable.

3. **Access Control:**
   - `username` and `password` shall be private to ensure secure handling of user credentials.
   - `userID`, `email`, and `created_on` shall be accessible within the system for account management and user identification purposes.

---

**Requirement ID:** CLASS_INTERFACE  
**Description:** Task Manager Interface  
**Requirement:**  
The `TaskManager` interface shall serve as a central hub for managing tasks, tags, sessions, and goals within the system, supporting core functionalities and returning results in JSON string format where applicable. The class shall include the following methods:

1. **Task Management:**
   - The `createTask()` method shall allow users to create a new task, returning a JSON string with the details of the newly created task.
   - The `getTask()` method shall retrieve a specific task by its `taskID`, returning the task details as a JSON string.
   - The `getAllTasks()` method shall retrieve all tasks associated with the user, returning task data as a JSON string.
   - The `deleteTask()` method shall delete a specific task by `taskID`, ensuring all related data is removed from the system.

2. **Tag Management:**
   - The `createTag()` method shall allow users to create a new tag, returning a JSON string with the details of the newly created tag.
   - The `getAllTags()` method shall retrieve all tags associated with the user, returning tag data as a JSON string.
   - The `deleteTag()` method shall remove a specific tag by `tagID`, ensuring it is disassociated from all related tasks or sessions.

3. **Session Management:**
   - The `createSession()` method shall allow users to create a new session, returning a JSON string with the details of the newly created session.
   - The `getSession()` method shall retrieve a specific session by its `sessionID`, returning the session details as a JSON string.
   - The `deleteSession()` method shall delete a specific session by `sessionID`, ensuring all related data is removed from the system.

4. **Goal Management:**
   - The `createGoal()` method shall allow users to set a new goal, returning a JSON string with the details of the newly created goal.
   - The `deleteGoal()` method shall remove a specific goal by `goalID`, ensuring all associated data and references are cleared.

---

**Requirement ID:** CLASS_TASK  
**Description:** Abstract Task Class  
**Requirement:**  
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
**Description:** Due-Date Task Class  
**Requirement:**  

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
**Description:** Time-Bracket Task Class  
**Requirement:**  

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
**Description:** Tag Class  
**Requirement:**  

The `Tag` class shall manage the tagging system within the application, allowing for the creation and modification of tags that can be associated with tasks and sessions. This class shall provide the following features:

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





**6.6.2 Class Diagram:**
![Class Diagram](https://github.com/GustavoSantosSantana/Trireme/blob/diveris-working-branch/Images/UML_class_diagram_v1.png)

### 6.7 Data Flow and States (Required)
Design and show how data will move through the system and how various entities (or objects) will transition between different states. Use a free Data Flow Diagram Tool to create the Data Flow Diagram. Example of Data Flow and States Requirement:
Requirement ID: DF1
Description: Users to submit feedback through an online form
Requirement: ……………….

* Specifications
* ……
* Data Flow Diagram

### 6.8 Reports (Required)
Outlines the reporting capabilities and select at least one type of the reports the project will create. Example of Report Requirement:
Requirement ID: REPORT1
Description: Sales Performance Report
Requirement: ………………

* Specification
* ……

### 6.9 Internal Interfaces (Optional)
Specify how pieces of the application will interact.

### 6.10 External Interfaces (Optional)
Specify how the application will interact with other applications and resources.

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

### 6.11 Other Outputs (Optional)
Specify the possible outputs generated by the project.

### 6.1. Configuration Data (Optional)
Specify what data and parameters will be configurable in the configuration page or file.

### 6.13 Training (Optional)
Describe the training plan for the user.

 1. The user will be asked to sign up for the app and provide their email and make a password for their account setup.
 2. A welcome message will be given and users will be told in the message what the app is, why it was made, and what it is meant to do.
 3. The user will then be given a small tour of the user interface with each button and field of the interface being temporarily highlighted and a function description.
 4. A brief overview of their user profile setup will also be given after the user interface is explained.
 5. Contact and help information concerning the app will be displayed for the user at the end of the tour.

---

## 7. Appendixes (Optional)
