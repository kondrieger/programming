<template>
    <div class="test container">
        <h1>Всем приве приветский</h1>
        <h2>Всем приве приветский</h2>
        <h3>Всем приве приветский</h3>
        <p>Всем приве приветский</p>
        <a-button text="Оставить заявку" wide />
    </div>
</template>

<script>
import './styles.css';
import AButton from '../button/button.vue';

export default {
    name: 'test-component',
    components: { AButton },
};
</script>
