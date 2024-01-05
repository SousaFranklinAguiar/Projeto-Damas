<script>
    export default {
        data(){
            return
        }
    }
</script>
<template> 
    <section class="profile">
        <span class="name">Olá David</span>
        <div class="cache">
            <span class="material-symbols-outlined">
                account_balance_wallet
            </span>
            |
            <span class="saldo">R$ 10,00</span>
            <span class="material-symbols-outlined">
                visibility
            </span>
        </div>

    </section>
    <section class="options-board">
        <div class="content-options">
            <div class="card" v-for="(item, index) in 8" :key="index">
                <div class="bg-color"></div>
                <img src="https://img.freepik.com/vetores-gratis/projeto-do-fundo-da-xadrez_1078-69.jpg?size=626&ext=jpg&ga=GA1.1.1158166587.1693319049&semt=ais" alt="" width="100%">
                <div class="card-description">
                    <p class="title-description">
                    Apostado R${{ item }},00
                    </p>
                    <p class="detals-description">
                        valor da mesa: R$ 0,50
                    </p>
                </div>
            </div>            
           
        </div>
    </section> 
</template>

<style scoped>
    .profile{
        padding-inline: 50px;
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        color: var(--main-color);
    }
    .profile .name{
        font-size: 20px;
        font-weight: bold;
    }
    .profile .cache{
        display: flex;
        align-items: center;
    }
    .profile .cache .saldo{
        font-size: 15px;
        margin-inline: 10px;
    }
    .options-board{
        width: 100%;
        display: flex;
        margin-top: 50px; 
        justify-content: center;   
    }
    .options-board .content-options{
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;

    }
    .card{
        background-color: var(--light-color);
        border-radius: 10px;
        overflow: hidden;
        width: 150px;
        height: 150px;
        position: relative;
        transition: all 0.3s;
    }

    .card:hover{
        cursor: pointer;
        box-shadow: 0 0 10px 2px #00000088;
    }
  
    .bg-color{
        position: absolute;
        background-image: linear-gradient(to right, #404041, #353638);
        opacity: 0.4;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .card-description {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 40%;
        background-color: var(--main-color);
        z-index: 1;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: end;  
        box-shadow: 0 -1px 3px #00000088;
        border-top: solid 1px var(--main-color);      

    }

    .card-description .title-description{
        font-size: 15px;
        text-align: center;
        font-weight: 600;
    }

    .card-description .detals-description{
        font-size: 11px;
        text-align: center;
    }

    
</style>
