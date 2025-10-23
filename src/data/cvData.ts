import type { CVProfile, Experience, Education } from "@/types/cv"

export const cvProfile: CVProfile = {
  name: "Farid Ghaderi",
  title: "Software Engineer",
  summary:
    "Experienced software engineer with a passion for building scalable and efficient applications. Proven track record of delivering high-quality solutions in fast-paced environments. Seeking a challenging role where I can leverage my skills and expertise to contribute to the success of a dynamic team.",
  image:
    "https://dl.dropboxusercontent.com/scl/fi/l6n7fm7lylqqd7wn1c679/pfp.png?rlkey=w3ccaa0xjuoyob31ee54hysta",
  email: "faridghaderi2001@gmail.com",
  location: "London, UK",
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "IDmelon Technologies Inc.",
    position: "Fullstack Engineer",
    description:
      "Designed and implemented core systems including a billing system, role management system, and a queue management and scheduler system to support large-scale authentication workflows; improved backend efficiency by refactoring code, enforcing linting, and automating testing pipelines; built and maintained dozens of secure, scalable APIs used by frontend, mobile, and desktop teams; and actively participated in design discussions and architecture decisions to shape scalable backend solutions.",
    period: "Aug 2022 - Nov 2025",
    tools: [
      "Node.js",
      "Express.js",
      "Typescript",
      "MongoDB",
      "FIDO2",
      "GCP",
      "AWS",
      "Docker",
      "ReactJs",
    ],
    companyType:
      "Passwordless Authentication Solutions Enterprise • Vancouver, CA • Full-time Remote",
    logo: "https://panel.idmelon.com/logo192.png",
  },
  {
    id: "2",
    company: "Medcome",
    position: "Backend Engineer",
    description:
      "Helped establish the initial structure and version of the project, including backend architecture, codebase organization, and development workflows, and collaborated with the team to define coding standards and best practices for long-term maintainability.",
    period: "Apr 2022 - Jul 2022",
    tools: ["Node.js", "Nestjs", "MongoDB", "Rest API"],
    companyType: "Healthcare Startup • Full-time Remote",
    logo: "data:image/svg+xml,%3csvg%20width='130'%20height='36'%20viewBox='0%200%20130%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M112.079%200C106.205%200%20100.986%202.83643%2097.721%207.21869C96.2765%205.29179%2094.4522%203.66687%2092.3626%202.45536C90.9719%201.65009%2089.4594%201.02457%2087.8644%200.611144C85.6027%200.0287598%2083.402%201.75794%2083.402%204.10186C83.402%205.75195%2084.5275%207.17196%2086.1189%207.58898C87.0615%207.83703%2087.9504%208.20731%2088.7748%208.68904C91.9898%2010.5512%2094.1547%2014.0383%2094.1547%2018.0252C94.1547%2023.9712%2089.3339%2028.8101%2083.402%2028.8101C82.4235%2028.8101%2081.4737%2028.6771%2080.5741%2028.4326C78.9827%2027.9976%2077.2945%2028.6411%2076.4666%2030.0755L76.4522%2030.1043C75.2945%2032.1138%2076.3124%2034.7022%2078.5418%2035.3313C80.0866%2035.7663%2081.7174%2036%2083.402%2036C89.2766%2036%2094.4952%2033.1636%2097.7604%2028.7777C101.151%2033.2966%20106.617%2036.1582%20112.739%2035.9389C122.043%2035.6046%20129.631%2028.0156%20129.986%2018.6866C130.38%208.43379%20122.208%200.00359497%20112.079%200.00359497V0ZM112.957%2028.7238C106.341%2029.2522%20100.836%2023.7304%20101.363%2017.0941C101.778%2011.8706%20105.997%207.63931%20111.205%207.22229C117.821%206.69383%20123.327%2012.2157%20122.8%2018.852C122.384%2024.0755%20118.165%2028.3068%20112.957%2028.7238Z'%20fill='%232A9C8E'/%3e%3cpath%20d='M19.105%200.0504369C14.9867%200.000107311%2011.1803%201.34463%208.1301%203.64541C3.77528%206.92402%200.96167%2012.1439%200.96167%2018.0253V32.4051C0.96167%2034.3896%202.5674%2036.0001%204.54589%2036.0001C6.52437%2036.0001%208.1301%2034.3896%208.1301%2032.4051C11.1265%2034.6628%2014.8505%2036.0001%2018.8827%2036.0001C28.7788%2036.0001%2036.8038%2027.951%2036.8038%2018.0253C36.8038%208.09238%2029.0082%200.172666%2019.105%200.0504369ZM18.8827%2028.8102C12.9545%2028.8102%208.1301%2023.9714%208.1301%2018.0253C8.1301%2012.0792%2012.9545%207.24037%2018.8827%207.24037C24.811%207.24037%2029.6354%2012.0792%2029.6354%2018.0253C29.6354%2023.9714%2024.811%2028.8102%2018.8827%2028.8102Z'%20fill='%232A9C8E'/%3e%3cpath%20d='M72.6459%200.0505371H43.9722C41.9926%200.0505371%2040.3879%201.66006%2040.3879%203.6455C40.3879%205.63095%2041.9926%207.24047%2043.9722%207.24047H72.6459C74.6254%207.24047%2076.2301%205.63095%2076.2301%203.6455C76.2301%201.66006%2074.6254%200.0505371%2072.6459%200.0505371Z'%20fill='%232A9C8E'/%3e%3cpath%20d='M75.7175%2022.3895C71.6673%2040.1953%2044.947%2040.1882%2040.8968%2022.3895C40.3842%2020.1318%2042.0867%2017.9749%2044.395%2017.9749C46.0616%2017.9749%2047.4989%2019.1288%2047.886%2020.7538C50.395%2031.287%2066.2121%2031.2834%2068.7246%2020.7538C69.1117%2019.1288%2070.549%2017.9749%2072.2157%2017.9749C74.5275%2017.9749%2076.2264%2020.1318%2075.7139%2022.3895H75.7175Z'%20fill='%23FE2056'/%3e%3c/svg%3e",
  },
]

export const education: Education[] = [
  {
    id: "1",
    institution: "Islamic Azad University",
    position: "Bachelor's degree in Computer Software Engineering",
    description: "",
    period: "Feb 2023 - Oct 2025",
  },
  {
    id: "2",
    institution: "Enghelab-e Eslami Technical College of Tehran",
    position: "Associate's degree in Computer Software Engineering",
    description: "",
    period: "Jan 2021 - Jan 2023",
  },
  {
    id: "3",
    institution: "Hezareh Language Center",
    position: "Diploma in English language",
    description: "",
    period: "Jan 2008 - Oct 2017",
  },
]

export const skills: string[] = [
  "Javascript",
  "Typescript",
  "Node.js",
  "Express.js",
  "Nestjs",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Linux",
  "Socket.io",
  "Docker",
  "Reactjs",
]

export const softSkills: string[] = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Adaptability",
  "Critical Thinking",
  "Time Management",
  "Leadership",
  "Attention to Detail",
]

export const languages: string[] = ["English", "Spanish", "Persian", "Kurdish"]
