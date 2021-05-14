<template>
    <div id=cliente>
        <h4>Nome: {{cliente.nome}}</h4>
        <hr>
        <p>Email: {{cliente.email}}</p>
        <p>Idade: {{cliente.idade}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props: {
        nome: String,
        idade: Number,
        email: String,
        cliente: Object
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

