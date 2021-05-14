<template>
    <div id=cliente>
        <h4>Nome: {{cliente.nome}}</h4>
        <hr>
        <p>Email: {{cliente.email}}</p>
        <p v-if="showIdade == true">Idade: {{cliente.idade}}</p>
        <p v-else>Idade oculta</p>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: {
        cliente: Object,
        showIdade: Boolean
    }
};
</script>

<style scoped>
    #cliente{
        background-color: aqua;
        max-width: 600px;
        padding: 1%;
        margin-top: 2%;
    }
</style>

