<script setup>

  import { ref, reactive } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import ListNews from './components/ListNews.vue';
  import Test from './components/Test.vue';
  import Btn from './components/UI/Btn.vue';
  import ListMsg from './components/ListMsg.vue';
import Cart from './components/magazine/pages/Cart.vue';
import Default from './components/magazine/templates/Default.vue';
import { RouterLink, RouterView } from 'vue-router';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

let products = [
    {
      id: 1,
      title: "NebulaVape",
      img: 'images/shop/01.jpg',
      count: 5,
      price: 100,
    },
    {
      id: 2,
      title: "NebulaVape 2",
      img: 'images/shop/02.jpg',
      count: 5,
      price: 120,
    },
    {
      id: 3,
      title: "NebulaVape 3",
      img: 'images/shop/03.jpg',
      count: 5,
      price: 100,
    },
    {
      id: 4,
      title: "NebulaVape 4",
      img: 'images/shop/04.jpg',
      count: 5,
      price: 100,
    },
    {
      id: 5,
      title: "NebulaVape 5",
      img: 'images/shop/05.jpg',
      count: 5,
      price: 100,
    },
  ];

let userInfo = ref(
  {
    user: {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
    },
    cartProducts: [
      {
        id: 2,
        count: 1
      },
      {
        id: 5,
        count: 2
      }
    ]
  }
);

</script>

<template>

  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/contacts">Contacts</RouterLink>
  <RouterLink to="/category/1">Category</RouterLink>

  <RouterLink :to="{
    path: '/contacts',
    props: {
      x: 'leonardo',
    }
  }">Contacts Leo</RouterLink>

  <RouterView/> -->
  <Default>
    <template v-slot:header>
      название страницы Корзина
    </template>

    <template v-slot>
      <Cart
        :products
        :userInfo
      ></Cart>
    </template>

    <template v-slot:footer>
      my footer
    </template>
  </Default>

</template>

<style scoped scss>

</style>
