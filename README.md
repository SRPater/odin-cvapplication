# CV Application

A React application built as part of [The Odin Project](https://www.theodinproject.com) curriculum. This project demonstrates the use of React state and props to create a dynamic, editable Curriculum Vitae.

## Features
- **General Information:** Name, email, and phone number.
- **Education:** Multiple entries for school name, title of study, and date of study.
- **Experience:** Multiple entries for company name, position title, main responsibilities, and work dates.
- **Interactive Editing:** Toggle between "Edit" and "Submit" modes for each section.

## Project Structure
The project uses a component-based architecture:
- `App.jsx`: Manages the global state and data flow.
- `Section.jsx`: A wrapper component for consistent section-wide editing logic.
- `GeneralInfo.jsx`, `Education.jsx`, `Experience.jsx`: Individual components for CV data.

## Technologies
- React
- Vite
- CSS3
