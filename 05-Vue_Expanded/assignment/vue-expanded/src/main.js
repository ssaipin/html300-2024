// Import CSS files first to ensure they are at the top of the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Vue core and the main App component
import { createApp } from 'vue';
import App from './App.vue';

// Import the router instance
import router from './router';

// Import the Bootstrap JavaScript bundle
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Create a Vue application instance
const app = createApp(App);

// Use the router plugin on the app instance
app.use(router);

// Mount the app to the DOM
app.mount('#app');