<template>
    <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
        fixed
    >
        <template v-slot:image>
        <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
        </template>
        <v-spacer></v-spacer>
        <v-toolbar-title>Portfolio</v-toolbar-title>
        <v-tooltip location="top">
            <template v-slot:activator="{ props: tooltip }">
                <v-btn icon v-bind="mergeProps(tooltip)" href="#activities_sec">
                    <v-icon icon="mdi-book-open" />
                </v-btn>
            </template>
            <span>Who I am</span>
        </v-tooltip>
        <v-tooltip location="top">
            <template v-slot:activator="{ props: tooltip }">
                <v-btn icon v-bind="mergeProps(tooltip)" href="#interests_sec">
                    <v-icon icon="mdi-briefcase-account" />
                </v-btn>
            </template>
            <span>Portfolio</span>
        </v-tooltip>

        <v-tooltip location="top">
            <template v-slot:activator="{ props: tooltip }">
                <v-btn icon v-bind="mergeProps(tooltip)" href="#interests_sec">
                    <v-icon icon="mdi-chat" />
                </v-btn>
            </template>
            <span>Interest</span>
        </v-tooltip>

        <v-tooltip location="top">
            <template v-slot:activator="{ props: tooltip }">
                <v-btn icon v-bind="mergeProps(tooltip)" href="#proyects_sec">
                    <v-icon icon="mdi-code-json" />
                </v-btn>
            </template>
            <span>Projects</span>
        </v-tooltip>
    
        <v-tooltip location="top">
            <template v-slot:activator="{ props: tooltip }">
                <v-btn icon v-bind="mergeProps(tooltip)" href="#contact_sec">
                    <v-icon icon="mdi-email" />
                </v-btn>
            </template>
            <span>Contact</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-btn
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="onClick"
        >Black/Write</v-btn>
    </v-app-bar>
</template>

<script setup>
    import { mergeProps, ref } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()

    const merged = mergeProps()

    const theme = ref('light')

    const onClick = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
        store.commit('updateTheme', theme.value)
        return theme.value
    }
    
</script>