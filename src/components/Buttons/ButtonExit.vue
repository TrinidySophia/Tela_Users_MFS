<template>
    <button>Sair <i class="fas fa-door-open"></i></button>
</template>

<script>
export default {
    name:'ButtonExit'
}
</script>

<style scoped>

button{
    padding: var(--paddingInput);
    background-color: var(--white);
    border: .1px solid #dbdbdb;
    border-radius: .2rem;
    color: var(--black_text);
    font-size: 1.3rem;
    position: absolute;
    right: 2vw;
}

</style>