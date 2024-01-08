<template>
    <v-card max-width="1200" class="mx-auto">
        <section id="activities_sec">
            <v-main>
                <v-item-group>
                    <v-container fluid>
                        <v-row justify="space-around">
                            <v-card elevation="0">
                                <v-col class="text-xs-center">
                                    <v-avatar size="200">
                                        <v-img
                                            aspect-ratio="1.5"
                                            src="/image00023.jpeg"
                                        ></v-img>
                                    </v-avatar>
                                    
                                    <v-card-text class="text-h5 font-weight-bold">
                                        {{ name }}
                                    </v-card-text>

                                    <p style="color:rgb(152, 150, 149 )">
                                        {{ skills }}
                                    </p>
                                    
                                    <v-list-item v-for="(item, i) in items" :key="i">
                                        <div class="text-h9 flex-grow-1 text-center">
                                             <p><strong>{{ item.title }}</strong>{{ item.text }} </p>
                                        </div>
                                        <template v-slot:prepend>
                                            <v-icon :icon="item.icon"></v-icon>
                                        </template>
                                    </v-list-item>
                                </v-col>
                            </v-card>
                        </v-row>
                    </v-container>
                </v-item-group>
            </v-main>
        </section>
        <section id="interests_sec">
            <Activitis></Activitis>
        </section>
        <section id="interests_sec">
            <Interests></Interests>
        </section>
        <section id="proyects_sec">
            <Proyects></Proyects>
        </section>    
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
    import Activitis from '../components/Activities.vue'
    import Interests from './Interests.vue';
    import Proyects from './Proyects.vue';
    const reveal = ref(true)
    const name = "Nestor A. Álvarez García"
    const items = [
        { title: 'Experiencia: ' , text: '3+ años', icon: 'mdi-clock' },
        { title: 'Skills: ',  text: 'Laravel, VueJS, AWS Cloud,', icon: 'mdi-flag' },
        { title: 'Skills medias: ',text: 'Java, MySQL, Linux, Python'},
        { title: 'Skills básicas: ', text: 'NodeJS, MongoDB, English A2'},
        { title: 'Intereses: ', text: ' Cybersegurity, Cloud Computing y IA', icon: 'mdi-account' },
    ]
    const skills = "Developer • Cloud Computing • Fotografía "
</script>
