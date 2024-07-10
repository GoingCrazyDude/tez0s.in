<script>
    import Gojo from "$lib/assets/The Strongest.mp4"
    import Heart from "$lib/assets/Heart.svg"
    import SvelteLogo from "$lib/assets/Svelte Logo.svg"
</script>
<body>
    <div class="video">
        <video src="{Gojo}" autoplay loop muted></video>
    </div>
    <!-- <img src={Yandhi} alt="Yandhi" width="300" /> -->
    <div class="shadow-lg bg-transparent z-1 backdrop-blur-xl p-6 absolute -translate-y-1/2 -translate-x-1/2 rounded-md bio text-white">
        hi, im tezos <br>
        idiot programmer, still learning <br>
        <br>
        <div>
            -> <a class="underline hover:text-sky-300" href="https://roblox.com/users/747081921/profile" target="_blank">roblox</a> <br>
            -> <a class="underline hover:text-sky-300" href="https://discord.com/users/507203871806849055" target="_blank">discord</a> <br>
            -> <a class="underline hover:text-sky-300" href="https://github.com/GoingCrazyDude" target="_blank">github</a> <br>
            -> <a class="underline hover:text-sky-300" href="https://youtube.com/channel/UCEfChwRaq082v13mPuG24_g" target="_blank">youtube</a> <br>
        </div>
    </div>
    <div class="shadow-lg bg-transparent z-1 backdrop-blur-xl p-6 absolute -translate-y-1/2 -translate-x-1/2 rounded-md footer text-white flex">
        Made with <img class="px-1 w-8 h-6" src="{Heart}" alt="love"/> with <img class="px-1 w-8 h-6" src="{SvelteLogo}" alt="svelte"/>
    </div>
</body>

