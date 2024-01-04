<template>
    <section class="body">
        <input type="checkbox" id="controlSwitch" v-model="controlSwitch" style="display: none;">
        <div class="content">
            <div class="switch">
                <label for="controlSwitch">
                    Criar conta
                </label>
                <label for="controlSwitch">
                    Entrar
                </label>
                
            </div>
            <section class="forms">
                <section class="login">
                    <div class="mesages">
                        <div class="title-mesage">
                          mensagem para cadastro
                        </div>
                        <div class="mesage">
                            ganhando mais dinheiro
                        </div>
                    </div>
                    <form @submit.prevent="">
                        <h2>Fazer Login</h2>
                        <div class="form-group">
                            <label for="">Usuário:</label>
                            <label for="user" class="input-group">
                                <span class="material-symbols-outlined">
                                    database
                                </span>
                                <input type="text" id="user" class="empty-input" v-model="login.user" placeholder="email ou CPF">
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="">Senha: </label>
                            <label class="input-group" for="pass">
                                <span class="material-symbols-outlined">
                                    lock
                                </span>
                                <input :type="controlVision.login? 'text': 'password'" id="pass" class="empty-input" v-model="login.pass" >
                                <span class="material-symbols-outlined"  v-on:click="changeVisible('login')">
                                    {{controlVision.login?  'visibility_off': 'visibility'}}
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <button class="btn" v-on:click="logar()">Entrar</button>
                        </div>
                    </form>
                   
                    
                </section>
                <section  class="signin">
                    
                    

                    <form @submit.prevent="">
                        <h2>Criar conta</h2>
                        <div class="form-group">
                                <label for="">Nome completo:</label>
                                <label for="mail" class="input-group">
                                    <span class="material-symbols-outlined">
                                        person
                                    </span>
                                    <input type="text" id="mail" class="empty-input" v-model="signin.user">
                                
                                </label>
                            </div>
                        <div class="form-group">
                            <label for="">email:</label>
                            <label for="mail" class="input-group">
                                <span class="material-symbols-outlined">
                                    mail
                                </span>
                                <input type="text" id="mail" class="empty-input" v-model="signin.email">
                                
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="">Telefone:</label>
                            <label for="mail" class="input-group">
                                <span class="material-symbols-outlined">
                                    phone
                                </span>
                                <input type="text" id="mail" class="empty-input" v-model="signin.phone">
                                
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="">CPF:</label>
                            <label for="cpf" class="input-group">
                                <span class="material-symbols-outlined">
                                    badge
                                </span>
                                <input type="text" id="cpf" class="empty-input" v-model="signin.cpf">
                            </label>
                        </div>

                        
                        <div class="form-group">
                            <label for="">Senha: </label>
                            <label for="newpass" class="input-group">
                                <span class="material-symbols-outlined">
                                    lock
                                </span>
                                <input :type="controlVision.signin? 'text': 'password'" id="newpass" class="empty-input" v-model="signin.pass">
                                <span class="material-symbols-outlined"  v-on:click="changeVisible('signin')">
                                    {{controlVision.signin?  'visibility_off': 'visibility'}}
                                </span>
                            </label>
                        </div>


                        <div class="form-group">
                            <button class="btn" v-on:click="cadastro()">Criar conta</button>
                        </div>

                    </form>
                    <div class="mesages">
                        <div class="title-mesage">
                          mensagem para login
                        </div>
                        <div class="mesage">
                            ganhando mais dinheiro
                        </div>
                    </div>
                </section> 
            </section>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    
    data() {
        return {
            login: {
                user:  '',
                pass: ''
            },

            signin: {
                user:  '',
                phone: '',
                pass:'',
                email: '',
                cpf: ''
            },

            controlVision: {
                login: false,
                signin: false,
            },
        }
    },

    methods: {
        changeVisible(val){
            switch (val) {
                case "signin":
                        this.controlVision.signin = !this.controlVision.signin;
                    break;
                case "login":
                        this.controlVision.login = !this.controlVision.login;
                    break;
                default:
                    break;
            }
        },
        async logar()  {
            try {
                let temp = {
                    cpf: this.login.user,
                    senha: this.login.pass
                }
                alert(JSON.stringify(temp))
                let res = await axios.post('http://localhost:8081/login', this.login);
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        },
        async cadastro() {
            try {
                let temp = {
                    nome: this.signin.user,
                    cpf: this.signin.cpf,
                    email: this.signin.email,
                    telefone: this.signin.phone,
                    senha: this.signin.pass,
                }
                 alert(JSON.stringify(temp))
                let res = await axios.post('http://localhost:8081/cadastro', temp);
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>

    input{ 
        width: 100%;
    }
    .body {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-image: linear-gradient(to right, #67a4e9, #cdd4dd);
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        background-image: linear-gradient(to bottom, #e47331, #d35a14);
        border-radius: 30px;
        overflow: hidden;
        padding: 10px;
        box-shadow: 0 0 15px 5px #0000004d;
        position: relative;
    }
    .content::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        width: 50%;
        transition: all 0.3s linear;
        background-color: white;
    }
    .forms{
        display: flex;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .switch{
        z-index: 10;
        width: 300px;
        display: flex;
        justify-content: space-between;
        margin: 10px;
        border-radius: 30px;
        padding: 5px ;
        font-size: 20px;
        overflow: hidden;
        color: #d35a14;
        font-weight: bold;
        border: solid 1px #38383850;
        background-color: #ffffff;
        position: relative;
    }  
    .switch::after{
        position: absolute;
        content: '';
        width: 50%;
        transform: translateX(100%);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        background-image: linear-gradient(to right, #e47331, #d35a14);
        box-shadow: 0 0 10px  #d35811;
        transition: all 0.3s linear;
    }
    .switch label{
        width: 50%;
        text-align: center;
    }
    #controlSwitch:checked + .content::after{
        transform: translateX(-100%);
    }
    #controlSwitch:checked + .content > .switch::after{
        transform: translateX(0);
    }
    #controlSwitch:checked + .content > .forms > .login > .mesages{
        transform: translateX(0);
        opacity: 1;
    }
    #controlSwitch:checked + .content > .forms > .login > form{
        transform: translateX(0);
    }
    #controlSwitch:checked + .content > .forms > .signin > .mesages{
        transform: translateX(0);
        opacity: 0;
    }
    #controlSwitch:checked + .content > .forms > .signin > form{
        transform: translateX(0);
    }
    .forms section{
        display: flex;
        align-items: center;
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        width: 50%;
        overflow: hidden;
    }
    .forms section form{
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: aliceblue;
        min-width: 100%;
        transition: all 0.3s linear;
    }
    .forms section form .form-group{
        margin-bottom: 10px;
        width: clamp(100px, 300px, 400px);
    }
    .forms section form .input-group{
        display: flex;
        align-items: center;
        background-color: #f0f0f0;
        padding-block: 5px ;
        border-radius: 3px;
        overflow: hidden;
        width: 100%;
        float: left;
        color: #494949;
    }
    .forms section .mesages{
        transition: all 0.3s linear;
        text-align: center;
        min-width: 100%;
        z-index: 4;
        color: #d35811;
    }
    .forms section .mesages .title-mesage{
        font-size: 30px;
        font-weight: bold;
        margin-block-end: 10px;
    }
    .forms section form .input-group span{
        margin-inline: 10px;
    }

    .forms .login form, .forms .login .mesages{
        transform: translateX(-100%);
    }

    .forms .login .mesages{
        opacity: 0;
    }
    .forms .signin form, .forms .signin .mesages{
        transform: translateX(-100%);
    }


    @media (max-width: 689px) {
        .switch{
            padding: 0;
        }

        .content{
            height: 90vh;
        }
        .content::after{
            width: 0;
            height: 0;
        }

        .forms section .mesages{
            display: none;
        }

        .forms .login {

            width: 100%;
        }

        .forms .signin {
            right: 0;
            left: 100%;
            width: 0;
        }
        .forms section{
            transition: all 0.3s;
        }
        .forms section form{
           
            transform: translateX(0) !important
        }

        .forms{
            height: 100%;
            justify-content: center;
        }

       
        

        #controlSwitch:checked + .content > .forms > .login {
            width: 0;
        }
        
        #controlSwitch:checked + .content > .forms > .signin {
            width: 100%;
            left: 0;
        }
        
        @media (max-width: 375px) {
            .form-group {
                width: 100% !important;
            }
        }
    }

</style>
