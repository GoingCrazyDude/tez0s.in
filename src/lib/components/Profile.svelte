<script>
    import Draggable from "$lib/components/Draggable.svelte";
    export let username;
    export let pronouns;
    export let description;
    export let url;
    let isVisible = true;

    function toggleVisibility() {
        isVisible = !isVisible;
    }
</script>

<style>

    img {
        font-weight: 300;
        line-height: 2;
        text-align: center;

        display: block;
        position: relative;
    }

    img:before {
        content: "We're sorry but there is no image :(";
        display: block;
        margin-bottom: 10px;
    }

    .window {
        width: 768px;
        height: 432px;
    }

    .titlebar {
        width: 768px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 12px;
        padding-right: 12px;
        background-color: #2f2f2f;
        border-radius: 8px 8px 0 0;
    }

    .traffic-light {
        display: flex;
        gap: 8px;
    }

    .light {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }

    .neo {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .light:hover {
        opacity: 0.8;
    }

</style>

{#if isVisible}
    <Draggable>
        <div class="titlebar rounded-md bg-neutral-700 text-white z-10 flex items-center justify-between">
            <div class="traffic-light">
                <div class="light light-red bg-red-400"></div>
                <div class="light light-yellow bg-amber-400"></div>
                <div class="light light-green bg-green-500"></div>
            </div>
        </div>
        <div class="window rounded-md bg-stone-900 text-white grid drop-shadow-2xl">
            <div class="grid grid-cols-2">
                <img src={url} class="neo pt-8 pl-8" alt="profile" width="300" height="300">
                <p class="text-white pt-8">
                    Username: {username} <br>
                    Pronouns: {pronouns} <br>
                    Description: {description} <br>
                </p>
            </div>
        </div>
    </Draggable>
{/if}