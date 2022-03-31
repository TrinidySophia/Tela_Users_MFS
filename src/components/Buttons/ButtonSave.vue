<template>
  <button>Salvar</button>
</template>

<script>
export default {

}
</script>
<style scoped>
    button{
        width: 6rem;
        height:  3rem;
        background: var(--blue);
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
</style>