export const profile = {
	fullName: 'Crendo Puentes',
	title: '',
	institute: '',
	author_name: 'María de los Ángeles Celiz', // Author name to be highlighted in the papers section
	research_areas: [
		//  { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'mariadelosangelesceliz@gmail.com',
	linkedin: 'https://www.linkedin.com/in/mar%C3%ADa-de-los-angeles-celiz-a00451276/',
	x: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Creando Puentes',
	default_description: 'Creando Puentes es un blog dirigido a padres y docentes de niños con dificultades específicas de aprendizaje (DEA).',
	default_image: '/images/astro-academia.png',
}
