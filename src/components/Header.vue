<template>
  <div class="container">
      <div class="icon">
          <img src="/image/iconPortifolio.svg" alt="">
      </div>
      <div class="inform">
          <h1>Fulano Beltrano</h1>
          <h3>Administrador</h3>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .container{
        display: flex;
        gap: 2rem;
        border-bottom: 2px solid var(--gray);
        padding: 1rem 0;
    }
    .inform h3{
        font-weight: var(--regular);
    }
    @media(max-width: 400px) {
        .container{
            gap: 1rem;
        }
        .container h1{
            font-size: 7vw;
        }

    }
</style>