<script>
    // import Yandhi from "$lib/assets/yandhi.gif"
    import Gojo from "$lib/assets/The Strongest.mp4"
    import SvelteLogo from "$lib/assets/Svelte Logo.svg"
    import Heart from "$lib/assets/Heart.svg"
</script>

<style>

</style>

<body>
    <div class="top-0 bottom-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute -translate-y-1/2 -translate-x-1/2 video" src="{Gojo}" autoplay loop muted></video>
    </div>
    <!-- <img src={Yandhi} alt="Yandhi" width="300" /> -->
    <div class="shadow-lg bg-transparent z-1 backdrop-blur-xl p-6 absolute -translate-y-1/2 -translate-x-1/2 rounded-md bio text-white">
        hi, im tezos <br>
        idiot programmer, still learning <br>
        <br>
        -> <a href="https://roblox.com/users/747081921/profile" target="_blank">roblox</a> <br>
        -> <a href="https://discord.com/users/507203871806849055" target="_blank">discord</a> <br>
        -> <a href="https://github.com/GoingCrazyDude" target="_blank">github</a> <br>
        -> <a href="https://youtube.com/channel/UCEfChwRaq082v13mPuG24_g" target="_blank">youtube</a> <br>
    </div>
    <div class="shadow-lg bg-transparent z-1 backdrop-blur-xl p-6 absolute -translate-y-1/2 -translate-x-1/2 rounded-md footer text-white">
        Made with <img src="{Heart}" height="24" width="24" alt="love"/> with <img src="{SvelteLogo}" height="24" width="24" alt="svelte"/>
    </div>
</body>
