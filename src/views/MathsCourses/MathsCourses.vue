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

import './styles.css';

export default {
    components: { AButton },
};
</script>
