<script>
	import Logo_ReactJS from '../assets/svg/reactjs.svg';
	import Logo_Fauna from '../assets/svg/faunadb.svg';
	import Logo_MSSQL from '../assets/svg/mssql.svg';
	import Logo_MUI from '../assets/svg/mui.svg';
	import Logo_NextJS from '../assets/svg/nextjs.svg';
	import Logo_Nodejs from '../assets/svg/nodejs.svg';
	import Logo_RN from '../assets/svg/reactnative.svg';
	import Logo_Sass from '../assets/svg/sass.svg';
	import Logo_Svelte from '../assets/svg/svelte.svg';
	import Logo_Tailwind from '../assets/svg/tailwind.svg';
	import Logo_ViteJS from '../assets/svg/vitejs.svg';
	import Logo_AdonisJS from '../assets/svg/adonisjs.svg';
	import Logo_RealmDB from '../assets/svg/realm.svg';
	import Logo_JS from '../assets/svg/javascript.svg';
	import Logo_TS from '../assets/svg/typescript.svg';

	const icons = [
		Logo_ReactJS,
		Logo_Fauna,
		Logo_MSSQL,
		Logo_MUI,
		Logo_NextJS,
		Logo_Nodejs,
		Logo_RN,
		Logo_Sass,
		Logo_Svelte,
		Logo_Tailwind,
		Logo_ViteJS,
		Logo_AdonisJS,
		Logo_RealmDB,
		Logo_JS,
		Logo_TS,
	];
</script>

<div
	class="
    flex
    w-max bg-slate-200
    py-4
    "
>
	<div class=" flex items-center h-24 w-full animate-slide bg-slate-200 sm:h-28">
		{#each icons as i}
			<img
				class="m-4 h-24 w-24 blur-sm transition-all hover:blur-none"
				src={i}
				alt="logo"
			/>
		{/each}
	</div>
	<div class=" flex items-center h-24 w-full animate-slide bg-slate-200 sm:h-28">
		{#each icons as i}
			<img
				class="m-4 h-24 w-24 blur-sm transition-all hover:blur-none"
				src={i}
				alt="logo"
			/>
		{/each}
	</div>
</div>
