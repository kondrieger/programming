<template>
    <div id="app">
        <div id="nav">
            <router-link to="/maths">Математика</router-link> |
            <router-link to="/about">Программирование</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import './scripts/common';
export default {};
</script>
