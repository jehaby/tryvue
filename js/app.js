var DeliveryData = {
    deliver_to: ['В офис', "Клиенту", "Партнеру"],
    test: 'test'
}

test = 42;

var Delivery = Vue.extend({
    props: ['data'],
    template: "\
<div> \
Delivery goes here!11 \
<p> {{ data }} </p>\
<small> last paragraph </small>\
<pre>\
{{ $props | json }}\
</pre>\
</div>\
"
});


// Vue.component('delivery', Delivery);


Vue.component('counter', {
    template: "counter-template",
    data: {
        i: 0
    },
    methods: {
        count: function() {
            this.i++;
        }
    }
})


new Vue({
    config: {
        debug: true
    },
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        data: DeliveryData,
        i: 1
    },
    components: {
        'delivery': Delivery
    },
    methods: {
        handle: function () {
            alert('Hi');
        },
        count: function () {
            this.i = this.i * 2;
        }
    }
});

Vue.config.debug = true;
