<script lang="ts">
    import PFP from "../assets/images/annon_profile_icon.png";
    import github from "../assets/svg/github.svg";
</script>

<header
    class="
    flex flex-col-reverse flex-nowrap 
    w-full h-60 py-10
    justify-center items-center
    bg-teal-500
    sm:flex-row sm:justify-between sm:px-40 sm:h-44
    "
>
    <div
        class="
    mr-0
    sm:pt-0 sm:mr-10
    "
    >
        <h1
            class="
        antialiased text-2xl whitespace-nowrap font-bold
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
        flex items-center 
        whitespace-nowrap 
        w-fit
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
