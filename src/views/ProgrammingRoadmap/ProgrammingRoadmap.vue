<template>
    <div class="container roadmap">
        <h2 class="roadmap__title">Почему нам доверяют родители сотен тысяч детей по всему миру?</h2>

        <ul v-if="!isDesktop" class="roadmap__list">
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_1.svg')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">1</span>
                    <p class="roadmap__list-item-title">Собственная игровая методика</p>
                    <p class="roadmap__list-item-text">
                        Погружаемся в мир технологий через сюжеты о покорении космоса и работе в IT-компании
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_2.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">2</span>
                    <p class="roadmap__list-item-title">Проектный подход</p>
                    <p class="roadmap__list-item-text">
                        С первых занятий применяем знания на практике, собирая мультики в Scratch и разрабатывая
                        мобильные приложения на Python
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_3.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">3</span>
                    <p class="roadmap__list-item-title">Обучающая платформа 3 в 1</p>
                    <p class="roadmap__list-item-text">
                        Используем платформу как умный учебник, лабораторию для создания проектов и сообщество по
                        интересам
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_4.svg')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">4</span>
                    <p class="roadmap__list-item-title">Навыки будущего</p>
                    <p class="roadmap__list-item-text">
                        Прокачиваем навыки, с которыми проще учиться в школе, строить планы на будущее и добиваться
                        поставленных целей
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_5.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">5</span>
                    <p class="roadmap__list-item-title">Среда единомышленников</p>
                    <p class="roadmap__list-item-text">
                        Строим планы с новыми друзьями со всего мира: создать совместный проект в Алгоритмике или свой
                        первый IT-стартап за ее пределами
                    </p>
                </div>
            </li>
        </ul>
        <swiper v-else ref="mySwiper" class="" :options="swiperOptions">
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_1.svg')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">1</span>
                    <p class="roadmap__list-item-title">Собственная игровая методика</p>
                    <p class="roadmap__list-item-text">
                        Погружаемся в мир технологий через сюжеты о покорении космоса и работе в IT-компании
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_2.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">2</span>
                    <p class="roadmap__list-item-title">Проектный подход</p>
                    <p class="roadmap__list-item-text">
                        С первых занятий применяем знания на практике, собирая мультики в Scratch и разрабатывая
                        мобильные приложения на Python
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_3.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">3</span>
                    <p class="roadmap__list-item-title">Обучающая платформа 3 в 1</p>
                    <p class="roadmap__list-item-text">
                        Используем платформу как умный учебник, лабораторию для создания проектов и сообщество по
                        интересам
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_4.svg')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">4</span>
                    <p class="roadmap__list-item-title">Навыки будущего</p>
                    <p class="roadmap__list-item-text">
                        Прокачиваем навыки, с которыми проще учиться в школе, строить планы на будущее и добиваться
                        поставленных целей
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_5.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">5</span>
                    <p class="roadmap__list-item-title">Среда единомышленников</p>
                    <p class="roadmap__list-item-text">
                        Строим планы с новыми друзьями со всего мира: создать совместный проект в Алгоритмике или свой
                        первый IT-стартап за ее пределами
                    </p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import './styles.css';

export default {
    name: 'MathRoadmap',
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
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        };
    },
    computed: {
        isDesktop() {
            return this.$mq.desktop;
        },
    },
};
</script>
