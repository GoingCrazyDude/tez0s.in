<script>
    import pfp from "$lib/assets/pfp.jpg"
    import bg from "$lib/assets/bg.mp3"

    function playAudio() {
        audio = document.getElementById("bg");
        audio.play();
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&display=swap');
    * {
        font-family: "JetBrains Mono", monospace;
        font-size: 20px;
        margin: 0;
        padding: 0;
        left: 50%;
        top: 50%;
    }

    audio {
        display: none;
    }

    body {
        display: grid;
        place-content: center;
    }

    .profile img {
        margin: 0;
        padding: 0;
        border-radius: 50%;
        height: 128px;
    }
</style>

<body>
    <div class="profile">
        <img src="{pfp}" alt="pfp"> 
        <br>tezos
        <br>idiot programmer, still learning
    </div>
    <div class="links">
        - <a href="https://roblox.com/users/747081921/profile" target="_blank">roblox</a> <br>
        - <a href="https://discord.com/users/507203871806849055" target="_blank">discord</a> <br>
        - <a href="https://github.com/GoingCrazyDude" target="_blank">github</a> <br>
        - <a href="https://youtube.com/UCEfChwRaq082v13mPuG24_g" target="_blank">youtube</a> <br>
    </div>
    <audio id="bg" src="{bg}" preload loop></audio>
</body>