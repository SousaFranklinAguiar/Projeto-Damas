<template>
    <section class="body">
        <input type="checkbox" id="controlSwitch" v-model="controlSwitch" style="display: none;">
        <div class="content">
            <div class="switch">
                <label for="controlSwitch">
                    Criar Conta
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
                            <label for="">CPF:</label>
                            <label for="user" class="input-group">
                                <span class="material-symbols-outlined">
                                    badge
                                </span>
                                <input type="tel" v-mask="'###.###.###-##'" id="user" class="empty-input" v-model="acesso.cpf" placeholder="Digite seu CPF">
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="">Senha: </label>
                            <label class="input-group" for="pass">
                                <span class="material-symbols-outlined">
                                    lock
                                </span>
                                <input :type="controlVision.login? 'text': 'password'" placeholder="Digite sua senha" id="pass" class="empty-input" v-model="acesso.senha" >
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
                        <h2>Criar Conta</h2>
                        <div class="form-group">
                                <label for="">Nome Completo:</label>
                                <label for="mail" class="input-group">
                                    <span class="material-symbols-outlined">
                                        person
                                    </span>
                                    <input type="text" id="mail" class="empty-input" v-model="novoUsuario.nome">
                                
                                </label>
                            </div>
                        <div class="form-group">
                            <label for="">E-mail:</label>
                            <label for="mail" class="input-group">
                                <span class="material-symbols-outlined">
                                    mail
                                </span>
                                <input type="text" id="mail" class="empty-input" v-model="novoUsuario.email">
                                
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="">Telefone:</label>
                            <label for="phone" class="input-group">
                                <span class="material-symbols-outlined">
                                    phone
                                </span>
                                <input type="tel" autocomplete="false" v-mask="'(##)# ####-####'" masked="false" id="phone" class="empty-input" v-model="novoUsuario.telefone">
                                
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="">CPF:</label>
                            <label for="cpf" class="input-group">
                                <span class="material-symbols-outlined">
                                    badge
                                </span>
                                <input type="tel" autocomplete="false" v-mask="'###.###.###-##'" id="cpf" class="empty-input" v-model="novoUsuario.cpf">
                            </label>
                        </div>

                        
                        <div class="form-group">
                            <label for="">Senha: </label>
                            <label for="newpass" class="input-group">
                                <span class="material-symbols-outlined">
                                    lock
                                </span>
                                <input :type="controlVision.signin? 'text': 'password'" id="newpass" class="empty-input" v-model="novoUsuario.senha">
                                <span class="material-symbols-outlined"  v-on:click="changeVisible('signin')">
                                    {{controlVision.signin?  'visibility_off': 'visibility'}}
                                </span>
                            </label>
                        </div>


                        <div class="form-group">
                            <button class="btn" v-on:click="cadastro()">Criar Conta</button>
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
import { mask} from "vue-the-mask"
export default {
    directives:{ mask},
    
    data() {
        return {
            acesso: {
                cpf:  '',
                senha: ''
            },

            novoUsuario: {
                nome:  '',
                telefone: '',
                senha:'',
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

                this.acesso.cpf = this.acesso.cpf.split('.').join("")
                this.acesso.cpf = this.acesso.cpf.split('-').join("")
                alert(JSON.stringify(this.acesso))
                let res = await axios.post('http://localhost:8081/login', this.acesso);
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        },
        async cadastro() {
            try {

                this.novoUsuario.cpf = this.novoUsuario.cpf.split('.').join("")
                this.novoUsuario.cpf = this.novoUsuario.cpf.split('-').join("")
                this.novoUsuario.telefone = this.novoUsuario.telefone.split('-').join("")
                this.novoUsuario.telefone = this.novoUsuario.telefone.split('(').join("")
                this.novoUsuario.telefone = this.novoUsuario.telefone.split(')').join("")
                this.novoUsuario.telefone = this.novoUsuario.telefone.split(' ').join("")

                let res = await axios.post('http://localhost:8081/cadastro', this.novoUsuario);
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
  @import url('./css/login.css');
</style>
