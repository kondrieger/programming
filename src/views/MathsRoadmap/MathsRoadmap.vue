<template>
    <div class="container roadmap">
        <h2 class="roadmap__title">Почему нам доверяют родители сотен тысяч детей по всему миру?</h2>

        <ul v-if="!isDesktop" class="roadmap__list">
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_1.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">1</span>
                    <p class="roadmap__list-item-title">Собственная игровая методика</p>
                    <p class="roadmap__list-item-text">
                        Учимся в компании троллей-спецагентов: сюжетная линия превращает процесс обучения в
                        многосерийный мультфильм
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_2.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">2</span>
                    <p class="roadmap__list-item-title">Обучающая платформа</p>
                    <p class="roadmap__list-item-text">
                        Получаем неограниченный доступ к умному учебнику и проходим задания в своем темпе, не
                        ориентируясь на остальную группу
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_3.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">3</span>
                    <p class="roadmap__list-item-title">Закрепление школьной программы</p>
                    <p class="roadmap__list-item-text">
                        Учимся понимать, а не зубрить: проходим все ключевые темы школьной математики и восполняем
                        пробелы
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_4.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">4</span>
                    <p class="roadmap__list-item-title">Подготовка к будущему</p>
                    <p class="roadmap__list-item-text">
                        Решаем олимпиадные задачи, участвуем в математических боях и прокачиваем навыки, которые помогут
                        в дальнейшей учебе и будущей профессии
                    </p>
                </div>
            </li>
            <li class="roadmap__list-item">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_5.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">5</span>
                    <p class="roadmap__list-item-title">Учеба без стресса</p>
                    <p class="roadmap__list-item-text">
                        Не пишем контрольные, не отвечаем у доски и не делаем домашку, зато перестаем бояться ошибок и
                        точных наук
                    </p>
                </div>
            </li>
        </ul>
        <swiper v-else ref="mySwiper" class="" :options="swiperOptions">
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_1.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">1</span>
                    <p class="roadmap__list-item-title">Собственная игровая методика</p>
                    <p class="roadmap__list-item-text">
                        Учимся в компании троллей-спецагентов: сюжетная линия превращает процесс обучения в
                        многосерийный мультфильм
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_2.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">2</span>
                    <p class="roadmap__list-item-title">Обучающая платформа</p>
                    <p class="roadmap__list-item-text">
                        Получаем неограниченный доступ к умному учебнику и проходим задания в своем темпе, не
                        ориентируясь на остальную группу
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_3.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">3</span>
                    <p class="roadmap__list-item-title">Закрепление школьной программы</p>
                    <p class="roadmap__list-item-text">
                        Учимся понимать, а не зубрить: проходим все ключевые темы школьной математики и восполняем
                        пробелы
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_4.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">4</span>
                    <p class="roadmap__list-item-title">Подготовка к будущему</p>
                    <p class="roadmap__list-item-text">
                        Решаем олимпиадные задачи, участвуем в математических боях и прокачиваем навыки, которые помогут
                        в дальнейшей учебе и будущей профессии
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="roadmap__slide">
                <img class="roadmap__list-item-img" :src="require('../../img/math_road_5.png')" alt="" />
                <div class="roadmap__list-item-text-wrap">
                    <span class="roadmap__list-item-number">5</span>
                    <p class="roadmap__list-item-title">Учеба без стресса</p>
                    <p class="roadmap__list-item-text">
                        Не пишем контрольные, не отвечаем у доски и не делаем домашку, зато перестаем бояться ошибок и
                        точных наук
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
