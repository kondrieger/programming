<template>
    <div class="container start-block">
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
