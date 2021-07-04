<template>
    <div class="container comment">
        <div class="comment__wrap">
            <h2 class="comment__title">С Алгоритмикой ребенок:</h2>
            <ul v-if="!isTablet" class="comment__list">
                <li class="comment__list-item">
                    <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_1.svg')" alt="" />
                    <p class="comment__list-item-text">Сформирует прочную базу знаний по математике</p>
                </li>
                <li class="comment__list-item comment__list-item--narrow">
                    <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_2.svg')" alt="" />
                    <p class="comment__list-item-text">Влюбится в предмет и углубит знания</p>
                </li>
                <li class="comment__list-item comment__list-item--narrow">
                    <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_3.svg')" alt="" />
                    <p class="comment__list-item-text">Улучшит успеваемость в школе</p>
                </li>
                <li class="comment__list-item">
                    <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_4.svg')" alt="" />
                    <p class="comment__list-item-text">Расширит возможности выбора профессии</p>
                </li>
            </ul>
            <swiper v-else ref="mySwiper" class="" :options="swiperOptions">
                <swiper-slide>
                    <div class="comment__list-item">
                        <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_1.svg')" alt="" />
                        <p class="comment__list-item-text">Сформирует прочную базу знаний по математике</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="comment__list-item">
                        <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_2.svg')" alt="" />
                        <p class="comment__list-item-text">Влюбится в предмет и углубит знания</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="comment__list-item">
                        <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_3.svg')" alt="" />
                        <p class="comment__list-item-text">Улучшит успеваемость в школе</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="comment__list-item">
                        <img class="comment__list-item-img" :src="require('../../img/svg/math_comment_4.svg')" alt="" />
                        <p class="comment__list-item-text">Расширит возможности выбора профессии</p>
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
