<script lang="ts">
	import type { IExperience, ITecnologies } from '../types';
	import moment from 'moment'

	import Logo_AdonisJS from '../assets/svg/adonisjs.svg';
	import Logo_Fauna from '../assets/svg/faunadb.svg';
	import Logo_JS from '../assets/svg/javascript.svg';
	import Logo_MSSQL from '../assets/svg/mssql.svg';
	import Logo_MUI from '../assets/svg/mui.svg';
	import Logo_NextJS from '../assets/svg/nextjs.svg';
	import Logo_Nodejs from '../assets/svg/nodejs.svg';
	import Logo_ReactJS from '../assets/svg/reactjs.svg';
	import Logo_RN from '../assets/svg/reactnative.svg';
	import Logo_RealmDB from '../assets/svg/realm.svg';
	import Logo_Sass from '../assets/svg/sass.svg';
	import Logo_Svelte from '../assets/svg/svelte.svg';
	import Logo_Tailwind from '../assets/svg/tailwind.svg';
	import Logo_TS from '../assets/svg/typescript.svg';
	import Logo_ViteJS from '../assets/svg/vitejs.svg';

	export let experience: IExperience;

	function getIcon(tec: ITecnologies) {
		switch (tec) {
			case 'ReactJS':
				return Logo_ReactJS;
			case 'FaunaDB':
				return Logo_Fauna;
			case 'MSSQL':
				return Logo_MSSQL;
			case 'MUI':
				return Logo_MUI;
			case 'NextJS':
				return Logo_NextJS;
			case 'NodeJS':
				return Logo_Nodejs;
			case 'React Native':
				return Logo_RN;
			case 'SASS':
				return Logo_Sass;
			case 'Svelte':
				return Logo_Svelte;
			case 'TailwindCSS':
				return Logo_Tailwind;
			case 'Vite':
				return Logo_ViteJS;
			case 'AdonisJS':
				return Logo_AdonisJS;
			case 'RealmDB':
				return Logo_RealmDB;
			case 'Javascript':
				return Logo_JS;
			case 'Typescript':
				return Logo_TS;
		}
	}
</script>

<div
	class="
        m-2 flex h-auto w-auto
        flex-col items-start justify-between rounded-md
        bg-white
        p-2
        shadow-xl
        {experience.cardAlignment === 'right'
		? 'sm:flex-row'
		: 'sm:flex-row-reverse'}
        "
>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		src={experience.projectImage}
		alt="experience image"
		data-type="image"
		class="
				interactible

				cursor-pointer
        w-full
        rounded-md
        transition-all
				brightness-90
        hover:brightness-100
				sm:mt-2 sm:h-60
    "
	/>
	<div
		class="
    flex h-full
    flex-col 
    {experience.cardAlignment === 'right' ? 'md:ml-28' : 'md:mr-28'}
    {experience.cardAlignment === 'right' ? 'sm:ml-10' : 'sm:mr-10'}
    "
	>
		<h3 class=" pt-2 text-xl font-bold ">
			{experience.projectName} [{experience.status}]
		</h3>
		<span
			class="
		font-light 
		ml-6
		{experience.status === 'finished'
				? 'text-green-300'
				: experience.status === 'standby'
				? 'text-yellow-300'
				: experience.status === 'ongoing'
				? 'text-blue-300'
				: 'text-slate-300'}
		"
		>
			{moment(experience.updatedAt, 'DD-MM-YYYY').fromNow()}</span
		>
		<p
			class=" my-3 h-full border-l-2 border-neutral-400 pl-5 pr-2 text-justify text-slate-500 "
		>
			{experience.description}
		</p>
		<div
			class=" mt-5 flex flex-wrap rounded-md border-2 border-solid border-zinc-200 pb-2 pr-2 pl-2 sm:mt-auto "
		>
			{#each experience.tecnologies as tec}
				<span class="ml-2 flex w-auto cursor-default items-center pt-2 ">
					<img class="mr-1 h-7 w-7" src={getIcon(tec)} alt="tec icon" />
					{tec}
				</span>
			{/each}
		</div>
	</div>
</div>
