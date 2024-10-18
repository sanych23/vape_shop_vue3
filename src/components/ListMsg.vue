<script setup>
    const props = defineProps(['msg', 'deleteItem'])
</script>

<template>
    <div>
        <ul>
            <li v-for="item in msg" :key="item.id">
                <p>{{ item.content }} <span @click="deleteItem(item.id)">x</span></p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    span{
        border:1px solid #ccc;
        padding: 2px 5px;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }
</style>