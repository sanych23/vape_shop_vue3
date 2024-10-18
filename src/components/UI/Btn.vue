<script setup>
    const props = defineProps(['k_size_btn']);


    function valueSize(){
        return props.k_size_btn+'px';
    }
</script>

<template>
    <button :style="{padding:valueSize()}">
        <slot name="icon-prev"></slot>

        <slot></slot>

        <slot name="icon-next"></slot>
    </button>
</template>

<style scoped>

    
    button{
        background-color: gray;
        color:azure;
        /* padding: var(--x)px; */

    }
    .primary{
        background-color: #f00;
        color:#000;
    }
</style>