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
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Database Administrator",
    icon: mobile,
  },
  {
    title: "Information Security Analyst",
    icon: backend,
  },
  {
    title: "Systems Administrator",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Jr. Systems Administrator",
    company_name: "Griffin Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2019 - Dec 2019",
    points: [
      "Managed 100+ endpoints for a local healthcare clinic and provided <strong>technical support</strong> utilizing SolarWinds software.",
    ],
  },
  {
    title: "Computer Sales Associate",
    company_name: "Best Buy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2019 - Jan 2021",
    points: [
      "Consulted with clients to identify their technology needs and recommended hardware, software, and accessories to optimize their <strong>SOHO networks</strong>.",
    ],
  },
  {
    title: "Jr. Systems Administrator",
    company_name: "CalTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021 - Sep 2021",
    points: [
      "<strong>Managed</strong> hardware, systems, applications software, and network configurations for 140+ clients in the financial sector.",
      "<strong>Collaborated</strong> with the Business Intelligence, Network Operations Center (NOC), Data Center, and Information Security departments to improve <strong>on-prem and cloud based</strong> infrastructures.",
    ],
  },
  {
    title: "Information Security Analyst 1",
    company_name: "CalTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2021 - Mar 2022",
    points: [
      "<strong>Monitored</strong> changes made to clients' <strong>Azure</strong> environments and deployed security solutions for new clients' networks during onboarding sprints.",
      "Provided secondary support during Incident Response engagements and developed <strong>ad-hoc security reports</strong> based on a client's network.",
      "Developed <strong>Excel dashboards, pivot charts, and matrices</strong> identifying our clients' security posture.",
    ],
  },
  {
    title: "Information Security Analyst 2",
    company_name: "CalTech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Nov 2022",
    points: [
      "Managed clients' <strong>Azure</strong> environments, contributed to technical evaluations of <strong>databases and cloud infrastructures</strong>, and configured IDS/IPS rules in our <strong>SIEM</strong>.",
      "Led and devloped <strong>Incident Response</strong> engagements and tabletop simulations.",
      "<strong>Analyzed zero-day threats</strong> and determined the best response based on cost, impact, and severity.",
      "Created and implemented the department's first <strong>training program</strong>, which increased employee certifications by 100%.",
      "Served as a <strong>technical consultant and escalation point</strong> for junior analysts and other departments.",
    ],
  },
  {
    title: "Information Security Analyst 2 / Department Data Analyst ",
    company_name: "Integris",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Compiled my department's year over year ticket data and prepared <strong>Power BI</strong> reports and dashboards highlighting <strong>KPIs</strong> that needed improvement.",
      "Built <strong>Python-based API's</strong> to automate our security stack.",
      "Collaborated with the Project Management Office (PMO) and Datacenter teams using an <strong>agile/scrum methodology</strong>.",
      "Led multiple projects including a data classification project, a compliance audit, and a disaster recovery plan update.",
      "Mentored junior analysts and <strong>conducted technical interviews</strong> for new hires.",
    ],
  },
  {
    title: "Senior IT Analyst",
    company_name: "UT Health East Texas",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "<strong>Inventoried</strong> the entire IT operations and <strong>programmed</strong> a <strong>relational database management system (RDBMS)</strong> containing their inventory for future scalability and stock tracking.",
      "Digested over 10+ years' worth of <strong>Tableau</strong> data and <strong>rebuilt and modernized</strong> in Power BI.",
      "Developed <strong>Crystal Reports</strong> and <strong>Smartsheet</strong> reports for EMS departments which helped <strong>track operations</strong> in real time.",
      "Created a <strong>Local Group Policy</strong> for all the Windows machines on the domain and <strong>managed</strong> all iOS devices through Intune.",
      "Used <strong>Python, BASH, Powershell</strong> and proprietary <strong>API's</strong> to <strong>automate</strong> configuration processes for EMS software and hardware including ambulances and helicopters.",
      "Improved their outdated ticketing system and developed a tailor-made ticketing system that <strong>extracts, transforms, and loads</strong> user data via Microsoft Forms, Sharepoint, and <strong>Power Automate</strong>.",
      "Developed an internal <strong>SharePoint</strong> and consolidated the department's critical resources.",
      "<strong>Wrangled</strong> historical data in our <strong>SQL</strong> servers to make informed decisions on where to place new ambulance vehicles as we acquired more counties in the state.",
      "Improved <strong>quarterly reports</strong> EMS departments relied on for relevant operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Carlos was a pleasure. He was always willing to help out and very eager to learn/grow in his career. I would definitely work with Carlos again.",
    name: "Kyle Trevino",
    designation: "Information Security Analyst 3",
    company: "Integris",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Carlos is an excellent resource in any area of the IT landscape. He is professional, knowledgeable, and has a strong work ethic. Carlos was always available when a co-worker needed assistance and could always point you in the right direction. His strong work ethic and willingness to assist anyone in need, is only matched by his drive to learn new things.",
    name: "Shelby Spalding",
    designation: "Associate Account Manager",
    company: "Integris",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I knew Carlos since he started working at Integris/CalTech. He's someone eager to take initiative to problem solve, develops his own skills, and is very technically capable. I had the pleasure of working with him on several Incident Response tickets and he always was very knowledgeable. Carlos is someone who brings a good work ethic and attitude to any team he is on.",
    name: "Aurora Jones",
    designation: "IT Field Services Manager",
    company: "Integris",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Global Data Analytics Survey",
    description:
      "Prepared various <strong>Power BI</strong> dashboards using data sets obtained through a survey targeting data professionals, with the goal of presenting insights and KPIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "MSSP InfoSec Operations Metrics",
    description:
      "Tracked the volume of <strong>data</strong> generated by customers of a top 150 national MSSP ultimately improving customer support requests.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Health Clinic Management",
    description:
      "Programmed a <strong>relational database management system (RDBMS)</strong> that stored patient and employee records, appointments, prescriptions, and more in a secure and organized model.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
