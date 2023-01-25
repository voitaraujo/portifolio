<script lang="ts">
    import type { IExperience, ITecnologies } from "../types";

    import Logo_ReactJS from "../assets/svg/reactjs.svg";
    import Logo_Fauna from "../assets/svg/faunadb.svg";
    import Logo_MSSQL from "../assets/svg/mssql.svg";
    import Logo_MUI from "../assets/svg/mui.svg";
    import Logo_NextJS from "../assets/svg/nextjs.svg";
    import Logo_Nodejs from "../assets/svg/nodejs.svg";
    import Logo_RN from "../assets/svg/reactnative.svg";
    import Logo_Sass from "../assets/svg/sass.svg";
    import Logo_Svelte from "../assets/svg/svelte.svg";
    import Logo_Tailwind from "../assets/svg/tailwind.svg";
    import Logo_ViteJS from "../assets/svg/vitejs.svg";
    import Logo_AdonisJS from "../assets/svg/adonisjs.svg";
    import Logo_RealmDB from "../assets/svg/realm.svg";
    import Logo_JS from "../assets/svg/javascript.svg";
    import Logo_TS from "../assets/svg/typescript.svg";

    export let experience: IExperience;

    function getIcon(tec: ITecnologies) {
        switch (tec) {
            case "ReactJS":
                return Logo_ReactJS;
            case "FaunaDB":
                return Logo_Fauna;
            case "MSSQL":
                return Logo_MSSQL;
            case "MUI":
                return Logo_MUI;
            case "NextJS":
                return Logo_NextJS;
            case "NodeJS":
                return Logo_Nodejs;
            case "React Native":
                return Logo_RN;
            case "SASS":
                return Logo_Sass;
            case "Svelte":
                return Logo_Svelte;
            case "TailwindCSS":
                return Logo_Tailwind;
            case "Vite":
                return Logo_ViteJS;
            case "AdonisJS":
                return Logo_AdonisJS;
            case "RealmDB":
                return Logo_RealmDB;
            case "Javascript":
                return Logo_JS;
            case "Typescript":
                return Logo_TS;
        }
    }
</script>

<div
    class="
        flex flex-col justify-between items-start
        w-auto h-auto p-2 m-2
        rounded-md
        bg-white
        shadow-xl
        {experience.cardAlignment === 'right'
        ? 'sm:flex-row'
        : 'sm:flex-row-reverse'}
        "
>
    <img
        src={experience.projectImage}
        alt="experience image"
        class="
        w-full
        rounded-md
        cursor-pointer
        transition-all
        sm:h-60 sm:pt-2
        hover:brightness-75
    "
    />
    <div
        class="
    flex flex-col
    h-full 
    {experience.cardAlignment === 'right' ? 'sm:ml-28' : 'sm:mr-28'}"
    >
        <h3
            class="
                pt-2
                font-bold
                text-xl
                "
        >
            {experience.projectName}
        </h3>
        <p
            class="
                text-slate-500 text-justify
                pl-5 my-3 pr-2 border-neutral-400 border-l-2 h-full
                "
        >
            {experience.description}
        </p>
        <div
            class="
        flex flex-wrap
        mt-5 pb-2 pr-2 pl-2
        border-2 border-solid border-zinc-200 rounded-md
        sm:mt-auto
        "
        >
            {#each experience.tecnologies as tec}
                <span
                    class="flex items-center w-auto ml-2 pt-2 cursor-default
            "
                >
                    <img class="h-7 w-7 mr-1" src={getIcon(tec)} alt="tec icon" />
                    {tec}
                </span>
            {/each}
        </div>
    </div>
</div>
