<template>
    <v-main>
        <div>
            <p class="text-left text-h5"> Interests (Click me)</p>
        </div>
        <v-divider></v-divider>
        <v-item-group>
            <v-container fluid>
                <v-row justify="space-around">
                    <v-col v-for="(item, i) in items" :key="item.text" cols="12"  md="2">
                        <v-item v-slot="{ isSelected, selectedClass, toggle }">
                            <v-card
                                :class="['d-flex align-center', selectedClass]"
                                dark
                                elevation="9"
                                height="200"
                                @click="toggle"
                                >
                                <div
                                    class="text-h9 flex-grow-1 text-center"
                                >
                                    {{ isSelected   ? `${item.text}` : `` }}
                                    <v-icon size="large" :icon=item.icon v-if="!isSelected"></v-icon> 
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </v-main>
</template>

<script setup>
    const items = [
        { text:'Books: El resplandor, Batallas en el desierto, Juego de tronos I ...Others', icon:'mdi-book'},
        { text:'Music: Developing: Radio Linking Park | Studying: Jazz Relax and Lofi Beeats', icon:'mdi-music'},
        { text:'Movies: Interstellar, Forrest Gump, Top Gun 1 and 2 and Sherk', icon:'mdi-movie'},
        { text:'Favorites Animals: Dogs, Cats, Chickens and Horses ', icon:'mdi-cow'},
        { text:'Cities: Oaxaca, San Luis Posotí, Puebla, Michoacán and Veracruz', icon:'mdi-airport'},
    ]
</script>