<template>
  <div class="d-flex justify-content-start flex-nowrap">
    <i v-for="estrela in estrelas" :key="estrela.id" :class='estrela.estilo' @click="MarcarEstrelas(estrela.id+1)"></i>
  </div>
</template>

<script>
  export default {
    name:'InputEstrelas',
    props: {
      qtdEstrela:{
        type: Number,
        required: true
      }
    },
    data: () => ({
      estrelas: []
    }),
    created(){
      this.MarcarEstrelas(this.qtdEstrela);
    },methods:{
      MarcarEstrelas(avaliacao){
        for(let i = 0; i < 5; i++){
          if(avaliacao <= i){
            this.estrelas[i] = {id: i, estilo: 'bi bi-star estrela estrela-vazada'};
          }else{
            this.estrelas[i] = {id: i, estilo: 'bi bi-star-fill estrela estrela-cheia'};
          }
        }
        //desta forma o componente envia evento chamado avaliar
        //this.$emit('avaliar', avaliacao);

        //Enviando para uma v-model
        this.$emit('update:avaliar', avaliacao);
      }
    }
  }
</script>

<style>
.estrela-vazada{
  color: #666;
}
.estrela-cheia{
  color: #FC0;
}
.estrela{
  font-size: 1.5rem;
  margin: 0 1px;
}
.estrela:hover{
  cursor: pointer;
}
</style>