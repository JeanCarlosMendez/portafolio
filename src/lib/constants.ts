
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
  TITLE: 'CostaGrammer | Ingeniero de Software',
  DESCRIPTION:
    'Portafolio de Jean Carlos Mendez: desarrollo backend y full stack con C#, .NET, APIs REST y SQL Server.',
  AUTHOR: 'Jean Carlos Mendez',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Experiencia profesional',
  DESCRIPTION: 'Experiencia de Jean Carlos Mendez en desarrollo de software y soporte tecnológico.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Contenido sobre desarrollo de software.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Proyectos',
  DESCRIPTION: 'Áreas y soluciones en las que trabajo como ingeniero de software.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Buscar',
  DESCRIPTION: 'Buscar contenido por palabra clave.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Analista y desarrollador de software',
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
    company: 'STONE Colombia',
    location: 'Remoto, Colombia',
    position: 'Ingeniero de desarrollo de software',
    positionEn: 'Software Development Engineer',
    start: 'Oct 2023',
    link: 'https://stone.com.co/',
    end: 'Actualidad',
    endEn: 'Present',
    tasks: [
      'Desarrollo y mantenimiento de aplicaciones empresariales con C#, .NET 8 y .NET Framework.',
      'Implementación de interfaces con ASP.NET Core MVC, Razor, JavaScript, DevExpress y DevExtreme.',
      'Integración de APIs REST y SOAP, acceso a SQL Server mediante ADO.NET y procedimientos almacenados.',
      'Participación en seguridad de aplicaciones, autenticación, sesiones y despliegues en IIS.',
    ],
  },
  {
    company: 'ETB Colombia',
    link: 'https://etb.com/',
    location: 'Híbrido, Colombia',
    position: 'Analista de Monitoreo y Soporte Técnico',
    positionEn: 'Monitoring and Technical Support Analyst',
    start: 'Abr 2024',
    end: 'Oct 2024',
    endEn: 'Oct 2024',
    tasks: [
      'Configuración e integración de Zabbix, Prometheus y OpenNMS para monitoreo de infraestructura.',
      'Validación de conectividad, disponibilidad de dispositivos y atención de incidentes técnicos.',
    ],
  },
]
