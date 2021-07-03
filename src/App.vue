<template>
    <div id="app">
        <div id="nav">
            <router-link to="/maths">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import './scripts/common';
export default {};
</script>
