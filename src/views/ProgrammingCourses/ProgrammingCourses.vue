<template>
    <div class="container courses">
        <h2 class="courses__title">Курсы программирования</h2>
        <img class="courses__bg" :src="require('../../img/svg/programming_square.svg')" alt="" />
        <ul class="courses__list">
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--violet">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Python Pro<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_white.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">14–17 лет</p>
                        <p class="courses__list-item-text">
                            Научим извлекать полезную информацию из больших наборов данных и строить модели на уровне
                            профессионалов
                        </p>
                    </div>

                    <a-button theme="orange" text="Оставить заявку" />

                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/svg/programming_courses_1.svg')"
                            alt=""
                        />
                    </div></li
            ></a>

            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--purple">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Python Start<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_white.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">12–13 лет</p>
                        <p class="courses__list-item-text">
                            В формате игры пройдем путь от собеседования в IT-компании до должности ведущего
                            разработчика
                        </p>
                    </div>

                    <a-button theme="grey" text="Записаться на курс" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/svg/programming_courses_2.svg')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--green">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Создание веб-сайтов<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_violet.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">11-12 лет</p>
                        <p class="courses__list-item-text">
                            Пройдем полный цикл создания креативного проекта «по-взрослому»
                        </p>
                    </div>

                    <a-button theme="border" text="Записаться на курс" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/programming_courses_3.png')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--orange">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Геймдизайн<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_violet.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">10-11 лет</p>
                        <p class="courses__list-item-text">Программирование настоящих игр на платформе Roblox</p>
                    </div>

                    <a-button theme="violet" text="Оставить заявку" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/programming_courses_4.png')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--red">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Дизайн<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_white.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">9–14 лет</p>
                        <p class="courses__list-item-text">От создания компьютерной графики до 3D моделировния</p>
                    </div>

                    <a-button theme="melon" text="Оставить заявку" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/programming_courses_5.png')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--pink">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Блоггинг<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_violet.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">9-11 лет</p>
                        <p class="courses__list-item-text">
                            Видео и фото съемка, ретушь монтаж, композиция. Навыки сторителлинга и управления своим
                            блогом
                        </p>
                    </div>

                    <a-button theme="pinky" text="Записаться на курс" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/programming_courses_6.png')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--dk-pink">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Визуальное программирование<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_white.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">9–10 лет</p>
                        <p class="courses__list-item-text">
                            С этого уровня начинается настоящее программирование на Scratch
                        </p>
                    </div>

                    <a-button theme="grey" text="Записаться на курс" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/programming_courses_7.png')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--blue">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Компьютерная грамотность<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_violet.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">7-9 лет</p>
                        <p class="courses__list-item-text">
                            Обучаем работать с самыми популярными программами и приложениями
                        </p>
                    </div>

                    <a-button theme="purple" text="Оставить заявку" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/programming_courses_8.png')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
            <a class="courses__list-item-wrap" href="javascript:;">
                <li class="courses__list-item courses__list-item--yellow">
                    <div>
                        <a href="#" class="courses__list-item-title"
                            >Основы логики и программирования<img
                                class="courses__list-item-title-img"
                                :src="require('../../img/svg/share_icon_violet.svg')"
                                alt=""
                        /></a>
                        <p class="courses__list-item-age">6–7 лет</p>
                        <p class="courses__list-item-text">
                            Наши курсы для самых маленьких, на которых они только начинают понимать, что такое код
                        </p>
                    </div>

                    <a-button theme="violet" text="Оставить заявку" />
                    <div class="courses__list-item-img-wrap">
                        <img
                            class="courses__list-item-img"
                            :src="require('../../img/programming_courses_9.png')"
                            alt=""
                        />
                    </div>
                </li>
            </a>
        </ul>
    </div>
</template>

<script>
import AButton from '../../components/button/button.vue';
import './styles.css';

export default {
    components: { AButton },

    name: 'ProgrammingCourses',
};
</script>
