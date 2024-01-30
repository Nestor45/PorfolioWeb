<template>
    <v-main>
        <v-divider></v-divider>
        <div>
            <h1 class="text-center"> Actividades </h1>
        </div>
        <v-item-group>
            <v-container fluid>
                <v-row justify="space-around">
                    <v-col cols="12" md="8">
                        <v-card class="">
                            <v-img
                                class="align-end text-white"
                                height="200"
                                src="computer-gb861838c7_1920.jpg"
                                cover
                            >
                            </v-img>
                            <v-card-title> <p class="text-center">Developer</p></v-card-title>
                            <v-card-text>
                                Tengo experiencia en programación del lado del backend, 
                                especialmente en Java con el framework Spring, así como en PHP con Laravel. 
                                También poseo habilidades en Python. En el ámbito del frontend, 
                                me siento especialmente cómodo trabajando con VueJs, aunque también tengo conocimientos en Angular. 
                                Me entusiasma participar en colaboraciones y enfrentar nuevos desafíos. 
                                Estoy constantemente buscando oportunidades para ampliar mis habilidades y contribuir de manera 
                                significativa en proyectos innovadores 
                            </v-card-text>
                        </v-card>
                        <div class="mt-4 text-subtitle-2"></div>
                        <v-card class="">
                            <v-img
                                class="align-end text-white"
                                height="200"
                                src="/background-ga2cf5becc_1920.jpg"
                                cover
                            >
                            </v-img>
                            <v-card-title> <p class="text-center">Cloud Computing</p></v-card-title>
                            <v-card-text>
                                Es una de las nuevas áreas interesantes en las que estoy aprendiendo,<br>
                                esta tecnología es una de mis favoritas porque <br>
                                es escalable y eficiente para muchos propósitos.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </v-main>
</template>