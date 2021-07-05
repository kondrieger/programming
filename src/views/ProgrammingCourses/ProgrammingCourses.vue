<template>
    <div class="container courses">
        <h2 class="courses__title">Курсы программирования</h2>
        <img class="courses__bg" :src="require('../../img/svg/programming_square.svg')" alt="" />
        <ul class="courses__list">
            <li class="courses__list-item courses__list-item--violet">
                <div>
                    <a href="#" class="courses__list-item-title">Python Pro</a>
                    <p class="courses__list-item-age">14–17 лет</p>
                    <p class="courses__list-item-text">
                        Научим извлекать полезную информацию из больших наборов данных и строить модели на уровне
                        профессионалов
                    </p>
                </div>

                <a-button theme="orange" text="Оставить заявку" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_1.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--purple">
                <div>
                    <a href="#" class="courses__list-item-title">Python Start</a>
                    <p class="courses__list-item-age">12–13 лет</p>
                    <p class="courses__list-item-text">
                        В формате игры пройдем путь от собеседования в IT-компании до должности ведущего разработчика
                    </p>
                </div>

                <a-button theme="white" text="Записаться на курс" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_2.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--green">
                <div>
                    <a href="#" class="courses__list-item-title">Создание веб-сайтов</a>
                    <p class="courses__list-item-age">11-12 лет</p>
                    <p class="courses__list-item-text">
                        Пройдем полный цикл создания креативного проекта «по-взрослому»
                    </p>
                </div>

                <a-button theme="border" text="Записаться на курс" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_3.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--orange">
                <div>
                    <a href="#" class="courses__list-item-title">Геймдизайн</a>
                    <p class="courses__list-item-age">10-11 лет</p>
                    <p class="courses__list-item-text">Программирование настоящих игр на платформе Roblox</p>
                </div>

                <a-button theme="violet" text="Оставить заявку" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_4.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--red">
                <div>
                    <a href="#" class="courses__list-item-title">Дизайн</a>
                    <p class="courses__list-item-age">9–14 лет</p>
                    <p class="courses__list-item-text">От создания компьютерной графики до 3D моделировния</p>
                </div>

                <a-button theme="melon" text="Оставить заявку" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_5.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--pink">
                <div>
                    <a href="#" class="courses__list-item-title">Блоггинг</a>
                    <p class="courses__list-item-age">9-11 лет</p>
                    <p class="courses__list-item-text">
                        Видео и фото съемка, ретушь монтаж, композиция. Навыки сторителлинга и управления своим блогом
                    </p>
                </div>

                <a-button theme="pinky" text="Записаться на курс" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_6.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--dk-pink">
                <div>
                    <a href="#" class="courses__list-item-title">Визуальное программирование</a>
                    <p class="courses__list-item-age">9–10 лет</p>
                    <p class="courses__list-item-text">
                        С этого уровня начинается настоящее программирование на Scratch
                    </p>
                </div>

                <a-button theme="grey" text="Записаться на курс" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_7.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--blue">
                <div>
                    <a href="#" class="courses__list-item-title">Компьютерная грамотность</a>
                    <p class="courses__list-item-age">7-9 лет</p>
                    <p class="courses__list-item-text">
                        Обучаем работать с самыми популярными программами и приложениями
                    </p>
                </div>

                <a-button theme="purple" text="Оставить заявку" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_8.svg')" alt="" />
            </li>
            <li class="courses__list-item courses__list-item--yellow">
                <div>
                    <a href="#" class="courses__list-item-title">Основы логики и программирования</a>
                    <p class="courses__list-item-age">6–7 лет</p>
                    <p class="courses__list-item-text">
                        Наши курсы для самых маленьких, на которых они только начинают понимать, что такое код
                    </p>
                </div>

                <a-button theme="violet" text="Оставить заявку" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_9.svg')" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
import AButton from '../../components/button/button.vue';

export default {
    components: { AButton },

    name: 'ProgrammingCourses',
};
</script>

<style>
.courses {
    position: relative;
    padding: calc(var(--gs) * 8) 0 calc(var(--gs) * 5);

    @media (--desktop) {
        padding-top: calc(var(--gs) * 5);
    }

    @media (--tablet) {
        padding-top: calc(var(--gs) * 3);
    }

    &__title {
        margin: 0 0 calc(var(--gs) * 4) calc(var(--gs) * 7);

        @media (--desktop-lg) {
            margin-left: 0;
        }

        @media (--desktop) {
            margin-bottom: calc(var(--gs) * 3);
        }

        @media (--tablet) {
            font-size: 28px;
            margin-bottom: calc(var(--gs) * 2);
        }

        @media (--tablet) {
            margin-bottom: calc(var(--gs) * 3);
        }
    }

    &__bg {
        z-index: -1;
        position: absolute;
        top: 50px;
        left: 20px;
    }

    &__list {
        display: flex;
        flex-wrap: wrap;

        &-item {
            position: relative;
            width: 650px;
            height: 365px;
            border-radius: 20px;
            margin-bottom: calc(var(--gs) * 2);
            padding: calc(var(--gs) * 4);
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (--desktop-lg) {
                width: 572px;
                margin-bottom: calc(var(--gs) * 1.6);
            }

            @media (--desktop) {
                width: 436px;
                padding: calc(var(--gs) * 10) calc(var(--gs) * 4) calc(var(--gs) * 3);
                margin-bottom: calc(var(--gs) * 1.3);
                height: 430px;
            }

            @media (--tablet) {
                width: 288px;
                height: 330px;
                margin-bottom: calc(var(--gs) * 0.9);
                padding: calc(var(--gs) * 7.5) calc(var(--gs) * 3) calc(var(--gs) * 2.5);
            }

            &:nth-child(odd) {
                margin-right: calc(var(--gs) * 2);

                @media (--desktop-lg) {
                    margin-right: calc(var(--gs) * 1.6);
                }

                @media (--desktop) {
                    margin-right: calc(var(--gs) * 1.3);
                }

                @media (--tablet) {
                    margin-right: calc(var(--gs) * 0.9);
                }
            }

            &-title {
                font-size: 24px;
                font-weight: 800;
                color: var(--cl-white);
                cursor: pointer;
                margin-bottom: calc(var(--gs) * 1.5);
                position: relative;
                max-width: 370px;

                @media (--desktop) {
                    max-width: 200px;
                }

                @media (--tablet) {
                    font-size: 18px;
                    line-height: 22px;
                    margin-bottom: calc(var(--gs) * 1);
                }

                &::after {
                    content: '';
                    display: none;
                    height: 18px;
                    width: 18px;
                    margin-left: 5px;
                    background-color: transparent;
                    background-image: svg-load('../../img/svg/share_icon.svg');
                    background-repeat: no-repeat;
                }

                &:hover {
                    text-decoration-line: underline;

                    &::after {
                        /* display: inline-block; */
                    }
                }
            }

            &-age {
                font-size: 20px;
                margin-bottom: calc(var(--gs) * 2);

                @media (--tablet) {
                    font-size: 14px;
                    line-height: 20px;
                    margin-bottom: calc(var(--gs) * 1.5);
                }
            }

            &-text {
                font-weight: 500;
                font-size: 19px;
                line-height: 25px;
                width: 315px;

                @media (--desktop-lg) {
                    width: 280px;
                }

                @media (--desktop) {
                    font-size: 16px;
                    line-height: 22px;
                    width: 100%;
                }
            }

            &-img {
                position: absolute;
                right: -10px;
                max-width: 310px;
                z-index: 0;

                @media (--desktop-lg) {
                    bottom: 60px;
                    right: -21px;
                    max-width: 270px;
                }

                @media (--desktop) {
                    max-width: 220px;
                    right: -10px;
                    top: -10px;
                    bottom: auto;
                }

                @media (--tablet) {
                    max-width: 150px;
                    right: -15px;
                }
            }

            &--violet {
                background-color: var(--cl-violet);
            }

            &--purple {
                background-color: #8d30b9;
            }

            &--green {
                background-color: #cbf86d;

                & .courses__list-item-title,
                & .courses__list-item-age,
                & .courses__list-item-text {
                    color: var(--cl-violet);
                }

                .courses__list-item-title {
                    @media (--tablet) {
                        width: 120px;
                    }
                }
            }

            &--orange {
                background-color: #ffdb59;

                & .courses__list-item-title,
                & .courses__list-item-age,
                & .courses__list-item-text {
                    color: var(--cl-violet);
                }
            }

            &--red {
                background-color: #ff5a50;
            }

            &--pink {
                background-color: #ffb0cd;

                & .courses__list-item-title,
                & .courses__list-item-age,
                & .courses__list-item-text {
                    color: var(--cl-violet);
                }
            }

            &--dk-pink {
                background-color: #f44c75;

                .courses__list-item-img {
                    @media (--desktop-lg-min) {
                        right: -20px;
                    }
                }
            }

            &--blue {
                background-color: #82f7ff;

                & .courses__list-item-title,
                & .courses__list-item-age,
                & .courses__list-item-text {
                    color: var(--cl-violet);
                }

                .courses__list-item-img {
                    @media (--tablet) {
                        width: 120px;
                        top: 0px;
                    }
                }
            }

            &--yellow {
                background-color: #f3ff69;

                & .courses__list-item-title,
                & .courses__list-item-age,
                & .courses__list-item-text {
                    color: var(--cl-violet);
                }

                .courses__list-item-img {
                    @media (--tablet) {
                        width: 120px;
                        top: -15px;
                    }
                }
            }
        }
    }
}
</style>
