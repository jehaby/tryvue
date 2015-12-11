Vue.component('counter', {
    template: "#counter-template",
    data: function () {
        return {
            i: 0
        }
    },
    props: ['text'],
    methods: {
        count: function() {
            this.i += 1;
        }
    }
});



Vue.component('subscription', {
    template: '#subscription-template',
    data: function() {
        currentPlan: 0

    },
    methods: {

    }
});


Vue.component('subscription-element', {
    template: '#subscription-element',
    props: ['chosen', 'weight', 'title'],
    data: function() {

    },

});


new Vue({
    el: '#app',
});

Vue.config.debug = true;
