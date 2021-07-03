<template>
    <div class="maths" id="maths">
        <Header />
        <MathsStartBlock />
    </div>
</template>

<script>
import Header from '../components/header/header.vue';
import MathsStartBlock from '../views/MathsStartBlock/MathsStartBlock.vue';

export default {
    name: 'Maths',

    components: { Header, MathsStartBlock },
};
</script>
