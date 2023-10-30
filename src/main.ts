import './assets/main.css';
import routes from './Components/Routes/routes';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

/**Mise en place du router 
 * history permet de faire des retours en arriére avec les felche du navigateur
 * routes vient de mon dossier et explique les routes par defautl etc et quel page ils appartienne
*/
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

/**crée l'application et son affichage */
const app = createApp(App);

/**permet de faire remonter la page en haut
 * et donc faire apparaitre les bons composant à l'écran
 * mixin function avant l'affichage ici le scrollto
 */
app.mixin({
    beforeMount() {
        window.scrollTo(0, 0)
    }
});
/**permet de lire les routes utiliser par l'utilisateurs */
app.use(router);

/**Je monte et affiche l'app */
app.mount('#app');
