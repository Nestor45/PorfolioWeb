<template>
    <v-footer class="d-flex flex-column pa-2" color="teal-lighten-4" :class="{ 'justify-center': $vuetify.breakpoint }">
      <div class="d-flex w-100 align-center px-4">
        <strong>Gracias por el tiempo de observar -   Images de: pexels.com y Vuetify</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon.mdi"
          variant="plain"
          size="small"
          :href="icon.link"
        ></v-btn>

      </div>
  
      <div class="px-4 py-2 bg-white text-center w-100">
        {{ new Date().getFullYear() }} — <strong> Contacto: nestoralvarez97@gmail.com o por redes sociales</strong>
      </div>
    </v-footer>
</template>

<script setup>
    const icons = [
        { mdi:'mdi-linkedin', link:'http://www.linkedin.com/in/nestor-álvarez-b8a750227/'},
        { mdi:'mdi-github', link:'https://github.com/Nestor45'},
        { mdi:'mdi-instagram', link:"http://www.instagram.com/alvareznestor26"},
    ]
</script>

<style>
  .justify-center {
    justify-content: center;
  }
</style>