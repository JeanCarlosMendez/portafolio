
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
  TITLE: 'Trabajos',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Proyectos',
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
    position: 'Ingeniero de desarrollo',
    start: '2023',
    link: 'https://stone.com.co/',
    end: 'Current',
    tasks: [
      'Involucrado en el desarrollo de software a medida con .NET y JavaScript, creando aplicaciones personalizadas con integración fluida a través de APIs REST y SOAP. Experto en el diseño de interfaces de usuario eficientes utilizando DevExpress y Razor, y en la realización de tareas básicas en SQL Server para la gestión de datos.',
    ],
  },
  {
    company: 'ETB Colombia',
    link: 'https://etb.com/',
    location: 'Bogotá D C, Colombia',
    position: 'Analista de Soporte Técnico',
    start: '2024',
    end: '2024',
    tasks: [
      'Configuré e integré herramientas como Zabbix, Prometheus y OpenNMS para el monitoreo continuo de la infraestructura. Verifiqué la conectividad de los dispositivos, asegurando su correcto funcionamiento y disponibilidad. También brindé soporte técnico resolviendo problemas y facilitando la comunicación entre los equipos operativos.',
    ],
  },
]
