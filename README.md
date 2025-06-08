# DevJobs Web App – Next.js Version

> A modern job listing application built using the **Next.js App Router**. Includes features such as dynamic filtering, job detail pages, and theme switching.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)

## Project Overview

**DevJobs Web App** was originally developed using HTML/CSS/JavaScript. In this new version, the project has been rebuilt from scratch using **Next.js (App Router)**.

Enhanced with modern frontend architecture, dynamic page routing, and theme management, the app offers a smooth user experience on all devices thanks to its mobile-first design.

![image](https://github.com/user-attachments/assets/b66ffc6c-59eb-4f09-8ee7-3ab72559b4ef)

## Key Features

- **Filtering System**  
  - Search by title, company, or area of expertise  
  - Filter by location  
  - Option to show only full-time listings
  
![image](https://github.com/user-attachments/assets/397b69cc-b6ed-44e1-bdef-db3aa6ad8f34)

- **Job Details**  
  - Dedicated detail page for each job (dynamic routing)  
  - Includes company logo, description, requirements, and application link

![image](https://github.com/user-attachments/assets/bfb9700a-d553-42a2-80c1-e548b9969edd)

- **Theme Support (Light / Dark Mode)**  
  - Toggle between light and dark modes based on user preference  
  - Preference is saved using `localStorage`

![image](https://github.com/user-attachments/assets/bf5e4f71-4f4f-45f6-861b-4fbe5f5de1cf)

- **Responsive Design**  
  - Mobile-first layout with responsive grid system  
  - Separate designs for tablet and desktop

![image](https://github.com/user-attachments/assets/4ee491d1-b9fe-4c0e-8d04-781d1552bcdc)

## Folder Structure

```bash
app/
 ┣ components/
 ┃ ┣ Header.js
 ┃ ┣ JobCard.js
 ┃ ┣ JobDetails.js
 ┃ ┣ JobList.js
 ┃ ┗ SearchForm.js
 ┣ hooks/
 ┃ ┗ useTheme.js
 ┣ jobs/
 ┃ ┗ [id]/
 ┃   ┗ page.js               # Dynamic detail page
 ┣ styles/
 ┃ ┗ globals.css            # Global CSS styles
 ┣ layout.js                # Shared layout
 ┗ page.js                  # Home page

public/
 ┗ assets/
   ┣ img/                   # Icons for jobs
   ┗ logos/                 # Company logos

README.md
data.json                  # All job listing data
```

## Live Demo

[https://devjobs-web-app-next.vercel.app](https://devjobs-web-app-next.vercel.app)

## Installation & Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/gayedinc/devjobs-web-app.git
```

### 2. Navigate to the Project Directory

```bash
cd devjobs-web-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and go to:  
[http://localhost:3000](http://localhost:3000)
