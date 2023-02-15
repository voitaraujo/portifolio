<script lang="ts">
	import linkedin from '../assets/svg/linkedin.svg';
	import mail from '../assets/svg/mail.svg';
</script>

<div
	class="bg-teal-500 pb-1 flex w-full flex-row flex-wrap items-center justify-center text-center "
>
	<a
		href="mailto:voitilaaraujo@gmail.com"
		data-type="link"
		class="interactible flex items-center whitespace-nowrap transition-all duration-150 ease-in-out hover:text-blue-700 hover:underline"
	>
		<img src={mail} alt="📧" class="mr-1 h-5" />voitilaaraujo@gmail
	</a>
	<a
		href="https://www.linkedin.com/in/voitila-araujo/"
		data-type="link"
		class="interactible ml-3 flex items-center whitespace-nowrap transition-all duration-150 ease-in-out hover:text-blue-700 hover:underline"
		target="_blank"
		rel="noreferrer"
	>
		<img src={linkedin} alt="🔗" class="mr-1 h-5" />/voitila-araujo
	</a>
</div>
