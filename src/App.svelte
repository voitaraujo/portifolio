<script lang='ts'>
  import Header from "./components/header.svelte";
  import Subheader from "./components/subheader.svelte";
  import Carrousel from "./components/stackCarrousel.svelte";
  import ExperienceContainer from "./components/experienceList.svelte";
</script>

<div
  class="
block 
h-screen w-screen 
sm:flex sm:justify-center sm:items-center sm:flex-col
bg-zinc-900
"
>
  <div
    class="
    flex overflow-hidden flex-col
    h-full w-full max-w-5xl
    overflow-x-hidden overflow-y-auto
    sm:w-auto sm:my-5
    "
  >
    <Header />
    <Subheader />
    <Carrousel />
    <ExperienceContainer />
  </div>
</div>
