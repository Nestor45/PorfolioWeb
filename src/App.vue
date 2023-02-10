<script setup>
  import { ref, onMounted } from 'vue';
  import Content from './components/Content.vue';
  import Layout from './components/Layout.vue';
  import Footer from './components/Footer.vue';

  import { useStore } from 'vuex'
  const store = useStore()

  const theme = ref('light')
  console.log("Hola desde App", store.state.theme)
</script>

<template>
  <v-app :theme=store.state.theme>
      <Layout></Layout>
      <v-main class="text-center">
        <Content></Content>
      </v-main>
    <section id="contact_sec">
      <Footer></Footer>
    </section>
  </v-app>
</template>
