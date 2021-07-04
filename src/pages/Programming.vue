<template>
    <div class="programming" id="programming">
        <div class="wrap--start">
            <Header />
            <ProgrammingStartBlock />
        </div>
        <div class="wrap--violet">
            <ProgrammingFeatures />
            <MathsWorld />
            <MathsComment />
            <MathsCourses />
        </div>
        <MathsClaim />
        <MathsRoadmap />
    </div>
</template>

<script>
import Header from '../components/header/header-programming.vue';
import ProgrammingStartBlock from '../views/ProgrammingStartBlock/ProgrammingStartBlock.vue';
import ProgrammingFeatures from '../views/ProgrammingFeatures/ProgrammingFeatures.vue';
import MathsWorld from '../views/MathsWorld/MathsWorld.vue';
import MathsComment from '../views/MathsComment/MathsComment.vue';
import MathsCourses from '../views/MathsCourses/MathsCourses.vue';
import MathsClaim from '../views/MathsClaim/MathsClaim.vue';
import MathsRoadmap from '../views/MathsRoadmap/MathsRoadmap.vue';

export default {
    name: 'Maths',

    components: {
        Header,
        ProgrammingStartBlock,
        ProgrammingFeatures,
        MathsWorld,
        MathsComment,
        MathsCourses,
        MathsClaim,
        MathsRoadmap,
    },
};
</script>

<style scoped>
.wrap {
    &--start {
        @media (--desktop) {
            position: relative;
            overflow: hidden;
            margin-bottom: -46px;
            z-index: 3;
        }

        @media (--tablet) {
            margin-bottom: -24px;
        }

        @media (--mobile-lg) {
            margin-bottom: -20px;
        }
    }

    &--violet {
        background-color: var(--cl-violet);
    }
}
.programming {
    position: relative;

    &::before {
        /* content: ''; */
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
