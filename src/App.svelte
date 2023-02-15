<script lang="ts">
	import Header from './components/header.svelte';
	import Subheader from './components/subheader.svelte';
	import Carrousel from './components/stackCarrousel.svelte';
	import ExperienceContainer from './components/experienceList.svelte';
	import MouseTrailer from './components/mouseTrailer.svelte';

	let mousePosition = { x: 0, y: 0 };
	let mouseHoverInteractableElement = null;

	function handleMousemove(event) {
		mousePosition.x = event.clientX;
		mousePosition.y = event.clientY;

		mouseHoverInteractableElement = event.target.closest(".interactible")
	}
</script>

<div
	class="
block 
h-screen w-screen 
bg-zinc-900 sm:flex sm:flex-col sm:items-center
sm:justify-center
[&_#trailer]:hover:opacity-100
"
on:mousemove={handleMousemove}
>
	<div
		class="
    flex h-full w-full
    max-w-5xl flex-col overflow-hidden
    overflow-y-auto overflow-x-hidden
    rounded-none
    sm:my-5 sm:w-full sm:rounded
    "
	>
	<MouseTrailer m={mousePosition} i={mouseHoverInteractableElement}/>
		<Header />
		<Subheader />
		<Carrousel />
		<ExperienceContainer />
	</div>
</div>
