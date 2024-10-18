<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();

</script>
<template>
    category {{ route.params.id }}
</template>
<style scoped>
</style>