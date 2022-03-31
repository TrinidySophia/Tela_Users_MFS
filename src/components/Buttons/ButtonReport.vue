<template>
<div class="relatorio" >
    <p>{{compRepport}}</p>
    
</div>
    
</template>

<script>
export default {
    name:'ButtonReport',
    props:{
        compRepport:String
    },
}
</script>

<style scoped>

.relatorio{
    width: 10rem;
    height: 10rem;
    background-image: linear-gradient(to bottom, rgba(255,255,255,.5) , rgba(184,201,234,.3), rgba(255,255,255,.2));
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: var(--bold);
    border-radius: var(--radius);
    margin: 2vh 1vw;
    cursor: pointer;
}

.relatorio:hover{
    border: 3px solid var(--white);
    background-image: linear-gradient(to bottom, rgba(255,255,255,.6) , rgba(184,201,234,.5), rgba(255,255,255,.4));
}

@media screen and (max-width:1000px){
    .relatorio{
        margin: .5rem;
    }
}

@media screen and (max-width:670px){
    .relatorio{
        margin: .3rem;
    }
}

@media screen and (max-width:340px) {

    .relatorio{
        margin: .2rem;
    }
} 
</style>