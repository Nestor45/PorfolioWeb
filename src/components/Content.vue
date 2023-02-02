<template>
    <v-container>
        <v-card>
            <v-row justify="space-around">
                <v-col cols="12" sm="6" md="4">
                    <div class="d-flex justify-center mb-6">
                        <v-sheet class="ma-2 pa-2">
                            <v-avatar size="200">
                                <v-img
                                    aspect-ratio="1.5"
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                ></v-img>
                            </v-avatar>
                        </v-sheet>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-card-text class="text-h5 font-weight-bold">
                        {{ name }}
                    </v-card-text>
                    <v-card-subtitle class="pt-4">
                        Engineer  Developer • Cloud Computing•lent
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
       
        <Activitis></Activitis>
        
        <Interests></Interests>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
    import Activitis from '../components/Activities.vue'
    import Interests from './Interests.vue';
    const reveal = ref(true)
    const name = "Nestor A. Álvarez García"
    const items = [
        { text: 'Experience Level: 3+ years', icon: 'mdi-clock' },
        { text: 'Interested In: Cybersegurity, Cloud Computing, IA', icon: 'mdi-account' },
        { text: 'Intermedie Skills: Python, Java, Laravel, VueJS, AWS Cloud,', icon: 'mdi-flag' },
        { text: 'Linux, MySQL | Basic: NodeJS, MongoDB, English A2'},
    ]

</script>
