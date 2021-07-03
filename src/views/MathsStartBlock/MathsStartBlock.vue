<template>
    <div class="container start-block">
        <div class="start-block__text">
            <h2 class="start-block__text-title">В будущее без машины времени</h2>
            <p class="start-block__text-subtitle">Увлекательные курсы математики, которые влюбляют детей в предмет</p>
            <a-button v-if="isTablet" theme="violet" text="Полетели!" />
            <img
                class="start-block__text-image--triangle"
                :src="require('../../img/svg/triangle_man.svg')"
                alt="Алгоритмика математика логотип"
            />
            <img
                class="start-block__text-image--birdman"
                :src="require('../../img/svg/bird_man.svg')"
                alt="Алгоритмика математика логотип"
            />
        </div>
        <submit-form v-if="!isTablet" />
    </div>
</template>

<script>
import SubmitForm from '../../components/submit-form/submit-form.vue';
import AButton from '../../components/button/button.vue';

export default {
    name: 'Maths',

    components: { SubmitForm, AButton },
    computed: {
        isTablet() {
            return this.$mq.tablet;
        },
    },
};
</script>

<style>
.start-block {
    padding: calc(var(--gs) * 3) 0;
    display: flex;
    justify-content: space-between;

    @media (--desktop) {
        padding: calc(var(--gs) * 1) 0;
    }
    @media (--tablet) {
        padding-top: calc(var(--gs) * 4);
    }

    &__text {
        position: relative;
        padding-top: calc(var(--gs) * 1);

        @media (--desktop) {
            padding-top: calc(var(--gs) * 8);
        }

        @media (--tablet) {
            padding-top: 0;
        }

        &-title {
            margin-bottom: calc(var(--gs) * 3.5);
            max-width: 450px;

            @media (--desktop) {
                max-width: 350px;
                margin-bottom: calc(var(--gs) * 2.5);
            }

            @media (--tablet) {
                max-width: 300px;
            }

            @media (--mobile-lg) {
                max-width: 220px;
            }
        }

        &-subtitle {
            font-size: 24px;
            max-width: 460px;
            margin-bottom: calc(var(--gs) * 2);

            @media (--desktop) {
                max-width: 410px;
            }

            @media (--tablet) {
                max-width: 280px;
                font-size: 16px;
                line-height: 1.5;
            }

            @media (--mobile-lg) {
                max-width: 250px;
            }
        }

        &-image {
            &--triangle {
                position: absolute;
                width: 359px;
                height: 351px;
                top: 230px;
                left: 320px;
                transform: rotate(-6.35deg);

                @media (--desktop-lg) {
                    left: 220px;
                }

                @media (--desktop) {
                    left: 95px;
                    top: 290px;
                }

                @media (--tablet) {
                    width: 326.38px;
                    height: 319.1px;
                    left: 280px;
                    top: 112.64px;

                    transform: rotate(10.16deg);
                }

                @media (--mobile-lg) {
                    width: 242.68px;
                    height: 237.27px;
                    left: -22.8px;
                    top: 242.16px;

                    transform: rotate(-7.34deg);
                }
            }
            &--birdman {
                position: absolute;
                width: 119px;
                height: 113px;
                top: 444px;
                left: 37px;
                transform: rotate(21.22deg);

                @media (--desktop-lg) {
                    left: 30px;
                    top: 364px;
                }

                @media (--desktop) {
                    left: -30px;
                    top: 364px;
                }

                @media (--tablet) {
                    width: 85.98px;
                    height: 83.63px;
                    left: 350px;
                    top: -30px;
                }

                @media (--tablet) {
                    width: 101.37px;
                    height: 96.94px;
                    left: 220.17px;
                    top: 346.45px;

                    transform: rotate(21.91deg);
                }
            }
        }
    }
}
</style>
