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
                                        Engineer  Developer • Cloud Computing • Developer Movile • Photography 
                                    </p>
                                    <v-list-item v-for="(item, i) in items" :key="i">
                                        <div class="text-h9 flex-grow-1 text-center">
                                            <p>{{item.text}}</p>
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
        { text: 'Experience Level: 3+ years', icon: 'mdi-clock' },
        { text: 'Interested In: Cybersegurity, Cloud Computing, IA', icon: 'mdi-account' },
        { text: 'Intermedie Skills: Python, Java, Laravel, VueJS, AWS Cloud,', icon: 'mdi-flag' },
        { text: 'Linux, MySQL | Basic: NodeJS, MongoDB, English A2'},
    ]

</script>
