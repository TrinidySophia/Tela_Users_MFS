<template>

<table>
    <!-- <thead>
        <tr>
            <th>Status</th>
        </tr>
    </thead> -->
    <tbody>
        <tr v-for="infoStts in dadosFunc" :key="infoStts.status">
            <td>{{infoStts.status}}</td>
        </tr>
    </tbody>
</table>
    
</template>

<script>
export default {
    name:'TableStatus',

    data() {
        return {
            dadosFunc: [
                {
                    status:'Ativado'
                },
                {
                    status:'Desativado'
                },
                {
                    status:'Ativado'
                },
                {
                    status:'Desativado'
                },
                {
                    status:'Ativado'
                },

            ],
        };
    },
}
</script>

<style scoped>

</style>