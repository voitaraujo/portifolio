<script lang="ts">
	export let m;
	export let i;

	import LinkIcon from '../assets/svg/link.svg'
	import ImageIcon from '../assets/svg/image.svg'

	let trailer: HTMLElement;
	let trailerIcon: HTMLElement;

	$: if (trailer && trailerIcon) {
		const newX = m.x ? m.x -  (i !== null ? trailer.offsetWidth - 60 : trailer.offsetWidth / 2) : 0;
		const newY = m.y ? m.y -  (i !== null ? trailer.offsetHeight - 60 : trailer.offsetHeight / 2) : 0;

		const keyframes = {
			transform: `translate(${newX}px, ${newY}px) scale(${i !== null ? 2 : 1})`,
		};

		trailer.animate(keyframes, {
			duration: 800,
			fill: 'forwards',
		});

		if (i !== null) {
			switch (i.dataset.type) {
				case 'image':
					trailerIcon.innerHTML = `<img src='${ImageIcon}' class="w-[20px] h-[20px]"/>`;
					break;
				case 'link':
					trailerIcon.innerHTML = `<img src='${LinkIcon}' class="w-[20px] h-[20px]"/>`;
					break;
				default:
				trailerIcon.innerHTML = '';
				break;
			}
		} else {
			trailerIcon.innerHTML = '';
		}
	}
</script>

<div
	bind:this={trailer}
	id="trailer"
	class="ease pointer-events-none fixed left-0 top-0 z-[999] flex h-[30px] w-[30px] cursor-none items-center justify-center rounded-full bg-white opacity-0 transition-opacity delay-500 shadow-2xl border border-neutral-400"
>
	<i bind:this={trailerIcon} id="trailer-icon" />
</div>
