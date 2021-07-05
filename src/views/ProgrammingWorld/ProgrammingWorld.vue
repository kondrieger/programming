<template>
    <div class="world__wrap">
        <div class="container">
            <div class="world">
                <h2 class="world__title">
                    Учитесь в школе<br />
                    международного уровня
                </h2>
                <img class="world__map" :src="require('../../img/svg/map_yellow.svg')" alt="" />
                <div class="world__list-wrap">
                    <ul class="world__list">
                        <li class="world__list-item">
                            <img class="world__list-item-img" :src="require('../../img/svg/flag.svg')" alt="" />
                            <p class="world__list-item-text">40 стран</p>
                        </li>
                        <li class="world__list-item">
                            <img class="world__list-item-img" :src="require('../../img/svg/school.svg')" alt="" />
                            <p class="world__list-item-text">250 школ</p>
                        </li>
                        <li class="world__list-item">
                            <img class="world__list-item-img" :src="require('../../img/svg/smile.svg')" alt="" />
                            <p class="world__list-item-text">200 000 выпускников</p>
                        </li>
                    </ul>
                    <p class="world__list-text">
                        Нам доверяют родители сотен тысяч детей по всему миру — от Нью-Йорка до Владивостока.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './styles.css';

export default {};
</script>
