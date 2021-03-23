import { nanoid } from 'nanoid';
import { withPrefix } from 'gatsby';

// HEAD DATA
export const headData = {
  title: 'Hung Tran | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio of metoonhathung', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is',
  name: 'Hung Tran',
  subtitle: 'I am ',
  typing: ['a software engineer.', 'a positive thinker.', 'an ambivert.'],
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.jpg',
  paragraphOne:
    "Hello! I am Hung and I'm from Hanoi, Vietnam. I am currently a junior at the University of Rochester majoring in Computer Science.",
  paragraphTwo:
    'I have always been passionate about web applications, game development, artificial intelligence, and everything in between. I would really love the opportunities to work in those respective fields.',
  paragraphThree:
    'In my free time, I enjoy coding, singing, listening to music, watching movies, playing sports and games. I consider myself as an ambivert and a positive thinker.',
  resume: withPrefix('resume.pdf'), // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'battleship.png',
    title: 'Multiplayer Battleship',
    info: `Description: A web application to play Battleship game with two options: Single player (with AI algorithm using probability distribution and DFS) and Multiplayer (between 2 people).`,
    info2: 'Technologies: JavasScript, HTML, CSS, Node.js, Express, Socket.io',
    url: 'https://multiplayer-battleship.herokuapp.com/',
    repo: 'https://github.com/metoonhathung/battleship', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'neuralnetwork.png',
    title: 'Neural Network',
    info: `Description: A web application to demonstrate Neural Network: prepare data, train model and evaluate model. Neural Network is implemented using Gradient Descent with one hidden layer. Data is collected and processed from user's canvas drawings.`,
    info2: 'Technologies: Javascript, HTML, CSS, Bootstrap',
    url: 'https://metoonhathung.github.io/neuralnetwork/',
    repo: 'https://github.com/metoonhathung/neuralnetwork/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'checkers.png',
    title: 'Checkers AI',
    info: `Description: A game of Checkers played in the console with two options: player versus player and player versus computer. Implemented using AI algorithms such as Minimax, heuristic Minimax and Alpha-Beta pruning with customizable depth of search.`,
    info2: 'Technologies: Java',
    url: 'https://replit.com/@metoonhathung/checkers-ai',
    repo: 'https://github.com/metoonhathung/checkers-ai', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sortvisual.png',
    title: 'Sorting Visualization',
    info: `Description: A web application to visualize different comparison sorting algorithms such as Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort and non-comparison such as Radix Sort. Input size and animation speed is customizable by user.`,
    info2: 'Technologies: Javascript, HTML, CSS, Bootstrap, p5.js',
    url: 'https://metoonhathung.github.io/sortvisual/',
    repo: 'https://github.com/metoonhathung/sortvisual', // if no repo, the button will not show up
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
      name: 'facebook',
      url: 'https://www.facebook.com/metoonhathung',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/metoonhathung/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/metoonhathung',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
