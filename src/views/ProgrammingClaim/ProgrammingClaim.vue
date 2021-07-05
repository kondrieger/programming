<template>
    <div class="claim__wrap">
        <div class="container claim">
            <p class="claim__text"><b>Ничего не понимаете в этих блогерах и питонах?</b><br /></p>
            <p class="claim__text">Оставьте заявку на бесплатную консультацию: мы подскажем, с чего начать.</p>
            <a-button class="claim__btn" wide theme="violet" text="Оставить заявку" />
            <img class="claim__img" :src="require('../../img/svg/programming_puzzles.svg')" alt="" />
        </div>
    </div>
</template>

<script>
import AButton from '../../components/button/button.vue';

export default {
    components: { AButton },
};
</script>

<style>
.claim {
    padding: calc(var(--gs) * 8.5) 0;
    text-align: center;
    position: relative;

    @media (--desktop) {
        padding: calc(var(--gs) * 7) 0;
    }

    @media (--tablet) {
        padding: calc(var(--gs) * 6) 0 calc(var(--gs) * 5);
    }

    @media (--mobile-lg) {
        padding: calc(var(--gs) * 4) 0;
    }

    &__wrap {
        background-color: var(--cl-yellow);
    }

    &__text {
        font-size: 24px;
        margin: 0 auto;
        color: var(--cl-violet);

        @media (--desktop) {
            max-width: 700px;
        }

        @media (--tablet) {
            font-size: 18px;
            line-height: 26px;
        }

        & + & {
            margin: 0 auto calc(var(--gs) * 5);

            @media (--desktop) {
                margin: calc(var(--gs) * 1) auto calc(var(--gs) * 4);
            }

            @media (--tablet) {
                margin-bottom: calc(var(--gs) * 2);
                font-size: 16px;
                line-height: 24px;
                max-width: 410px;
            }

            @media (--mobile-lg) {
                font-size: 14px;
                line-height: 20px;
                max-width: 250px;
            }
        }

        @media (--tablet) {
            font-size: 16px;
            font-size: 1.5;
        }
    }

    &__btn {
        margin: 0 auto;
        font-size: 1.25rem;

        @media (--tablet) {
            font-size: 15px;
            width: 239px;
        }

        @media (--mobile-lg) {
            width: 100%;
        }
    }

    &__img {
        position: absolute;
        bottom: 0;
        right: 100px;

        @media (--desktop-lg) {
            right: 50px;
        }

        @media (--desktop) {
            right: 20px;
        }

        @media (--tablet) {
            right: 0;
        }

        @media (--mobile-lg) {
            display: none;
        }
    }
}
</style>
