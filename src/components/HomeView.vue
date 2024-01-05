<template>
    <input type="checkbox" id="controlsidebar" style="display: none;">
    <label for="controlsidebar" class="icone-control-sidebar">
        <span class="material-symbols-outlined">
            menu
        </span>
    </label>
    <div class="sidebar">
        <ul class="menu">
            <a  class="link">
                <li class="submenu">
                    <span class="material-symbols-outlined">
                        home
                    </span>
                    Início
                </li>
            </a>
            <a  class="link">
                <li class="submenu">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    Meu perfil
                </li>
            </a>
            <a  class="link">
                <li class="submenu">
                    <span class="material-symbols-outlined">
                        history
                    </span>
                    Histórico
                </li>
            </a>
            <a  class="link">
                <li class="submenu">
                    <span class="material-symbols-outlined">
                        news
                    </span>
                    Regras
                </li>
            </a>
            <a  class="link">
                <li class="submenu">
                    <span class="material-symbols-outlined">
                        exit_to_app
                    </span>
                    Sair
                </li>
            </a>
        </ul>

        <ul>
            <a  class="link">
                <li class="submenu">
                    <span class="material-symbols-outlined">
                        chess
                    </span>
                    Sobre nós
                </li>
            </a>
        </ul>
    </div>
    <section class="body">
        <RouterView></RouterView>
    </section>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>


<style scoped>
    .icone-control-sidebar{
        position: fixed;
        top: 18px;
        left: 20px;
        display: none;
        transition: all 0.3s;
        color: white;
        z-index: 10;
    }

    
    .body{
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        left: 250px;
        overflow: auto;
        height: 100vh;
        width: calc(100vw - 250px);
        background-image: linear-gradient(to right, #404041, #353638);
    }
    .sidebar{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 250px;
        overflow: hidden;
        background-color: #f3f3f3;
        box-shadow: 0 0 10px 2px #00000081;
        transition: all 0.3s;
    }
    .sidebar .menu{
        list-style: none;
    }
    .sidebar .menu .link{
        text-decoration: none;
        color: #000000;
    }

    .sidebar .menu .link .submenu {
        width: 100%;
        margin-block: 5px;
        padding-block: 15px;
        display: flex;
        align-items: center;
    }

    .sidebar .menu .link .submenu span {
        margin-inline: 10px;
    }

    .sidebar .menu .link .submenu:hover{
        background-color: var(--main-color);
        color: white;
    }
    

    @media (max-width: 768px) {

        #controlsidebar:checked + .icone-control-sidebar{
            left: 270px;
        }

        #controlsidebar:checked ~ .sidebar{
            z-index: 2;
            width: 250px;
            box-shadow: 0 0 10px 2px #00000081;
        }
        .icone-control-sidebar{
            display: block;
        }

        .sidebar{
            width: 0px;
            box-shadow: none;
        }

        .body{
            width: 100vw ;
            left: 0;
        }
    }
    



</style>