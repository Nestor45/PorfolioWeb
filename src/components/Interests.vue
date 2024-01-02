<template>
    <v-main>
        <v-divider></v-divider>
        <div>
            <h1 class="text-center"> Intereses (Click me)</h1>
        </div>
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
        { text:'Libros: El resplandor, Batallas en el desierto, Boulevard ...Otros', icon:'mdi-book'},
        { text:'Musica: Linking Park, Jazz Relax, Lofi Beeats, Regional Mexicano', icon:'mdi-music'},
        { text:'Peliculas: Interstellar, Forrest Gump, Top Gun 1 - 2 and Sherk', icon:'mdi-movie'},
        { text:'Animales Favitos: 🐕‍🦺, 🐈, 🐓 y 🐴 ', icon:'mdi-cow'},
        { text:'Ciudades Visitadas de México: Oaxaca, San Luis Posotí, Puebla, Michoacán, Veracruz, Chiapas', icon:'mdi-airport'},
    ]
</script>