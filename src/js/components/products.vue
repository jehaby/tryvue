<template>

    <table>
        <thead>
        <th>Название</th>
        <th>Количество</th>
        <th>Цена</th>
        </thead>
        <tbody>
        <tr v-for="product in products">
            <td>{{ product.title }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
        </tr>
        </tbody>
    </table>

</template>


<script>

    export default {
        props: ['data']

    }


</script>