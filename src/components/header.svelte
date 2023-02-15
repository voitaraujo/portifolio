<script lang="ts">
	import PFP from '../assets/images/annon_profile_icon.png';
	import github from '../assets/svg/github.svg';
</script>

<header
	class="
    flex h-60 w-full 
    flex-col-reverse
    flex-nowrap items-center
    justify-center bg-teal-500 py-10 
		sm:h-44 
		sm:flex-row 
		sm:justify-between 
		sm:px-40
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
			text-zinc-900
        whitespace-nowrap text-2xl font-bold antialiased
         sm:subpixel-antialiased 
    "
		>
			Voitila Pereira de Araújo
		</h1>
		<a
			href="https://github.com/voitaraujo"
			data-type="link"
			target="_blank"
			rel="noreferrer"
			class="
			interactible


        flex w-fit 
        items-center 
        whitespace-nowrap
				text-neutral-700
				mt-1
        transition-all duration-150 ease-in-out
         hover:text-blue-700 hover:underline
        "
		>
			<img src={github} alt="👨🏽‍💻" />
			voitaraujo
		</a>
	</div>
	<img 
	src='https://github.com/voitaraujo.png' 
	alt="my pfp" 
	data-type="image"
	class="interactible h-28 rounded-full shadow-2xl sm:h-36 sm:shadow-lg" 
	/>
</header>
