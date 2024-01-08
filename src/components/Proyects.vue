<template>
    <v-main>
        <v-divider></v-divider>
        <div>
            <h1 class="text-center"> Proyectos </h1>
        </div>
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
                                <v-card-title><p class="text-center text-white">{{ card.title }}</p></v-card-title>
                                <v-card-actions>
                                    <v-btn class="text-center text-white" :icon="card.icon" variant="text" :href="card.link"></v-btn>
                                </v-card-actions>

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
        { title: 'Red Social', icon: 'mdi-laravel', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, text:'Idea de red social por clasificación, usando LARAVAL, VUEJS Y MYSQL', link:'https://github.com/Nestor45/blogpho' },
        { title: 'Api SpaceX', icon: 'mdi-angular', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',flex: 3, text:'Api consumida con Angular, con filtro y carga por scroll', link: 'https://github.com/Nestor45/Api-spaceX'},
        { title: 'CV', icon: 'mdi-auto-download', src: 'https://images.pexels.com/photos/5915156/pexels-photo-5915156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', flex: 3, text:'Cv con las experiencias que he tenido', link:'https://drive.google.com/file/d/1j4JJ5zIXWM5F0O-ISQa2pAz8PdJ7TKf0/view'},
        { title: 'Résumé', icon: 'mdi-account-tie-voice', src: 'https://images.pexels.com/photos/19582452/pexels-photo-19582452/free-photo-of-libros-biblioteca-educacion-conocimiento.jpeg', flex: 3, text:'Este es mi RÉSUMÉ con objetivos que tengo', link:'https://iteso01-my.sharepoint.com/:w:/g/personal/nestor_alvarez_iteso_mx/ETCbGOzUSqdJhQ0UBCUYtCUB9I1Ye6c8sVcTigZ1sh3CfQ?e=R7CL95'},
        
    ]

</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .9;
        position: absolute;
        width: 100%;
    }

    @media (max-width: 600px) {
    /* Estilos para dispositivos más pequeños */
    .text-white {
        font-size: 11px; /* Ajusta el tamaño del texto para dispositivos más pequeños */
    }
    }
</style>