<template>
<InfoUser/>

<div class="parte_relatorios">
    <div class="imagem">
        <ButtonImage/>
    </div>

    <div class="div-fora">
        <div class="relatorios" v-for="index in Repport" :key="index.Repport">
            <ButtonReport :compRepport="index.relatorio"/>
        </div>
    </div>
</div>
    
</template>

<script>
import ButtonReport from '@/components/Buttons/ButtonReport.vue';
import InfoUser from '@/components/Info/InfoUser.vue';
import ButtonImage from '@/components/Buttons/ButtonImage.vue'

export default {
    name:'TelaGeral',

    components: {ButtonReport, InfoUser, ButtonImage},

    data() {
        return {
            Repport: [
                {relatorio: "RRIM"},
                {relatorio: "TRYOUT"},
                {relatorio: "FIT"},
                {relatorio: "FTI"}
            ]
        };
    },
}
</script>

<style scoped>



.parte_relatorios{
    background: linear-gradient( rgb(0, 92, 60), rgb(0, 197, 128));
    background-size: 200% 200%;
    animation: movingGradient 3s linear infinite alternate;
    display: flex;
    height: 75vh;
}

@keyframes movingGradient{
    from { background-position: 0 0;}
    to { background-position: 100% 100%;}
}

.image{
    margin: 4.5rem 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.div-fora{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow-y: scroll;
    height: 27rem;
    padding: 0 5vw 0 0;
    margin-top: 3rem; 
 }

::-webkit-scrollbar {
  background-color: transparent;
  width: .5rem;
  
}

::-webkit-scrollbar-track {
  border-radius: 15px;
  
}

::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 15px;
}

@media screen and (max-width:1400px){
    .div-fora{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 2rem;
        padding-right: 3vw;
        margin-left: 1vw;
    }

    .imagem{
        display: flex;
        justify-content: center;
    }
}

@media screen and (max-width:1020px){

    .parte_relatorios{
        display: flex;
        flex-direction: column;
    }

    .imagem{
        margin-bottom: -4rem;
        margin-top: -1rem;
    }

    .div-fora{
        padding-right: 2vw;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-left: 5vw;
    }
}

@media screen and (max-width:930px) {

    .imagem{
        display: flex;
        justify-content: center;
        /* margin: -1rem 0 -2rem 0; */
    }

    .div-fora{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-left: 4vw;
    }
} 

@media screen and (max-width:650px) {

    .parte_relatorios{
        display: flex;
        flex-direction: column;
    }

    .imagem{
        display: flex;
        justify-content: center;
    }

    .div-fora{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
    }
} 

@media screen and (max-width:492px) {

    .div-fora{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: 10vw;
    }
} 

@media screen and (max-width:375px) {

    .div-fora{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: 6vw;
    }
} 

@media screen and (max-width:320px) {

    .div-fora{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: 4vw;
    }
} 


</style>