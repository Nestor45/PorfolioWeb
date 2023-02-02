<template>
    <v-footer class="d-flex flex-column" color="teal-lighten-4">
      <div class="d-flex w-100 align-center px-4">
        <strong>Thanks for your view and time!  Images by: pixabay.com and Vuetify</strong>
  
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
        {{ new Date().getFullYear() }} — <strong>Personal Porfolio</strong>
      </div>
    </v-footer>
</template>

<script setup>
    const icons = [
        { mdi:'mdi-linkedin', link:'http://www.linkedin.com/in/nestor-álvarez-b8a750227/'},
        { mdi:'mdi-github', link:'https://github.com/Nestor45'},
        { mdi:'mdi-facebook', link:'http://www.facebook.com/H1alvareznestorH1' },
        { mdi:'mdi-twitter', link:'http://www.twitter.com/Nestor_a45'},
        { mdi:'mdi-instagram', link:"http://www.instagram.com/alvareznestor26"},
    ]
</script>