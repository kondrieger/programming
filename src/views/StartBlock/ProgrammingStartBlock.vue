<template>
    <div class="container start-block start-block--programming">
        <div class="start-block__text">
            <h2 class="start-block__text-title">В будущее без машины времени</h2>
            <p class="start-block__text-subtitle">Курсы программирования для детей от 6 до 17 лет</p>
            <a-button v-if="isTablet" theme="violet" text="Полетели!" />
        </div>
        <img
            class="start-block__bg start-block__bg--top"
            :src="require('../../img/svg/programming_start_bg_top.svg')"
            alt=""
        />
        <img
            class="start-block__bg start-block__bg--bottom"
            :src="require('../../img/svg/programming_start_bg_bottom.svg')"
            alt=""
        />
        <submit-form v-if="!isTablet" />
    </div>
</template>

<script>
import SubmitForm from '../../components/submit-form/submit-form.vue';
import AButton from '../../components/button/button.vue';
import './styles.css';

export default {
    name: 'MathsStartBlock',

    components: { SubmitForm, AButton },
    computed: {
        isTablet() {
            return this.$mq.tablet;
        },
    },
};
</script>

<style scoped>
.start-block {
    &--programming {
        @media (--desktop-min) {
            position: relative;
        }
    }

    &__bg {
        z-index: -100;

        &--top {
            position: absolute;
            right: 230px;
            top: -120px;

            @media (--desktop) {
                right: 20px;
                top: 10px;
            }
        }

        &--bottom {
            position: absolute;
            bottom: 0;
            left: -100px;

            @media (--desktop-lg) {
                left: -150px;
            }

            @media (--desktop) {
                width: 1171.54px;
                height: 403.56px;
                left: -150px;
            }
        }
    }
}
</style>
