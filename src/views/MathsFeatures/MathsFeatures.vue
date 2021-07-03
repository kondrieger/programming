<template>
    <div class="container features">
        <div v-if="!isTablet" class="features__item">
            <p class="features__item-text"><b>Занятия с преподавателем</b><br />в группах до 12 человек</p>
            <img class="features__item-img" :src="require('../../img/svg/feature_1.svg')" alt="" />
        </div>
        <div v-if="!isTablet" class="features__item">
            <p class="features__item-text"><b>В школе Алгоритмики</b><br />или онлайн</p>
            <img class="features__item-img" :src="require('../../img/svg/feature_2.svg')" alt="" />
        </div>
        <div v-if="!isTablet" class="features__item">
            <p class="features__item-text"><b>Курсы для всех</b><br />мы не смотрим на школьные оценки</p>
            <img class="features__item-img" :src="require('../../img/svg/feature_3.svg')" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MathFeatures',

    computed: {
        isTablet() {
            return this.$mq.tablet;
        },
    },
};
</script>

<style>
.features {
    display: flex;
    justify-content: space-between;
    padding: calc(var(--gs) * 6) 0;

    @media (--tablet) {
        flex-direction: column;
        justify-content: unset;
    }

    @media (--mobile-lg) {
        display: block;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 300px;

        @media (--desktop) and (--tablet-min) {
            max-width: 259px;
        }

        @media (--tablet) {
            flex-direction: row;
            justify-content: unset;
        }

        &:nth-child(1) {
            @media (--tablet) {
                margin-left: calc(var(--gs) * 2);
                p {
                    min-width: 250px;
                }
            }
        }
        &:nth-child(2) {
            @media (--desktop) and (--tablet-min) {
                max-width: 190px;
            }
            @media (--tablet) {
                margin-left: calc(var(--gs) * 19);

                p {
                    min-width: 225px;
                }
            }
        }
        &:nth-child(3) {
            @media (--tablet) {
                margin-left: calc(var(--gs) * 0);
            }
            img {
                margin-left: -100px;
                @media (--desktop) and (--tablet-min) {
                    margin-left: -80px;
                }

                @media (--tablet) {
                    margin-left: 0;
                }
            }
            p {
                margin-bottom: calc(var(--gs) * 2.5);
                @media (--tablet) {
                    min-width: 319px;
                }
            }
        }
        &:nth-child(1),
        &:nth-child(3) {
            @media (--tablet) {
                img {
                    order: -1;
                }
            }
        }

        &-text {
            font-size: 20px;
            margin-bottom: calc(var(--gs) * 4.5);

            @media (--desktop) {
                font-size: 18px;
            }

            @media (--tablet) {
                font-size: 16px;
                margin-bottom: 0 !important;
            }
        }

        &-img {
            max-height: 140px;
        }
    }
}
</style>
