<script setup>
  import { ref } from 'vue';
  import Content from './components/Content.vue';
  import Layout from './components/Layout.vue';
  import Footer from './components/Footer.vue';
  const theme = ref('light')

</script>

<template>
  <v-app :theme="theme">
    <v-card max-width="1200px" class="mx-auto">
      <Layout></Layout>
      <v-main class="text-center">
        <Content></Content>
      </v-main>
    </v-card>
    <Footer></Footer>
  </v-app>
</template>
