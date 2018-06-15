import Vue from "vue/dist/vue.js";
import HelloWorld from './components/hello-world.vue';

new Vue({
    el: "#root",
    data: {
        message: "Vue Component"
    },
    components: {
        'hello-world': HelloWorld
    },
    template:`
        <div>
            <hello-world></hello-world>
        </div>
    `
});
