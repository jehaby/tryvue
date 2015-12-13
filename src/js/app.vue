<template>
    <h1 class="red">{{msg}}</h1>
    <customer></customer>
    <delivery :data="Data.delivery"></delivery>
    <products></products>
</template>


<script>

    import Customer from './components/customer.vue';
    import Delivery from './components/delivery.vue';
    import Products from './components/products.vue'


    export default {
        data () {
            return {
                msg: 'Hello world!',
                data: Data
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