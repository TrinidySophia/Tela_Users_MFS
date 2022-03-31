<template>
  <div v-if="TelaLogin">
    <Navbar/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components:{
    Navbar
  },
  computed: {
    TelaLogin() {
      return this.$route.name != "Login";
    }
  }
}
</script>
<style>
  .styleInput{
    background: var(--white);
    width: 18rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-radius: var(--radius);
    padding: var(--paddingInput);
    box-shadow:var(--shadow);
    position: relative;
    top: -1rem;
    z-index: 2;
  }
  select, 
  input{
    width: 100%;
    border: none;
    font-size: 1.2rem;
    font-weight: var(--bold);
    color: var(--black_text);
  }
  /* custon input error */
  .borderError{
    border: .2rem solid var(--orange);
  }
  .menssageError{
    background: var(--orange);
    width: 18rem;
    height: 2.5rem;
    border-radius: var(--radius) var(--radius) 0 0;
    position: relative;
    padding: 0 var(--paddingInput);
    color: var(--white);
    
    
  }

</style>
