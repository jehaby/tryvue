var DeliveryData = {
    deliver_to: ['В офис', "Клиенту", "Партнеру"]
}


var Delivery = Vue.extend({
    props: ['data'],
    template: "\
<div> \
Delivery goes here!11 \
<select>\
<option v-for="data.deliver_to"></option>\
</select>\
</div>\
"
});


// Vue.component('delivery', Delivery);


new Vue({
    el: '#app',
    data: {
	message: 'Hello Vue.js!'
    },
    components: {
	'delivery': Delivery
    }
})
