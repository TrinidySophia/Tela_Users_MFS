<template>
  <div class="search">
      <input type="text" name="" id="" placeholder="Pesquisar Colaborador">
      <i class="fas fa-search"></i>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
    .search{
        width: 18rem;
        background: var(--gray);
        padding: var(--paddingInput);
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        height: fit-content;
    }
    .search input{
        background: 0;
    }

@media (max-width: 715px) {
    .search{
        width: 20rem;
    }
    
}

</style>