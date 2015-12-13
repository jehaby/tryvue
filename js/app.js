Vue.component('subscription-container', {
    template: '#subscription-container',
    data: function() {
        return {
            subscriptions: ['Free', 'Silver', 'Gold', 'Platinum'],
            chosen: 0
        }
    },
});


Vue.component('subscription', {
    template: '#subscription',
    props: ['chosen', 'weight', 'title'],
    methods: {
        choose: function (event) {
            this.chosen = this.weight
        }
    }
});


new Vue({
    el: '#app',
});

Vue.config.debug = true;
