import {
  react,
  fullstack,
  threed,
  frontend,
  javascript,
  gsap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  Django,
  git,
  Python,
  appwrite,
  mysql,
  inmakes,
  unified,
  nike,
  moodflix,
  lyriks,
  expense,
  qr,
  recipe,
  ecom,
  threejs,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
  {
    title: "3D Web Developer",
    icon: threed,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Django",
    icon: Django,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Appwrite",
    icon: appwrite,
  },
  {
    name: "React Three Fiber",
    icon: threejs,
  },
  {
    name: "Gsap",
    icon: gsap,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "Inmakes Infotech",
    icon: inmakes,
    iconBg: "#383E56",
    date: "May 10, 2024 - Aug 10, 2024",
    points: [
      "Built RESTful APIs using Django and Django REST Framework for user, product, and order management.",
      "Integrated MySQL for structured data storage and implemented secure authentication mechanisms.",
      "Developed admin-side functionalities for managing transactions, inventory, and users.",
      "Integrated both Razorpay (for India) and PayPal (for international) payment gateways for seamless checkout.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Inmakes Infotech",
    icon: inmakes,
    iconBg: "#383E56",
    date: "May 10, 2024 - Aug 10, 2024",
    points: [
      "Developed a full-featured e-commerce platform using Django (backend) and HTML, CSS, JavaScript (frontend).",
      "Implemented product listings, cart functionality, order placement, and payment flows.",
      "Collaborated with mentors to follow project structure, optimize performance, and maintain security.",
      "Handled database design, form validation, and deployed application on a local server.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Unified Mentor",
    icon: unified,
    iconBg: "#E6DEDD",
    date: "May 10, 2025 - Aug 10, 2025",
    points: [
      "Developed responsive and interactive web interfaces using React.js and Tailwind CSS.",
      "Translated Figma/UI designs into pixel-perfect web pages with mobile-first responsiveness.",
      "Improved performance and accessibility across devices using best frontend practices.",
      "Implemented user feedback improvements and followed clean component-based architecture.",
    ],
  },
  {
    title: "React Developer Intern",
    company_name: "Unified Mentor",
    icon: unified,
    iconBg: "#E6DEDD",
    date: "May 10, 2025 - Aug 10, 2025",
    points: [
      "Built and managed stateful React components using useState, useEffect, and custom hooks.",
      "Integrated APIs and handled asynchronous calls, loading indicators, and error handling.",
      "Followed modular structure and reused logic through composition patterns.",
      "Collaborated with the team via Git, GitHub, and task management tools to meet delivery timelines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arfin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arfin does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Arfin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
  name: "Nike Website",
  description:
   "Interactive landing page designed to showcase Nike sneakers with modern visuals, clean layout, and responsive mobile-friendly styling.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name:"vite",
      color:"green-text-gradient"
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: nike ,
  source_code_link: "https://github.com/Arfinusmaan/Nike-Landing-Page",
  live_link: "https://nike-arfin.vercel.app",
 },

 {
  name: "Moodflix",
  description:
    "Movie discovery app where users can search titles, browse trending content, and watch trailers with seamless real-time search results.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "appwrite",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: moodflix ,
  source_code_link: "https://github.com/Arfinusmaan/MoodFlix-A-Movie-App",
  live_link: "https://moodflix-arfin.vercel.app",
},

{
  name: "Lyriks Music App",
  description:
    "Modern music app that allows users to stream songs, follow artists, and explore top charts using dynamic routing and real-time audio playback.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "deezer-api",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: lyriks ,
  source_code_link: "https://github.com/Arfinusmaan/Lyriks-Music-App",
  live_link: "https://lyriks-arfin.vercel.app",
},

{
  name: "Expense Tracker",
  description:
    "Finance tracking app where users can log income and expenses, visualize balances instantly, and manage personal budgets in real time.",
  tags: [
    {
      name: "html",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "green-text-gradient",
    },
    {
      name: "javascript",
      color: "pink-text-gradient",
    },
  ],
  image: expense ,
  source_code_link: "https://github.com/Arfinusmaan/Expense-Tracker",
  live_link: "https://expense-arfin.vercel.app",

},


{
  name: "Recipe Finder",
  description:
    "Recipe browsing app that lets users explore meals by name or category, view ingredients, and fetch cooking details using TheMealDB API.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "themealdb",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: recipe,
  source_code_link: "https://github.com/Arfinusmaan/Recipe-Finder",
  live_link: "https://recipe-arfin.vercel.app",
},

// {
//   name: "QR Code Generator",
//   description:
//     "Utility tool that allows users to generate customized QR codes from input links with adjustable size and instant download functionality.",
//   tags: [
//     {
//       name: "react",
//       color: "blue-text-gradient",
//     },
//     {
//       name: "qr-code-styling",
//       color: "green-text-gradient",
//     },
//     {
//       name: "tailwind",
//       color: "pink-text-gradient",
//     },
//   ],
//   image:  qr,
//   source_code_link: "https://github.com/Arfinusmaan/Qr-Code-Generator",
//   live_link: "https://qrcode-arfin.vercel.app",
// },

// {
//   name: "EpicDrop",
//   description:
//     "E-commerce platform with user auth, product management, and payment gateways using Django backend and a traditional frontend stack.",
//   tags: [
//     {
//       name: "django",
//       color: "blue-text-gradient",
//     },
//     {
//       name: "mysql",
//       color: "green-text-gradient",
//     },
//     {
//       name: "javascript",
//       color: "pink-text-gradient",
//     },
//   ],
//   image: ecom,
//   source_code_link: "https://github.com/Arfinusmaan/Full-Stack-Ecom",
// },



];

export { services, technologies, experiences, testimonials, projects };