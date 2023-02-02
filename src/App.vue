<script setup>
  import { ref } from 'vue';
  import Content from './components/Content.vue';
  import Layout from './components/Layout.vue';

  const theme = ref('light')

</script>

<template>
  <v-app :theme="theme">
    <v-main>
      <Layout></Layout>
      <Content></Content>
    </v-main>
  </v-app>
</template>
