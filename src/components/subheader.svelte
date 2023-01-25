<script lang='ts'>
    import linkedin from "../assets/svg/linkedin.svg";
    import mail from "../assets/svg/mail.svg";
</script>

<div
    class="
    flex flex-row justify-center items-center text-center flex-wrap
    w-full pb-1
    bg-teal-500
    border-b-2
    "
>
    <a
        href="mailto:voitilaaraujo@gmail.com"
        class="
        flex items-center 
        whitespace-nowrap 
        transition-all duration-150 ease-in-out
         hover:text-blue-700 hover:underline
        "
    >
        <img src={mail} alt="📧" class="h-5 mr-1" />voitilaaraujo@gmail
    </a>
    <a
        href="https://www.linkedin.com/in/voitila-araujo/"
        class="
        flex items-center 
        whitespace-nowrap 
        ml-3 
        transition-all duration-150 ease-in-out
         hover:text-blue-700 hover:underline
        "
        target="_blank"
        rel="noreferrer"
    >
        <img src={linkedin} alt="🔗" class="h-5 mr-1" />/voitila-araujo
    </a>
</div>
