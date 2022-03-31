<template>
  <label for="input">
    <div class="styleInput" 
      :class="{ borderError: status }"
    >
        <p>{{titulo}}</p>
        
        <input type="text" id="input" >
    </div>
  </label>
</template>

<script>
export default {
  props:{
    titulo:{
      type: String,
      required: true
    },
    status:{
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
  
</style>