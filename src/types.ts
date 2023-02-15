export interface IExperience {
	projectImage: string | null;
	projectName: string;
	tecnologies: ITecnologies[];
	description: string;
	cardAlignment: 'right' | 'left';
	status: 'finished' | 'standby' | 'ongoing';
	updatedAt: Date;
	titleColor?: string;
	githubRepositoryLink?: string;
}

export type ITecnologies = IFront | IBack | IDB | IOthers;

type IFront =
	| 'ReactJS'
	| 'React Native'
	| 'TailwindCSS'
	| 'MUI'
	| 'Svelte'
	| 'SASS';
type IBack = 'NodeJS' | 'AdonisJS' | 'NextJS';
type IDB = 'MSSQL' | 'FaunaDB' | 'RealmDB';
type IOthers = 'Vite' | 'Typescript' | 'Javascript';
