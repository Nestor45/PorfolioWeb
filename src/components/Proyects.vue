<template>
    <v-main>
        <div>
            <p class="text-left text-h5"> Proyects and Work </p>
        </div>
        <v-divider></v-divider>
        <v-container fluid>
            <v-row dense>
                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card v-bind="props">
                            <v-img
                                class="align-end"
                                height="200px"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                :src="card.src"
                                cover
                            >
                                <v-expand-transition>
                                    <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h9"  style="height: 100%;">
                                        <v-card-text>
                                            {{ card.text }}
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                                <v-card-actions>
                                    <v-btn class="ms-1" icon="mdi-file-download" variant="text" :href="card.link"></v-btn>
                                </v-card-actions>
                                <v-card-title> <p class="text-center text-white">{{ card.title }}</p></v-card-title>

                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script setup>

    const cards = [
        { title: 'Elevator Pitch', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, text:'I LIKE TO CREATE NEW THINGS, MEET NEW PEOPLE AND NEW PLACES', link:'https://iteso01-my.sharepoint.com/:w:/g/personal/nestor_alvarez_iteso_mx/EezoJycSdKhGvpesrNhx3dYBSFVmUR5Mzn9KcI4jzmKRzQ?e=2qp8dZ' },
        { title: 'The Business Report', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',flex: 3, text:'WHY ARE BOOKS IMPORTANT TO US? ', link: 'https://iteso01-my.sharepoint.com/:w:/g/personal/nestor_alvarez_iteso_mx/EdFz_iIkaqhMh3A1UTVGsjMBrhAlCJwQljYEDlzSmPC6IA?e=7jsgQz'},
        { title: 'CV', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, text:'THIS IS MY CV', link:'https://drive.google.com/file/d/1j4JJ5zIXWM5F0O-ISQa2pAz8PdJ7TKf0/view'},
        { title: 'Résumé', src: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80', flex: 3, text:'THIS IS MY RÉSUMÉ', link:'https://iteso01-my.sharepoint.com/:w:/g/personal/nestor_alvarez_iteso_mx/ETCbGOzUSqdJhQ0UBCUYtCUBFTbdyrRv9QPGq-QNQ5CIPQ?e=GBDgCb'},
        
    ]

</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
</style>