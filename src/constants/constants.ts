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
  git,
  githubLogo,
  figma,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  pizzaapp,
  clotheapp,
  jediapp,
  vanilaworkapp,
} from '../assets/index';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: backend,
  },
  {
    title: 'Vanila JS Developer',
    icon: mobile,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: githubLogo,
  },

  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'HTML,CSS,JS and Git Developer',
    company_name: 'Starbucks',
    icon: html,
    iconBg: '#383E56',
    date: 'September 2022 - February 2023',
    points: [
      'Learning basic HTML , CSS and JS .',
      'Learning Git and Github interaciton',
      'Developing websites.',
    ],
  },
  {
    title: 'React',
    company_name: 'Tesla',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'January 2024 - April 2024',
    points: [
      'Learning basics about React JS and TS.',
      'Learning basic libraries such as axios redux toolkit, react-router, tailwind, material ui etc. also some feature like hoc and advance hooks',
      'Developing  websites.',
    ],
  },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'React Pizza App',
    description:
      'A web application that allows users to to view(from api) buy pizza(only front). In this application, you can filter and sort pizzas, add them to the cart and the data will be saved',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'typescript',
        color: ' green-blue-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-purple-text-gradient',
      },
    ],
    image: pizzaapp,
    source_code_link: 'https://vasyl16.github.io/ReactPizzaApp/',
  },
  {
    name: 'React Jedi App',
    description:
      'A web application that allows the user to view(from api) information about a lot of Star Wars characters by searching or viewing all, you can also choose a theme and add your favorite characters to the save cart.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'typescript',
        color: ' green-blue-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-purple-text-gradient',
      },
    ],
    image: jediapp,
    source_code_link: 'https://vasyl16.github.io/ReactApp/',
  },
  {
    name: 'React Clothes App',
    description:
      'Other interesting works written in vanilla js language such as landing page, card website ... ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'typescript',
        color: ' green-blue-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-purple-text-gradient',
      },
    ],
    image: clotheapp,
    source_code_link: 'https://vasyl16.github.io/ReactCartApp/',
  },
  {
    name: 'Vanila JS Apps',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: vanilaworkapp,
    source_code_link: 'https://vasyl16.github.io/Allmywork/',
  },
];

const my_github_link = 'https://github.com/Vasyl16';

const HOME_PAGE = 'VasylYurchuk';

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  my_github_link,
  HOME_PAGE,
};
