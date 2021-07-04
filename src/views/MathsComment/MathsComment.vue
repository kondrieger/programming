<template>
    <div class="container comment">
        <div class="comment__wrap">
            <h2 class="comment__title">В Алгоритмике:</h2>
            <ul v-if="!isTablet" class="comment__list">
                <li class="comment__list-item">
                    <img
                        class="comment__list-item-img"
                        :src="require('../../img/svg/programming_comment_1.svg')"
                        alt=""
                    />
                    <p class="comment__list-item-text">
                        Ребенок влюбится в точные науки и по-новому посмотрит на школьные предметы
                    </p>
                </li>
                <li class="comment__list-item comment__list-item--narrow">
                    <div class="comment__list-item-img-wrap">
                        <img :src="require('../../img/svg/programming_comment_2.svg')" alt="" />
                    </div>
                    <p class="comment__list-item-text">
                        Найдет себя в одном из перспективных IT-направлений — от геймдева до машинного обучения
                    </p>
                </li>
                <li class="comment__list-item comment__list-item--narrow">
                    <img
                        class="comment__list-item-img"
                        :src="require('../../img/svg/programming_comment_3.svg')"
                        alt=""
                    />
                    <p class="comment__list-item-text">
                        Соберет портфолио разработчика из собственных игр, сайтов и приложений
                    </p>
                </li>
            </ul>
            <swiper v-else ref="mySwiper" class="" :options="swiperOptions">
                <swiper-slide>
                    <div class="comment__list-item">
                        <img
                            class="comment__list-item-img"
                            :src="require('../../img/svg/programming_comment_1.svg')"
                            alt=""
                        />
                        <p class="comment__list-item-text">
                            Ребенок влюбится в точные науки и по-новому посмотрит на школьные предметы
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="comment__list-item">
                        <div class="comment__list-item-img-wrap">
                            <img :src="require('../../img/svg/programming_comment_2.svg')" alt="" />
                        </div>
                        <p class="comment__list-item-text">
                            Найдет себя в одном из перспективных IT-направлений — от геймдева до машинного обучения
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="comment__list-item">
                        <img
                            class="comment__list-item-img"
                            :src="require('../../img/svg/programming_comment_3.svg')"
                            alt=""
                        />
                        <p class="comment__list-item-text">
                            Соберет портфолио разработчика из собственных игр, сайтов и приложений
                        </p>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import './styles.css';

export default {
    name: 'MathsComment',
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
        isTablet() {
            return this.$mq.tablet;
        },
    },
};
</script>
