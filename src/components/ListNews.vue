<script setup>
import { ref, computed } from 'vue'
import News from './News.vue';



let news = ref([
  {id: 1, title: "новсть 1"},
  {id: 2, title: "новсть 2"},
  {id: 3, title: "новсть 3"},
]);

let selectNews = ref(null);

let onSelectNews = (id_news)=>{
  let resultNews = searchNews(id_news);

  if(resultNews){
    selectNews.value = resultNews.id;
  }
}


function searchNews(id_news){
  for(let item of news.value){
    if(item.id == id_news){
      return item;
    }
  }

  return null;
}

let checkActiveItem = function(id){

    if(id == selectNews.value){
        return "active";
    }
    
}
</script>

<template>
    <div>
        <p v-if="!selectNews">
            Ничего не выбрано
        </p>
        <p v-else>
            {{ searchNews(selectNews).title }}
        </p>

        
        <ul>
            <li v-for="(item) in news">
            
                <News @click="onSelectNews(item.id)" v-bind:item="item" :key="item.id" :class="checkActiveItem(item.id)"/>
    
            </li>
        </ul>
    </div>

</template>

<style scoped>
    .active{
        background-color:#f00;
    }
</style>