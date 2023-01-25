export interface IExperience {
    projectImage: string
    projectName: string
    tecnologies: ITecnologies[]
    description: string
    titleColor?: string
    cardAlignment: 'right' | 'left'
}

export type ITecnologies =  IFront | IBack | IDB | IOthers

type IFront = 'ReactJS' | 'React Native' | 'TailwindCSS' | 'MUI' | 'Svelte' | 'SASS'
type IBack = 'NodeJS' | 'AdonisJS' | 'NextJS'
type IDB = 'MSSQL' | 'FaunaDB' | 'RealmDB'
type IOthers = 'Vite' | 'Typescript' | 'Javascript'