<template>
    <button :class="`btn ${theme ? `btn--${theme}` : ''} ${wide ? 'btn--wide' : ''}`">{{ text }}</button>
</template>

<script>
import './styles.css';

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
