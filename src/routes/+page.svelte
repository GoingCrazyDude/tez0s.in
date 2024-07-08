<script>
    // import Yandhi from "$lib/assets/yandhi.gif"
    import Gojo from "$lib/assets/The Strongest.mp4"
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&display=swap');
    * {
        background: #000000;
        font-family: "JetBrains Mono", monospace;
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    .video {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%; 
        overflow: hidden;
    }

    .video video {
         /* Make video to at least 100% wide and tall */
        min-width: 100%; 
        min-height: 100%; 

        /* Setting width & height to auto prevents the browser from stretching or squishing the video */
        width: auto;
        height: auto;

        /* Center the video */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }

    .mica {
        position: fixed;
        border-radius: 8px;
        border-width: thin;
        border-style: solid;
        -webkit-backdrop-filter: blur(40px);
        backdrop-filter: blur(40px);
        overflow-y: auto;
        box-shadow: 0px 25.6px 57.6px rgb(0 0 0 / 14%), 0px 0px 16.4px rgb(0 0 0 / 12%);
    }

    /* img {
        position: absolute;
        left: 92.5%;
        top: 85%;
        transform: translate(-50%, -50%);
    } */
    
    .bio {
        box-shadow: 5px 5px 2.5px black;
        color: #FCFAFC;
        background: #00000000;
        border-width: 4px;
        border-color: #00000000;
        border-style: solid;
        border-radius: 12px;
        padding: 2em;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    a {
        background: #00000000;
        color: #FCFAFC;
        text-decoration: underline;
    }
</style>

<body>
    <div class="video">
        <video src="{Gojo}" autoplay loop muted></video>
    </div>
    <!-- <img src={Yandhi} alt="Yandhi" width="300" /> -->
    <div class="bio mica">
        hi, im tezos <br>
        idiot programmer, still learning <br>
        <br>
        -> <a href="https://roblox.com/users/747081921/profile" target="_blank">roblox</a> <br>
        -> <a href="https://discord.com/users/507203871806849055" target="_blank">discord</a> <br>
        -> <a href="https://github.com/GoingCrazyDude" target="_blank">github</a> <br>
        -> <a href="https://youtube.com/channel/UCEfChwRaq082v13mPuG24_g" target="_blank">youtube</a> <br>
    </div>
</body>
