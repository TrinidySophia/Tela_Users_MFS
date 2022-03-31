<template>
  <div class="container">
      <div class="btnCheck"
        @click="check"
      >
          <div class="iconCheck"
            :class="{btnCheck_green: ativado}"
          >

          </div>
          <div class="text">
              <h3>Tryout</h3>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: () =>{
        return{
           ativado: false 
        }
    },
    methods:{
       check(){
           this.ativado=!this.ativado
       } 
    }
}
</script>

<style scoped>
    .container{
        background: var(--white);
        height: 15rem;
        border-radius: var(--radius);
        padding: calc(var(--paddingInput)*2);
        box-shadow: var(--shadow);
        overflow-y: scroll;
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        justify-content: space-between;
    }
    .btnCheck{
        display: flex;
        gap: .5rem;
        cursor: pointer;
        width: fit-content;
    }
    .iconCheck{
        width: 2rem;
        height: 2rem;
        background: var(--gray);
        border-radius: .5rem;
    }
    .btnCheck_green{
        background: var(--green)
    }
    @media(max-width: 400px){
        .container{
            grid-template-columns: repeat(2, 1fr);

        }
    }
</style>