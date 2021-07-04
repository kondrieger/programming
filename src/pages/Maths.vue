<template>
    <div class="maths" id="maths">
        <Header />
        <MathsStartBlock />
        <MathFeatures />
        <MathsWorld />
        <MathsComment />
        <MathsCourses />
        <MathsClaim />
        <MathsRoadmap />
    </div>
</template>

<script>
import Header from '../components/header/header-maths.vue';
import MathsStartBlock from '../views/StartBlock/MathsStartBlock.vue';
import MathFeatures from '../views/MathsFeatures/MathsFeatures.vue';
import MathsWorld from '../views/MathsWorld/MathsWorld.vue';
import MathsComment from '../views/MathsComment/MathsComment.vue';
import MathsCourses from '../views/MathsCourses/MathsCourses.vue';
import MathsClaim from '../views/MathsClaim/MathsClaim.vue';
import MathsRoadmap from '../views/MathsRoadmap/MathsRoadmap.vue';

export default {
    name: 'Maths',

    components: {
        Header,
        MathsStartBlock,
        MathFeatures,
        MathsWorld,
        MathsComment,
        MathsCourses,
        MathsClaim,
        MathsRoadmap,
    },
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
        height: 4315.69px;
        background-image: svg-load('../img/svg/math_bg.svg');
        background-repeat: no-repeat;
        background-position: center center;
        z-index: -100;

        @media (--desktop-lg) {
            height: 4015.69px;
            background-position: center 33px;
        }

        @media (--desktop) {
            background-position: center 73px;
        }

        @media (--tablet) {
            height: 2915.69px;
            background-position: center -206px;
        }

        @media (--mobile-lg) {
            height: 3315.69px;
            background-position: center -15px;
            background-image: svg-load('../img/svg/math_bg_sm.svg');
        }
    }
}
</style>
