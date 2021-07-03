<template>
    <div class="maths" id="maths">
        <Header />
        <MathsStartBlock />
        <MathFeatures />
        <MathsWorld />
    </div>
</template>

<script>
import Header from '../components/header/header.vue';
import MathsStartBlock from '../views/MathsStartBlock/MathsStartBlock.vue';
import MathFeatures from '../views/MathsFeatures/MathsFeatures.vue';
import MathsWorld from '../views/MathsWorld/MathsWorld.vue';

export default {
    name: 'Maths',

    components: { Header, MathsStartBlock, MathFeatures, MathsWorld },
};
</script>

<style scoped>
.maths {
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -30px;
        width: 100%;
        width: 100%;
        height: 4315.69px;
        background-image: svg-load('../img/svg/math_bg.svg');
        background-repeat: no-repeat;
        background-position: center center;
        z-index: -100;

        @media (--desktop-lg) {
            height: 3215.69px;
            background-position: center 33px;
        }

        @media (--desktop) {
            background-position: center 73px;
        }

        @media (--tablet) {
            background-position: center -206px;
        }

        @media (--mobile-lg) {
            background-position: center 57px;
            background-image: svg-load('../img/svg/math_bg_sm.svg');
        }
    }
}
</style>
