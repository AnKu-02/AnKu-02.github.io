// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AnKu-02', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ananya Kulkarni',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+49 17685982399',
    email: 'ananyakulkarni55@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1xPxRXkUabmT4Rg4khBZH0ckh_Eo_b19Z', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // Programming Languages
    'Python',
    'C',
    'C++',
    'Go',
    'Dart',

    // Libraries & Frameworks
    'NumPy',
    'Pandas',
    'PyTorch',
    'TensorFlow',
    'OpenCV',
    'Scikit-learn',
    'Matplotlib',
    'Seaborn',
    'MNE',
    'YASA',
    'FastICA',

    // Tools & Technologies
    'Git',
    'Docker',
    'Linux',
    'ROS 2',
    'MATLAB',
    'VS Code',
    'Jupyter Notebook',

    // Other Skills
    'EEG Signal Processing',
    'BIDS Standard',
    'Microsoft Office',
  ],
  experiences: [
    {
      company: 'University of Stuttgart',
      companyLink: 'https://www.uni-stuttgart.de',
      position: 'Student Assistant, Infotech Buddy Program',
      from: 'September 2023',
      to: 'Present',
      details: [
        'Assisted 25+ new students with administrative formalities',
        'Organized welcome events and study groups for social engagement',
        'Guided students on accommodation options and housing resources',
      ],
    },
    {
      company: 'Erasmus Student Network',
      companyLink: 'https://esn.de',
      position: 'Volunteer (Events & Culture Committee)',
      from: 'March 2024',
      to: 'September 2024',
      details: [
        'Organized 10+ events including city excursions and cultural meetups',
        'Coordinated bi-weekly planning meetings for smooth semester activities',
        'Developed leadership and teamwork skills through event-management sessions',
      ],
    },
    {
      company: 'Rexroth Bosch',
      companyLink: 'https://www.boschrexroth.com',
      position: 'Werkstudent',
      from: 'May 2023',
      to: 'October 2023',
      details: [
        'Collaborated on automation projects using C++ and LabVIEW',
        'Assisted senior engineers with data collection and analysis',
      ],
    },
    {
      company: 'GreenTeam Uni Stuttgart e.V.',
      companyLink: 'https://greenteam-stuttgart.de',
      position: 'Formula Student Engineer, Driverless Department (SLAM)',
      from: 'November 2022',
      to: 'March 2023',
      details: [
        'Researched and optimized SLAM algorithms (Kalman Filter, EKF)',
        'Implemented C++ modules for mapping and localization improvements',
        'Validated algorithm performance through real-world simulations',
      ],
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Stuttgart',
      degree: 'M.Sc. Infotech',
      from: '2022',
      to: 'Present',
    },
    {
      institution: 'Dayananda Sagar College of Engineering',
      degree: 'B.E. Electronics and Instrumentation',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'A Comparative Study of SARS COVID-19 Detection Using X-ray and CT Scan Images Using Deep Learning Techniques',
      conferenceName: '',
      journalName: 'International Journal of Health Sciences',
      authors: 'Ananya Kulkarni',
      link: 'https://doi.org/10.53730/ijhs.v6nS2.8170',
      description: `
• Utilized advanced deep learning architectures, including VGG-19, Inception V3, and ResNet, to analyze and process medical images (X-ray and CT scans).
• Conducted analysis using metrics such as accuracy, precision, recall, and F1-score, achieving a peak accuracy of 97% for X-ray image analysis.
• Enhanced data processing efficiency through innovative approaches in data normalization and feature extraction.
• Published findings in the International Journal of Health Sciences (DOI: 10.53730/ijhs.v6nS2.8170).
      `.trim(),
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

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
      'light',
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

  /* Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/AnKu-02/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,*/

  enablePWA: false,
};

export default CONFIG;
