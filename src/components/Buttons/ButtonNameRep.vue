<template>
    <div class="botaoRelatorios">
        <button>ENTRAR</button>
    </div>
</template>

<script>
export default {
    name:'ButtonNameRep.vue'
}
</script>

<style scoped>

button{
    width: 15rem;
    padding: 1rem;
    background-color: #5F9DFF;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: var(--bold);
    cursor: pointer;
}

button:hover{
    background-color: #428aff;
}
</style>