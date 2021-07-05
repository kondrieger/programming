<template>
    <div class="summer container">
        <h2 class="summer__title">Только с 21 июня по 25 августа</h2>
        <div class="summer__card">
            <div class="summer__card-text-wrap">
                <p class="summer__card-title">Летние смены</p>
                <p class="summer__card-subtitle">7–9 / 10-12 лет</p>
                <p v-if="isDesktop" class="summer__card-text">
                    Увлекательное двухмесячное погружение в мир современных digital-профессий. От программиста до
                    дизайнера
                </p>
                <a-button theme="green" text="Оставить заявку" />
            </div>
            <img class="summer__card-img" :src="require('../../img/svg/programming_summer.svg')" alt="" />
            <p v-if="!isDesktop" class="summer__card-text summer__card-text--right">
                Увлекательное двухмесячное погружение в мир современных digital-профессий. От программиста до дизайнера
            </p>
        </div>
    </div>
</template>

<script>
import AButton from '../../components/button/button.vue';

export default {
    name: 'ProgrammingSummer',
    components: { AButton },
    computed: {
        isDesktop() {
            return this.$mq.desktop;
        },
    },
};
</script>

<style>
.summer {
    padding: calc(var(--gs) * 8) 0 calc(var(--gs) * 5);

    @media (--desktop) {
        padding-top: calc(var(--gs) * 5);
    }

    @media (--tablet) {
        padding-top: calc(var(--gs) * 3);
    }

    &__title {
        margin: 0 0 calc(var(--gs) * 7) calc(var(--gs) * 7);

        @media (--desktop-lg) {
            margin-left: 0;
        }

        @media (--desktop) {
            margin-bottom: calc(var(--gs) * 3);
        }

        @media (--tablet) {
            font-size: 28px;
            margin-bottom: calc(var(--gs) * 2);
        }
    }

    &__card {
        background-color: var(--cl-violet);
        border-radius: 20px;
        padding: calc(var(--gs) * 5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        @media (--desktop) {
            padding: calc(var(--gs) * 4) calc(var(--gs) * 3);
        }

        @media (--mobile-lg) {
            flex-direction: column-reverse;
        }

        &-title {
            font-weight: 800;
            font-size: 24px;
            text-decoration-line: underline;
            margin-bottom: calc(var(--gs) * 1.5);

            @media (--tablet) {
                margin-bottom: calc(var(--gs) * 1);
                font-size: 18px;
            }
        }

        &-subtitle {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: calc(var(--gs) * 5);

            @media (--desktop) {
                margin-bottom: calc(var(--gs) * 2);
            }

            @media (--tablet) {
                font-size: 16px;
                margin-bottom: calc(var(--gs) * 1);
            }
        }

        &-text {
            font-size: 20px;
            line-height: 26px;

            @media (--desktop) {
                font-size: 16px;
                line-height: 22px;
                width: 354px;
                margin-bottom: calc(var(--gs) * 5);
            }

            @media (--tablet) {
                width: 255px;
                font-size: 14px;
                margin-bottom: calc(var(--gs) * 3);
            }

            &--right {
                max-width: 390px;

                @media (--desktop-lg) {
                    max-width: 350px;
                }
            }
        }

        &-img {
            position: absolute;
            left: 28%;
            top: -50px;

            @media (--desktop-lg) {
                left: 24%;
            }

            @media (--desktop) {
                position: relative;
                top: auto;
                left: auto;
                width: 458.75px;
                height: 325.92px;
                margin: -30px 0 -60px;
            }

            @media (--tablet) {
                width: 322.37px;
                height: 229px;

                margin-bottom: 0;
                margin-top: -20px;
            }
        }
    }
}
</style>
