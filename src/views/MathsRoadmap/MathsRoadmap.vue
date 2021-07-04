<template>
    <div class="container roadmap">
        <h2 class="roadmap__title">Почему нам доверяют родители сотен тысяч детей по всему миру?</h2>

        <ul class="roadmap__list">
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
    </div>
</template>

<script>
export default {};
</script>

<style>
.roadmap {
    padding: calc(var(--gs) * 10) 0;

    &__title {
        max-width: 1100px;
        margin-bottom: calc(var(--gs) * 5);
    }

    &__list {
        position: relative;
        width: 1200px;
        height: 1350px;
        margin: 0 auto;

        &-item {
            position: absolute;

            &:nth-child(1) {
                top: 0;
                left: 0;
                width: 374px;

                & .roadmap__list-item-img {
                    margin-bottom: calc(var(--gs) * 4);
                    width: 374px;
                    height: 339.16px;
                }

                .roadmap__list-item-text-wrap {
                    margin: 0 auto;
                }

                &::before {
                    content: '';
                    position: absolute;
                    width: 244px;
                    height: 273.39px;
                    top: 197px;
                    left: 260px;
                    z-index: 2;
                    background-image: svg-load('../../img/svg/math_road_line_1.svg');
                }
            }

            &:nth-child(2) {
                top: 150px;
                left: 500px;

                & .roadmap__list-item-img {
                    width: 391.56px;
                    height: 218.9px;
                    position: absolute;
                    top: -115px;
                    right: -372px;
                }

                .roadmap__list-item-text-wrap {
                    margin: 0 auto;
                }

                &::before {
                    content: '';
                    position: absolute;
                    width: 75px;
                    height: 240px;
                    top: 170px;
                    left: 320px;
                    z-index: 2;
                    background-repeat: no-repeat;
                    background-image: svg-load('../../img/svg/math_road_line_2.svg');
                }
            }

            &:nth-child(3) {
                top: 540px;
                left: 795px;

                & .roadmap__list-item-img {
                    width: 399px;
                    height: 244.65px;
                    position: absolute;
                    top: -80px;
                    left: -420px;
                }

                .roadmap__list-item-text-wrap {
                    margin: 0 auto;
                }

                &::before {
                    content: '';
                    position: absolute;
                    width: 545px;
                    height: 80.5px;
                    top: 185px;
                    left: -560px;
                    z-index: 2;
                    background-repeat: no-repeat;
                    background-image: svg-load('../../img/svg/math_road_line_3.svg');
                }
            }

            &:nth-child(4) {
                top: 763px;
                left: 124px;
                width: 392px;
                display: flex;
                flex-direction: column-reverse;

                & .roadmap__list-item-img {
                    margin-bottom: calc(var(--gs) * 4);
                    width: 390.74px;
                    height: 353.02px;
                }

                .roadmap__list-item-text-wrap {
                    margin: 0 auto;
                }
            }

            &:nth-child(5) {
                top: 783px;
                left: 724px;
                width: 394px;

                & .roadmap__list-item-img {
                    margin-bottom: calc(var(--gs) * 4);
                    width: 387px;
                    height: 363px;
                }
            }

            &-text {
                margin-top: calc(var(--gs) * 2);
                font-size: 16px;
                line-height: 1.5;

                &-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 300px;
                    align-items: center;
                }
            }

            &-number {
                width: 88px;
                height: 88px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--cl-yellow);
                font-size: 42px;
                font-weight: bold;
                margin-right: calc(var(--gs) * 2);
            }

            &-title {
                max-width: 192px;
                font-weight: bold;
                font-size: 24px;
                line-height: 1.3;
            }
        }
    }
}
</style>
