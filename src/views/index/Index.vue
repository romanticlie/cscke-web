<template>
    <div class="container" @click="startGame(typeDraw)">
        <div class="logo">
            <img src="http://cscke.ginguess.com/assets/draw.jpeg" >
        </div>
        <div class="name">
            你画我猜
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Index',
    data(){
        let typeDraw = 1

        return {
            typeDraw: typeDraw,
        }
    },
    mounted(){},
    computed:{},
    methods: {
        startGame(gameType){
            this.$router.push({name : "Login",params: {gameType: gameType}})
        },
    },
}
</script>


<style scoped>
.container{
    width: 200px;
    height: 185px;
    margin: 100px auto;
    cursor: pointer;
}
.container:hover{
    font-weight: bold;
    color: rgb(80, 130, 224);
}

.logo img{
    border-radius: 10px;
    width: 100%;
}

.name{
    text-align: center;
}
</style>

