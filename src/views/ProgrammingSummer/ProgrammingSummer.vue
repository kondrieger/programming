<template>
    <div class="summer container">
        <h2 class="summer__title">Только с 21 июня по 25 августа</h2>
        <div class="summer__card">
            <div class="">
                <p class="summer__card-title">Летние смены</p>
                <p class="summer__card-subtitle">7–9 / 10-12 лет</p>
                <p v-if="isTablet" class="summer__card-text">
                    Увлекательное двухмесячное погружение в мир современных digital-профессий. От программиста до
                    дизайнера
                </p>
                <a-button theme="green" text="Оставить заявку" />
            </div>
            <img class="summer__card-img" :src="require('../../img/svg/programming_summer.svg')" alt="" />
            <p v-if="!isTablet" class="summer__card-text summer__card-text--right">
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
        isTablet() {
            return this.$mq.tablet;
        },
    },
};
</script>

<style>
.summer {
    padding: calc(var(--gs) * 8) 0 calc(var(--gs) * 5);
    &__title {
        margin: 0 0 calc(var(--gs) * 7) calc(var(--gs) * 7);
    }

    &__card {
        background-color: var(--cl-violet);
        border-radius: 20px;
        padding: calc(var(--gs) * 5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        &-title {
            font-weight: 800;
            font-size: 24px;
            text-decoration-line: underline;
            margin-bottom: calc(var(--gs) * 1.5);
        }

        &-subtitle {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: calc(var(--gs) * 5);
        }

        &-text {
            font-size: 20px;
            line-height: 26px;

            &--right {
                max-width: 390px;
            }
        }

        &-img {
            position: absolute;
            left: 28%;
            top: -50px;
        }
    }
}
</style>
