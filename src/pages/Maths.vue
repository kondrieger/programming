<template>
    <div class="maths" id="maths">
        <Header />
        <MathsStartBlock />
        <MathFeatures />
    </div>
</template>

<script>
import Header from '../components/header/header.vue';
import MathsStartBlock from '../views/MathsStartBlock/MathsStartBlock.vue';
import MathFeatures from '../views/MathsFeatures/MathsFeatures.vue';

export default {
    name: 'Maths',

    components: { Header, MathsStartBlock, MathFeatures },
};
</script>
