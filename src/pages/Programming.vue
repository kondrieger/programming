<template>
    <div class="programming" id="programming">
        <div class="wrap--start">
            <Header />
            <ProgrammingStartBlock />
        </div>
        <div class="wrap--bg">
            <div class="wrap--violet">
                <ProgrammingFeatures />
                <ProgrammingWorld />
                <ProgrammingComment />
                <ProgrammingSummer />
                <ProgrammingCourses />
            </div>
        </div>
        <ProgrammingClaim />
        <ProgrammingRoadmap />
    </div>
</template>

<script>
import Header from '../components/header/header-programming.vue';
import ProgrammingStartBlock from '../views/ProgrammingStartBlock/ProgrammingStartBlock.vue';
import ProgrammingFeatures from '../views/ProgrammingFeatures/ProgrammingFeatures.vue';
import ProgrammingWorld from '../views/ProgrammingWorld/ProgrammingWorld.vue';
import ProgrammingComment from '../views/ProgrammingComment/ProgrammingComment.vue';
import ProgrammingSummer from '../views/ProgrammingSummer/ProgrammingSummer.vue';
import ProgrammingCourses from '../views/ProgrammingCourses/ProgrammingCourses.vue';
import ProgrammingClaim from '../views/ProgrammingClaim/ProgrammingClaim.vue';
import ProgrammingRoadmap from '../views/ProgrammingRoadmap/ProgrammingRoadmap.vue';

export default {
    name: 'Maths',

    components: {
        Header,
        ProgrammingStartBlock,
        ProgrammingFeatures,
        ProgrammingWorld,
        ProgrammingComment,
        ProgrammingSummer,
        ProgrammingCourses,
        ProgrammingClaim,
        ProgrammingRoadmap,
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
            height: 5000px;
            background-image: svg-load('../img/svg/programming_bg.svg');
            background-color: var(--cl-violet);
            background-repeat: no-repeat;
            background-position: center 100px;
            z-index: -110;

            @media (--desktop-lg) {
                height: 4815px;
            }

            @media (--desktop) {
                background-position: center 20px;
            }

            @media (--tablet) {
                height: 3915.69px;
                background-position: center 45px;
            }

            @media (--mobile-lg) {
                height: 6015.69px;
                background-position: center 500px;
                background-image: svg-load('../img/svg/programming_bg_sm.svg');
            }
        }
    }
}
</style>
