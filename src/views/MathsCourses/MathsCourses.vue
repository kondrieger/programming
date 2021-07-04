<template>
    <div class="container courses">
        <h2 class="courses__title">Курсы для школьников</h2>
        <ul class="courses__list">
            <li class="courses__list-item">
                <div class="courses__list-item-text">
                    <h3 class="courses__list-item-text-title">Математика</h3>
                    <h3 class="courses__list-item-text-subtitle courses__list-item-text-subtitle--blue">3-4 класс</h3>
                    <p class="courses__list-item-text-text">
                        Учимся в компании троллей-спецагентов: сюжетная линия превращает процесс обучения в
                        многосерийный мультфильм <br />Занятия проходят 1-2 раза в неделю.
                    </p>
                    <a-button theme="blue" text="Записаться на курс" />
                </div>
                <img
                    class="courses__list-item-img courses__list-item-img--girl"
                    :src="require('../../img/svg/math_courses_1.svg')"
                    alt=""
                />
            </li>
            <li class="courses__list-item courses__list-item--reverse">
                <div class="courses__list-item-text">
                    <h3 class="courses__list-item-text-title">Математика</h3>
                    <h3 class="courses__list-item-text-subtitle courses__list-item-text-subtitle--green">5-6 класс</h3>
                    <p class="courses__list-item-text-text">
                        Решаем олимпиадные задачи, участвуем в математических боях и прокачиваем навыки, которые помогут
                        в дальнейшей учебе и будущей профессии.<br />
                        Занятия 1-2 раза в неделю
                    </p>
                    <a-button theme="green" text="Оставить заявку" />
                </div>
                <img
                    class="courses__list-item-img courses__list-item-img--boy"
                    :src="require('../../img/svg/math_courses_2.svg')"
                    alt=""
                />
            </li>
        </ul>
    </div>
</template>

<script>
import AButton from '../../components/button/button.vue';

export default {
    components: { AButton },
};
</script>

<style>
.courses {
    padding-top: calc(var(--gs) * 7);

    @media (--desktop) {
        padding-top: calc(var(--gs) * 3);
    }

    &__title {
        margin-left: calc(var(--gs) * 11);
        margin-bottom: calc(var(--gs) * 4);

        @media (--desktop-lg) {
            margin-left: calc(var(--gs) * 7);
        }

        @media (--desktop) {
            margin-left: calc(var(--gs) * 5);
        }

        @media (--tablet) {
            margin-left: 0;
        }
    }

    &__list {
        &-item {
            padding: calc(var(--gs) * 9.2) calc(var(--gs) * 11.8);
            display: flex;
            border-radius: 20px;
            background-color: var(--cl-white);
            max-height: 490px;
            width: 100%;
            position: relative;

            @media (--desktop-lg) {
                padding: calc(var(--gs) * 9.2) calc(var(--gs) * 7);
            }

            @media (--desktop-lg) {
                padding: calc(var(--gs) * 7);
            }

            @media (--tablet) {
                padding: calc(var(--gs) * 4) calc(var(--gs) * 2) calc(var(--gs) * 4) calc(var(--gs) * 4);
            }

            @media (--mobile-lg) {
                flex-direction: column-reverse;
                justify-content: center !important;
                align-items: center !important;
                max-height: 520px;
                padding: calc(var(--gs) * 2.4);
            }

            &--reverse {
                @media (--mobile-lg-min) {
                    flex-direction: row-reverse;
                }
            }

            & + & {
                margin-top: calc(var(--gs) * 3);
            }

            &-text {
                width: 48%;

                @media (--desktop) {
                    width: 54%;
                }

                @media (--tablet) {
                    width: 60%;
                }

                @media (--mobile-lg) {
                    width: 100%;
                }

                &-title,
                &-subtitle {
                    margin-bottom: calc(var(--gs) * 3);

                    @media (--tablet) {
                        font-size: 21px;
                        margin-bottom: calc(var(--gs) * 1.5);
                    }

                    @media (--mobile-lg) {
                        font-size: 20px;
                    }
                }

                &-title {
                    @media (--mobile-lg) {
                        margin-bottom: calc(var(--gs) * 0.5);
                    }
                }

                &-subtitle {
                    &--blue {
                        color: var(--cl-blue);
                    }

                    &--green {
                        color: var(--cl-green);
                    }
                }

                &-text {
                    margin-bottom: calc(var(--gs) * 3.5);
                    line-height: 1.44;

                    @media (--tablet) {
                        font-size: 14px;
                    }
                }
            }

            &-img {
                position: absolute;

                @media (--mobile-lg) {
                    position: relative;
                    top: auto !important;
                    left: auto !important;
                    right: auto !important;
                }

                &--girl {
                    right: 100px;
                    top: -20px;

                    @media (--desktop-lg) {
                        right: 50px;
                        top: 10px;
                    }

                    @media (--desktop) {
                        width: 375px;
                        height: 364px;
                        top: 60px;
                        right: 5px;
                    }

                    @media (--tablet) {
                        top: 50px;
                        right: -25px;
                        width: 234px;
                        height: 227px;
                    }

                    @media (--mobile-lg) {
                        margin-top: -20px;
                    }
                }

                &--boy {
                    top: 30px;
                    left: 100px;

                    @media (--desktop-lg) {
                        left: 60px;
                        top: 60px;
                    }

                    @media (--desktop) {
                        width: 387.49px;
                        height: 346.3px;
                        left: 0px;
                        top: 90px;
                    }

                    @media (--tablet) {
                        top: 60px;
                        left: -30px;
                        width: 255px;
                        height: 214px;
                    }
                }
            }
        }
    }
}
</style>
