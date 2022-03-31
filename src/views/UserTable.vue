<template>

<div class="allBox">
<InfoUser/>
    <div class="secondRow" >
        
            <div class="divSearch">
                <InputSearch/>
            </div>
        <div class="div_01">
            <div class="divSwitch">
                <ButtonSwitch/>
            </div>
        
            <div class="div_02">
                <ButtonRegister/>
            </div>
        </div>
    </div>

    <div class="div-ForaTable">
        <div class="divTable">
            <TableUsers :dados="dadosFunc" />
        </div>
    </div>

</div>

</template>

<script>
import InfoUser from '../components/Info/InfoUser.vue';
import InputSearch from '../components/Inputs/InputSearch.vue';
import ButtonSwitch from '../components/Buttons/ButtonSwitch.vue';
import ButtonRegister from '../components/Buttons/ButtonRegister.vue';
import TableUsers from '../components/Tables/TableUsers.vue'

export default {
    name:'UserTable',
    components: {InfoUser, InputSearch, ButtonSwitch, ButtonRegister, TableUsers},

        data() {
        return {

            dadosFunc: [
                { 
                    matricula: '001',
                    nomeCompleto: 'Fulano Beltrano Fulano Beltrano',
                    email:'fulano@tutiplast.com.br',
                    sistemas:'TRYOUT, FTI',
                    cargo: 'ADM-Master',
                    status: 'Ativado',
                },

                {
                    matricula: '002',
                    nomeCompleto: 'Ciclano Beltrano Ferreira de Souza',
                    email:'ciclano@tutiplast.com.br',
                    sistemas:'RRIM, FIT',
                    cargo: 'Analista',
                    status: 'Desativado',
                },

                {
                    matricula: '003',
                    nomeCompleto: 'Beltrano Cipriano Ferreira de Souza',
                    email:'beltrano@tutiplast.com.br',
                    sistemas:'TRYOUT, FIT, FTI',
                    cargo: 'Técnico de Engenharia',
                    status: 'Ativado',
                },

                {
                    matricula: '004',
                    nomeCompleto: 'Ciclano Fulano Ferreira de Souza',
                    email:'ciclano@tutiplast.com.br',
                    sistemas:'RRIM, TRYOUT, FIT, FTI',
                    cargo: 'Técnico de Produção',
                    status: 'Desativado',
                },

                {
                    matricula: '005',
                    nomeCompleto: 'Trinidy Sophia Ferreira de Sozua',
                    email: 'trinidy@tutiplast.com.br',
                    sistemas:'RRIM, TRYOUT, FIT, FTI',
                    cargo: 'estagiaria',
                    status: 'Ativado', 
                }
            ]

            
        };
    },

}
</script>

<style scoped>

.div-ForaTable{
    padding: 0 2vw;
    margin-top: 3rem;
}
.allBox{
    margin-top: 10vh;
    background: var(--white);
    
}

.secondRow{
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 0 2rem;
    border-top: 2px solid var(--gray);
    padding: 2vh 0 0 0;
}

.divSearch{
    margin-top: 1.5rem;
}

.divSwitch{
    margin: 0vh 2vw;
}

.div_01{
    display: flex;
    width: 75%;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;
}

.div_02{
    display: flex;
    align-items: center;
    margin-left: 2vw;
}

@media screen and (max-width:1024px){
    .divTable{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width:1000px){
    .divSwitch{
        margin-left: 4vw;
    }
}

@media screen and (max-width:805px){

    .divSwitch{
        margin: 0 2vw;
    }

    .secondRow{
        justify-items: baseline;
    }

    .div_01{
        width: 90%;
    }
}

@media screen and (max-width:715px){

   .secondRow{
       display: flex;
       flex-direction: column;
       flex-wrap: wrap;
   }

   .div_01{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 2.5rem 0;
}

.divSwitch{
    width: 10rem;
}

.div_02{
    display: flex;
    justify-content: flex-end;
    margin-bottom: -1rem;
}
}

</style>