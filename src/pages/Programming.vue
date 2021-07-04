<template>
    <div class="programming" id="programming">
        <div class="wrap--start">
            <Header />
            <ProgrammingStartBlock />
        </div>
        <div class="wrap--bg">
            <div class="wrap--violet">
                <ProgrammingFeatures />
                <MathsWorld />
                <MathsComment />
                <MathsCourses />
            </div>
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
            margin-bottom: -18px;
            z-index: 3;
        }

        @media (--tablet) {
            margin-bottom: 5px;
        }

        @media (--mobile-lg) {
            margin-bottom: 11px;
        }
    }

    &--bg {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: -30px;
            width: 100%;
            height: 4315.69px;
            background-image: svg-load('../img/svg/programming_bg.svg');
            background-color: var(--cl-violet);
            background-repeat: no-repeat;
            background-position: center 200px;
            z-index: -10;

            @media (--desktop-lg) {
                height: 4015.69px;
            }

            @media (--desktop) {
                background-position: center 120px;
            }

            @media (--tablet) {
                height: 2915.69px;
                background-position: center 190px;
            }

            @media (--mobile-lg) {
                height: 3315.69px;
                background-position: center 530px;
                background-image: svg-load('../img/svg/programming_bg_sm.svg');
            }
        }
    }
}
</style>
