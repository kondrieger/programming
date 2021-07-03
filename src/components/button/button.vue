<template>
    <button :class="`btn ${theme ? `btn--${theme}` : ''} ${wide ? 'btn--wide' : ''}`">{{ text }}</button>
</template>

<script>
export default {
    name: 'a-button',
    props: {
        text: {
            type: String,
            default: '',
        },
        theme: {
            type: String,
            default: '',
        },
        wide: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.btn {
    width: 239px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 46px;
    border: none;
    cursor: pointer;
    font-family: var(--font-montserrat);
    font-size: 15px;
    font-weight: 600;

    &--wide {
        width: 424px;
        height: 45px;
        border-radius: 60px;
        color: var(--cl-violet);
        background-color: var(--cl-white);

        &:hover {
            background-color: var(--cl-pink);
        }

        &:active {
            background-color: var(--cl-white);
        }
    }

    &--yellow {
        color: var(--cl-violet);
        background-color: var(--cl-yellow);

        &:hover {
            background-color: var(--cl-dk-yellow);
        }

        &:active {
            background-color: var(--cl-yellow);
        }
    }

    &--green {
        color: var(--cl-white);
        background-color: var(--cl-green);

        &:hover {
            background-color: var(--cl-dk-green);
        }

        &:active {
            background-color: var(--cl-green);
        }
    }

    &--blue {
        color: var(--cl-white);
        background-color: var(--cl-blue);

        &:hover {
            background-color: var(--cl-dk-blue);
        }

        &:active {
            background-color: var(--cl-blue);
        }
    }

    &--violet {
        color: var(--cl-white);
        background-color: var(--cl-violet);

        &:hover {
            background-color: var(--cl-dk-violet);
        }

        &:active {
            background-color: var(--cl-violet);
        }
    }
}
</style>
