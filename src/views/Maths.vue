<template>
    <div class="home">
        <img alt="Vue logo" src="../img/logo.png" />
        <test-component />
    </div>
</template>

<script>
import TestComponent from '../components/test-component/test-component.vue';

export default {
    name: 'Maths',
    components: { TestComponent },
};
</script>

<style scoped></style>
