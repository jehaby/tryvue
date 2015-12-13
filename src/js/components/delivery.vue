<template>
    <div>
        <form action="">

            <select name="" id="">
                <option value="1">Клиенту</option>
                <option value="2">В офис</option>
            </select>

            <input value="{{ deliverySum }}">
            
            <submit>Пересчитать</submit>
        </form>
        
        <button v-on:click="calcDeliverySum">Ok</button>
    </div>
    
    
</template>


<script>
    
    export default {
        props: ['data'],
        
        data: function() {
            return {
                deliverySum: 100
            } 
        },

        methods: {
            calcDeliverySum: function() {
                this.deliverySum = 200;
            }
        },

        created: function() {
            this.calcDeliverySum();
        }


    }
    
</script>