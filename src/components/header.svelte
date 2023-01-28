<script lang="ts">
	import PFP from '../assets/images/annon_profile_icon.png';
	import github from '../assets/svg/github.svg';
</script>

<header
	class="
    flex h-60 w-full 
    flex-col-reverse
    flex-nowrap items-center
    justify-center bg-teal-500 py-10 sm:h-44
    sm:flex-row sm:justify-between sm:px-40
    "
>
	<div
		class="
    mr-0
    sm:mr-10 sm:pt-0
    "
	>
		<h1
			class="
        whitespace-nowrap text-2xl font-bold antialiased
         sm:subpixel-antialiased 
    "
		>
			Voitila Pereira de Araújo
		</h1>
		<a
			href="https://github.com/voitaraujo"
			target="_blank"
			rel="noreferrer"
			class="
        flex w-fit 
        items-center 
        whitespace-nowrap
        transition-all duration-150 ease-in-out
         hover:text-blue-700 hover:underline
        "
		>
			<img src={github} alt="👨🏽‍💻" />
			voitaraujo
		</a>
	</div>
	<img src={PFP} alt="my pfp" class="h-28" />
</header>
