<script>
    import Yandhi from "$lib/assets/yandhi.gif"
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&display=swap');
    * {
        background: #FCFAFC;
        font-family: "JetBrains Mono", monospace;
        font-size: 20px;
        margin: 0;
        padding: 0;
        left: 50%;
        top: 50%;
    }

    img {
        position: absolute;
        left: 92.25%;
        top: 85%;
        transform: translate(-50%, -50%);
    }
    
    .bio {
        box-shadow: 5px 5px 2.5px black;
        color: #FCFAFC;
        background: #DDCDC1;
        border-width: 4px;
        border-color: #DDCDC1;
        border-style: solid;
        border-radius: 12px;
        padding: 2em;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    a {
        background: #DDCDC1;
        color: #FCFAFC;
        text-decoration: underline;
    }
</style>

<body>
    <div class="blur">
        <img src={Yandhi} alt="Yandhi" width="300" />
    </div>
    <div class="bio">
        hi, im tezos <br>
        idiot programmer, still learning <br>
        <br>
        -> <a href="https://roblox.com/users/747081921/profile" target="_blank">roblox</a> <br>
        -> <a href="https://discord.com/users/507203871806849055" target="_blank">discord</a> <br>
        -> <a href="https://github.com/GoingCrazyDude" target="_blank">github</a> <br>
        -> <a href="https://youtube.com/UCEfChwRaq082v13mPuG24_g" target="_blank">youtube</a> <br>
    </div>
</body>
