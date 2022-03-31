<template>
  <button>Registrar</button>
</template>

<script>
export default {

}
</script>
<style scoped>
    button{
        width: 15rem;
        height:  3rem;
        background: var(--green);
        border-radius: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        color: var(--white);
        font-weight: var(--bold);
        font-size: 1rem;
    }
    button:active{
        filter: brightness(0.9);
    }

@media screen and (max-width:430px){
    button{
        width: 10rem;
    }
}

@media (max-width: 370px){
    button{
        width: 7rem;
    }
}
</style>