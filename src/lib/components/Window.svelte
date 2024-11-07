<script>
    import Draggable from "$lib/components/Draggable.svelte";
    export let WindowName;

    let isVisible = true;

    function closeWindow() {
        isVisible = false;
    }
</script>

<style>
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

    .light:hover {
        opacity: 0.8;
    }
</style>

{#if isVisible}
    <Draggable>
        <div id="window" class="window rounded-md bg-stone-900 text-white grid">
            <div class="titlebar rounded-md bg-neutral-700 text-white z-10 border-cyan-200 flex items-center justify-between">
                <div class="traffic-light">
                    <button class="close" on:click={closeWindow}>  <!-- Add click handler here -->
                        <div class="light light-red bg-red-400"></div>
                    </button>
                    <div class="light light-yellow bg-amber-400"></div>
                    <div class="light light-green bg-green-500"></div>
                </div>
                <div class="text-white font-semibold">{WindowName}</div>
            </div>
    </Draggable>
{/if}