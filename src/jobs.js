const jobOffers = {
  jobOffers: [
    {
      slug: 'Frontend-Developer-ABC-Technologies-New-York',
      title: 'Frontend Developer',
      company: 'ABC Technologies',
      place: 'New York',
      salary: '5000-8000',
      isRemote: true,
      stack: ['JavaScript', 'React', 'HTML', 'CSS'],
      description:
        'Join our team as a Frontend Developer and contribute to building amazing user interfaces for our web applications.',
      category: 'frontend',
    },
    {
      slug: 'PHP-Developer-XYZ-Solutions-San-Francisco',
      title: 'PHP Developer',
      company: 'XYZ Solutions',
      place: 'San Francisco',
      salary: '6000-9000',
      isRemote: false,
      stack: ['PHP', 'MySQL', 'Laravel'],
      description:
        'We are seeking a skilled PHP Developer to join our development team and work on exciting projects.',
      category: 'backend',
    },
    {
      title: 'Fullstack Developer',
      company: '123 Systems',
      place: 'London',
      salary: '7000-10000',
      isRemote: true,
      stack: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
      description:
        'Be part of our dynamic team as a Fullstack Developer and contribute to building robust web applications.',
      category: 'fullstack',
    },
    {
      title: 'Mobile App Developer',
      company: 'MobileTech',
      place: 'Berlin',
      salary: '8000-12000',
      isRemote: false,
      stack: ['React Native', 'JavaScript', 'TypeScript'],
      description:
        'Join our mobile development team and create innovative and user-friendly mobile applications for iOS and Android.',
      category: 'mobile',
    },
    {
      title: 'Software Tester',
      company: 'Quality Assurance Ltd.',
      place: 'Tokyo',
      salary: '4000-6000',
      isRemote: true,
      stack: ['Manual Testing', 'Automation Testing', 'Selenium'],
      description:
        'We are looking for a detail-oriented Software Tester to ensure the quality and reliability of our software products.',
      category: 'testing',
    },
    {
      title: 'Backend Developer',
      company: 'Tech Solutions',
      place: 'Seattle',
      salary: '7000-10000',
      isRemote: false,
      stack: ['Java', 'Spring Boot', 'MySQL'],
      description:
        'Join our backend development team and work on scalable and efficient web applications.',
      category: 'backend',
    },
    {
      title: 'React Developer',
      company: 'Digital Innovators',
      place: 'Sydney',
      salary: '8000-12000',
      isRemote: true,
      stack: ['JavaScript', 'React', 'Redux'],
      description:
        'We are seeking a skilled React Developer to build modern and interactive user interfaces for our web applications.',
      category: 'frontend',
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Solutions Inc.',
      place: 'Sao Paulo',
      salary: '9000-15000',
      isRemote: false,
      stack: ['AWS', 'Docker', 'Kubernetes'],
      description:
        'Be part of our DevOps team and ensure the smooth deployment and operation of our cloud-based systems.',
      category: 'devops',
    },
    {
      title: 'Fullstack JavaScript Developer',
      company: 'TechGurus',
      place: 'Toronto',
      salary: '8000-12000',
      isRemote: true,
      stack: ['Node.js', 'React', 'MongoDB'],
      description:
        'Join our team as a Fullstack JavaScript Developer and contribute to building scalable and modern web applications.',
      category: 'fullstack',
    },
    {
      title: 'Mobile App Tester',
      company: 'App Quality Labs',
      place: 'Paris',
      salary: '5000-8000',
      isRemote: false,
      stack: ['Mobile App Testing', 'UI/UX Testing', 'Bug Tracking'],
      description:
        'We are looking for a meticulous Mobile App Tester to ensure the quality and usability of our mobile applications.',
      category: 'testing',
    },
    {
      title: 'Frontend Developer',
      company: 'Code Wizards',
      place: 'San Francisco',
      salary: '9000-12000',
      isRemote: false,
      stack: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Join our team and help build stunning and responsive user interfaces for our web applications.',
      category: 'frontend',
    },
    {
      title: 'Backend Engineer',
      company: 'Data Systems Inc.',
      place: 'New York',
      salary: '10000-15000',
      isRemote: true,
      stack: ['Python', 'Django', 'PostgreSQL'],
      description:
        'We are seeking a skilled Backend Engineer to design and develop robust and scalable server-side solutions.',
      category: 'backend',
    },
    {
      title: 'Mobile App Developer',
      company: 'AppTech Solutions',
      place: 'London',
      salary: '8000-11000',
      isRemote: false,
      stack: ['Swift', 'Java', 'React Native'],
      description:
        'Join our mobile app development team and create innovative and user-friendly mobile applications.',
      category: 'mobile',
    },
    {
      title: 'Fullstack Developer',
      company: 'Digital Innovators',
      place: 'Berlin',
      salary: '10000-14000',
      isRemote: true,
      stack: ['JavaScript', 'Node.js', 'MongoDB'],
      description:
        'We are looking for a talented Fullstack Developer to work on both frontend and backend development tasks.',
      category: 'fullstack',
    },
    {
      title: 'QA Engineer',
      company: 'Quality Assurance Ltd.',
      place: 'Chicago',
      salary: '7000-10000',
      isRemote: false,
      stack: ['Manual Testing', 'Automated Testing', 'Selenium'],
      description:
        'Be part of our Quality Assurance team and ensure the reliability and functionality of our software products.',
      category: 'testing',
    },
    {
      title: 'Data Scientist',
      company: 'Innovative Analytics',
      place: 'Seattle',
      salary: '12000-15000',
      isRemote: false,
      stack: ['Python', 'R', 'Machine Learning'],
      description:
        'Join our team of data scientists and work on cutting-edge projects using advanced analytics and machine learning techniques.',
      category: 'data',
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Solutions Inc.',
      place: 'Austin',
      salary: '11000-14000',
      isRemote: true,
      stack: ['AWS', 'Docker', 'Kubernetes'],
      description:
        'We are seeking a skilled DevOps Engineer to streamline our software development and deployment processes using modern infrastructure tools.',
      category: 'devops',
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Labs',
      place: 'Los Angeles',
      salary: '9000-12000',
      isRemote: false,
      stack: ['Adobe XD', 'Sketch', 'User Research'],
      description:
        'Join our design team and create visually stunning and user-friendly interfaces for our web and mobile applications.',
      category: 'design',
    },
    {
      title: 'Software Engineer',
      company: 'Tech Innovators',
      place: 'Toronto',
      salary: '10000-13000',
      isRemote: true,
      stack: ['Java', 'Spring Boot', 'MySQL'],
      description:
        'We are seeking a talented Software Engineer to develop high-quality and scalable software solutions for our clients.',
      category: 'backend',
    },
    {
      title: 'Frontend Architect',
      company: 'Digital Solutions Ltd.',
      place: 'Sydney',
      salary: '11000-14000',
      isRemote: false,
      stack: ['JavaScript', 'React', 'Webpack'],
      description:
        'Lead the frontend development efforts and architect scalable and maintainable web applications for our clients.',
      category: 'frontend',
    },
    {
      title: 'Mobile App Developer',
      company: 'Innovative Mobile Solutions',
      place: 'San Francisco',
      salary: '10000-13000',
      isRemote: false,
      stack: ['Swift', 'Java', 'React Native'],
      description:
        'Join our team and develop cutting-edge mobile applications for iOS and Android platforms using the latest technologies.',
      category: 'mobile',
    },
    {
      title: 'Full Stack Engineer',
      company: 'Tech Innovators',
      place: 'London',
      salary: '11000-14000',
      isRemote: true,
      stack: ['Node.js', 'React', 'MongoDB'],
      description:
        'We are seeking a skilled Full Stack Engineer to design and develop robust web applications from front to back.',
      category: 'fullstack',
    },
    {
      title: 'QA Automation Engineer',
      company: 'Quality Assurance Inc.',
      place: 'Berlin',
      salary: '9000-12000',
      isRemote: false,
      stack: ['Selenium', 'Cypress', 'TestNG'],
      description:
        'Join our QA team and automate testing processes to ensure the quality and reliability of our software products.',
      category: 'testing',
    },
    {
      title: 'Cloud Architect',
      company: 'Cloud Solutions Ltd.',
      place: 'Seattle',
      salary: '12000-15000',
      isRemote: true,
      stack: ['AWS', 'Azure', 'Google Cloud'],
      description:
        'Architect and implement scalable and secure cloud infrastructure solutions for our enterprise clients.',
      category: 'devops',
    },
    {
      title: 'Backend Developer',
      company: 'Digital Innovators',
      place: 'New York',
      salary: '10000-13000',
      isRemote: false,
      stack: ['Python', 'Django', 'PostgreSQL'],
      description:
        'We are looking for a talented Backend Developer to build robust and efficient server-side applications for our projects.',
      category: 'backend',
    },
    {
      title: 'Frontend Developer',
      company: 'Acme Technologies',
      place: 'San Francisco CA',
      salary: '70000-90000',
      isRemote: false,
      stack: ['JavaScript', 'React', 'CSS'],
      description:
        'Acme Technologies is seeking a talented Frontend Developer to join our team. You will be responsible for creating responsive user interfaces using modern web technologies. Experience with JavaScript frameworks like React is required. Join us and make an impact in the world of web development!',
      category: 'frontend',
    },
    {
      title: 'PHP Developer',
      company: 'Tech Solutions',
      place: 'New York NY',
      salary: '80000-100000',
      isRemote: true,
      stack: ['PHP', 'MySQL', 'Laravel'],
      description:
        'Tech Solutions is looking for a skilled PHP Developer to build and maintain web applications. You should have experience with PHP frameworks like Laravel and be proficient in database management. Join our remote team and work on exciting projects!',
      category: 'backend',
    },
    {
      title: 'Fullstack Developer',
      company: 'Innovative Solutions',
      place: 'Seattle WA',
      salary: '90000-120000',
      isRemote: false,
      stack: ['JavaScript', 'Node.js', 'MongoDB'],
      description:
        'Join Innovative Solutions as a Fullstack Developer and work on cutting-edge web applications. You will be involved in both frontend and backend development, utilizing technologies like JavaScript, Node.js, and MongoDB. Make an impact and shape the future of our products!',
      category: 'fullstack',
    },
    {
      title: 'Mobile App Developer',
      company: 'Digital Innovators',
      place: 'Chicago IL',
      salary: '80000-110000',
      isRemote: true,
      stack: ['iOS', 'Android', 'Swift', 'Kotlin'],
      description:
        'Digital Innovators is seeking a skilled Mobile App Developer to create innovative and user-friendly mobile applications. Experience with iOS and Android development is required, using technologies like Swift and Kotlin. Join our remote team and be part of the mobile revolution!',
      category: 'mobile',
    },
    {
      title: 'QA Engineer',
      company: 'Testing Solutions',
      place: 'Austin TX',
      salary: '60000-80000',
      isRemote: false,
      stack: ['Selenium', 'JUnit', 'TestNG'],
      description:
        'Testing Solutions is hiring a QA Engineer to ensure the quality of our software products. You will be responsible for designing and executing test cases, and identifying and reporting bugs. Join our team and contribute to delivering high-quality software to our clients!',
      category: 'testing',
    },
    {
      title: 'Frontend Developer',
      company: 'TechCo',
      place: 'New York NY',
      salary: '50000-70000',
      isRemote: false,
      stack: ['JavaScript', 'React', 'CSS'],
      description:
        'TechCo is seeking a talented Frontend Developer to join our team. You will be responsible for creating responsive user interfaces using modern web technologies. Experience with JavaScript frameworks like React is required. Join us and make an impact in the world of web development!',
      category: 'frontend',
    },
    {
      title: 'Backend Developer',
      company: 'DataTech',
      place: 'San Francisco CA',
      salary: '60000-80000',
      isRemote: true,
      stack: ['Python', 'Django', 'PostgreSQL'],
      description:
        'DataTech is looking for a skilled Backend Developer to build and maintain robust web applications. You should have experience with Python frameworks like Django and be proficient in database management. Join our remote team and work on exciting projects!',
      category: 'backend',
    },
    {
      title: 'Fullstack Developer',
      company: 'InnoCode',
      place: 'Seattle WA',
      salary: '70000-90000',
      isRemote: false,
      stack: ['JavaScript', 'Node.js', 'MongoDB'],
      description:
        'Join InnoCode as a Fullstack Developer and work on cutting-edge web applications. You will be involved in both frontend and backend development, utilizing technologies like JavaScript, Node.js, and MongoDB. Make an impact and shape the future of our products!',
      category: 'fullstack',
    },
    {
      title: 'Mobile App Developer',
      company: 'AppTech',
      place: 'Chicago IL',
      salary: '60000-80000',
      isRemote: true,
      stack: ['React Native', 'JavaScript', 'Firebase'],
      description:
        'AppTech is seeking a skilled Mobile App Developer to create innovative and user-friendly mobile applications. Experience with cross-platform development using React Native and familiarity with JavaScript and Firebase is required. Join our remote team and be part of the mobile app revolution!',
      category: 'mobile',
    },
    {
      title: 'QA Engineer',
      company: 'QualityTech',
      place: 'Austin TX',
      salary: '50000-70000',
      isRemote: false,
      stack: ['Selenium', 'JUnit', 'TestNG'],
      description:
        'QualityTech is hiring a QA Engineer to ensure the quality of our software products. You will be responsible for designing and executing test cases, identifying and reporting bugs, and ensuring smooth product releases. Join our team and contribute to delivering high-quality software to our clients!',
      category: 'testing',
    },
    {
      title: 'Software Engineer',
      company: 'CodeCraft',
      place: 'Seattle WA',
      salary: '80000-100000',
      isRemote: false,
      stack: ['Java', 'Spring', 'MySQL'],
      description:
        'CodeCraft is seeking a talented Software Engineer to join our team. You will be responsible for developing and maintaining scalable software solutions using Java and Spring framework. Experience with relational databases like MySQL is required. Join us and be part of our innovative projects!',
      category: 'backend',
    },
    {
      title: 'Frontend Developer',
      company: 'PixelTech',
      place: 'San Francisco CA',
      salary: '70000-90000',
      isRemote: true,
      stack: ['JavaScript', 'Vue.js', 'HTML', 'CSS'],
      description:
        'PixelTech is looking for a creative Frontend Developer to build engaging user interfaces. You should have strong skills in JavaScript and experience with modern frontend frameworks like Vue.js. Join our remote team and contribute to the development of visually stunning web applications!',
      category: 'frontend',
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudOps',
      place: 'New York NY',
      salary: '90000-120000',
      isRemote: false,
      stack: ['AWS', 'Docker', 'Kubernetes'],
      description:
        'CloudOps is hiring a skilled DevOps Engineer to streamline our development and deployment processes. You will be responsible for managing cloud infrastructure, implementing CI/CD pipelines, and optimizing system performance. Join our team and play a crucial role in ensuring efficient and scalable operations!',
      category: 'devops',
    },
    {
      title: 'Mobile App Developer',
      company: 'AppWorks',
      place: 'Chicago IL',
      salary: '75000-95000',
      isRemote: true,
      stack: ['React Native', 'JavaScript', 'Firebase'],
      description:
        'Join AppWorks as a Mobile App Developer and create innovative and user-friendly mobile applications. You will collaborate with cross-functional teams to deliver high-quality products using React Native, JavaScript, and Firebase. Be part of our dynamic remote team and shape the future of mobile development!',
      category: 'mobile',
    },
    {
      title: 'Quality Assurance Analyst',
      company: 'TestMasters',
      place: 'Austin TX',
      salary: '60000-80000',
      isRemote: false,
      stack: ['Selenium', 'JUnit', 'TestNG'],
      description:
        'TestMasters is seeking a meticulous Quality Assurance Analyst to ensure the reliability of our software. You will design and execute test cases, identify and report bugs, and collaborate with the development team. Join us and contribute to delivering top-notch software solutions!',
      category: 'testing',
    },
  ],
};

const updatedJobOffers = jobOffers.jobOffers.map((jobOffer) => {
  const slug = `${jobOffer.title.replace(/ /g, '-')}-${jobOffer.company.replace(
    / /g,
    '-'
  )}-${jobOffer.place.replace(/ /g, '-')}`;
  return { ...jobOffer, slug };
});

export default updatedJobOffers;
