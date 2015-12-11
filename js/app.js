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



Vue.component('subscription-container', {
    template: '#subscription-container',
    data: function() {
        return {
            subscriptions: [
                {
                    title: 'Platinum',
                    weight: 3
                },
                {
                    title: 'Gold',
                    weight: 2
                },
                {
                    title: 'Silver',
                    weight: 1
                },
                {
                    title: 'Free',
                    weight: 0
                }
            ],
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
