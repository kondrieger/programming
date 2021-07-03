<template>
    <div class="world__wrap">
        <div class="container">
            <div class="world">
                <h2 class="world__title">Учитесь в школе международного уровня</h2>
                <img class="world__map" :src="require('../../img/svg/map_white.svg')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.world {
    padding: calc(var(--gs) * 8) 0;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__wrap {
        position: relative;
        width: 100%;
        background: transparent;
        display: flex;
    }

    &__title {
        margin: 0 auto;
        max-width: 80%;
        padding-bottom: calc(var(--gs) * 6.5);
    }
}
</style>
