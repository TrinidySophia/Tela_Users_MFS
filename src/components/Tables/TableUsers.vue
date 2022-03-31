<template>

<div class="div-table">
    <table>
        <div class="div-head">
            <thead>
                    <th>Matrícula</th>
                    <th abbr="Nome">Nome Completo</th>
                    <th>E-mail</th>
                    <th>Sistemas</th>
                    <th>Cargo</th>
                    <th>Status</th>
                    <th>Opções</th>
            </thead>
        </div>
        <div class="div-body">
            <tbody>
                <tr>
                    <div class="div-dados" v-for="d in dados" :key="d.matricula">
                        <td style="display:none"></td>
                        <td data-title="Matricula">{{d.matricula}}</td>
                        <td data-title="Nome">{{d.nomeCompleto}}</td>
                        <td data-title="E-mail" class="hoverMouse" :title="d.email">{{d.email}}</td>
                        <td data-title="Sistemas" class="hoverMouse" :title="d.sistemas">{{d.sistemas}}</td>
                        <td data-title="Cargo">{{d.cargo}}</td>
                        <td data-title="Status">{{d.status}}</td>
                        <td data-title="Opções">Editar<i class="far fa-edit"></i></td>
                    </div>
                </tr>
            </tbody>
        </div>
    </table>
</div>
    
</template>

<script>
import TableStatus from '../Tables/TableStatus.vue'

var hoverMouse = document.querySelectorAll(".hoverMouse");
    hoverMouse = [].slice.apply(hoverMouse);
    hoverMouse.forEach(function (elemento, indice) {
    elemento.title = elemento.innerHTML;
})

export default {
    components:{TableStatus},
    name:'TableUsers',

    props:{
        matricula:String,
        nome:String,
        email:String,
        sistemas:String,
        cargo:String,
        status:String,
        dados:Array
    },
    
}
</script>

<style scoped>

.div-table{
    margin-right: 7rem;
}

i{
    color: var(--blue);
    margin-left: .5rem;
}

table{
    border-collapse: collapse;
    width: 100%;
}

th, td{
    padding: .7rem;
    white-space: nowrap;
}

tr{
    border: 1px solid var(--gray);
}

th:first-child, td:nth-child(2){
    min-width: 7rem;
}

td:nth-child(3), th:nth-child(2){
    width: 20rem;
    min-width: 20rem;
    overflow: hidden;
    text-overflow: ellipsis;
}

td:nth-child(4), th:nth-child(3){
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 15rem;
    width: 15rem;
}

td:nth-child(5), th:nth-child(4){
    width: 12rem;
    min-width: 12rem;
}

td:nth-child(6), th:nth-child(5){
    width: 13rem;
    min-width: 13rem;
}

td:nth-child(7), th:nth-child(6){
    width: 8rem;
    min-width: 8rem;
}

td:nth-child(8), th:nth-child(7){
    width: 7rem;
    min-width: 7rem;
}


@media  (max-width: 1024px) {
    
thead{
    display: none;
    }

tbody tr{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 3vw;
}

tr{
    border: none;
}


.div-dados{
    border: .2rem solid var(--green);
    padding: var(--paddingInput);
    border-radius: var(--radius);
    margin: 1vh 1vw;
    display: flex;
    flex-direction: column;
    min-width: 28rem;
}

td{
    display: flex;
    align-items: center;
  }

td:not(:last-of-type) {
    border-bottom: 1px solid var(--gray);
    display: flex;
    justify-content: space-between;
  }

td:last-of-type::before {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

td:not(:first-of-type):before {
    content: attr(data-title);
    display: block;
    font-weight: bold;
  }
}

@media (max-width: 945px){

tbody tr{
    margin-left: 0;
}
}

@media (max-width: 900px){

tbody tr{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

.div-table{
    margin-left: 20vw;
}
}

@media (max-width: 675px){

tbody{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

td:last-of-type::before {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
}

@media (max-width: 565px){
    .div-table{
        margin-left: 12vw;
    }
}

@media (max-width: 515px){

    .div-table{
        margin-left: 10vw;
    }
}

@media (max-width: 480px){

    .div-table{
        margin-left: 5vw;
    }
}

@media (max-width: 435px){

    .div-table{
        margin-left: 2vw;
    }

    .div-dados{
        min-width: 25rem;
    }

    td::before{
        min-width: 5rem;
        margin-right: 1rem;
    }
}

@media (max-width: 390px){

.div-dados{
    min-width: 20rem;
}

}

</style>