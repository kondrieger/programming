<template>
    <div class="container features">
        <ul v-if="!isMobileLg" class="features__list">
            <li class="features__list-item">
                <p class="features__list-item-text"><b>Занятия с преподавателем</b><br />в группах до 12 человек</p>
                <img class="features__list-item-img" :src="require('../../img/svg/feature_1.svg')" alt="" />
            </li>
            <li class="features__list-item">
                <p class="features__list-item-text"><b>В школе Алгоритмики</b><br />или онлайн</p>
                <img class="features__list-item-img" :src="require('../../img/svg/feature_2.svg')" alt="" />
            </li>
            <li class="features__list-item">
                <p class="features__list-item-text"><b>Курсы для всех</b><br />мы не смотрим на школьные оценки</p>
                <img class="features__list-item-img" :src="require('../../img/svg/feature_3.svg')" alt="" />
            </li>
        </ul>
        <swiper v-else ref="mySwiper" class="" :options="swiperOptions">
            <swiper-slide>
                <div class="features__list-item">
                    <p class="features__list-item-text"><b>Занятия с преподавателем</b><br />в группах до 12 человек</p>
                    <img class="features__list-item-img" :src="require('../../img/svg/feature_1.svg')" alt="" /></div
            ></swiper-slide>
            <swiper-slide>
                <div class="features__list-item">
                    <p class="features__list-item-text"><b>В школе Алгоритмики</b><br />или онлайн</p>
                    <img class="features__list-item-img" :src="require('../../img/svg/feature_2.svg')" alt="" /></div
            ></swiper-slide>
            <swiper-slide>
                <div class="features__list-item">
                    <p class="features__list-item-text"><b>Курсы для всех</b><br />мы не смотрим на школьные оценки</p>
                    <img class="features__list-item-img" :src="require('../../img/svg/feature_3.svg')" alt="" /></div
            ></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import './styles.css';
export default {
    name: 'MathFeatures',
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                },
            },
        };
    },
    computed: {
        isMobileLg() {
            return this.$mq.mobileLg;
        },
    },
};
</script>
