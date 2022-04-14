import { createApp } from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire';
import { router } from './router';

const app = createApp(App);

// Use the router.
app.use(router);

// Use the firestore plugin.
app.use(firestorePlugin);

// Mount the app
app.mount('#app');
