export const profile = {
  name: "Nduka Kevin Maruabuchukwu",
  handle: "kevinnduka",
  title: "Django Backend Developer | Full-Stack Web Developer & Instructor",
  location: "Lagos State, Nigeria",
  phone: "+234 701 579 6524",
  email: "kevinnduka1@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/kevin-nduka-0901161b2/",
    github: "https://github.com/kevneto1000",
    portfolio: "#",
  },
  summary:
    "Backend-focused full-stack developer building API-driven web applications since 2023. I specialise in Django and Django REST Framework: JWT authentication, permissions, relational data modelling, and query performance. I built and deployed Pulse, a social media RESTAPI with a personalised feed, reposts, nested comments, and an automated test suite. I also teach full-stack development at the Lagos School of Programming, so I explain technical decisions clearly and write code other developers can maintain.",
};

export const experience = [
  {
    role: 'Full Stack Web Development Instructor',
    org: 'Lagos School of Programming (LASOP)',
    period: '2024 — Present',
    points: [
      'Teach a full stack web development curriculum covering HTML5, CSS3, JavaScript, React.js, Python/Django, REST API design, and MySQL to students transitioning into tech careers.',
      'Design hands-on coding exercises and review student projects, providing feedback on code quality, API design, and debugging practices.',
      'Mentor learners on frontend/backend integration, translating real-world project experience into structured lessons.',
    ],
  },
  {
    role: 'Freelance Full Stack Developer',
    org: 'Independent / Self-Directed Projects',
    period: '2023 — Present',
    points: [
      'Design and build full stack and frontend web applications for personal and referral-based client projects, sourced primarily through local networks and word-of-mouth referrals.',
      'Built Food Dash, a full stack food ordering application using React, TypeScript, and Tailwind CSS on the frontend with a Node.js/Express backend, deployed via Vercel and Railway.',
      'Developed a RESTful social media backend API using Django, Django REST Framework, and JWT authentication, with MySQL as the data layer, supporting user auth, posts, likes, and comments.',
      'Built and deployed Sweet Tooth, a responsive dessert shop landing page using React and Tailwind CSS, focused on UI/UX and product showcase design.',
    ],
  },
]

export const projects = [
  {
    slug: "food-dash",
    filename: "food-dash.md",
    name: "Food Dash",
    tagline: "Full stack food ordering app",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    description:
      "Full stack food ordering application with a Vercel-hosted frontend and a Railway-hosted backend API.",
    link: "https://food-dash-amber-zeta.vercel.app",
    linkLabel: "food-dash-amber-zeta.vercel.app",
  },
  {
    slug: "pulse-backend",
    filename: "pulse-backend.md",
    name: "Pulse — Social Media Backend API",
    tagline: "RESTful backend, Django + DRF",
    stack: ["Django", "Django REST Framework", "JWT Auth", "MySQL"],
    description:
      "RESTful backend supporting user authentication, posts, likes, and comments.",
    link: " https://pulse-backend-hu93.onrender.com/api/posts/",
    linkLabel: "pulse-backend-hu93.onrender.com/api/posts/",
  },
];

export const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  Backend: ['Python', 'Django', 'Django REST Framework', 'RESTAPI design', 'JWT authentication', 'permissions and validation', 'Node.js', 'Express'],
  Database: ['MySQL — schema design', 'PostgreSQL', 'SQLite', 'Django ORM (query optimisation, constraints, migrations)'],
  'Tools & Deployment': ['Git', 'GitHub', 'Vercel', 'Railway', 'Render', 'Django/DRF test suite', 'Postman', 'Gunicorn', 'WhiteNoise'],
}

export const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  'Adaptability',
  'Attention to Detail',
  'Teaching & Mentorship',
]

export const education = [
  {
    program: 'Full Stack Web Development',
    school: 'Lagos School of Programming (LASOP)',
    date: 'October 2024',
  },
  {
    program: 'Diploma in Business Administration',
    school: 'International Islamic College Malaysia',
    date: 'November 2013',
  },
]
