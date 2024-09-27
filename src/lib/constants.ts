
import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/JeanCarlosMendez',
  linkedin: 'https://www.linkedin.com/in/jean-carlos-mendez-7ab547291/',
  mail: 'mailto:jeancarlosmendez983@gmail.com',
  youtube: 'https://www.youtube.com/@Costagrammer',
  instagram: 'https://www.instagram.com/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Software',
    institution: 'SENA',
    link: 'https://oferta.senasofiaplus.edu.co/',
    date: '2022 - 2024',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2021 - 2023',
  },
  {
    title: 'Java - SpringBoot',
    institution: 'Alura Latam',
    link: 'https://www.aluracursos.com/',
    date: '2023 - 2023',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2020 - 2024',
  },
]

export const EXPERIENCE = [
  {
    company: 'Stone Colombia',
    location: 'Bogotá D C, Colombia',
    position: 'Software Engineer',
    start: '2023',
    link: 'https://stone.com.co/',
    end: 'Current',
    tasks: [
      'Involved in custom software development with .NET and JavaScript, creating tailored applications with seamless integration through REST and SOAP APIs. Experienced in designing efficient user interfaces using DevExpress and Razor, and performing basic tasks in SQL Server for data management.',
    ],
  },
  {
    company: 'ETB Colombia',
    link: 'https://etb.com/',
    location: 'Bogotá D C, Colombia',
    position: 'Technical Support Analyst',
    start: '2024',
    end: '2024',
    tasks: [
      'Configured and integrated tools like Zabbix, Prometheus, and OpenNMS for continuous infrastructure monitoring. Verified device connectivity, ensuring proper operation and availability. Also provided technical support by resolving issues and facilitating communication between operational teams.',
    ],
  },
]
