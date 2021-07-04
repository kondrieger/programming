<template>
    <div class="header">
        <div class="container header__wrap">
            <img
                class="header__logo"
                :src="require('../../img/svg/maths_logo.svg')"
                alt="Алгоритмика математика логотип"
            />
            <div class="header__links" v-if="!isTablet">
                <a class="header__links-link" href="#"><p>Факультет программирования</p></a>
                <a class="header__links-link" href="#"><p>Курсы</p></a>
                <a class="header__links-link" href="#"><p>О нас</p></a>
                <a class="header__links-link" href="#"><p>Площадки</p></a>
            </div>
            <div class="header__links header__links--media" v-if="!isTablet">
                <a class="header__links-phone" href="tel:+74950239428"><p>+7 (495) 023-94-28</p></a>
                <div class="header__links-social">
                    <a href="#" class="header__links-social-item">
                        <img
                            class="header__links-social-item-img--whats"
                            :src="require('../../img/svg/whats_logo.svg')"
                            alt="Whatsapp логотип"
                        />
                    </a>

                    <a href="#" class="header__links-social-item">
                        <img
                            class="header__links-social-item-img--tg"
                            :src="require('../../img/svg/tg_logo.svg')"
                            alt="Telegram логотип"
                        />
                    </a>
                </div>
            </div>
            <div v-else class="header__burger-wrap" @click="burger">
                <img class="header__burger-img" :src="require('../../img/svg/burger_icon.svg')" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import './styles.css';
export default {
    name: 'a-header',
    data() {
        return {};
    },
    computed: {
        isTablet() {
            return this.$mq.tablet;
        },
    },
    methods: {
        burger() {
            console.log('burger');
        },
    },
};
</script>
