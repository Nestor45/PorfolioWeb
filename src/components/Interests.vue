<template>
    <v-main>
        <div>
            <p class="text-left text-h5"> Interests </p>
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
                                height="200"
                                @click="toggle"
                                >
                                <div
                                    class="text-h9 flex-grow-1 text-center"
                                >
                                    {{ isSelected   ? `${item.text}` : `` }}
                                    <v-icon size="large" :icon=item.icon ></v-icon>
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
        { text:'Books:', icon:'mdi-book'},
        { text:'Music:', icon:'mdi-music'},
        { text:'Movies:', icon:'mdi-movie'},
        { text:'Photos:', icon:'mdi-camera'},
        { text:'Cities:', icon:'mdi-airport'},
    ]
</script>