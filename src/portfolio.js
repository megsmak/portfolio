const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#top',
  title: 'MM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Megan Mak',
  role: 'Web Developer',
  picture: '',

  description:
    'Based in the Greater Montréal Area, Megan is a web developer with 9 years professional experience developing interactive web-based tools and informational websites from start to finish, including: gathering requirements and scoping, development and design, planning user testing, writing and editing documentation, and post-launch maintenance.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/megsmak/',
    github: 'https://github.com/megsmak',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fragility Fracture Decision Aid',
    description:
      'A bilingual calculator that calculates the risk of fragility fractures based on patient data inputted and illustrates the risk factor in a chart. Risk factor is returned via API from the Osteoporosis Research Ltd. based on data inputted.',
    stack: ['Yii2', 'Javascript', 'PHP'],
    sourceCode: '',
    livePreview: 'https://frax.canadiantaskforce.ca/',
    image: 'fragilityfracture.png',
  },
  {
    name: 'Right Review',
    description:
      'A decision-making tool that suggests quantitative and qualitative methods, and provides resources for conducting scientific reviews based the questions answered in the tool.', 
    stack: ['Yii2', 'PHP', 'Javascript'],
    sourceCode: '',
    livePreview: 'https://rightreview.knowledgetranslation.net/',
    image: 'rightreview.png',
  },
  {
    name: 'DKA Simulator',
    description:
      'A tool created to help train medical students to assess sample Diabetic ketoacidosis (DKA) cases, order tests, order treatments, and determine issues based on the patient’s history and tests. Patient’s vitals (blood pressure, urine output, etc) change over time based on their condition and treatments ordered. This tool is not available to the public.',
    stack: ['Odoo', 'Javascript', 'Python'],
    sourceCode: '',
    livePreview: '',
    image: 'dkasimulator.png',
  },
  {
    name: 'Find TMF',
    description:
      'A decision-making tool that returns suggested theories, models and frameworks after answering questions for implementation programs or projects.',
    stack: ['Yii2', 'PHP', 'Javascript'],
    sourceCode: '',
    livePreview: 'https://findtmf.knowledgetranslation.net/',
    image: 'findtmf.png',
  },
  {
    name: 'DSEN MAGIC',
    description:
      'An informative website to support information for the DSEN MAGIC initiative. It was a quick site turnaround request to support a site that lists basic information such as the team’s goals and its many projects. It was a grant-funded project that started in 2020 during the COVID-19 pandemic, and who’s funding ended around 2024.',
    stack: ['Wordpress', 'PHP'],
    sourceCode: '',
    livePreview: 'https://dsenmagic.com/ ',
    image: 'dsenmagic.png',
  },
  {
    name: 'Canadian Task Force',
    description:
      'A bilingual informative website to support the listing of healthcare guidelines in Canada. This version of the website included multiple templates for the various components of the website to make it more dynamic, which previously many of its features were static.',
    stack: ['Wordpress', 'PHP'],
    sourceCode: '',
    livePreview: 'https://web.archive.org/web/20180803072915/https://canadiantaskforce.ca/',
    image: 'canadiantaskforce.png',
  },
/*   {
    name: 'GREAT Network',
    description:
      'An informative website to support information for the GREAT network. This specific version of the website was created when client was moving this website from the previous CRM (Perch) to Wordpress. Original Perch design was recreated on Wordpress. ',
    stack: ['Wordpress', 'PHP'],
    sourceCode: '',
    livePreview: 'https://web.archive.org/web/20170616172232/http://greatnetworkglobal.org/',
    image: 'greatnetwork.png',
  }, */
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'JQuery',
  'PHP',
  'Wordpress',
  'Yii2',
  'Python',
  'Odoo',
  'C++',
  'MySQL',
  'Git',
]

const experience = [
  {
    name: 'St. Michael\'s Hospital',
    location: 'Toronto, ON',
    start: '2016',
    end: '2025',
    description: 'Created interactive web tools and informational websites that aim to help researchers, scientists, health providers and patients achieve better health outcomes and make informed health decisions based on current knowledge base. Worked mainly in PHP and Javascript using Wordpress and Yii2, but also have briefly worked with Angular (through Ionic) and Python (through Odoo).',
    projectCategory: 'stmichaels',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '',
}

export { header, about, projects, skills, experience, contact }
