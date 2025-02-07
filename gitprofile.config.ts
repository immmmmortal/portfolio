// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'immmmmortal', // Your GitHub org/user name. (This is the
    // only
    // required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      manual: {
        // Properties for manually specifying projects
        projects: [
          'immmmmortal/portfolio',
          'immmmmortal/SneakSyncHub',
          'immmmmortal/TSS',
          'immmmmortal/yamdb',
        ], // List of
        // repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SneakSyncHub',
          description:
            'SneakSyncHub is a web scraping tool specifically designed to extract detailed information about sneakers from various online retail and sneaker websites.',
          imageUrl: 'https://i.imgur.com/Sqxb69Y.png',
          link: 'https://github.com/immmmmortal/SneakSyncHub',
        },
        {
          title: 'Job Scraper',
          description:
            'JobScraper is a web scraping tool designed to extract job listings from various online job boards.',
          imageUrl:
            'https://www.pharmiweb.jobs/getasset/3a360c2b-7a7c-4267-b11e-cd772f65f5d8/',
          link: 'https://github.com/immmmmortal/JobScraper',
        },
        {
          title: 'Portfolio',
          description:
            'A showcase of my expertise in backend and full-stack development, featuring projects built with Python, Django, DRF, PostgreSQL, Redis, and modern frontend frameworks like Next.js and React.',
          imageUrl:
            'https://parametric-architecture.com/wp-content/uploads/2024/08/Architecture-Portfolio-Cover-1024x683.webp',
          link: 'https://github.com/immmmmortal/portfolio',
        },
        {
          title: 'PhoneStore',
          description:
            'A phone store management system built with Django and DRF, featuring product catalog, orders, and user authentication.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXsq6Vma0MCBBMxyQpX725YxT4sBjastimg&s',
          link: 'https://github.com/immmmmortal/PhoneStore',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Illia Wolkow',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'illia-wolkow-backend-developer',
    email: 'illiawolkow21@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/17eX_WOkCAeHGP31Xq_layiMRfB2bo7-K/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Django',
    'DRF',
    'OOP',
    'Design Patterns',
    'SOLID',
    'PostgreSQL',
    'Redis',
    'WebSocket',
    'Docker',
    'Docker-compose',
    'Git',
    'GitLab',
    'AWS',
    'Digital Ocean',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind',
    'Bootstrap',
    'Linux',
    'Kafka',
    'RabbitMQ',
    'Celery',
    'NGINX',
    'GitHub Actions',
    'Pytest',
    'Unittest',
    'ElasticSearch',
    'Filebeat',
    'Kibana',
    'Telegram bot',
    'Selenium',
    'Scrapy',
    'BeautifulSoup',
    'Playwright',
    'Requests',
  ],
  experiences: [
    {
      company: '',
      position: 'Self-Directed Learning & Job Search ',
      from: 'July, 2023',
      to: 'Present',
    },
    {
      company: 'Sumy State University',
      position: 'Software Engineer & Team Coordinator',
      from: 'January, 2022',
      to: 'January, 2023',
    },
  ],
  certifications: [
    {
      name: 'Yandex Praktikum',
      body: 'Backend Django Developer',
      year: 'March 2023',
    },
    {
      name: 'Python Pro',
      body: 'Advanced level',
      year: 'September 2023',
      link: 'https://ithillel.ua/ru/courses/python-pro',
    },
  ],
  educations: [
    {
      institution: 'Sumy State University',
      degree: 'B.A in Computer Science',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'illia_wolkow_61d1e8e752c0', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
