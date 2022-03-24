// Vue2
// import Vue from 'vue';
// import App from './App'; // Since App is our own file, must give relative path

// new Vue({
//     // This is equivalent to using .$mount('#app'); at the end of the vue instance brackets
//     //el: '#app',
//     render: h => h(App)

// }).$mount('#app');

// Vue3
import { createApp } from "vue";
import App from "./App"; 
 
const app = createApp(App);
app.mount("#app");
