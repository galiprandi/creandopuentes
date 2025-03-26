import type { Courses, Education, Experience, Publication, Skill } from "@/types/cv";

export const experiences: Experience[] = [
  {
    company: "",
    time: "2012 - Hoy",
    title: "Maestra de apoyo",
    location: "San Miguel de Tucuman, Argentina",
    description:
      "Maestra de apoyo especializada en niños con dificultades específicas de aprendizaje (DEA).",
  },
  {
    company: "Colegio Suizo",
    time: "2011 - 2012",
    title: "Maestra EGB I y II",
    location: "San Miguel de Tucuman, Argentina",
    description: "",
  },
  {
    company: "Colegio Santa Catalina",
    time: "2010 - 2011",
    title: "Maestra EGB I y II",
    location: "San Miguel de Tucuman, Argentina",
    description: "",
  },
  {
    company: "Escuela Manuel Belgrano",
    time: "2005 - 2005",
    title: "Maestra EGB I y II",
    location: "Rafaela, Sanrta Fe, Argentina",
    description: "",
  },
  {
    company: "Escuela Juán Bautista Alberdi",
    time: "2004 - 2004",
    title: "Maestra EGB I y II",
    location: "Rafaela, Sanrta Fe, Argentina",
    description: "",
  },
  {
    company: "Escuela Bartolomé Mitre",
    time: "2004 - 2004",
    title: "Maestra EGB I y II",
    location: "Rafaela, Sanrta Fe, Argentina",
    description: "",
  },
];

export const education: Education[] = [
  {
    school: "Escuela y Liceo vocacional Sarmiento U.N.T",
    time: "2002 - 2002",
    degree: "Terciario",
    location: "San Miguel de Tucuman, Argentina",
    description: "Profesorado EGB I y II",
  },
  {
    school: "Escuela y Liceo vocacional Sarmiento U.N.T",
    time: "1999 - 2001",
    degree: "Terciario",
    location: "San Miguel de Tucuman, Argentina",
    description: "Profesorado Nivel Inicial",
  },
];

export const courses: Courses[] = [
  {
    title: "Desarrollo de habilidades cognitivas en Autismo",
    organization: "Centro educativo Paulo Freire (México)",
    time: "2025",
  },
  {
    title: "Charla-Taller La dislexia: desde una mirada integral",
    organization: "Psicopedagoga clínica Josefina García",
    time: "2024",
  },
];

export const skills: Skill[] = [];

export const publications: Publication[] = [
  {
    title: "Developmental Dyslexia: A Review of Biological Interactions",
    authors: "Nandini C. Singh, Chaitra Rao",
    journal: "Annals of Dyslexia",
    time: "2019",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6851403/pdf/nihms-1029312.pdf",
    abstract: "La dislexia del desarrollo es una discapacidad específica de aprendizaje caracterizada por déficits en la lectura y la ortografía que no pueden atribuirse a baja inteligencia, escasas oportunidades educativas o discapacidades sensoriales. Es un trastorno complejo y multifacético con una base genética y una firma neurológica. Esta revisión examina las interacciones biológicas que contribuyen a la dislexia del desarrollo, centrándose en los aspectos genéticos, neuroanatómicos y neurofuncionales del trastorno.",
    language: "Inglés"
  },
  {
    title: "Dificultades de Aprendizaje en el Siglo XXI: Nuevas Perspectivas y Estrategias de Enseñanza Innovadoras",
    authors: "Maritza Encarnacion Guilca Mena, Hipatia Carolina Fernandez Fernandez, Luis Abelardo Guanoluisa Yanez, Irma Melida Aimacaña Mullo",
    journal: "Polo del Conocimiento",
    time: "Diciembre 2023",
    link: "https://dialnet.unirioja.es/descarga/articulo/9257799.pdf",
    abstract: "Este estudio examina las dificultades de aprendizaje en el siglo XXI, destacando estrategias innovadoras como la integración de TIC, la gamificación, el Aprendizaje Basado en Problemas (ABP), el Aprendizaje Colaborativo en Línea (ACOL) y las Metodologías Thinking Based Learning (TBL). La investigación enfatiza la necesidad de modernizar la educación y adaptar las metodologías tradicionales a los desafíos de la era digital.",
    language: "Español"
  }
];
