<script>
    export default {
        data(){
            return {
                pecas: [],
                mypeace: []
            }
        },

        methods: {
            createPeaces(){
                for (let i = 6; i >= 0; i--) {
                    for (let o = 0; o < 7; o++) {
                        if(o <= i){
                            this.pecas.push({
                                lado1: i,
                                lado2: o
                            })
                        }
                    }
                }

                this.setMyPeace()
            },
            setMyPeace(){
                let temp = JSON.parse(JSON.stringify(this.pecas));
                for (let i = 0; i < 7; i++) {
                    let finded = temp[Math.floor(Math.random() * temp.length )]
                    temp.splice(finded, 1);            
                    this.mypeace.push(finded);
                }
                console.log(this.mypeace)

            }
        },
        created(){
            this.createPeaces();
        }
    }
</script>
<template>
    <canvas>
        <section class="content-game">
        </section>
    </canvas>
    <section class="content-peace">
            <div class="peace" v-for="(item, index) in pecas" :key="index">
                <span>{{ item.lado1 }} </span>
                <span>{{ item.lado2 }} </span>
            </div>
    </section>
    
</template>

<style scoped>
    .content-peace{
        position: fixed;
        bottom: 0;
        display: flex;
        left: 0;
        background-color: #313131;
        right: 0;
        flex-wrap: wrap;
        overflow: hidden;
    }

    .peace{
        border: solid 1px #ffffff;
        padding-inline: 5px;
        color: white;
        margin-inline: 5px;
        height: 100%;
        display: flex ;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 12%;
    }
    
</style>