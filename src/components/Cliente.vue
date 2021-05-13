<template>
    <div id=cliente>
        <!-- one way data biding é ligar uma váriavel a um campo por meio do : antes do valor do campo-->
        <input type="text" v-model="nome">
        <hr> 
        <!-- two way data biding é ligar uma váriavel a um campo por meio do v-model como campo-->
        <input type="text" :value="descricao"> 
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

