<template>
  <div class="Home">
    <Frame>

      <!-- esse componente é um exemplo de como utilizalo de forma correta -->
      <InputText
        titulo="Matricula"
        :status="falsegi"
      />
       
    </Frame>
  </div>
</template>

<script>
import Frame from '@/components/Frame.vue'
import InputText from '@/components/Inputs/InputText'

export default {
  components:{
    Frame,
    InputText
  }
}
</script>
