<template>
    <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
        <h4>Nome: {{cliente.nome}}</h4>
        <hr>
        <p> Email: {{cliente.email}}</p>
        <p v-if="showIdade == true">Idade: {{cliente.idade}}</p>
        <p v-else>Idade oculta</p>
        <button @click="mudarCor()">Mudar a cor</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isPremium: false
        }
    },
    props: {
        cliente: Object,
        showIdade: Boolean
    },
    methods: {
        mudarCor: function() {
            this.isPremium = !this.isPremium;   
        }
    }
};
</script>

<style scoped>
    .cliente{
        background-color: cornflowerblue;
        max-width: 600px;
        padding: 1%;
        margin-top: 2%;
    }

    .cliente-premium{
        background-color: goldenrod;
        max-width: 600px;
        padding: 1%;
        margin-top: 2%;
    }
</style>