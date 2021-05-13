<template>
    <div id=cliente>
        <h2 id=cliente-nome>{{nome}}</h2>
        <p>Descrição do cliente: {{descricao}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nome: "Gontijo",
            numero: "",
            email: "",
            idade: 0,
            descricao: "Descrição escrita dentro do javascript"
        }
    }
};
</script>

<style scoped>
    #cliente{
        max-width: 600px;
    }
</style>

