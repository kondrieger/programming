<template>
    <div class="container courses">
        <h2 class="courses__title">Курсы программирования</h2>
        <img class="courses__bg" :src="require('../../img/svg/programming_square.svg')" alt="" />
        <ul class="courses__list">
            <li class="courses__list-item">
                <p class="courses__list-item-title">Python Pro</p>
                <p class="courses__list-item-age">14–17 лет</p>
                <p class="courses__list-item-text">
                    Научим извлекать полезную информацию из больших наборов данных и строить модели на уровне
                    профессионалов
                </p>
                <a-button theme="orange" text="Оставить заявку" />

                <img class="courses__list-item-img" :src="require('../../img/svg/programming_courses_1.svg')" alt="" />
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
        margin: 0 0 calc(var(--gs) * 7) calc(var(--gs) * 7);

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
}
</style>
