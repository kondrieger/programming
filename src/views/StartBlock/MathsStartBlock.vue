<template>
    <div class="container start-block">
        <div class="start-block__text">
            <h2 class="start-block__text-title">В будущее без машины времени</h2>
            <p class="start-block__text-subtitle">Увлекательные курсы математики, которые влюбляют детей в предмет</p>
            <a-button v-if="isTablet" theme="violet" text="Полетели!" />
            <img class="start-block__text-image--triangle" :src="require('../../img/svg/triangle_man.svg')" alt="" />
            <img class="start-block__text-image--birdman" :src="require('../../img/svg/bird_man.svg')" alt="" />
        </div>
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
