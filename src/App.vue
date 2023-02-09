<script setup>
  import { ref, onMounted } from 'vue';
  import Content from './components/Content.vue';
  import Layout from './components/Layout.vue';
  import Footer from './components/Footer.vue';

  const theme = ref('light')

</script>

<template>
  <v-app :theme="theme">
      <Layout></Layout>
      <v-main class="text-center">
        <Content></Content>
      </v-main>
    <section id="contact_sec">
      <Footer></Footer>
    </section>
  </v-app>
</template>
