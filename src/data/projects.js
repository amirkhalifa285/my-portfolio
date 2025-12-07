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
import cIcon from '../assets/c.png';
import vlangLogo from '../assets/c.png';
import vlang1 from '../assets/vlang1.png';
import arpDns1 from '../assets/arp_dns_spoofing_1.png';
import arpDns2 from '../assets/arp_dns_spoofing_2.png';
import arpDns3 from '../assets/arp_dns_spoofing_3.png';
import pedometer1 from '../assets/pedometer.jpg';
import netflixClone1 from '../assets/netflix-clone_1.jpg';
import netflixClone2 from '../assets/netflix-clone_2.jpg';
import wildRydes1 from '../assets/wilde-rydes.png';
import awsIcon from '../assets/aws.png';
import portfolioArch from '../assets/portfolio-architecture.png';

import { FaPencilRuler, FaFileAlt } from 'react-icons/fa';
import React from 'react';

export const projects = [
  // Newest projects first
  {
    id: 1,
    name: "Portfolio Cloud Architecture",
    logo: awsIcon,
    type: "Serverless Cloud Infrastructure",
    category: "cloud",
    images: [portfolioArch],
    duration: "December 2024",
    technologies: [
      { name: "AWS", icon: awsIcon, level: 5, isImage: true },
      { name: "React", icon: reactIcon, level: 5, isImage: true },
      { name: "Python", icon: pythonIcon, level: 4, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true }
    ],
    features: [
      "Built a fully serverless portfolio website using AWS Amplify with integrated CI/CD from GitHub.",
      "Configured Route 53 for DNS management of custom domain (amirkhalifa.com).",
      "Implemented contact form backend with API Gateway REST endpoint, Lambda function, and Amazon SES.",
      "Applied defense-in-depth security: rate limiting (3 req/15 min), input validation, spam keyword filtering.",
      "Followed AWS IAM least-privilege principle - Lambda has minimal permissions (SES:SendEmail only).",
      "Configured CloudWatch monitoring for Lambda execution and error logging.",
      "Achieved zero-server architecture with automatic scaling and built-in high availability.",
      "Enforced HTTPS encryption with TLS 1.2+ via CloudFront CDN (managed by Amplify)."
    ],
    githubLink: "https://github.com/amirkhalifa285/my-portfolio",
    liveLink: "https://amirkhalifa.com"
  },
  {
    id: 2,
    name: "ARP & DNS Spoofing",
    logo: pythonIcon,
    type: "Cybersecurity Tool",
    category: "cybersecurity",
    images: [arpDns1, arpDns2, arpDns3],
    duration: "July 2025",
    technologies: [
      { name: "Python", icon: pythonIcon, level: 5, isImage: true }
    ],
    features: [
      "Developed a Man-in-the-Middle (MITM) attack toolkit demonstrating ARP and DNS spoofing techniques.",
      "Built an ARP spoofer using Scapy to intercept network traffic by poisoning ARP tables of target and gateway.",
      "Implemented DNS spoofing to redirect victims to attacker-controlled servers by modifying DNS responses.",
      "Utilized NetfilterQueue for real-time packet interception and modification.",
      "Includes automatic ARP table restoration on exit to maintain network integrity.",
      "Created comprehensive documentation with Wireshark packet captures (.pcapng) for attack analysis.",
      "Demonstrated attack in controlled lab environment with video walkthrough and presentation."
    ],
    githubLink: "https://github.com/amirkhalifa285/arp-dns-spoofing",
    liveLink: null
  },
  {
    id: 3,
    name: "VLANG Compiler",
    logo: vlangLogo,
    type: "Systems Programming",
    category: "systems",
    images: [vlang1],
    duration: "April 2025",
    technologies: [
      { name: "C", icon: cIcon, level: 5, isImage: true },
      { name: "Yacc/Bison", icon: cIcon, level: 4, isImage: true },
      { name: "Flex", icon: cIcon, level: 4, isImage: true }
    ],
    features: [
      "Designed and implemented a custom programming language compiler from scratch.",
      "Built a lexical analyzer using Flex to tokenize VLANG source code into meaningful tokens.",
      "Developed a parser using Bison with grammar rules for variable declarations, loops, conditionals, and print statements.",
      "Implemented native vector operations including element-wise arithmetic, scalar broadcasting, and dot product calculations.",
      "Created a symbol table for variable tracking and type checking (scalars vs vectors).",
      "Generates optimized C code as output, enabling compilation to native executables.",
      "Supports vector indexing with both integer literals and vector-based index arrays."
    ],
    githubLink: "https://github.com/amirkhalifa285/VLANG",
    liveLink: null
  },
  {
    id: 4,
    name: "FlyEase",
    logo: flyEaseLogo,
    type: "Airport Navigation Application",
    category: "fullstack",
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
  },
  {
    id: 5,
    name: "WildRydes",
    logo: awsIcon,
    type: "Serverless Web Application",
    category: "cloud",
    images: [wildRydes1],
    duration: "July 2024",
    technologies: [
      { name: "Vue.js", icon: jsIcon, level: 4, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
      { name: "Python", icon: pythonIcon, level: 4, isImage: true },
      { name: "AWS", icon: awsIcon, level: 4, isImage: true },
      { name: "CSS", icon: cssIcon, level: 4, isImage: true }
    ],
    features: [
      "Built a serverless web application using AWS Amplify CLI and Vue.js frontend.",
      "Implemented user authentication and authorization with Amazon Cognito.",
      "Developed serverless backend with AWS Lambda functions in Python.",
      "Created RESTful API endpoints using Amazon API Gateway.",
      "Utilized Amazon DynamoDB for NoSQL database storage.",
      "Deployed static assets to Amazon S3 for scalable hosting.",
      "Implemented full CI/CD pipeline with AWS Amplify for automatic deployments."
    ],
    githubLink: "https://github.com/amirkhalifa285/wildrydes-serverless-webapp",
    liveLink: null
  },
  {
    id: 6,
    name: "Netflix Clone",
    logo: reactIcon,
    type: "Full Stack Web Application",
    category: "fullstack",
    images: [netflixClone1, netflixClone2],
    duration: "Summer 2024",
    technologies: [
      { name: "React", icon: reactIcon, level: 5, isImage: true },
      { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
      { name: "CSS", icon: cssIcon, level: 5, isImage: true },
      { name: "Node.js", icon: nodeIcon, level: 4, isImage: true }
    ],
    features: [
      "Built a full-stack Netflix clone with React frontend and Node.js backend.",
      "Implemented user authentication and session management.",
      "Created a responsive UI replicating the Netflix interface with smooth animations.",
      "Integrated dynamic content loading and media streaming capabilities.",
      "Developed RESTful API backend for content management and user data."
    ],
    githubLink: "https://github.com/amirkhalifa285/netflix-clone-frontend",
    githubLinkBackend: "https://github.com/amirkhalifa285/netflix-clone-backend",
    liveLink: null
  },
  {
    id: 7,
    name: "Pedometer",
    logo: cIcon,
    type: "Embedded Systems",
    category: "systems",
    images: [pedometer1],
    duration: "June 2024",
    technologies: [
      { name: "C", icon: cIcon, level: 5, isImage: true }
    ],
    features: [
      "Built a fully functional pedometer using the MicroChip Curiosity Nano development board.",
      "Implemented step detection algorithm using accelerometer data with threshold-based filtering.",
      "Developed custom I2C driver for communication with the onboard accelerometer sensor.",
      "Created SPI driver to interface with the OLED display for real-time step visualization.",
      "Designed an interactive menu system with clock display, date/time settings, and pedometer graph.",
      "Implemented step history tracking with smoothed graph visualization on OLED display.",
      "Added animated foot icons and real-time step counter with activity detection."
    ],
    githubLink: "https://github.com/amirkhalifa285/PedoMeter-MicroChipCuriosity24",
    liveLink: null
  },
  {
    id: 8,
    name: "Lost and Found",
    logo: lostFoundLogo,
    type: "Web Application",
    category: "fullstack",
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
    id: 9,
    name: "DrinkSmart",
    logo: drinkSmartLogo,
    type: "Application Design and SRS",
    category: "design",
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
  }
];
