<script lang="ts">
    import ExperienceItem from "./experienceItem.svelte";
    import SLWEB_Image from '../assets/images/slweb.png'
    import type { IExperience } from "../types";

    let exp: IExperience[] = [];

    exp.push({
        projectName: "SLWEB",
        tecnologies: ['Javascript', "ReactJS", 'AdonisJS', 'MUI','MSSQL'],
        description: `Aplicação para gestão de uma franquia de máquinas automáticas de café, contando com vários módulos e dividida em um frontend & backend. Dentre as utilidades do projeto temos a geração de PDFs, Excels e QR codes, envio de e-mails em massa, compartilhamento de arquivos com base em "roles", CRUD em múltiplos bancos de dados e consumo de APIs externas.`,
        projectImage: SLWEB_Image,
        cardAlignment: "right"
    });

    exp.push({
        projectName:'KeepMyLink [ongoing]',
        tecnologies: ['Typescript', 'NextJS', 'SASS', 'FaunaDB'],
        description: `Aplicação destinada a disponibilizar uma forma simples e anônima de salvar/compartilhar links sem ser preciso recorrer a uma aplicação nativa, como Notion, Obsidian ou o próprio bloco de notas do celular. Nela é feito o uso de um banco de dados online, não relacional, otimizado para trabalhar com aplicações SSR. Para obter a "preview" de cada link, é feito o "scrapping" na página destino com o uso de um headless browser.`,
        projectImage: SLWEB_Image,
        cardAlignment: 'left'
    })

    exp.push({
        projectName:'Accountant [standby]',
        tecnologies: ['Typescript','React Native', 'RealmDB'],
        description: "Aplicativo desenvolvido por motivações pessoais, sua proposta é manter controle das finanças que possuem entradas e saídas de diversos centros de custo. No momento o desenvolvimento está pausado enquanto estudo uma opção de banco de dados alternativa.",
        projectImage: SLWEB_Image,
        cardAlignment: 'right'
    })

    exp.push({
        projectName:'This portifólio',
        tecnologies: ['Typescript','Svelte', 'TailwindCSS', 'Vite'],
        description: "Alguma breve descrição aqui sobre esse projeto e minha experiencia desenvolvendo e trabalhando no projeto no geral",
        projectImage: SLWEB_Image,
        cardAlignment: 'left'
    })
</script>

<div
    class="
    flex flex-col 
    w-full h-auto
    bg-slate-200
    "
>
    {#each exp as xp}
        <ExperienceItem experience={xp} />
    {/each}
</div>
