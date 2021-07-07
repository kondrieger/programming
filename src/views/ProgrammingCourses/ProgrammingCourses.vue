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
                            :src="require('../../img/svg/programming_courses_3.svg')"
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
                            :src="require('../../img/svg/programming_courses_5.svg')"
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
                            :src="require('../../img/svg/programming_courses_6.svg')"
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
                            :src="require('../../img/svg/programming_courses_7.svg')"
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
                            :src="require('../../img/svg/programming_courses_8.svg')"
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
                            :src="require('../../img/svg/programming_courses_9.svg')"
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

export default {
    components: { AButton },

    name: 'ProgrammingCourses',
};
</script>

<style>
.courses {
    position: relative;
    padding-top: calc(var(--gs) * 8);
    padding-bottom: calc(var(--gs) * 2);

    @media (--desktop) {
        padding-top: calc(var(--gs) * 5);
    }

    @media (--tablet) {
        padding-top: calc(var(--gs) * 3);
        padding-bottom: calc(var(--gs) * 3);
    }

    @media (--mobile-lg) {
        padding-bottom: 0;
    }

    &__title {
        margin: 0 0 calc(var(--gs) * 4) calc(var(--gs) * 11);

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

        @media (--mobile-lg) {
            font-size: 25px !important;
        }
    }

    &__bg {
        z-index: -1;
        position: absolute;
        top: 50px;
        left: 210px;

        @media (--desktop-lg) {
            left: 70px;
        }

        @media (--desktop) {
            top: 0px;
        }

        @media (--tablet) {
            left: -20px;
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &-item {
            position: relative;
            min-width: 100%;
            height: 365px;
            border-radius: 20px;
            margin-bottom: calc(var(--gs) * 2);
            padding: calc(var(--gs) * 4);
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (--desktop-lg) {
                margin-bottom: calc(var(--gs) * 1.6);
                width: calc(50% - 8px);
            }

            @media (--desktop) {
                padding: calc(var(--gs) * 10) calc(var(--gs) * 4) calc(var(--gs) * 3);
                margin-bottom: calc(var(--gs) * 1.3);
                width: calc(50% - 6.5px);
                height: 430px;
            }

            @media (--tablet) {
                width: calc(50% - 4.5px);
                height: 330px;
                margin-bottom: calc(var(--gs) * 0.9);
                padding: calc(var(--gs) * 7.5) calc(var(--gs) * 3) calc(var(--gs) * 2.5);
            }

            @media (--mobile-lg) {
                width: 100%;
                height: 390px;
                justify-content: flex-end;
                margin-bottom: calc(var(--gs) * 2);
                padding: calc(var(--gs) * 2.6);
            }

            &-wrap {
                width: calc(50% - 10px);

                @media (--desktop-lg) {
                    width: calc(50% - 8px);
                }

                @media (--desktop) {
                    width: calc(50% - 6.5px);
                }

                @media (--tablet) {
                    width: calc(50% - 4.5px);
                }

                @media (--mobile-lg) {
                    width: 100%;
                }

                &:active {
                    padding-top: 10px;
                    margin-bottom: -10px !important;

                    @media (--tablet) {
                        padding-top: 5px;
                        margin-bottom: -5px !important;
                    }
                }

                &:hover {
                    & .courses__list-item-title {
                        text-decoration-line: underline;
                    }

                    & .courses__list-item-title-img {
                        display: inline;
                    }

                    & .courses__list-item-img {
                        margin-top: -10px;
                    }

                    & .courses__list-item-img-wrap {
                        @media (--desktop-min) {
                            padding-bottom: 10px;
                        }
                    }
                }
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

                @media (--mobile-lg) {
                    margin-right: 0;
                }
            }

            &-title {
                font-size: 24px;
                font-weight: 800;
                color: var(--cl-white);
                cursor: pointer;
                margin-bottom: calc(var(--gs) * 0.5);
                position: relative;
                max-width: 370px;
                line-height: 1.2;

                @media (--tablet) {
                    font-size: 18px;
                    line-height: 22px;
                }

                @media (--mobile-lg) {
                    font-size: 20px;
                    line-height: 24px;
                    max-width: 239px;
                }

                &-img {
                    height: 16px;
                    width: 16px;
                    margin-left: 5px;
                    display: none;

                    @media (--tablet) {
                        height: 12px;
                        width: 12px;
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
                width: 290px;

                @media (--desktop-lg) {
                    width: 270px;
                }

                @media (--desktop) {
                    font-size: 16px;
                    line-height: 22px;
                    width: 100%;
                }

                @media (--mobile-lg) {
                    font-size: 14px;
                    line-height: 20px;
                    margin-bottom: calc(var(--gs) * 2);
                }
            }

            &-img-wrap {
                position: absolute;
                z-index: 0;
            }

            & .btn {
                @media (--tablet) {
                    margin-left: -5px;
                }

                @media (max-width: 359px) {
                    margin-left: 0;
                    width: 100%;
                }
            }

            &--violet {
                background-color: var(--cl-violet);

                @media (--mobile-lg) {
                    background-color: var(--cl-dk-violet);
                }

                @media (--tablet) and (--mobile-lg-min) {
                    padding-top: 45px;
                }

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    right: -25px;
                    bottom: 0;

                    @media (--desktop) {
                        width: 215.94px;
                        height: 197.91px;
                        right: -8px;
                        top: -10px;
                    }

                    @media (--tablet) {
                        width: 184.45px;
                        height: 146.04px;
                        top: -11px;
                        right: -18px;
                    }

                    @media (--mobile-lg) {
                        width: 241.11px;
                        height: 206.2px;
                        top: -10px;
                        right: -10px;
                    }

                    @media (max-width: 359px) {
                        right: -30px;
                        height: 160px;
                    }
                }
            }

            &--purple {
                background-color: #8d30b9;

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    right: 0;
                    bottom: 30px;

                    @media (--desktop-lg) {
                        right: -17px;
                        bottom: 20px;
                    }

                    @media (--desktop) {
                        width: 233.35px;
                        height: 146.88px;
                        right: -8px;
                        top: -10px;
                    }

                    @media (--tablet) {
                        width: 156.43px;
                        height: 98.46px;
                        top: -7px;
                        right: -5px;
                    }

                    @media (--mobile-lg) {
                        width: 236px;
                        height: 148.55px;
                        top: -10px;
                        right: 40px;
                    }

                    @media (max-width: 359px) {
                        right: 20px;
                    }
                }
            }

            &--green {
                background-color: #cbf86d;

                @media (--desktop) and (--tablet-min) {
                    padding-top: 156px;
                }

                & .courses__list-item-title,
                & .courses__list-item-age,
                & .courses__list-item-text {
                    color: var(--cl-violet);
                }

                .courses__list-item-title {
                    @media (--desktop) {
                        width: 170px;
                    }

                    @media (--tablet) and (--mobile-lg-min) {
                        width: 140px;
                    }
                }

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    right: 27px;
                    bottom: 50px;

                    @media (--desktop-lg) {
                        right: -17px;
                    }

                    @media (--desktop) {
                        width: 205.03px;
                        height: 185.55px;
                        right: 14px;
                        top: 3px;
                    }

                    @media (--tablet) {
                        width: 133.82px;
                        height: 121.11px;
                        top: 3px;
                        right: -4px;
                    }

                    @media (--mobile-lg) {
                        width: 175px;
                        height: 158.38px;
                        top: -14px;
                        right: 56px;
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

                @media (--desktop) and (--tablet-min) {
                    padding-top: 156px;
                }

                @media (--tablet) {
                    padding-top: 96px;
                }

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    bottom: 44px;
                    right: 31px;
                    width: 288.29px;
                    height: 328px;

                    @media (--desktop-lg) {
                        right: -17px;
                    }

                    @media (--desktop) {
                        width: 204.06px;
                        height: 232.17px;
                        right: -6px;
                        top: -1px;
                    }

                    @media (--tablet) {
                        width: 139.84px;
                        height: 159.11px;
                        top: 7px;
                        right: -3px;
                    }

                    @media (--mobile-lg) {
                        width: 232.78px;
                        height: 209.43px;
                        right: 30px;
                        top: -10px;
                    }
                }
            }

            &--red {
                background-color: #ff5a50;

                @media (--desktop) and (--tablet-min) {
                    padding-top: 156px;
                }

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    bottom: 53px;
                    right: 8px;

                    @media (--desktop-lg) {
                        width: 297.69px;
                        height: 255.89px;
                        right: -10px;
                        bottom: auto;
                        top: 38px;
                    }

                    @media (--desktop) {
                        width: 229.37px;
                        height: 197.17px;
                        top: 38px;
                        right: 10px;
                    }

                    @media (--tablet) {
                        width: 146.58px;
                        height: 126px;
                        top: -5px;
                        right: 11px;
                    }

                    @media (--mobile-lg) {
                        width: 230.78px;
                        height: 203.95px;
                        right: -6px;
                        top: 6px;
                    }

                    @media (max-width: 359px) {
                        right: 0;
                        height: 160px;
                    }
                }

                .courses__list-item-text {
                    @media (--desktop) and (--tablet-min) {
                        width: 227.37px;
                    }
                }
            }

            &--pink {
                background-color: #ffb0cd;

                & .courses__list-item-title,
                & .courses__list-item-age,
                & .courses__list-item-text {
                    color: var(--cl-violet);
                }

                @media (--desktop) and (--tablet-min) {
                    padding-top: 126px;
                }

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    bottom: 53px;
                    right: 0;

                    @media (--desktop) {
                        width: 205px;
                        height: 184.38px;
                        top: 20px;
                        right: 17px;
                    }

                    @media (--tablet) {
                        width: 144px;
                        height: 129.51px;
                        top: 5px;
                        right: 10px;
                    }

                    @media (--mobile-lg) {
                        width: 215px;
                        height: 193.37px;
                        right: -8px;
                        top: -1px;
                    }

                    @media (max-width: 359px) {
                        right: 0;
                        height: 160px;
                    }
                }

                .courses__list-item-text {
                    @media (--desktop) and (--tablet-min) {
                        width: 264.37px;
                    }
                }
            }

            &--dk-pink {
                background-color: #f44c75;

                @media (--desktop) and (--tablet-min) {
                    padding-top: 110px;
                }

                @media (--tablet) and (--mobile-lg-min) {
                    padding-top: 65px;
                }

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    right: -10px;
                    bottom: -5px;

                    @media (--desktop-lg) {
                        width: 293.46px;
                        height: 193px;
                        right: -30px;
                        bottom: 0;
                    }

                    @media (--desktop) {
                        width: 225.28px;
                        height: 148.14px;
                        right: -1px;
                        top: -7px;
                    }

                    @media (--tablet) {
                        width: 150.32px;
                        height: 89.63px;
                        top: -5px;
                        right: -9px;
                    }

                    @media (--mobile-lg) {
                        width: 243.73px;
                        height: 160px;
                        right: -10px;
                        top: -20px;
                    }

                    @media (max-width: 359px) {
                        right: 0;
                        height: 140px;
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

                @media (--desktop) and (--tablet-min) {
                    padding-top: 110px;
                }

                @media (--tablet) and (--mobile-lg-min) {
                    padding-top: 65px;
                }

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    right: -30px;
                    bottom: 30px;

                    @media (--desktop-lg) {
                        width: 278.26px;
                        height: 197.24px;
                        top: 35px;
                        right: -8px;
                        bottom: auto;
                    }

                    @media (--desktop) {
                        width: 233.49px;
                        height: 164.88px;
                        right: -10px;
                        top: -7px;
                    }

                    @media (--tablet) {
                        width: 133.6px;
                        height: 94.34px;
                        top: -3px;
                        right: -17px;
                    }

                    @media (--mobile-lg) {
                        width: 243.73px;
                        height: 160px;
                        right: -1px;
                        top: -13px;
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

                .courses__list-item-img,
                .courses__list-item-img-wrap {
                    bottom: 58px;
                    right: -8px;

                    @media (--desktop-lg) {
                        width: 262.91px;
                        height: 201.34px;
                        right: -30px;
                        bottom: 38px;
                    }

                    @media (--desktop) {
                        width: 193.71px;
                        height: 148.34px;
                        right: -10px;
                        top: -22px;
                        bottom: auto;
                    }

                    @media (--tablet) {
                        width: 117.89px;
                        height: 90.28px;
                        bottom: -3px;
                        top: -13px;
                    }

                    @media (--mobile-lg) {
                        width: 213.54px;
                        height: 163.53px;
                        right: 70px;
                        top: -20px;
                    }

                    @media (max-width: 359px) {
                        right: 40px;
                        height: 140px;
                        width: 200px;
                    }
                }
            }
        }
    }
}
</style>
