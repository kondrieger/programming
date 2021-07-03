<template>
    <div id="maths">
        <AHeader />
        <div class="container">
            <submit-form />
        </div>
    </div>
</template>

<script>
import AHeader from '../components/header/header.vue';
import SubmitForm from '../components/submit-form/submit-form.vue';

export default {
    name: 'Maths',

    components: { AHeader, SubmitForm },
};
</script>

<style scoped></style>
