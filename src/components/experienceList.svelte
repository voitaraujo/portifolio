<script lang="ts">
	import ExperienceItem from './experienceItem.svelte';
	import type { IExperience } from '../types';
	import data from '../stack.json'

	const exp: IExperience[] = data as IExperience[]
</script>

<div class="flex h-auto w-full flex-col bg-slate-200">
	{#each exp as xp}
		<ExperienceItem experience={xp} />
	{/each}
</div>
