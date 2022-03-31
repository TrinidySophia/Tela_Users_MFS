<template>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    
    <nav>
        <h1>Sistema de Gerenciamento de Molde</h1>

        <img src="../../public/image/iconMenu.svg" alt="">
    </nav>
    <router-view/> 
</template>
<script>
export default {
    
}
</script>

<style scoped>
    nav{
        background: var(--green);
        width: 100%;
        height: 10vh;
        position: fixed;
        z-index: 999;
        top: 0;
        padding: 0 var(--negativeSpace);
        display: flex;
        align-items: center;
        color:var(--white);
        justify-content: space-between;
        /* margin-bottom: 5rem; */
    }

    img{
        height: 3rem;
        width: 3rem;
        margin-left: 1rem ;
        cursor: pointer;
    }

@media screen and (max-width:340px){
    h1{
        font-size: 1.3rem;
        line-height: 1.5rem;
    }
}
</style>