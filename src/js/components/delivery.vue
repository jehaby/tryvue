<template>
    <div>
        <form action="">

            <div>Регион: {{ delivery.region }}</div>

            <select name="" id="">
                <option value="1">Клиенту</option>
                <option value="2">В офис</option>
            </select>

            <input value="{{ deliverySum }}">
            
            <submit>Пересчитать</submit>
        </form>
        
        <button v-on:click="calcDeliverySum(58)">Ok</button>
    </div>
    
    
</template>


<script>
    
    export default {
        props: ['delivery'],
        
        data: function() {
            return {
                deliverySum: 100
            } 
        },

        methods: {
            calcDeliverySum: function(newSum) {
                this.deliverySum = newSum ? newSum : 200;
            }
        },

        created: function() {
            this.calcDeliverySum(500);
        }


    }
    
</script>