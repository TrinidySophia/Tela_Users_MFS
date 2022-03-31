<template>
<div class="button">
    <div class="div-status">
        <p>status
        <span v-if="desativado">DESATIVADO</span>
        <span v-else>ATIVADO</span>
    </p>
    </div>

    <div class="btn_switch" @click="status" :class="{myStatus: desativado}"
>
        <div></div>
    </div>
</div>
</template>
<script>
export default {
    data:() =>{
        return{
            desativado: false
        }
    },
    methods:{
        status(){
            this.desativado = !this.desativado;
        }
    },

    // emits:['teste']
}
</script>

<style scoped>
    .btn_switch{
        width: 6rem;
        height:  3rem;
        background: var(--green);
        border-radius: 2rem;
        display: flex;
        align-items: center;
        padding-left: .3rem;
        cursor: pointer;
        transition: .2s;
    }
    .btn_switch :nth-child(1){
        background: var(--white);
        min-width: 2.5rem;
        min-height: 2.5rem;
        border-radius: var(--circuleRadius);
    }
    .myStatus{
        background: var(--orange);
        padding-left: 3.2rem;
    }
    P{
        color: var(--green);
        font-weight: var(--bold);
    }
    span{
        color: var(--gray_text);
    }
</style>