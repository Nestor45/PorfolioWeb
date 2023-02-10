import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from "vuex";
import StoreData from './store.js';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' 

const store = createStore(StoreData);

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})

createApp(App).use(vuetify).use(store).mount('#app')
