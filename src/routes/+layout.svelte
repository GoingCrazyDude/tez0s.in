<script>
    import "../app.css";
    import Background from "$lib/assets/img/Background.png"
</script>
<style>
    .background {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        background-image: url("https://github.com");
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
</style>

<div class="background"/>

<slot />
