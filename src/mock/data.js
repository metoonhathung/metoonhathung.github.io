import { nanoid } from 'nanoid';
import { withPrefix } from 'gatsby';

// HEAD DATA
export const headData = {
  title: 'Hung Tran | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio of metoonhathung', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is',
  name: 'Hung Tran',
  subtitle: 'I am ',
  typing: ['self-motivated.', 'detail-oriented.', 'results-driven.'],
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.jpg',
  paragraphOne:
    'I am a recent graduate with a major in Computer Science from Rutgers University-New Brunswick. My passion lies in web technologies, machine learning, and everything in between. This enthusiasm has driven me to acquire expertise in frontend technologies like React, Redux/Zusand, Material-UI, and TypeScript, as well as backend technologies such as Spring Boot, Flask/FastAPI, NestJS/Express, and databases like PostgreSQL and MongoDB. Additionally, I have gained proficiency in machine learning through tools like PyTorch and Pandas.',
  paragraphTwo:
    'During the past three summers, I had the opportunity to apply my skills in both frontend and backend development while working as a software engineering intern at VinBrain, VinBigData, and EOG Resources.',
  paragraphThree:
    "I am eager to embark on a career as a software engineer, with a particular interest in roles that encompass full-stack development, backend engineering, frontend development, or machine learning. You can explore my portfolio at https://metoonhathung.github.io/ to see some of my previous projects. I am actively seeking new graduate positions in these fields. If you are interested in collaborating with me, please don't hesitate to reach out.",
  resume: withPrefix('resume.pdf'), // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'assistant.png',
    title: 'Virtual Assistant',
    info: `Description: A chatbot web application capable of answering question, generating music, generating image, and analyzing document. Provide support for Automatic Speech Recognition and Text-To-Speech.`,
    info2: 'Technologies: LangChain, Streamlit',
    url: 'https://metoonhathung-virtual-assistant.streamlit.app/',
    repo: 'https://github.com/metoonhathung/virtual-assistant', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'music.png',
    title: 'Music Generation',
    info: `Description: A Python application to generate songs using Deep Learning models.`,
    info2: 'Technologies: PyTorch, FastAPI, Streamlit',
    url: 'https://metoonhathung-music-generation.streamlit.app/',
    repo: 'https://github.com/metoonhathung/music-generation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moviez.png',
    title: 'Moviez',
    info: `Description: An iOS application to explore and bookmark your favorite movies.`,
    info2: 'Technologies: Swift, Web Service, CoreData, Storyboard',
    url: 'https://youtu.be/XSoK2bLKMgg',
    repo: 'https://github.com/metoonhathung/moviez-ios', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chess.png',
    title: 'Chess',
    info: `Description: An Android application to play Chess game. Single player (Minimax AI) or Multiplayer.`,
    info2: 'Technologies: Java, Node.js, Express, Socket.io',
    url: 'https://youtu.be/TWNf3bVXgBk',
    repo: 'https://github.com/metoonhathung/chess-android', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'battleship.png',
    title: 'Battleship',
    info: `Description: A web application to play Battleship game. Single player (probability distribution AI) or Multiplayer.`,
    info2: 'Technologies: Node.js, Express, Socket.io, JavaScript, HTML, CSS',
    url: 'https://battleship-d171.onrender.com/',
    repo: 'https://github.com/metoonhathung/battleship', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sort.png',
    title: 'Sorting Visualization',
    info: `Description: A web application to visualize different sorting algorithms.`,
    info2: 'Technologies: p5.js, JavaScript, HTML, CSS, Bootstrap',
    url: 'https://metoonhathung.github.io/sort-visual/',
    repo: 'https://github.com/metoonhathung/sort-visual', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Email me',
  email: 'nhathungmetoo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/metoonhathung',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/metoonhathung/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/metoonhathung',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/@metoonhathung',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
