<template>
    <div class="world__wrap">
        <div class="container">
            <div class="world">
                <h2 class="world__title">
                    Учитесь в школе<br />
                    международного уровня
                </h2>
                <img class="world__map" :src="require('../../img/svg/map_white.svg')" alt="" />
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
export default {};
</script>

<style>
.world {
    padding: calc(var(--gs) * 10) 0 calc(var(--gs) * 5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;

    @media (--mobile-lg) {
        padding-top: calc(var(--gs) * 2);
    }

    &__wrap {
        overflow: hidden;
    }

    &__title {
        width: 90%;
        margin-bottom: calc(var(--gs) * 5.5);

        @media (--desktop-lg) {
            width: 100%;
        }

        @media (--tablet) {
            margin-bottom: calc(var(--gs) * 3);
        }
    }

    &__map {
        min-width: 1290px;
        margin-bottom: -50px;

        @media (--desktop-lg) {
            margin-bottom: -120px;
        }

        @media (--desktop) {
            margin-bottom: -140px;
        }

        @media (--tablet) {
            min-width: 890px;
            max-width: 960px;
            margin-bottom: -60px;
        }

        @media (--mobile-lg) {
            width: 606.22px;
            height: 271.57px;
            margin-bottom: -80px;
        }
    }

    &__list {
        display: flex;
        justify-content: space-between;
        padding-bottom: calc(var(--gs) * 2.8);

        @media (--desktop) {
            max-width: 800px;
        }

        @media (--mobile-lg) {
            flex-direction: column;
            padding-bottom: calc(var(--gs) * 2);
        }

        &-wrap {
            width: 1000px;

            @media (--desktop-lg) {
                width: 100%;
            }
        }

        &-text {
            max-width: 790px;
            font-size: 24px;

            @media (--desktop) {
                font-size: 20px;
            }

            @media (--tablet) {
                font-size: 16px;
                max-width: 520px;
            }

            @media (--mobile-lg) {
                font-size: 14px;
            }
        }

        &-item {
            display: flex;
            align-items: center;

            @media (--mobile-lg) {
                margin-bottom: calc(var(--gs) * 1.6);
            }

            &:last-child {
                margin-bottom: 0;
            }

            &-img {
                margin-right: calc(var(--gs) * 1.6);

                @media (--desktop) {
                    width: 33px;
                    height: 33px;
                }

                @media (--tablet) {
                    margin-right: calc(var(--gs) * 0.8);
                    width: 22px;
                    height: 22px;
                }

                @media (--mobile-lg) {
                    margin-right: calc(var(--gs) * 1.8);
                    width: 32px;
                    height: 32px;
                }
            }

            &-text {
                font-size: 32px;

                @media (--desktop) {
                    font-size: 24px;
                }

                @media (--tablet) {
                    font-size: 20px;
                }

                @media (--mobile-lg) {
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
