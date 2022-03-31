<template>
    
<div class="dados_usuario">
    <img src="../../../public/image/iconPortifolio.svg" alt="">
    <div class="nome_usuario">
        <h1>Fulano Beltrano</h1>
        <p>Administrador - Técnico de engenharia</p>
    </div>
</div>

</template>

<script>
import ButtonExit from '../Buttons/ButtonExit.vue';

export default {
    name:'InfoUser',
    components:{ButtonExit}
}
</script>

<style scoped>
.botao_saida{
    margin-bottom: 5rem;
    display: flex;
    padding: 1rem;
}

.nome_usuario{
    display: flex;
    flex-direction: column;
    margin: 1vh 0;
}

.dados_usuario{
    background-color: var(--white);
    display: flex;
    padding: 1rem;
    margin-top: 10vh;
    height: 15vh;
    align-items: center;
}

img{
    margin: 0 2vw;
}

@media screen and (max-width:320px) {

    .dados_usuario{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    }

    img{
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    }

    h1{
        font-size: 1.5rem;
    }
}

@media screen and (max-width:378px){

    .dados_usuario{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    }

    img{
    width: 3rem;
    height: 3rem;
    margin: 1rem;
    }

    h1{
        font-size: 1.5rem;
    }
}

@media screen and (max-width:425px){
    .dados_usuario{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    }

    img{
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    }
}

@media screen and (max-width:768px){
    .dados_usuario{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    }

    img{
    width: 5rem;
    height: 5rem;
    margin: 1rem;
    }
}

</style>