var Vue = require('vue');
var App = require('./app.vue');
var Data = require('./data.js');


new Vue({
    el: 'body',
    data: {
        data: Data
    },
    components: {
        app: App
    }
});