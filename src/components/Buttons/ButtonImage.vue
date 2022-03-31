<template>

<div class="image">
    <img src="../../assets/tuti.png" alt="">
    <ButtonNameRep/>
</div>
    
</template>

<script>
import ButtonNameRep from './ButtonNameRep.vue'
export default {
    name:'ButtonImage',
    components: {ButtonNameRep}
}
</script>

<style scoped>

img{
    width: 15rem;
    height: 15rem;
}

@media screen and (max-width:1020px){
    img{
        width: 13rem;
        height: 13rem;
    }
}

@media screen and (max-width:650px){
    img{
        width: 11rem;
        height: 11rem;
    }
}
</style>