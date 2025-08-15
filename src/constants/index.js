import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    h4ilogo,
    wells_fargologo,
    Winrock_logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Computer Science Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Wells Fargo",
      icon: wells_fargologo,
      iconBg: "#FFFFFF",
      date: "June 2025 - August 2025",
      points: [
        "Containerized and deployed Spring Boot microservices using Docker, Kubernetes, and OpenShift, supporting over 500K daily transactions on the ODIN data platform and enabling scalable, cloud-native architecture.",
        "Integrated and validated Splunk Enterprise Logging and Observability Cloud across all services, enabling 100+ custom log pipelines and reducing mean time to resolution (MTTR) by over 2 hours.",
        "Built Kafka-integrated Spring Batch workflows processing 1M+ records/day and optimized CI/CD pipelines with GitHub Actions, GitLab, and Harness to support weekly deployments during the PCF to OCP migration."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Winrock International",
      icon: Winrock_logo,
      iconBg: "#FFFFFF",
      date: "December 2024 - May 2025",
      points: [
        "Replaced manual Excel-based workflow with a secure React + Firebase web app, eliminating over 100 recurring data entry errors.",
        "Designed Firebase backend, enabling secure auth and dynamic form handling across 3 project sectors; supported over 200 client submissions.",
        "Automated email alerts via Firebase and third-party API integration, saving over 10 hours of manual follow-up per month."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Hack4Impact",
      icon: h4ilogo,
      iconBg: "#FFFFFF",
      date: "August 2024 - December 2024",
      points: [
        "Built a real-time application portal with React, TypeScript, and Firebase, reducing manual review time by 3x through automated workflows.",
        "Deployed a live status tracker using Firebase, reducing applicant status inquiries by over 50 messages per cycle.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Xficient",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "June 2024 - August 2024",
      points: [
        "Applied PyPDF, GROBID, and the open-source OCR model marker to efficiently extract text from large healthcare PDF documents into markdown and JSON files, enhancing data accessibility and processing capabilities by 60%.",
        "Employed spaCy for token normalization, ensuring accurate and structured data handling for analysis and integration.",
        "Integrated generative AI tools, such as OpenAi’s GPT-4o, to filter and refine extracted tokens, improving data quality and relevance by 20% for downstream applications.",
      ],
    },
    {
      title: "Tech Fellow",
      company_name: "CodePath",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Completed an Amazon-sponsored technical interview prep course, led by software engineers from Google and Microsoft, gaining advanced insights into Object-Oriented Programming and mastering critical principles for technical interviews.",
        "Enhanced problem-solving skills and algorithm design proficiency through rigorous practice and expert guidance, developing effective interview strategies and deepening understanding of data structures for competitive technical assessments.",
      ],
    },
    {
      title: "Sponsorship & Finance Organizer",
      company_name: "Bitcamp, University of Maryland",
      icon: shopify,
      iconBg: "#383E56",
      date: "November 2023 - April 2024",
      points: [
        "Secured over $170,000 in sponsorships by contacting and negotiating with companies, ensuring robust funding and strong partnerships for the hackathon.",
        "Collaborated with the finance team to effectively allocate funds, optimizing resource use for the success of the event.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Flappy Bird AI",
      description:
        "Developed an AI using the NEAT framework to autonomously learn and play Flappy Bird, achieving high scores through iterative self-improvement. Recreated the game environment using Pygame, providing a dynamic testing ground for the AI’s training process. Demonstrated proficiency in Python, game design, and machine learning by integrating game development with advanced AI methodologies.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pygame",
          color: "green-text-gradient",
        },
        {
          name: "NEAT",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rishiagarwal13/Flappy-Bird",
    },
    {
      name: "S&P 500 Predictor",
      description:
        "Developed a machine learning model to predict the S&P 500’s price using historical data, focusing on enhancing accuracy. Employed YFinance to download comprehensive S&P 500 data through the Yahoo Finance API. Utilized Pandas for data cleaning and pre-processing to ensure high-quality input for the model. Trained the model with the Random Forest Algorithm and conducted backtesting on over 20 years of data to validate and refine predictions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "YFinance",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/rishiagarwal13/S-P500-Predictor",
    },
    {
      name: "Finance Tracker App",
      description:
        "Developed a finance tracker app with a responsive and user-friendly frontend using React and CSS, enhancing the user experience with a clean and intuitive design. Implemented a robust backend using MongoDB, Express.js, and Node.js, creating a REST API that allows users to manage their finances through GET, PUT, POST, and DELETE requests. Integrated Clerk for a comprehensive user management system, enabling users to sign in using Gmail, Facebook, GitHub, or their personal user ID and password for secure and flexible authentication.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "MERN Stack",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/rishiagarwal13/Finance-Tracker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };