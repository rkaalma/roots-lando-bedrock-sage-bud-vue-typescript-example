import domReady from '@roots/sage/client/dom-ready';
import { createApp } from 'vue';
import App from './vue/App.vue';

/**
 * Application entrypoint
 */
domReady(async () => {
  const app = createApp(App);

  app.mount('#app');
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
