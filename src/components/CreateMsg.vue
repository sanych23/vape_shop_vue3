<script setup>
    let props = defineProps(['changeMsg', 'content', 'addMsg']);

    // function addMsg1(){
    //     props.addMsg()
    // }

</script>

<template>
    <div>
        <input type="text" @input="changeMsg" :value="content">
        <br>
        <button @click="addMsg">Добавить</button>
    </div>
</template>

<style scoped>

</style>