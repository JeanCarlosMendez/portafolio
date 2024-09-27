
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
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
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
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  },
]
