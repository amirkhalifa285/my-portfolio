import lostFoundLogo from '../assets/lostandfound.png';
import drinkSmartLogo from '../assets/drinkSmartlogo.png';
import flyEaseLogo from '../assets/FlyEaseLogo.png';

import lostFound1 from '../assets/Lost&Found1.png';
import drinkSmart1 from '../assets/DrinkSmart1.png';
import drinkSmart2 from '../assets/DrinkSmart2.png';
import drinkSmart3 from '../assets/DrinkSmart3.png';
import drinkSmart4 from '../assets/DrinkSmart4.png';
import drinkSmart5 from '../assets/DrinkSmart5.png';
import drinkSmartArchitecture from '../assets/DrinkSmart-Architecture.png';
import flyEase1 from '../assets/FlyEase1.png';
import flyEase2 from '../assets/FlyEase2.png';
import flyEase3 from '../assets/FlyEase3.png';
import flyEase4 from '../assets/FlyEase4.png';
import flyEase5 from '../assets/FlyEase5.png';

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.jpg';
import jsIcon from '../assets/javascript.png';
import nodeIcon from '../assets/node.png';
import sqlIcon from '../assets/sql.png';
import pythonIcon from '../assets/python.png';
import fastApiIcon from '../assets/FastAPI.png';
import reactIcon from '../assets/react.png';
import moqupsIcon from '../assets/moqups.jpg';

import { FaPencilRuler, FaFileAlt } from 'react-icons/fa';
import React from 'react';

export const projects = [
  {
    id: 1,
    name: "Lost and Found",
    logo: lostFoundLogo,
    type: "Web Application",
    images: [lostFound1],
    duration: "May 2024 - Aug 2024",
    technologies: [
      { name: "HTML", icon: htmlIcon, level: 5, isImage: true },
      { name: "CSS", icon: cssIcon, level: 5, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 4, isImage: true },
      { name: "Node.js", icon: nodeIcon, level: 4, isImage: true },
      { name: "SQL", icon: sqlIcon, level: 3, isImage: true }
    ],
    features: [
      "Implemented responsive design and user-friendly interface.",
      "Ensured secure handling of user data and efficient database management.",
      "Successfully deployed on Render for live use.",
      "Received positive feedback for functionality and ease of use."
    ],
    githubLink: "https://github.com/amirkhalifa285/Lost-And-Found-Project",
    liveLink: null
  },
  {
    id: 2,
    name: "DrinkSmart",
    logo: drinkSmartLogo,
    type: "Application Design and SRS",
    images: [drinkSmart1, drinkSmart2, drinkSmart3, drinkSmart4, drinkSmart5, drinkSmartArchitecture],
    duration: "2022",
    technologies: [
      { name: "Moqups", icon: moqupsIcon, level: 5, isImage: true },
      { name: "UI/UX Design", icon: <FaPencilRuler />, level: 5 },
      { name: "Documentation", icon: <FaFileAlt />, level: 5 }
    ],
    features: [
      "Completed the project 2 weeks ahead of schedule.",
      "Presented the project to the head of the Software Engineering department, receiving commendation for innovation and usability.",
      "Developed a smart bottle application prototype to track water intake and encourage hydration.",
      "Collaborated with a team to create a comprehensive Software Requirements Specification (SRS) document."
    ],
    githubLink: "https://github.com/amirkhalifa285/drinkSmart",
    liveLink: null
  },
  {
    id: 3,
    name: "FlyEase",
    logo: flyEaseLogo,
    type: "Airport Navigation Application",
    images: [flyEase1, flyEase2, flyEase3, flyEase4, flyEase5],
    duration: "Present",
    technologies: [
      { name: "Python", icon: pythonIcon, level: 5, isImage: true },
      { name: "FastAPI", icon: fastApiIcon, level: 4, isImage: true },
      { name: "React", icon: reactIcon, level: 4, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
      { name: "CSS", icon: cssIcon, level: 5, isImage: true },
      { name: "SQL", icon: sqlIcon, level: 4, isImage: true }
    ],
    features: [
      "Designed and implemented a mock airport navigation system with features for location-based navigation and congestion visualization.",
      "Developed a backend API using FastAPI with endpoints for managing locations, paths, and dynamic navigation.",
      "Utilized Dijkstra's algorithm to compute the shortest path between airport locations based on real-time user input.",
      "Created a fully interactive front-end map using React and Fabric.js, supporting dynamic visualization of paths, congestion levels, and highlighted navigation routes.",
      "Designed a responsive UI with CSS for seamless user interaction across various devices.",
      "Implemented an admin panel for managing map entities such as locations and paths.",
      "Integrated asynchronous database operations with SQLAlchemy to handle real-time data updates efficiently.",
      "Deployed a congestion monitoring system to display real-time congestion levels using visual indicators on the map.",
      "Established a modular structure for scalability and maintainability, incorporating reusable components and controllers."
    ],
    githubLink: "https://github.com/amirkhalifa285/FlyEase-Backend",
    liveLink: null
  }
];
