<template>
    <div class="summer container">
        <h2 class="summer__title">Только с 21 июня по 25 августа</h2>
        <a href="javascript:;" class="summer__card-wrap">
            <div class="summer__card">
                <div class="summer__card-text-wrap">
                    <a href="javascript:;" class="summer__card-title">
                        Летние смены
                        <img
                            class="summer__card-title-img"
                            :src="require('../../img/svg/share_icon_white.svg')"
                            alt=""
                        />
                    </a>
                    <p class="summer__card-subtitle">7–9 / 10-12 лет</p>
                    <p v-if="isDesktop" class="summer__card-text">
                        Увлекательное двухмесячное погружение в мир современных digital-профессий. От программиста до
                        дизайнера
                    </p>
                    <a-button theme="green" text="Оставить заявку" />
                </div>
                <img class="summer__card-img" :src="require('../../img/svg/programming_summer.svg')" alt="" />
                <p v-if="!isDesktop" class="summer__card-text summer__card-text--right">
                    Увлекательное двухмесячное погружение в мир современных digital-профессий. От программиста до
                    дизайнера
                </p>
            </div>
        </a>
    </div>
</template>

<script>
import AButton from '../../components/button/button.vue';

import './styles.css';

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
