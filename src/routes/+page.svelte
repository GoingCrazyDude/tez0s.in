<script>
    import Profile from "$lib/components/Profile.svelte";
    let username;
    let pronouns;
    let description;
    let url;

    function setProfile(profileName) {
        switch (profileName) {
            case 'Skylan':
                username = 'Skylan';
                pronouns = 'He/Him/Any';
                description = 'meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow :3 meow'
                url = "https://raw.githubusercontent.com/GoingCrazyDude/tez0s.in/refs/heads/main/src/lib/assets/Aero.png";
                break;
            case 'Xaur':
                username = '???';
                pronouns = '???';
                description = '???';
                url = "???";
                break;
            case 'Tezos':
                username = 'Tezos';
                pronouns = 'They/Them';
                description = 'Hi! I code and stuff.';
                url = "https://raw.githubusercontent.com/GoingCrazyDude/tez0s.in/refs/heads/main/src/lib/assets/Yeezus.png";
                break;
            default:
                username = 'none';
                pronouns = 'none';
                description = 'none';
        }
    }

</script>

<style>

    .background {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        background-image: url("/img/Background.png");
    }

    .dock {
        position: absolute;
        transform: translate(-50%, 50%);
        top: 65%;
        left: 50%;
        width: 600px;
    }

    .profile {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

</style>
<Profile username={username} pronouns={pronouns} description={description} url={url} />
<div class="background w-full h-screen overflow-hidden"/>
<div class="dock grid grid-cols-3 rounded-lg backdrop-blur-xl h-44 bg-opacity-10 bg-black">
    <button class="group perspective-1000" on:click={() => setProfile('Skylan')} >
        <img class="profile rounded-2xl group-hover:rotate-3d group-hover:scale-105 transition-all duration-300 mx-auto" src="/img/Skylan.png" width="84" height="84" alt="Skylan">
        <p class="text-3xl text-white text-center">Skylan</p>
    </button>
    <button class="group perspective-1000" on:click={() => setProfile('Xaur')} >
        <img class="profile rounded-2xl group-hover:rotate-3d group-hover:scale-105 transition-all duration-300 mx-auto" src="/img/Xaur.png" width="84" height="84" alt="Xaur">
        <p class="text-3xl text-white text-center">Xaurchark</p>
    </button>
    <button class="group perspective-1000" on:click={() => setProfile('Tezos')}>
        <img class="profile rounded-2xl group-hover:rotate-3d group-hover:scale-105 transition-all duration-300 mx-auto" src="/img/Tezos.png" width="84" height="84" alt="Tezos">
        <p class="text-3xl text-white text-center">Tezos</p>
    </button>
</div>