<template>
    <div id="maths">
        <Header />
        <div class="container">
            <submit-form />
        </div>
    </div>
</template>

<script>
import Header from '../components/header/header.vue';
import SubmitForm from '../components/submit-form/submit-form.vue';

export default {
    name: 'Maths',

    components: { Header, SubmitForm },
};
</script>

<style scoped></style>
