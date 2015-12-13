<template>
    <h1 class="red">{{msg}}</h1>
    <customer></customer>
    <delivery :delivery="orderData.delivery"></delivery>
    <products></products>
</template>


<script>

    import Customer from './components/customer.vue';
    import Delivery from './components/delivery.vue';
    import Products from './components/products.vue'

    var orderData = require('./data.js');

    export default {
        data () {
            return {
                msg: 'WTIS 2.0',
                orderData: orderData
            }
        },
        components: {
            Customer,
            Delivery,
            Products
        }
    }
</script>

<style>
    .red {
        color: #f00;
    }
</style>